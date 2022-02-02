// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("../../lib/Theme/Theme.bs.js");
var Css = require("@emotion/css");

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

exports.container = container;
exports.header = header;
/* container Not a pure module */
