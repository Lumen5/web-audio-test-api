"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp;

var _AudioNode2 = require("./AudioNode");

var _AudioNode3 = _interopRequireDefault(_AudioNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaStreamAudioDestinationNode = (_temp = _class = function (_AudioNode) {
  _inherits(MediaStreamAudioDestinationNode, _AudioNode);

  function MediaStreamAudioDestinationNode(admission, context) {
    _classCallCheck(this, MediaStreamAudioDestinationNode);

    return _possibleConstructorReturn(this, (MediaStreamAudioDestinationNode.__proto__ || Object.getPrototypeOf(MediaStreamAudioDestinationNode)).call(this, admission, {
      name: "MediaStreamAudioDestinationNode",
      context: context,
      numberOfInputs: 1,
      numberOfOutputs: 0,
      channelCount: 2,
      channelCountMode: "explicit",
      channelInterpretation: "speakers"
    }));
  }

  return MediaStreamAudioDestinationNode;
}(_AudioNode3.default), _class.$JSONKeys = [], _temp);
exports.default = MediaStreamAudioDestinationNode;