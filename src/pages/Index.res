module Query = %relay(`
  query IndexQuery {
    ...PostList_query
  }
`)

module Main = {
  @react.component
  let make = () => {
    let query = Query.use(~variables=(), ())

    <PostList query=query.fragmentRefs />
  }
}

let default = () => {
  open AncestorCustom

  <Box> <React.Suspense fallback={React.string("Loading....")}> <Main /> </React.Suspense> </Box>
}

let getServerSideProps = ctx => {
  open Promise
  open Next

  let environment = RelayEnv.createEnvironment()
  let postsPromise = Query.fetchPromised(~environment, ~variables=(), ())
  let userPromise = Auth.getSession(ctx)

  Promise.all2((postsPromise, userPromise))->thenResolve(result => {
    let (_, session) = result

    let records = environment->RelayEnv.getRecords

    resolve({
      "props": {
        "session": session,
        "records": records,
      },
    })
  })
}
