// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssJs = require("bs-css-emotion/src/CssJs.bs.js");
var Theme = require("../../lib/Theme/Theme.bs.js");

function buttonStyles(intent, disabled) {
  var match = intent === "primary" ? [
      Theme.Colors.primary,
      Theme.Colors.primaryDark
    ] : (
      intent === "danger" ? [
          Theme.Colors.danger,
          Theme.Colors.dangerDark
        ] : (
          intent === "success" ? [
              Theme.Colors.success,
              Theme.Colors.successDark
            ] : [
              Theme.Colors.none,
              Theme.Colors.noneDark
            ]
        )
    );
  return CssJs.style([
              CssJs.minWidth({
                    NAME: "rem",
                    VAL: 12
                  }),
              CssJs.minHeight({
                    NAME: "rem",
                    VAL: 3
                  }),
              CssJs.color(Theme.Colors.white),
              CssJs.borderRadius(Theme.BorderRadius.xs),
              CssJs.outline({
                    NAME: "px",
                    VAL: 0
                  }, "none", "transparent"),
              CssJs.border({
                    NAME: "px",
                    VAL: 0
                  }, "none", "transparent"),
              CssJs.backgroundColor(match[0]),
              CssJs.hover([CssJs.backgroundColor(match[1])]),
              CssJs.cursor(disabled ? "notAllowed" : "pointer")
            ]);
}

var iconStyles = CssJs.style([
      CssJs.label("iconStyles"),
      CssJs.outline({
            NAME: "px",
            VAL: 0
          }, "none", "transparent"),
      CssJs.border({
            NAME: "px",
            VAL: 0
          }, "none", "transparent"),
      CssJs.padding("zero"),
      CssJs.backgroundColor("transparent"),
      CssJs.color(Theme.Colors.grayLight),
      CssJs.child("svg", [
            CssJs.width({
                  NAME: "rem",
                  VAL: 3
                }),
            CssJs.height({
                  NAME: "rem",
                  VAL: 3
                }),
            CssJs.cursor("pointer"),
            CssJs.hover([CssJs.color(Theme.Colors.white)])
          ])
    ]);

exports.buttonStyles = buttonStyles;
exports.iconStyles = iconStyles;
/* iconStyles Not a pure module */