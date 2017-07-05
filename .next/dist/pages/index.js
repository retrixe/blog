"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _MuiThemeProvider = require("material-ui/styles/MuiThemeProvider");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _materialUi = require("material-ui");

var _posts = require("../imports/posts");

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function () {
  return React.createElement("div", null, React.createElement(_head2.default, null, React.createElement("title", null, "retrixe's blog")), React.createElement(_MuiThemeProvider2.default, null, React.createElement("div", null, React.createElement(_materialUi.AppBar, { style: { position: "fixed" } }, React.createElement(_materialUi.Toolbar, null, React.createElement(_materialUi.Typography, { type: "title", color: "inherit" }, "retrixe's blog"))), React.createElement(_posts2.default, null))));
};