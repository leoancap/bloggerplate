// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Text = require("../Text/Text.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var Theme = require("../../lib/Theme/Theme.bs.js");
var React = require("react");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Css = require("@emotion/css");
var AncestorCustom = require("../../lib/Theme/AncestorCustom.bs.js");

function button(intent, disabled) {
  return Css.css({
              minWidth: Curry._1(AncestorCustom.Config.Styles.Spacing.make, 12),
              minHeight: Curry._1(AncestorCustom.Config.Styles.Spacing.make, 3),
              color: Theme.Colors.white,
              borderRadius: Curry._1(AncestorCustom.Config.Styles.Radius.make, 1),
              backgroundColor: intent === "danger" ? Theme.Colors.danger : (
                  intent === "success" ? Theme.Colors.success : Theme.Colors.primary
                ),
              fontFamily: "Roboto",
              cursor: disabled ? "not-allowed" : "pointer",
              "&:hover": {
                backgroundColor: intent === "danger" ? Theme.Colors.dangerDark : (
                    intent === "success" ? Theme.Colors.successDark : Theme.Colors.primaryDark
                  )
              },
              outline: "none",
              border: "none"
            });
}

function icon(param) {
  return Css.css({
              outline: "",
              border: "none",
              backgroundColor: "transparent",
              color: Theme.Colors.grayLight,
              svg: {
                width: Curry._1(AncestorCustom.Config.Styles.Spacing.make, 3),
                height: Curry._1(AncestorCustom.Config.Styles.Spacing.make, 3),
                cursor: "pointer",
                "&:hover": {
                  color: Theme.Colors.white
                }
              }
            });
}

var Styles = {
  button: button,
  icon: icon
};

function Button(Props) {
  var childrenOpt = Props.children;
  var onClick = Props.onClick;
  var disabledOpt = Props.disabled;
  var intentOpt = Props.intent;
  var children = childrenOpt !== undefined ? Caml_option.valFromOption(childrenOpt) : null;
  var disabled = disabledOpt !== undefined ? disabledOpt : false;
  var intent = intentOpt !== undefined ? intentOpt : "primary";
  return React.createElement(AncestorCustom.Config.Base.make, {
              tag: "button",
              className: button(intent, disabled),
              children: React.createElement(AncestorCustom.Config.Box.make, {
                    children: React.createElement($$Text.Button.make, {
                          children: children
                        })
                  }),
              onClick: onClick,
              disabled: disabled
            });
}

function Button$Icon(Props) {
  var children = Props.children;
  var onClick = Props.onClick;
  var tmp = {
    tag: "button",
    className: icon(undefined),
    children: children
  };
  if (onClick !== undefined) {
    tmp.onClick = Caml_option.valFromOption(onClick);
  }
  return React.createElement(AncestorCustom.Config.Base.make, tmp);
}

var Icon = {
  make: Button$Icon
};

var make = Button;

exports.Styles = Styles;
exports.make = make;
exports.Icon = Icon;
/* Text Not a pure module */
