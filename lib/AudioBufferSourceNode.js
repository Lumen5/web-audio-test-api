"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _desc, _value, _class, _class2, _temp;

var _AudioNode2 = require("./AudioNode");

var _AudioNode3 = _interopRequireDefault(_AudioNode2);

var _AudioBuffer = require("./AudioBuffer");

var _AudioBuffer2 = _interopRequireDefault(_AudioBuffer);

var _Event = require("./dom/Event");

var _Event2 = _interopRequireDefault(_Event);

var _toSeconds = require("./utils/toSeconds");

var _toSeconds2 = _interopRequireDefault(_toSeconds);

var _props = require("./decorators/props");

var props = _interopRequireWildcard(_props);

var _methods = require("./decorators/methods");

var methods = _interopRequireWildcard(_methods);

var _validators = require("./validators");

var validators = _interopRequireWildcard(_validators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var AudioBufferSourceNode = (_dec = props.typed(validators.isNullOrInstanceOf(_AudioBuffer2.default), null), _dec2 = props.audioparam(1), _dec3 = props.audioparam(0), _dec4 = props.typed(validators.isBoolean, false), _dec5 = props.typed(validators.isPositiveNumber, 0), _dec6 = props.typed(validators.isPositiveNumber, 0), _dec7 = props.on("ended"), _dec8 = methods.param("[ when ]", validators.isPositiveNumber), _dec9 = methods.param("[ offset ]", validators.isPositiveNumber), _dec10 = methods.param("[ duration ]", validators.isPositiveNumber), _dec11 = methods.contract({
  precondition: function precondition() {
    if (this._.startTime !== Infinity) {
      throw new TypeError("Cannot start more than once.");
    }
  }
}), _dec12 = methods.param("[ when ]", validators.isPositiveNumber), (_class = (_temp = _class2 = function (_AudioNode) {
  _inherits(AudioBufferSourceNode, _AudioNode);

  function AudioBufferSourceNode(admission, context) {
    _classCallCheck(this, AudioBufferSourceNode);

    var _this = _possibleConstructorReturn(this, (AudioBufferSourceNode.__proto__ || Object.getPrototypeOf(AudioBufferSourceNode)).call(this, admission, {
      name: "AudioBufferSourceNode",
      context: context,
      numberOfInputs: 0,
      numberOfOutputs: 1,
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    }));

    _this._.startTime = Infinity;
    _this._.stopTime = Infinity;
    _this._.firedOnEnded = false;
    return _this;
  }

  _createClass(AudioBufferSourceNode, [{
    key: "buffer",
    value: function buffer() {}
  }, {
    key: "playbackRate",
    value: function playbackRate() {}
  }, {
    key: "detune",
    value: function detune() {}
  }, {
    key: "loop",
    value: function loop() {}
  }, {
    key: "loopStart",
    value: function loopStart() {}
  }, {
    key: "loopEnd",
    value: function loopEnd() {}
  }, {
    key: "onended",
    value: function onended() {}
  }, {
    key: "start",
    value: function start() {
      var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this._.startTime = when;
      this._.offset = offset;
      this._.duration = duration;
    }
  }, {
    key: "stop",
    value: function stop() {
      var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this._.stopTime = when;
    }
  }, {
    key: "$stateAtTime",
    value: function $stateAtTime(when) {
      var playbackTime = (0, _toSeconds2.default)(when);

      if (this._.startTime === Infinity) {
        return "UNSCHEDULED";
      }
      if (playbackTime < this._.startTime) {
        return "SCHEDULED";
      }

      var stopTime = this._.stopTime;

      if (!this.loop && this.buffer) {
        stopTime = Math.min(stopTime, this._.startTime + this.buffer.duration);
      }

      if (playbackTime < stopTime) {
        return "PLAYING";
      }

      return "FINISHED";
    }
  }, {
    key: "__process",
    value: function __process() {
      if (!this._.firedOnEnded && this.$stateAtTime(this.context.currentTime) === "FINISHED") {
        this.dispatchEvent(new _Event2.default("ended", this));
        this._.firedOnEnded = true;
      }
    }
  }, {
    key: "$state",
    get: function get() {
      return this.$stateAtTime(this.context.currentTime);
    }
  }, {
    key: "$startTime",
    get: function get() {
      return this._.startTime;
    }
  }, {
    key: "$stopTime",
    get: function get() {
      return this._.stopTime;
    }
  }]);

  return AudioBufferSourceNode;
}(_AudioNode3.default), _class2.$JSONKeys = ["buffer", "playbackRate", "loop", "loopStart", "loopEnd"], _temp), (_applyDecoratedDescriptor(_class.prototype, "buffer", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "buffer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "playbackRate", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "playbackRate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "detune", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "detune"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loop", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "loop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loopStart", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "loopStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loopEnd", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "loopEnd"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onended", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "onended"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "start", [_dec8, _dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class.prototype, "start"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stop", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "stop"), _class.prototype)), _class));
exports.default = AudioBufferSourceNode;