// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Navbar = require("./Navbar.bs.js");
var TestUtils = require("../../lib/TestUtils/TestUtils.bs.js");

((jest.mock('next/router',() => ({useRouter: () => ({pathname: "/" })}) )));

((jest.mock('next-auth/react',() => ({useSession: () => ({})}) )));

((jest.mock('next-intl', () => ({useTranslations: () => t => t}) )));

var navbar = React.createElement(Navbar.make, {});

TestUtils.test("render Code NavItem", (function (param) {
        return TestUtils.toMatchSnapshot(TestUtils.expect(TestUtils.getByTitle({
                            NAME: "Str",
                            VAL: "Code"
                          }, undefined, TestUtils.render(undefined, undefined, undefined, undefined, undefined, navbar))));
      }));

TestUtils.test("render Review NavItem", (function (param) {
        return TestUtils.toMatchSnapshot(TestUtils.expect(TestUtils.getByTitle({
                            NAME: "Str",
                            VAL: "Review"
                          }, undefined, TestUtils.render(undefined, undefined, undefined, undefined, undefined, navbar))));
      }));

TestUtils.test("render Signin NavItem", (function (param) {
        return TestUtils.toMatchSnapshot(TestUtils.expect(TestUtils.getByTitle({
                            NAME: "Str",
                            VAL: "Signin"
                          }, undefined, TestUtils.render(undefined, undefined, undefined, undefined, undefined, navbar))));
      }));

TestUtils.test("render Signout NavItem", (function (param) {
        ((jest.spyOn(require('next-auth/react'), 'useSession').mockReturnValue(
    {data: {user: {name: "mockUser"}}
  })));
        return TestUtils.toMatchSnapshot(TestUtils.expect(TestUtils.getByTitle({
                            NAME: "Str",
                            VAL: "Signout"
                          }, undefined, TestUtils.render(undefined, undefined, undefined, undefined, undefined, navbar))));
      }));

TestUtils.test("render Settings NavItem", (function (param) {
        return TestUtils.toMatchSnapshot(TestUtils.expect(TestUtils.getByTitle({
                            NAME: "Str",
                            VAL: "Settings"
                          }, undefined, TestUtils.render(undefined, undefined, undefined, undefined, undefined, navbar))));
      }));

exports.navbar = navbar;
/*  Not a pure module */