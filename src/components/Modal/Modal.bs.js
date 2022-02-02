// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var Theme = require("../../lib/Theme/Theme.bs.js");
var React = require("react");
var Css = require("@emotion/css");
var AncestorCustom = require("../../lib/Theme/AncestorCustom.bs.js");

var background = Css.css({
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      left: 0,
      cursor: "pointer"
    });

function container(size) {
  return Css.css({
              backgroundColor: Theme.Colors.grayDark,
              width: Curry._1(AncestorCustom.Config.Styles.Spacing.make, size),
              height: Curry._1(AncestorCustom.Config.Styles.Spacing.make, size),
              borderRadius: Curry._1(AncestorCustom.Config.Styles.Radius.make, 1),
              boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px",
              display: "flex",
              flexDirection: "column",
              padding: Theme.Padding.md,
              cursor: "default",
              zIndex: 1
            });
}

var Styles = {
  background: background,
  container: container
};

function Modal(Props) {
  var isOpenOpt = Props.isOpen;
  var onClose = Props.onClose;
  var sizeOpt = Props.size;
  var content = Props.content;
  var isOpen = isOpenOpt !== undefined ? isOpenOpt : false;
  var size = sizeOpt !== undefined ? sizeOpt : "lg";
  var size$1 = size === "md" ? 60 : (
      size === "sm" ? 40 : (
          size === "xs" ? 20 : 80
        )
    );
  if (isOpen) {
    return React.createElement(AncestorCustom.Config.Box.make, {
                children: React.createElement(AncestorCustom.Config.Box.make, {
                      children: content,
                      className: container(size$1),
                      onClick: (function (evt) {
                          evt.stopPropagation();
                          
                        })
                    }),
                className: background,
                onClick: (function (param) {
                    return Curry._1(onClose, undefined);
                  })
              });
  } else {
    return null;
  }
}

var make = Modal;

exports.Styles = Styles;
exports.make = make;
/* background Not a pure module */
