// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Text = require("../Text/Text.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var Theme = require("../../lib/Theme/Theme.bs.js");
var React = require("react");
var Button = require("../Button/Button.bs.js");
var Render = require("../../lib/Render/Render.bs.js");
var NextIntl = require("../../bindings/NextIntl/NextIntl.bs.js");
var SinglePost = require("../SinglePost/SinglePost.bs.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Css = require("@emotion/css");
var AddPostModal = require("../AddPostModal/AddPostModal.bs.js");
var RescriptRelay = require("rescript-relay/src/RescriptRelay.bs.js");
var RelayRuntime = require("relay-runtime");
var AncestorCustom = require("../../lib/Theme/AncestorCustom.bs.js");
var Hooks = require("react-relay/hooks");
var PostsQuery_graphql = require("../../__generated__/rescript-relay/PostsQuery_graphql.bs.js");
var RescriptRelay_Internal = require("rescript-relay/src/RescriptRelay_Internal.bs.js");

var container = Css.css({
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridGap: Theme.Padding.md
    });

var header = Css.css({
      padding: Theme.Padding.md,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    });

var Styles = {
  container: container,
  header: header
};

function use(variables, fetchPolicy, fetchKey, networkCacheConfig, param) {
  var data = Hooks.useLazyLoadQuery(PostsQuery_graphql.node, RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(PostsQuery_graphql.Internal.convertVariables(variables)), {
        fetchKey: fetchKey,
        fetchPolicy: RescriptRelay.mapFetchPolicy(fetchPolicy),
        networkCacheConfig: networkCacheConfig
      });
  return RescriptRelay_Internal.internal_useConvertedValue(PostsQuery_graphql.Internal.convertResponse, data);
}

function useLoader(param) {
  var match = Hooks.useQueryLoader(PostsQuery_graphql.node);
  var loadQueryFn = match[1];
  var loadQuery = React.useMemo((function () {
          return function (param, param$1, param$2, param$3) {
            return Curry._2(loadQueryFn, PostsQuery_graphql.Internal.convertVariables(param), {
                        fetchPolicy: param$1,
                        networkCacheConfig: param$2
                      });
          };
        }), [loadQueryFn]);
  return [
          Caml_option.nullable_to_opt(match[0]),
          loadQuery,
          match[2]
        ];
}

function $$fetch(environment, variables, onResult, networkCacheConfig, fetchPolicy, param) {
  Hooks.fetchQuery(environment, PostsQuery_graphql.node, PostsQuery_graphql.Internal.convertVariables(variables), {
          networkCacheConfig: networkCacheConfig,
          fetchPolicy: RescriptRelay.mapFetchQueryFetchPolicy(fetchPolicy)
        }).subscribe({
        next: (function (res) {
            return Curry._1(onResult, {
                        TAG: /* Ok */0,
                        _0: PostsQuery_graphql.Internal.convertResponse(res)
                      });
          }),
        error: (function (err) {
            return Curry._1(onResult, {
                        TAG: /* Error */1,
                        _0: err
                      });
          })
      });
  
}

function fetchPromised(environment, variables, networkCacheConfig, fetchPolicy, param) {
  var __x = Hooks.fetchQuery(environment, PostsQuery_graphql.node, PostsQuery_graphql.Internal.convertVariables(variables), {
          networkCacheConfig: networkCacheConfig,
          fetchPolicy: RescriptRelay.mapFetchQueryFetchPolicy(fetchPolicy)
        }).toPromise();
  return __x.then(function (res) {
              return Promise.resolve(PostsQuery_graphql.Internal.convertResponse(res));
            });
}

function usePreloaded(queryRef, param) {
  var data = Hooks.usePreloadedQuery(PostsQuery_graphql.node, queryRef);
  return RescriptRelay_Internal.internal_useConvertedValue(PostsQuery_graphql.Internal.convertResponse, data);
}

function retain(environment, variables) {
  var operationDescriptor = RelayRuntime.createOperationDescriptor(PostsQuery_graphql.node, PostsQuery_graphql.Internal.convertVariables(variables));
  return environment.retain(operationDescriptor);
}

var Query = {
  Types: undefined,
  use: use,
  useLoader: useLoader,
  $$fetch: $$fetch,
  fetchPromised: fetchPromised,
  usePreloaded: usePreloaded,
  retain: retain
};

function Posts(Props) {
  var data = use(undefined, undefined, undefined, undefined, undefined);
  var t = NextIntl.useTranslations(undefined);
  var match = React.useState(function () {
        return false;
      });
  var setIsModalOpen = match[1];
  var toggleModal = function (param) {
    return Curry._1(setIsModalOpen, (function (isOpen) {
                  return !isOpen;
                }));
  };
  return React.createElement(AncestorCustom.Config.Box.make, {
              children: null
            }, React.createElement(AncestorCustom.Config.Box.make, {
                  children: null,
                  className: header
                }, React.createElement($$Text.Title.make, {
                      children: Curry._1(t, "Posts")
                    }), React.createElement(AncestorCustom.Config.Box.make, {
                      children: null
                    }, React.createElement(AddPostModal.make, {
                          isOpen: match[0],
                          onClose: toggleModal
                        }), React.createElement(Button.make, {
                          children: Render.s(Curry._1(t, "Add Post")),
                          onClick: toggleModal
                        }))), React.createElement(AncestorCustom.Config.Box.make, {
                  px: [AncestorCustom.xs(Theme.Size.md)],
                  children: Render.map(data.posts, (function (thisPost) {
                          return React.createElement(SinglePost.make, {
                                      post: thisPost.fragmentRefs
                                    });
                        })),
                  className: container
                }));
}

var make = Posts;

exports.Styles = Styles;
exports.Query = Query;
exports.make = make;
/* container Not a pure module */