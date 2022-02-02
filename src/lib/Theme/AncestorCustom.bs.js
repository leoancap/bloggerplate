// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Float = require("rescript/lib/js/belt_Float.js");
var Css = require("@emotion/css");
var Ancestor_Core = require("@rescriptbr/ancestor/src/core/Ancestor_Core.bs.js");

function sizeByBreakpoints(values) {
  var variant = values.NAME;
  if (variant === "md") {
    return 920;
  } else if (variant === "sm") {
    return 475;
  } else if (variant === "xs") {
    return 0;
  } else {
    return 1280;
  }
}

function unboxBreakpointValue(values) {
  return values.VAL;
}

function css(prim) {
  return Css.css(prim);
}

var Config = Ancestor_Core.Make({
      spacing: 10.0,
      radius: 4.0,
      unboxBreakpointValue: unboxBreakpointValue,
      sizeByBreakpoints: sizeByBreakpoints,
      css: css
    });

function xs(v) {
  return {
          NAME: "xs",
          VAL: v
        };
}

function sm(v) {
  return {
          NAME: "sm",
          VAL: v
        };
}

function md(v) {
  return {
          NAME: "md",
          VAL: v
        };
}

function lg(v) {
  return {
          NAME: "lg",
          VAL: v
        };
}

function rem(v) {
  return {
          NAME: "rem",
          VAL: Belt_Float.fromString(v)
        };
}

var Base;

var Box;

var Typography;

var Grid;

var Hidden;

var Color;

var Spacing;

var Radius;

exports.Config = Config;
exports.Base = Base;
exports.Box = Box;
exports.Typography = Typography;
exports.Grid = Grid;
exports.Hidden = Hidden;
exports.Color = Color;
exports.Spacing = Spacing;
exports.Radius = Radius;
exports.xs = xs;
exports.sm = sm;
exports.md = md;
exports.lg = lg;
exports.rem = rem;
/* Config Not a pure module */