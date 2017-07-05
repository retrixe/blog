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

var _materialUi = require("material-ui");

var _styles = require("material-ui/styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = (0, _styles.createStyleSheet)("PaperSheet", function (a) {
  return { root: a.mixins.gutters({ paddingTop: 12, paddingBottom: 12 }), button: { marginTop: 6, padding: "4px" } };
}),
    Post = function (a) {
  var b = Math.round(a.metadata.markup.split(" ").length / 60),
      c = "Written on " + a.metadata.date + " | " + b + " minute read.";return React.createElement(_materialUi.Paper, { elevation: 4, className: a.classes.root }, React.createElement(_materialUi.Typography, { type: "headline", component: "h3", align: "center" }, a.metadata.name), React.createElement(_materialUi.Typography, { type: "subheading", component: "h5", align: "center" }, c), React.createElement("div", { style: { height: 4 } }), React.createElement(_materialUi.Typography, { type: "body1", component: "p", dangerouslySetInnerHTML: { __html: a.metadata.markup } }), React.createElement(_materialUi.Button, { className: a.classes.button, color: "accent" }, "Read more"));
},
    PostWithStyling = (0, _styles.withStyles)(styleSheet)(Post),
    Posts = function (a) {
  function b() {
    (0, _classCallCheck3.default)(this, b);var a = (0, _possibleConstructorReturn3.default)(this, (b.__proto__ || (0, _getPrototypeOf2.default)(b)).call(this));return a.state = {}, a;
  }return (0, _inherits3.default)(b, a), (0, _createClass3.default)(b, [{ key: "render", value: function render() {
      return React.createElement("div", null, React.createElement("div", { style: { height: "4em" } }), React.createElement(PostWithStyling, { metadata: { name: "The working of chocolate.", date: "2/3/2017", markup: "I must admit, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla convallis ante non elementum. Etiam eget finibus nisl, vitae eleifend leo. Suspendisse at laoreet ante. Morbi feugiat augue eu elementum tincidunt. Praesent tincidunt congue egestas. Phasellus hendrerit eleifend ante, nec scelerisque lacus. Suspendisse tincidunt tincidunt posuere. Morbi id nulla a ex commodo pellentesque. Phasellus risus libero, volutpat vitae aliquet nec, malesuada quis est. Duis viverra, metus eu gravida maximus, ipsum nulla egestas elit, sit amet vulputate nunc arcu id ante. Donec cursus purus nec libero ullamcorper, facilisis tristique tortor mattis." } }));
    } }]), b;
}(React.PureComponent);exports.default = Posts;