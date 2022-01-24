open Theme
open Render
open AncestorCustom

module Styles = {
  open Emotion

  let container = css({
    "display": "grid",
    "gridTemplateColumns": "1fr 1fr",
    "gridGap": Padding.md,
  })

  let header = css({
    "padding": Padding.md,
    "display": "flex",
    "justifyContent": "space-between",
    "alignItems": "center",
  })
}

module Query = %relay(`
  query PostsQuery {
    posts {
      ...SinglePost_post
    }
  },
`)

@react.component
let make = () => {
  let data = Query.use(~variables=(), ())
  let t = NextIntl.useTranslations()

  let (isModalOpen, setIsModalOpen) = React.useState(_ => false)

  let toggleModal = _ => setIsModalOpen(isOpen => !isOpen)

  <Box>
    <Box className=Styles.header>
      <Text.Title> {t("Posts")} </Text.Title>
      <Box>
        <AddPostModal onClose={toggleModal} isOpen=isModalOpen />
        <Button onClick={toggleModal}> {"Add Post"->t->s} </Button>
      </Box>
    </Box>
    <Box px=[xs(Size.md)] className=Styles.container>
      {data.posts->Render.map(thisPost => <SinglePost post=thisPost.fragmentRefs />)}
    </Box>
  </Box>
}
