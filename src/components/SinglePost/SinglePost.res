open AncestorCustom
open Theme

module PostFragment = %relay(`
  fragment SinglePost_postItem on PostItem {
    id
    dbId
    title
    body
  }
`)

module PostWrapper = %styled.div(`
  margin-top: $(Padding.xs)
`)

@react.component
let make = (~postItem as postItemRef) => {
  let post = PostFragment.use(postItemRef)

  <Card>
    <Box>
      <Box> <Text.H3> {post.title} </Text.H3> </Box>
      <PostWrapper> <Text.Body> {post.body} </Text.Body> </PostWrapper>
    </Box>
  </Card>
}
