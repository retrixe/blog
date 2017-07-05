"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _document = require("next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

var _server = require("styled-jsx/server");

var _server2 = _interopRequireDefault(_server);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyDocument = function (a) {
  function b() {
    return (0, _classCallCheck3.default)(this, b), (0, _possibleConstructorReturn3.default)(this, (b.__proto__ || (0, _getPrototypeOf2.default)(b)).apply(this, arguments));
  }return (0, _inherits3.default)(b, a), (0, _createClass3.default)(b, [{ key: "render", value: function render() {
      return React.createElement("html", { lang: "en-US" }, React.createElement(_document.Head, null, React.createElement("link", { rel: "icon", href: "/static/favicon.png" }), React.createElement("style", null, "\n            @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&subset=latin-ext');\n            body { margin: 0 }\n          ")), React.createElement("body", null, React.createElement(_document.Main, null), React.createElement(_document.NextScript, null)));
    } }], [{ key: "getInitialProps", value: function getInitialProps(a) {
      var b = a.renderPage,
          c = b(),
          d = c.html,
          e = c.head,
          f = c.errorHtml,
          g = c.chunks,
          h = (0, _server2.default)();return { html: d, head: e, errorHtml: f, chunks: g, styles: h };
    } }]), b;
}(_document2.default);exports.default = MyDocument;