// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Text = require("../Text/Text.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var Input = require("../Input/Input.bs.js");
var Modal = require("../Modal/Modal.bs.js");
var Theme = require("../../lib/Theme/Theme.bs.js");
var React = require("react");
var Button = require("../Button/Button.bs.js");
var Render = require("../../lib/Render/Render.bs.js");
var NextIntl = require("../../bindings/NextIntl/NextIntl.bs.js");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var RelayRuntime = require("relay-runtime");
var AncestorCustom = require("../../lib/Theme/AncestorCustom.bs.js");
var ReForm__Helpers = require("@rescriptbr/reform/src/ReForm__Helpers.bs.js");
var AddPostModal_Form = require("./AddPostModal_Form.bs.js");
var Hooks = require("react-relay/hooks");
var AddPostModal_Styles = require("./AddPostModal_Styles.bs.js");
var Feather = require("@emotion-icons/feather");
var AddPostModal_AddPostItemMutation_graphql = require("../../__generated__/rescript-relay/AddPostModal_AddPostItemMutation_graphql.bs.js");

var make_addPostItemInput = AddPostModal_AddPostItemMutation_graphql.Utils.make_addPostItemInput;

var makeVariables = AddPostModal_AddPostItemMutation_graphql.Utils.makeVariables;

function commitMutation(environment, variables, optimisticUpdater, optimisticResponse, updater, onCompleted, onError, uploadables, param) {
  return RelayRuntime.commitMutation(environment, {
              mutation: AddPostModal_AddPostItemMutation_graphql.node,
              variables: AddPostModal_AddPostItemMutation_graphql.Internal.convertVariables(variables),
              onCompleted: (function (res, err) {
                  if (onCompleted !== undefined) {
                    return Curry._2(onCompleted, AddPostModal_AddPostItemMutation_graphql.Internal.convertResponse(res), (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              onError: (function (err) {
                  if (onError !== undefined) {
                    return Curry._1(onError, (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              optimisticResponse: optimisticResponse !== undefined ? AddPostModal_AddPostItemMutation_graphql.Internal.convertWrapRawResponse(optimisticResponse) : undefined,
              optimisticUpdater: optimisticUpdater,
              updater: updater !== undefined ? (function (store, r) {
                    return Curry._2(updater, store, AddPostModal_AddPostItemMutation_graphql.Internal.convertResponse(r));
                  }) : undefined,
              uploadables: uploadables
            });
}

function use(param) {
  var match = Hooks.useMutation(AddPostModal_AddPostItemMutation_graphql.node);
  var mutate = match[0];
  return [
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8) {
                    return Curry._1(mutate, {
                                onError: param,
                                onCompleted: param$1 !== undefined ? (function (r, errors) {
                                      return Curry._2(param$1, AddPostModal_AddPostItemMutation_graphql.Internal.convertResponse(r), (errors == null) ? undefined : Caml_option.some(errors));
                                    }) : undefined,
                                onUnsubscribe: param$2,
                                optimisticResponse: param$3 !== undefined ? AddPostModal_AddPostItemMutation_graphql.Internal.convertWrapRawResponse(param$3) : undefined,
                                optimisticUpdater: param$4,
                                updater: param$5 !== undefined ? (function (store, r) {
                                      return Curry._2(param$5, store, AddPostModal_AddPostItemMutation_graphql.Internal.convertResponse(r));
                                    }) : undefined,
                                variables: AddPostModal_AddPostItemMutation_graphql.Internal.convertVariables(param$6),
                                uploadables: param$7
                              });
                  };
                }), [mutate]),
          match[1]
        ];
}

var AddPostItemMutation_make_rawResponse_addPostItem_addedPostItem = AddPostModal_AddPostItemMutation_graphql.Utils.make_rawResponse_addPostItem_addedPostItem;

var AddPostItemMutation_make_rawResponse_addPostItem = AddPostModal_AddPostItemMutation_graphql.Utils.make_rawResponse_addPostItem;

var AddPostItemMutation_make_response_addPostItem_addedPostItem = AddPostModal_AddPostItemMutation_graphql.Utils.make_response_addPostItem_addedPostItem;

var AddPostItemMutation_make_response_addPostItem = AddPostModal_AddPostItemMutation_graphql.Utils.make_response_addPostItem;

var AddPostItemMutation_makeOptimisticResponse = AddPostModal_AddPostItemMutation_graphql.Utils.makeOptimisticResponse;

var AddPostItemMutation = {
  make_addPostItemInput: make_addPostItemInput,
  makeVariables: makeVariables,
  make_rawResponse_addPostItem_addedPostItem: AddPostItemMutation_make_rawResponse_addPostItem_addedPostItem,
  make_rawResponse_addPostItem: AddPostItemMutation_make_rawResponse_addPostItem,
  make_response_addPostItem_addedPostItem: AddPostItemMutation_make_response_addPostItem_addedPostItem,
  make_response_addPostItem: AddPostItemMutation_make_response_addPostItem,
  makeOptimisticResponse: AddPostItemMutation_makeOptimisticResponse,
  Types: undefined,
  commitMutation: commitMutation,
  use: use
};

function AddPostModal(Props) {
  var isOpen = Props.isOpen;
  var onClose = Props.onClose;
  var onSave = Props.onSave;
  var connections = Props.connections;
  var t = NextIntl.useTranslations(undefined);
  var match = use(undefined);
  var addPost = match[0];
  var form = Curry._7(AddPostModal_Form.use, AddPostModal_Form.initialState, /* Schema */{
        _0: Belt_Array.concat(Curry._3(AddPostModal_Form.ReSchema.Validation.nonEmpty, undefined, undefined, /* Title */0), Curry._3(AddPostModal_Form.ReSchema.Validation.nonEmpty, undefined, undefined, /* Body */1))
      }, (function (param) {
          var state = param.state;
          console.log(state);
          Curry.app(addPost, [
                undefined,
                (function (param, param$1) {
                    return Curry._1(onSave, undefined);
                  }),
                undefined,
                {
                  addPostItem: {
                    addedPostItem: {
                      id: RelayRuntime.generateUniqueClientID(),
                      title: state.values.title,
                      body: state.values.body
                    }
                  }
                },
                undefined,
                undefined,
                Curry._2(makeVariables, Curry._4(make_addPostItemInput, state.values.title, state.values.body, undefined, undefined), connections),
                undefined,
                undefined
              ]);
          
        }), undefined, undefined, /* OnChange */0, undefined);
  var partial_arg = Curry._1(form.handleChange, /* Title */0);
  var partial_arg$1 = Curry._1(form.handleChange, /* Body */1);
  return React.createElement(Modal.make, {
              isOpen: isOpen,
              onClose: onClose,
              size: "md",
              content: React.createElement(AddPostModal_Styles.Container.make, {
                    children: null,
                    onSubmit: (function (e) {
                        e.preventDefault();
                        return Curry._1(form.submit, undefined);
                      })
                  }, React.createElement(AddPostModal_Styles.Header.make, {
                        children: null
                      }, React.createElement($$Text.H3.make, {
                            color: Theme.Colors.grayLight,
                            children: Curry._1(t, "Add a new post")
                          }), React.createElement(Button.Icon.make, {
                            children: React.createElement(Feather.X, {}),
                            onClick: (function (param) {
                                return Curry._1(onClose, undefined);
                              })
                          })), React.createElement(AncestorCustom.Config.Box.make, {
                        children: React.createElement(Input.make, {
                              onChange: (function (param) {
                                  return ReForm__Helpers.handleChange(partial_arg, param);
                                }),
                              label: Curry._1(t, "Title"),
                              error: Curry._1(form.getFieldError, /* Field */{
                                    _0: /* Title */0
                                  })
                            })
                      }), React.createElement(AncestorCustom.Config.Box.make, {
                        children: React.createElement(Input.make, {
                              onChange: (function (param) {
                                  return ReForm__Helpers.handleChange(partial_arg$1, param);
                                }),
                              label: Curry._1(t, "Body"),
                              tag: "textarea",
                              error: Curry._1(form.getFieldError, /* Field */{
                                    _0: /* Body */1
                                  })
                            })
                      }), React.createElement(AddPostModal_Styles.Footer.make, {
                        children: null
                      }, React.createElement(Button.make, {
                            children: Render.s(Curry._1(t, "Cancel")),
                            onClick: (function (param) {
                                return Curry._1(onClose, undefined);
                              }),
                            intent: "none"
                          }), React.createElement(Button.make, {
                            children: Render.s(Curry._1(t, "Save")),
                            type_: "submit"
                          })))
            });
}

var Form;

var make = AddPostModal;

exports.AddPostItemMutation = AddPostItemMutation;
exports.Form = Form;
exports.make = make;
/* Text Not a pure module */
