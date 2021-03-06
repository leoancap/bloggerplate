// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Text = require("../Text/Text.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Render = require("../../lib/Render/Render.bs.js");
var NextIntl = require("../../bindings/NextIntl/NextIntl.bs.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Input_Styles = require("./Input_Styles.bs.js");

function Input(Props) {
  var onChange = Props.onChange;
  var label = Props.label;
  var placeholder = Props.placeholder;
  var value = Props.value;
  var tagOpt = Props.tag;
  var errorOpt = Props.error;
  var tag = tagOpt !== undefined ? tagOpt : "input";
  var error = errorOpt !== undefined ? Caml_option.valFromOption(errorOpt) : undefined;
  var t = NextIntl.useTranslations(undefined);
  var intent = Belt_Option.mapWithDefault(error, "success", (function (param) {
          return "danger";
        }));
  var tmp;
  if (tag === "input") {
    var tmp$1 = {
      label: label,
      intent: intent
    };
    if (placeholder !== undefined) {
      tmp$1.placeholder = Caml_option.valFromOption(placeholder);
    }
    if (value !== undefined) {
      tmp$1.value = Caml_option.valFromOption(value);
    }
    if (onChange !== undefined) {
      tmp$1.onChange = Caml_option.valFromOption(onChange);
    }
    tmp = React.createElement(Input_Styles.InputStyled.make, tmp$1);
  } else {
    var tmp$2 = {
      label: label,
      intent: intent
    };
    if (placeholder !== undefined) {
      tmp$2.placeholder = Caml_option.valFromOption(placeholder);
    }
    if (value !== undefined) {
      tmp$2.value = Caml_option.valFromOption(value);
    }
    if (onChange !== undefined) {
      tmp$2.onChange = Caml_option.valFromOption(onChange);
    }
    tmp = React.createElement(Input_Styles.TextArea.make, tmp$2);
  }
  return React.createElement(Input_Styles.Container.make, {
              children: null
            }, React.createElement(Input_Styles.Label.make, {
                  children: Render.s(label),
                  htmlFor: label
                }), tmp, error !== undefined ? React.createElement(Input_Styles.$$Error.make, {
                    children: React.createElement($$Text.Small.make, {
                          children: Curry._1(t, error)
                        })
                  }) : null);
}

var make = Input;

exports.make = make;
/* Text Not a pure module */
