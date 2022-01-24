// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Text = require("../Text/Text.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var Modal = require("../Modal/Modal.bs.js");
var Theme = require("../../lib/Theme/Theme.bs.js");
var React = require("react");
var Button = require("../Button/Button.bs.js");
var NextIntl = require("../../bindings/NextIntl/NextIntl.bs.js");
var Css = require("@emotion/css");
var AncestorCustom = require("../../lib/Theme/AncestorCustom.bs.js");
var Feather = require("@emotion-icons/feather");

var container = Css.css({
      display: "flex",
      flexDirection: "column"
    });

var header = Css.css({
      display: "flex",
      justifyContent: "space-between"
    });

var Styles = {
  container: container,
  header: header
};

function AddPostModal(Props) {
  var isOpen = Props.isOpen;
  var onClose = Props.onClose;
  var t = NextIntl.useTranslations(undefined);
  return React.createElement(Modal.make, {
              isOpen: isOpen,
              onClose: onClose,
              size: "md",
              content: React.createElement(AncestorCustom.Config.Box.make, {
                    children: null,
                    className: container
                  }, React.createElement(AncestorCustom.Config.Box.make, {
                        children: null,
                        className: header
                      }, React.createElement($$Text.H3.make, {
                            color: Theme.Colors.grayLight,
                            children: Curry._1(t, "Add a new post")
                          }), React.createElement(Button.Icon.make, {
                            children: React.createElement(Feather.X, {}),
                            onClick: (function (param) {
                                return Curry._1(onClose, undefined);
                              })
                          })), React.createElement(AncestorCustom.Config.Box.make, {
                        children: React.createElement("input", undefined)
                      }), React.createElement(AncestorCustom.Config.Box.make, {
                        children: React.createElement("textArea", undefined)
                      }))
            });
}

var make = AddPostModal;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
