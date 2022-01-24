// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("../lib/Theme/Theme.bs.js");
var React = require("react");
var Layout = require("../components/Layout/Layout.bs.js");
var Navbar = require("../components/Navbar/Navbar.bs.js");
var RelayEnv = require("../lib/Relay/RelayEnv.bs.js");
var NextIntl = require("next-intl");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Router = require("next/router");
var RescriptRelay = require("rescript-relay/src/RescriptRelay.bs.js");
var React$1 = require("@emotion/react");
var React$2 = require("next-auth/react");

var globalStyles = {
  "html, body, #root": {
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0"
  },
  "*": {
    boxSizing: "border-box",
    fontSize: "10px",
    fontFamily: Theme.fontFamily
  }
};

function $$default(param) {
  var pageProps = param.pageProps;
  var content = React.createElement(param.Component, pageProps);
  var match = Router.useRouter();
  var locale = match.locale;
  var messages = require("../../lang/" + String(locale) + ".json");
  return React.createElement(NextIntl.NextIntlProvider, {
              locale: locale,
              messages: messages,
              children: React.createElement(RescriptRelay.Context.Provider.make, {
                    environment: RelayEnv.createEnvironment(Caml_option.some(pageProps.records), undefined),
                    children: React.createElement(React$2.SessionProvider, {
                          session: pageProps.session,
                          children: null
                        }, React.createElement(React$1.Global, {
                              styles: globalStyles
                            }), React.createElement(Layout.make, {
                              children: null
                            }, React.createElement(Navbar.make, {}), React.createElement("section", undefined, content)))
                  })
            });
}

exports.globalStyles = globalStyles;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* Theme Not a pure module */