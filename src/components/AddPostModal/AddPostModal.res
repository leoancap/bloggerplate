open AncestorCustom
open Render
open Theme

module Styles = AddPostModal_Styles
module Form = AddPostModal_Form

module CreatePostMutation = %relay(`
  mutation AddPostModal_CreatePostMutation(
    $title: String!
    $body: String!
    $email: String!
  ) {
    createPost(
      data: { title: $title, body: $body, user: { connect: { email: $email } } }
    ) {
      title
      body
    }
  }
`)

@react.component
let make = (~isOpen, ~onClose, ~onSave) => {
  let t = NextIntl.useTranslations()

  let session = Next.Auth.useSession()

  let (mutate, _isMutating) = CreatePostMutation.use()

  let form: Form.api = Form.use(
    ~validationStrategy=OnChange,
    ~onSubmit={
      ({state}) => {
        Js.log(state)

        let email = Belt.Option.mapWithDefault(session.data->Js.Nullable.toOption, "", ({user}) =>
          user.email
        )
        mutate(
          ~variables={
            title: state.values.title,
            body: state.values.body,
            email: email,
          },
          ~onCompleted={(_, __) => onSave()},
          ~onError={
            error => {
              Js.log2("error", {error.message})
            }
          },
          (),
        )->ignore
        None
      }
    },
    ~initialState=Form.initialState,
    ~schema={
      open Form
      Schema(Belt.Array.concat(Validation.nonEmpty(Title), Validation.nonEmpty(Body)))
    },
    (),
  )

  <Modal
    size=#md
    isOpen
    onClose
    content={<form
      className=Styles.container
      onSubmit={e => {
        ReactEvent.Form.preventDefault(e)
        form.submit()
      }}>
      <Box className=Styles.header>
        <Text.H3 color=Colors.grayLight> {t("Add a new post")} </Text.H3>
        <Button.Icon onClick={_ => onClose()}> <Icon.FiX /> </Button.Icon>
      </Box>
      <Box>
        <Input
          error={form.getFieldError(Field(Title))}
          onChange={ReForm.Helpers.handleChange(form.handleChange(Title))}
          label={t("Title")}
        />
      </Box>
      <Box>
        <Input
          error={form.getFieldError(Field(Body))}
          onChange={ReForm.Helpers.handleChange(form.handleChange(Body))}
          tag=#textarea
          label={t("Body")}
        />
      </Box>
      <Box className=Styles.footer>
        <Button intent=#none onClick={_ => onClose()}> {t("Cancel")->s} </Button>
        <Button type_="submit"> {t("Save")->s} </Button>
      </Box>
    </form>}
  />
}
