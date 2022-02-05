// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssJs = require("bs-css-emotion/src/CssJs.bs.js");
var Theme = require("../../lib/Theme/Theme.bs.js");
var React = require("react");
var Caml_option = require("rescript/lib/js/caml_option.js");

var deleteProp = ((newProps, key) => delete newProps[key]);

function getOrEmpty(str) {
  if (str !== undefined) {
    return " " + str;
  } else {
    return "";
  }
}

var styles = CssJs.style([
      CssJs.label("Container"),
      CssJs.display("flex"),
      CssJs.flexDirection("column"),
      CssJs.width({
            NAME: "percent",
            VAL: 100
          }),
      CssJs.height({
            NAME: "percent",
            VAL: 100
          }),
      CssJs.backgroundColor(Theme.Colors.gray)
    ]);

function make(props) {
  var className = styles + getOrEmpty(Caml_option.undefined_to_opt(props.className));
  var stylesObject = {
    className: className,
    ref: Caml_option.undefined_to_opt(props.innerRef)
  };
  var newProps = Object.assign({}, props, stylesObject);
  deleteProp(newProps, "innerRef");
  return React.createElement("div", newProps);
}

var Container = {
  deleteProp: deleteProp,
  getOrEmpty: getOrEmpty,
  styles: styles,
  make: make
};

var deleteProp$1 = ((newProps, key) => delete newProps[key]);

function getOrEmpty$1(str) {
  if (str !== undefined) {
    return " " + str;
  } else {
    return "";
  }
}

function styles$1(statusOpt, mtOpt, param) {
  var mt = mtOpt !== undefined ? mtOpt : "unset";
  return CssJs.style([
              CssJs.color(Theme.Colors.grayLight),
              CssJs.cursor("pointer"),
              CssJs.position("relative"),
              CssJs.padding(Theme.Padding.xs),
              CssJs.marginTop(mt)
            ]);
}

function make$1(props) {
  var className = styles$1(Caml_option.undefined_to_opt(props.status), Caml_option.undefined_to_opt(props.mt), undefined) + getOrEmpty$1(Caml_option.undefined_to_opt(props.className));
  var stylesObject = {
    className: className,
    ref: Caml_option.undefined_to_opt(props.innerRef)
  };
  var newProps = Object.assign({}, props, stylesObject);
  deleteProp$1(newProps, "mt");
  deleteProp$1(newProps, "status");
  deleteProp$1(newProps, "innerRef");
  return React.createElement("div", newProps);
}

var IconStyled = {
  deleteProp: deleteProp$1,
  getOrEmpty: getOrEmpty$1,
  styles: styles$1,
  make: make$1
};

exports.Container = Container;
exports.IconStyled = IconStyled;
/* styles Not a pure module */
