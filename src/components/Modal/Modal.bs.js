// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Modal_Styles = require("./Modal_Styles.bs.js");

function Modal(Props) {
  var isOpenOpt = Props.isOpen;
  var onClose = Props.onClose;
  var sizeOpt = Props.size;
  var content = Props.content;
  var isOpen = isOpenOpt !== undefined ? isOpenOpt : false;
  var size = sizeOpt !== undefined ? sizeOpt : "lg";
  var size$1 = size === "md" ? ({
        NAME: "rem",
        VAL: 60
      }) : (
      size === "sm" ? ({
            NAME: "rem",
            VAL: 40
          }) : (
          size === "xs" ? ({
                NAME: "rem",
                VAL: 20
              }) : ({
                NAME: "rem",
                VAL: 80
              })
        )
    );
  if (isOpen) {
    return React.createElement(Modal_Styles.Backdrop.make, {
                children: React.createElement(Modal_Styles.Container.make, {
                      children: content,
                      onClick: (function (evt) {
                          evt.stopPropagation();
                          
                        }),
                      size: size$1
                    }),
                onClick: (function (param) {
                    return Curry._1(onClose, undefined);
                  })
              });
  } else {
    return null;
  }
}

var make = Modal;

exports.make = make;
/* react Not a pure module */
