// Generated by ReScript, PLEASE EDIT WITH CARE
/* @generated */
'use strict';

var RescriptRelay = require("rescript-relay/src/RescriptRelay.bs.js");

function makeRefetchVariables(param) {
  
}

var Types = {
  makeRefetchVariables: makeRefetchVariables
};

var wrapResponseConverter = {"__root":{"posts_user_name":{"n":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"posts_user_name":{"n":""}}};

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

var node = ((function(){
var v0 = [
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ReviewQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ReviewQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6f310c8f2e93a63e891d1bc70b81d5c4",
    "id": null,
    "metadata": {},
    "name": "ReviewQuery",
    "operationKind": "query",
    "text": "query ReviewQuery {\n  posts {\n    id\n    title\n    user {\n      name\n    }\n  }\n}\n"
  }
};
})());

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
/* node Not a pure module */
