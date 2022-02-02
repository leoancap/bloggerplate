open AncestorCustom
open Theme

module PostFragment = %relay(`
  fragment SinglePost_post on Post {
    id
    title
    body
    user {
      name
      image
    }
  }
`)

@react.component
let make = (~post) => {
  let post = PostFragment.use(post)

  <Card>
    //
    <Box>
      <Box> <Text.H3> {post.title} </Text.H3> </Box>
      <Box mt=[xs(Size.xs)]> <Text.Body> {post.body} </Text.Body> </Box>
    </Box>
  </Card>
}
