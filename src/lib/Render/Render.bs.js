// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");

function s(prim) {
  return prim;
}

function mapi(items, fn) {
  return items.map(function (item, index) {
              return Curry._2(fn, item, index.toString());
            });
}

function map(items, fn) {
  return items.map(function (item, param) {
              return Curry._1(fn, item);
            });
}

exports.s = s;
exports.mapi = mapi;
exports.map = map;
/* No side effect */
