// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Button = require("./Button.bs.js");
var Render = require("../../lib/Render/Render.bs.js");
var TestUtils = require("../../lib/TestUtils/TestUtils.bs.js");

var button = React.createElement(Button.make, {
      children: Render.s("ButtonText"),
      onClick: (function (param) {
          
        })
    });

TestUtils.test("Component renders", (function (param) {
        return TestUtils.toMatchSnapshot(TestUtils.expect(TestUtils.getByText({
                            NAME: "Str",
                            VAL: "ButtonText"
                          }, undefined, TestUtils.render(undefined, undefined, undefined, undefined, undefined, button))));
      }));

exports.button = button;
/* button Not a pure module */