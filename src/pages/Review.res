module Query = %relay(`
    query ReviewQuery {
      posts {
        id
        title
        user {
          name
        }
      }
    }
`)

module Decks = {
  @react.component
  let make = () => {
    open Render
    let queryData = Query.use(~variables=(), ())

    Js.log(queryData.posts)
    queryData.posts->map(thisDeck => {
      <div key=thisDeck.id> {thisDeck.title->s} </div>
    })
  }
}

let default = () => {
  open AncestorCustom
  <Box> <React.Suspense fallback={React.string("Loading....")}> <Decks /> </React.Suspense> </Box>
}

let getServerSideProps = ctx => {
  open Promise
  open Next
  Auth.getSession(ctx)->thenResolve(session => {
    resolve({
      "props": {
        fromServer: session,
      },
    })
  })
}
