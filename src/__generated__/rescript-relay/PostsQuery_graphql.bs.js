// Generated by ReScript, PLEASE EDIT WITH CARE
/* @generated */
'use strict';

var RescriptRelay = require("rescript-relay/src/RescriptRelay.bs.js");

function makeRefetchVariables(param) {
  
}

var Types = {
  makeRefetchVariables: makeRefetchVariables
};

var wrapResponseConverter = {"__root":{"posts":{"f":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"posts":{"f":""}}};

function convertResponse(v) {
  return RescriptRelay.convertObj(v, responseConverter, undefined, undefined);
}

var variablesConverter = {};

function convertVariables(v) {
  return RescriptRelay.convertObj(v, variablesConverter, undefined, undefined);
}

var Internal = {
  wrapResponseConverter: wrapResponseConverter,
  wrapResponseConverterMap: undefined,
  convertWrapResponse: convertWrapResponse,
  responseConverter: responseConverter,
  responseConverterMap: undefined,
  convertResponse: convertResponse,
  convertWrapRawResponse: convertWrapResponse,
  convertRawResponse: convertResponse,
  variablesConverter: variablesConverter,
  variablesConverterMap: undefined,
  convertVariables: convertVariables
};

var Utils = {};

var node = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "posts",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SinglePost_post"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PostsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "posts",
        "plural": true,
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
      }
    ]
  },
  "params": {
    "cacheID": "6e016bb6a54c756a036c5c624e07d500",
    "id": null,
    "metadata": {},
    "name": "PostsQuery",
    "operationKind": "query",
    "text": "query PostsQuery {\n  posts {\n    ...SinglePost_post\n  }\n}\n\nfragment SinglePost_post on Post {\n  id\n  title\n  body\n}\n"
  }
};

var include = RescriptRelay.MakeLoadQuery({
      query: node,
      convertVariables: convertVariables
    });

var load = include.load;

var queryRefToObservable = include.queryRefToObservable;

var queryRefToPromise = include.queryRefToPromise;

exports.Types = Types;
exports.Internal = Internal;
exports.Utils = Utils;
exports.node = node;
exports.load = load;
exports.queryRefToObservable = queryRefToObservable;
exports.queryRefToPromise = queryRefToPromise;
/* include Not a pure module */