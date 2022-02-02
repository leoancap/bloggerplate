open Theme
open Render
open AncestorCustom

module Styles = Posts_Styles

module Query = %relay(`
  query PostsQuery {
    posts {
      ...SinglePost_post
    }
  }
`)

module Content = {
  @react.component
  let make = (~queryRef, ~refetch) => {
    let data = Query.usePreloaded(~queryRef, ())

    let t = NextIntl.useTranslations()

    let (isModalOpen, setIsModalOpen) = React.useState(_ => false)

    let toggleModal = _ => setIsModalOpen(isOpen => !isOpen)

    <Box>
      <Box className=Styles.header>
        <Text.Title> {t("Posts")} </Text.Title>
        <Box>
          <AddPostModal
            onClose={toggleModal}
            onSave={() => {
              refetch()
              toggleModal()
            }}
            isOpen=isModalOpen
          />
          <Button onClick={toggleModal}> {"Add Post"->t->s} </Button>
        </Box>
      </Box>
      <Box px=[xs(Size.md)] className=Styles.container>
        {data.posts->Render.mapi((thisPost, key) => <SinglePost key post=thisPost.fragmentRefs />)}
      </Box>
    </Box>
  }
}

@react.component
let make = () => {
  let (queryRef, loadQuery, _) = Query.useLoader()

  React.useEffect0(() => {
    loadQuery(~variables=(), ())
    None
  })

  switch queryRef {
  | Some(queryRef) =>
    <Content
      queryRef
      refetch={() => {
        loadQuery(~variables=(), ())
      }}
    />
  | None => React.null
  }
}
