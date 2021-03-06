// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssJs = require("bs-css-emotion/src/CssJs.bs.js");
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
      CssJs.gap({
            NAME: "rem",
            VAL: 3
          }),
      CssJs.height({
            NAME: "percent",
            VAL: 100
          })
    ]);

function make(props) {
  var className = styles + getOrEmpty(Caml_option.undefined_to_opt(props.className));
  var stylesObject = {
    className: className,
    ref: Caml_option.undefined_to_opt(props.innerRef)
  };
  var newProps = Object.assign({}, props, stylesObject);
  deleteProp(newProps, "innerRef");
  return React.createElement("form", newProps);
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

var styles$1 = CssJs.style([
      CssJs.label("Header"),
      CssJs.display("flex"),
      CssJs.justifyContent("spaceBetween")
    ]);

function make$1(props) {
  var className = styles$1 + getOrEmpty$1(Caml_option.undefined_to_opt(props.className));
  var stylesObject = {
    className: className,
    ref: Caml_option.undefined_to_opt(props.innerRef)
  };
  var newProps = Object.assign({}, props, stylesObject);
  deleteProp$1(newProps, "innerRef");
  return React.createElement("div", newProps);
}

var Header = {
  deleteProp: deleteProp$1,
  getOrEmpty: getOrEmpty$1,
  styles: styles$1,
  make: make$1
};

var deleteProp$2 = ((newProps, key) => delete newProps[key]);

function getOrEmpty$2(str) {
  if (str !== undefined) {
    return " " + str;
  } else {
    return "";
  }
}

var styles$2 = CssJs.style([
      CssJs.label("Footer"),
      CssJs.display("flex"),
      CssJs.justifyContent("spaceBetween"),
      CssJs.marginTop("auto")
    ]);

function make$2(props) {
  var className = styles$2 + getOrEmpty$2(Caml_option.undefined_to_opt(props.className));
  var stylesObject = {
    className: className,
    ref: Caml_option.undefined_to_opt(props.innerRef)
  };
  var newProps = Object.assign({}, props, stylesObject);
  deleteProp$2(newProps, "innerRef");
  return React.createElement("div", newProps);
}

var Footer = {
  deleteProp: deleteProp$2,
  getOrEmpty: getOrEmpty$2,
  styles: styles$2,
  make: make$2
};

exports.Container = Container;
exports.Header = Header;
exports.Footer = Footer;
/* styles Not a pure module */
