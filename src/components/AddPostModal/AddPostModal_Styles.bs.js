// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("../../lib/Theme/Theme.bs.js");
var Css = require("@emotion/css");

var container = Css.css({
      display: "flex",
      flexDirection: "column",
      gap: Theme.Padding.md,
      height: "100%"
    });

var header = Css.css({
      display: "flex",
      justifyContent: "space-between"
    });

var footer = Css.css({
      display: "flex",
      justifyContent: "space-between",
      marginTop: "auto"
    });

exports.container = container;
exports.header = header;
exports.footer = footer;
/* container Not a pure module */
