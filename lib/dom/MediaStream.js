"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _inLaws2 = require("../utils/inLaws");

var _inLaws3 = _interopRequireDefault(_inLaws2);

var _EventTarget2 = require("./EventTarget");

var _EventTarget3 = _interopRequireDefault(_EventTarget2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

global.MediaStream = global.MediaStream || function (_EventTarget) {
  _inherits(MediaStream, _EventTarget);

  function MediaStream() {
    _classCallCheck(this, MediaStream);

    var _this = _possibleConstructorReturn(this, (MediaStream.__proto__ || Object.getPrototypeOf(MediaStream)).call(this));

    throw new TypeError("Illegal constructor");
    return _this;
  }

  return MediaStream;
}(_EventTarget3.default);

var MediaStream = function (_inLaws) {
  _inherits(MediaStream, _inLaws);

  function MediaStream() {
    _classCallCheck(this, MediaStream);

    return _possibleConstructorReturn(this, (MediaStream.__proto__ || Object.getPrototypeOf(MediaStream)).apply(this, arguments));
  }

  return MediaStream;
}((0, _inLaws3.default)(global.MediaStream));

exports.default = MediaStream;