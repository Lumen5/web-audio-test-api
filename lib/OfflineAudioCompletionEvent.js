"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Immigration = require("./utils/Immigration");

var _Immigration2 = _interopRequireDefault(_Immigration);

var _Event2 = require("./dom/Event");

var _Event3 = _interopRequireDefault(_Event2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var immigration = _Immigration2.default.getInstance();

var OfflineAudioCompletionEvent = function (_Event) {
  _inherits(OfflineAudioCompletionEvent, _Event);

  function OfflineAudioCompletionEvent(admission, node) {
    _classCallCheck(this, OfflineAudioCompletionEvent);

    immigration.check(admission, function () {
      throw new TypeError("Illegal constructor");
    });

    var _this = _possibleConstructorReturn(this, (OfflineAudioCompletionEvent.__proto__ || Object.getPrototypeOf(OfflineAudioCompletionEvent)).call(this, "complete", node));

    _this._.node = node;
    return _this;
  }

  _createClass(OfflineAudioCompletionEvent, [{
    key: "$name",
    get: function get() {
      return "OfflineAudioCompletionEvent";
    }
  }, {
    key: "$node",
    get: function get() {
      return this._.node;
    }
  }]);

  return OfflineAudioCompletionEvent;
}(_Event3.default);

exports.default = OfflineAudioCompletionEvent;