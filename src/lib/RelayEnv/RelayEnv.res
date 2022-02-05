open Fetch
%raw("require('isomorphic-fetch')")

exception Graphql_error(string)

let isProd: bool = %raw("process.env.NODE_ENV === 'production'")

let apiUrl = isProd
  ? "https://bloggerplate.vercel.app/api/graphql"
  : "http://localhost:3000/api/graphql"

let getRecords = environment => {
  environment
  ->RescriptRelay.Environment.getStore
  ->RescriptRelay.Store.getSource
  ->RescriptRelay.RecordSource.toJSON
}

let createEnvironment = (~records=?, ()) => {
  let fetchQuery: RescriptRelay.Network.fetchFunctionPromise = (
    operation,
    variables,
    _cacheConfig,
    _uploadables,
  ) => {
    fetchWithInit(
      apiUrl,
      RequestInit.make(
        ~method_=Post,
        ~body=Js.Dict.fromList(list{
          ("query", Js.Json.string(operation.text)),
          ("variables", variables),
        })
        ->Js.Json.object_
        ->Js.Json.stringify
        ->BodyInit.make,
        ~headers=HeadersInit.make({
          "content-type": "application/json",
          "accept": "application/json",
        }),
        (),
      ),
    ) |> Js.Promise.then_(resp =>
      if Response.ok(resp) {
        Response.json(resp)
      } else {
        Js.Promise.reject(Graphql_error("Request failed: " ++ Response.statusText(resp)))
      }
    )
  }

  let source = RescriptRelay.RecordSource.make(~records?, ())
  let store = RescriptRelay.Store.make(~source, ~gcReleaseBufferSize=10, ())
  let network = RescriptRelay.Network.makePromiseBased(~fetchFunction=fetchQuery, ())

  RescriptRelay.Environment.make(~network, ~store, ())
}
