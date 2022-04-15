module Decks = {
  @react.component
  let make = () => {
    React.null
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
