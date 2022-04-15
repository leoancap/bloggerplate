open Theme
open Render

open PostList_Styles

module PostListFragment = %relay(`
  fragment PostList_query on Query
  @argumentDefinitions(
    first: { type: "Int!", defaultValue: 10 }
    after: { type: "String!", defaultValue: "" }
  ) {
    postsConnection(first: $first, after: $after)
      @connection(key: "PostList_query_postsConnection") {
      __id
      edges {
        node {
          id
          ...SinglePost_postItem
        }
      }
    }
  }
`)

module PostListWrapper = %styled.div(`
  padding: $(Size.md);
`)

@react.component
let make = (~query) => {
  let postList = PostListFragment.use(query)

  let t = NextIntl.useTranslations()

  let (isModalOpen, setIsModalOpen) = React.useState(_ => false)

  let toggleModal = _ => setIsModalOpen(isOpen => !isOpen)

  <div>
    <Header>
      <Text.Title> {t("Posts")} </Text.Title>
      <div>
        <AddPostModal
          onClose={toggleModal}
          connections=[postList.postsConnection.__id]
          onSave={() => {
            toggleModal()
          }}
          isOpen=isModalOpen
        />
        <Button onClick={toggleModal}> {"Add Post"->t->s} </Button>
      </div>
    </Header>
    <Container>
      {postList.postsConnection
      ->PostListFragment.getConnectionNodes
      ->Render.map(thisPost => <SinglePost key=thisPost.id postItem=thisPost.fragmentRefs />)}
    </Container>
  </div>
}
