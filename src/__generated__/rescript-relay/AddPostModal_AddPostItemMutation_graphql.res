/* @sourceLoc AddPostModal.res */
/* @generated */
%%raw("/* @generated */")
module Types = {
  @@ocaml.warning("-30")
  
  type rec response_addPostItem = {
    addedPostItem: option<response_addPostItem_addedPostItem>,
  }
   and response_addPostItem_addedPostItem = {
    id: string,
    title: string,
    body: string,
  }
   and rawResponse_addPostItem = {
    addedPostItem: option<rawResponse_addPostItem_addedPostItem>,
  }
   and rawResponse_addPostItem_addedPostItem = {
    id: string,
    title: string,
    body: string,
  }
   and addPostItemInput = {
    title: string,
    body: string,
    clientMutationId: option<string>,
  }
  
  
  type response = {
    addPostItem: option<response_addPostItem>,
  }
  type rawResponse = {
    addPostItem: option<rawResponse_addPostItem>,
  }
  type variables = {
    input: addPostItemInput,
    connections: array<RescriptRelay.dataId>,
  }
}

module Internal = {
  type wrapResponseRaw
  let wrapResponseConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{"__root":{"addPostItem":{"n":""},"addPostItem_addedPostItem":{"n":""}}}`
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
      json`{"__root":{"addPostItem":{"n":""},"addPostItem_addedPostItem":{"n":""}}}`
    )
  
  let responseConverterMap = ()
  let convertResponse = v => v->RescriptRelay.convertObj(
    responseConverter, 
    responseConverterMap, 
    Js.undefined
  )
  type wrapRawResponseRaw
  let wrapRawResponseConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{"__root":{"addPostItem":{"n":""},"addPostItem_addedPostItem":{"n":""}}}`
    )
  
  let wrapRawResponseConverterMap = ()
  let convertWrapRawResponse = v => v->RescriptRelay.convertObj(
    wrapRawResponseConverter, 
    wrapRawResponseConverterMap, 
    Js.null
  )
  type rawResponseRaw
  let rawResponseConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{"__root":{"addPostItem":{"n":""},"addPostItem_addedPostItem":{"n":""}}}`
    )
  
  let rawResponseConverterMap = ()
  let convertRawResponse = v => v->RescriptRelay.convertObj(
    rawResponseConverter, 
    rawResponseConverterMap, 
    Js.undefined
  )
  let variablesConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{"__root":{"input":{"r":"AddPostItemInput"}},"AddPostItemInput":{"clientMutationId":{"n":""}}}`
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
  let make_addPostItemInput = (
    ~title,
    ~body,
    ~clientMutationId=?,
    ()
  ): addPostItemInput => {
    title: title,
    body: body,
    clientMutationId: clientMutationId
  }
  
  let makeVariables = (
    ~input,
    ~connections
  ): variables => {
    input: input,
    connections: connections
  }
  let make_rawResponse_addPostItem_addedPostItem = (
    ~id,
    ~title,
    ~body
  ): rawResponse_addPostItem_addedPostItem => {
    id: id,
    title: title,
    body: body
  }
  let make_rawResponse_addPostItem = (
    ~addedPostItem=?,
    ()
  ): rawResponse_addPostItem => {
    addedPostItem: addedPostItem
  }
  let make_response_addPostItem_addedPostItem = (
    ~id,
    ~title,
    ~body
  ): response_addPostItem_addedPostItem => {
    id: id,
    title: title,
    body: body
  }
  let make_response_addPostItem = (
    ~addedPostItem=?,
    ()
  ): response_addPostItem => {
    addedPostItem: addedPostItem
  }
  let makeOptimisticResponse = (
    ~addPostItem=?,
    ()
  ): rawResponse => {
    addPostItem: addPostItem
  }
}
type relayOperationNode
type operationType = RescriptRelay.mutationNode<relayOperationNode>


let node: operationType = %raw(json` (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "PostItem",
  "kind": "LinkedField",
  "name": "addedPostItem",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddPostModal_AddPostItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "AddPostItemPayload",
        "kind": "LinkedField",
        "name": "addPostItem",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddPostModal_AddPostItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "AddPostItemPayload",
        "kind": "LinkedField",
        "name": "addPostItem",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "addedPostItem",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "PostItemEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "19ab95daa0d5ae467e2f97c30828d619",
    "id": null,
    "metadata": {},
    "name": "AddPostModal_AddPostItemMutation",
    "operationKind": "mutation",
    "text": "mutation AddPostModal_AddPostItemMutation(\n  $input: AddPostItemInput!\n) {\n  addPostItem(input: $input) {\n    addedPostItem {\n      id\n      title\n      body\n    }\n  }\n}\n"
  }
};
})() `)


