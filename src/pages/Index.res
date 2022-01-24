let default = () => {
  open AncestorCustom
  <>
    <Box> <React.Suspense fallback={React.string("Loading....")}> <Posts /> </React.Suspense> </Box>
  </>
}

let getServerSideProps = ctx => {
  open Promise
  open Next

  let environment = RelayEnv.createEnvironment()
  let postsPromise = Posts.Query.fetchPromised(~environment, ~variables=(), ())
  let userPromise = Auth.getSession(ctx)

  Promise.all2((postsPromise, userPromise))->thenResolve(result => {
    let (_posts, session) = result

    let records = environment->RelayEnv.getRecords

    resolve({
      "props": {
        "session": session,
        "records": records,
      },
    })
  })
}
