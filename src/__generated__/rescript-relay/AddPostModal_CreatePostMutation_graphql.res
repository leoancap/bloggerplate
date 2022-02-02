/* @sourceLoc AddPostModal.res */
/* @generated */
%%raw("/* @generated */")
module Types = {
  @@ocaml.warning("-30")
  
  type rec response_createPost = {
    title: string,
    body: string,
  }
  type response = {
    createPost: response_createPost,
  }
  type rawResponse = response
  type variables = {
    title: string,
    body: string,
    email: string,
  }
}

module Internal = {
  type wrapResponseRaw
  let wrapResponseConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{}`
    )
  
  let wrapResponseConverterMap = ()
  let convertWrapResponse = v => v->RescriptRelay.convertObj(
    wrapResponseConverter, 
    wrapResponseConverterMap, 
    Js.null
  )
  type responseRaw
  let responseConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{}`
    )
  
  let responseConverterMap = ()
  let convertResponse = v => v->RescriptRelay.convertObj(
    responseConverter, 
    responseConverterMap, 
    Js.undefined
  )
  type wrapRawResponseRaw = wrapResponseRaw
  let convertWrapRawResponse = convertWrapResponse
  type rawResponseRaw = responseRaw
  let convertRawResponse = convertResponse
  let variablesConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{}`
    )
  
  let variablesConverterMap = ()
  let convertVariables = v => v->RescriptRelay.convertObj(
    variablesConverter, 
    variablesConverterMap, 
    Js.undefined
  )
}


module Utils = {
  @@ocaml.warning("-33")
  open Types
  let makeVariables = (
    ~title,
    ~body,
    ~email
  ): variables => {
    title: title,
    body: body,
    email: email
  }
  let make_response_createPost = (
    ~title,
    ~body
  ): response_createPost => {
    title: title,
    body: body
  }
  let makeOptimisticResponse = (
    ~createPost
  ): rawResponse => {
    createPost: createPost
  }
}
type relayOperationNode
type operationType = RescriptRelay.mutationNode<relayOperationNode>


let node: operationType = %raw(json` (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "body"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "body",
            "variableName": "body"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title"
          },
          {
            "fields": [
              {
                "fields": [
                  {
                    "kind": "Variable",
                    "name": "email",
                    "variableName": "email"
                  }
                ],
                "kind": "ObjectValue",
                "name": "connect"
              }
            ],
            "kind": "ObjectValue",
            "name": "user"
          }
        ],
        "kind": "ObjectValue",
        "name": "data"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "createPost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "body",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddPostModal_CreatePostMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddPostModal_CreatePostMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "1a5029fa5894ab935b35d1bc1cf8f512",
    "id": null,
    "metadata": {},
    "name": "AddPostModal_CreatePostMutation",
    "operationKind": "mutation",
    "text": "mutation AddPostModal_CreatePostMutation(\n  $title: String!\n  $body: String!\n  $email: String!\n) {\n  createPost(data: {title: $title, body: $body, user: {connect: {email: $email}}}) {\n    title\n    body\n  }\n}\n"
  }
};
})() `)


