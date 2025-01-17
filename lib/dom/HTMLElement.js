"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _inLaws2 = require("../utils/inLaws");

var _inLaws3 = _interopRequireDefault(_inLaws2);

var _Element2 = require("./Element");

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

global.HTMLElement = global.HTMLElement || function (_Element) {
  _inherits(HTMLElement, _Element);

  function HTMLElement() {
    _classCallCheck(this, HTMLElement);

    var _this = _possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));

    throw new TypeError("Illegal constructor");
    return _this;
  }

  return HTMLElement;
}(_Element3.default);

var HTMLElement = function (_inLaws) {
  _inherits(HTMLElement, _inLaws);

  function HTMLElement() {
    _classCallCheck(this, HTMLElement);

    return _possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).apply(this, arguments));
  }

  return HTMLElement;
}((0, _inLaws3.default)(global.HTMLElement));

exports.default = HTMLElement;