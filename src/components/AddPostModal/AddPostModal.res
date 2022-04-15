open AncestorCustom
open Render
open Theme
open AddPostModal_Styles

module AddPostItemMutation = %relay(`
  mutation AddPostModal_AddPostItemMutation(
    $input: AddPostItemInput!
    $connections: [ID!]!
  ) @raw_response_type {
    addPostItem(input: $input) {
      addedPostItem
        @appendNode(connections: $connections, edgeTypeName: "PostItemEdge") {
        id
        title
        body
      }
    }
  }
`)

module Form = AddPostModal_Form

@react.component
let make = (~isOpen, ~onClose, ~onSave, ~connections) => {
  let t = NextIntl.useTranslations()

  let (addPost, _) = AddPostItemMutation.use()

  let form: Form.api = Form.use(
    ~validationStrategy=OnChange,
    ~onSubmit={
      ({state}) => {
        Js.log(state)

        open AddPostItemMutation
        addPost(
          ~variables={
            makeVariables(
              ~connections,
              ~input=make_addPostItemInput(~title=state.values.title, ~body=state.values.body, ()),
            )
          },
          ~onCompleted=(_, _) => onSave(),
          ~optimisticResponse={
            addPostItem: Some({
              addedPostItem: Some({
                id: {
                  open RescriptRelay
                  generateUniqueClientID()->dataIdToString
                },
                title: state.values.title,
                body: state.values.body,
              }),
            }),
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
    content={<Container
      onSubmit={e => {
        ReactEvent.Form.preventDefault(e)
        form.submit()
      }}>
      <Header>
        <Text.H3 color=Colors.grayLight> {t("Add a new post")} </Text.H3>
        <Button.Icon onClick={_ => onClose()}> <Icon.FiX /> </Button.Icon>
      </Header>
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
      <Footer>
        <Button intent=#none onClick={_ => onClose()}> {t("Cancel")->s} </Button>
        <Button type_="submit"> {t("Save")->s} </Button>
      </Footer>
    </Container>}
  />
}
