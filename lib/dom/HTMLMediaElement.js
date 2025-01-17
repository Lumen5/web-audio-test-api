"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _inLaws2 = require("../utils/inLaws");

var _inLaws3 = _interopRequireDefault(_inLaws2);

var _HTMLElement2 = require("./HTMLElement");

var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

global.HTMLMediaElement = global.HTMLMediaElement || function (_HTMLElement) {
  _inherits(HTMLMediaElement, _HTMLElement);

  function HTMLMediaElement() {
    _classCallCheck(this, HTMLMediaElement);

    var _this = _possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this));

    throw new TypeError("Illegal constructor");
    return _this;
  }

  return HTMLMediaElement;
}(_HTMLElement3.default);

var HTMLMediaElement = function (_inLaws) {
  _inherits(HTMLMediaElement, _inLaws);

  function HTMLMediaElement() {
    _classCallCheck(this, HTMLMediaElement);

    return _possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).apply(this, arguments));
  }

  return HTMLMediaElement;
}((0, _inLaws3.default)(global.HTMLMediaElement));

exports.default = HTMLMediaElement;