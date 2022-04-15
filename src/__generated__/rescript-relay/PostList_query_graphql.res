/* @sourceLoc PostList.res */
/* @generated */
%%raw("/* @generated */")
module Types = {
  @@ocaml.warning("-30")
  
  type rec fragment_postsConnection = {
    __id: RescriptRelay.dataId,
    edges: option<array<option<fragment_postsConnection_edges>>>,
  }
   and fragment_postsConnection_edges = {
    node: option<fragment_postsConnection_edges_node>,
  }
   and fragment_postsConnection_edges_node = {
    id: string,
    fragmentRefs: RescriptRelay.fragmentRefs<[ | #SinglePost_postItem]>
  }
  
  
  type fragment = {
    postsConnection: fragment_postsConnection,
  }
}

module Internal = {
  type fragmentRaw
  let fragmentConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{"__root":{"postsConnection_edges":{"n":"","na":""},"postsConnection_edges_node":{"f":"","n":""}}}`
    )
  
  let fragmentConverterMap = ()
  let convertFragment = v => v->RescriptRelay.convertObj(
    fragmentConverter, 
    fragmentConverterMap, 
    Js.undefined
  )
}
type t
type fragmentRef
external getFragmentRef:
  RescriptRelay.fragmentRefs<[> | #PostList_query]> => fragmentRef = "%identity"


module Utils = {
  @@ocaml.warning("-33")
  open Types
  @inline
  let connectionKey = "PostList_query_postsConnection"
  
  let getConnectionNodes:
    fragment_postsConnection => array<fragment_postsConnection_edges_node> =
    connection => switch connection.edges { 
    | None => []
    | Some(edges) => edges->Belt.Array.keepMap(edge => switch edge { 
     | None => None 
     | Some(edge) => edge.node
  
    })
   }
}
type relayOperationNode
type operationType = RescriptRelay.fragmentNode<relayOperationNode>


let node: operationType = %raw(json` {
  "argumentDefinitions": [
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "postsConnection"
        ]
      }
    ]
  },
  "name": "PostList_query",
  "selections": [
    {
      "alias": "postsConnection",
      "args": null,
      "concreteType": "PostItemConnection",
      "kind": "LinkedField",
      "name": "__PostList_query_postsConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PostItemEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PostItem",
              "kind": "LinkedField",
              "name": "node",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SinglePost_postItem"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
} `)


