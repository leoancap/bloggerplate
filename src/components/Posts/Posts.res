open Theme
open Render

open Posts_Styles

module Query = %relay(`
  query PostsQuery {
    posts {
      ...SinglePost_post
    }
  }
`)

module PostsWrapper = %styled.div(`
  padding: $(Size.md);
`)

module Content = {
  @react.component
  let make = (~queryRef, ~refetch) => {
    let data = Query.usePreloaded(~queryRef, ())

    let t = NextIntl.useTranslations()

    let (isModalOpen, setIsModalOpen) = React.useState(_ => false)

    let toggleModal = _ => setIsModalOpen(isOpen => !isOpen)

    <div>
      <Header>
        <Text.Title> {t("Posts")} </Text.Title>
        <div>
          <AddPostModal
            onClose={toggleModal}
            onSave={() => {
              refetch()
              toggleModal()
            }}
            isOpen=isModalOpen
          />
          <Button onClick={toggleModal}> {"Add Post"->t->s} </Button>
        </div>
      </Header>
      <Container>
        {data.posts->Render.mapi((thisPost, key) => <SinglePost key post=thisPost.fragmentRefs />)}
      </Container>
    </div>
  }
}

@react.component
let make = () => {
  let (queryRef, loadQuery, dispose) = Query.useLoader()

  React.useEffect1(() => {
    Js.log2("queryRef", {queryRef})
    if Belt.Option.isNone(queryRef) {
      Js.log("geting data")
      loadQuery(~variables=(), ())
    }
    None
  }, [queryRef])

  switch queryRef {
  | Some(queryRef) =>
    <Content
      queryRef
      refetch={() => {
        Js.log("refetching")
        dispose()
      }}
    />
  | None => React.null
  }
}
