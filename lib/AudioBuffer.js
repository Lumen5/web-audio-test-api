"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _desc, _value, _class;

var _Configuration = require("./utils/Configuration");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _Immigration = require("./utils/Immigration");

var _Immigration2 = _interopRequireDefault(_Immigration);

var _props = require("./decorators/props");

var props = _interopRequireWildcard(_props);

var _methods = require("./decorators/methods");

var methods = _interopRequireWildcard(_methods);

var _validators = require("./validators");

var validators = _interopRequireWildcard(_validators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var configuration = _Configuration2.default.getInstance();
var immigration = _Immigration2.default.getInstance();

var AudioBuffer = (_dec = methods.param("numberOfChannels", validators.isPositiveInteger), _dec2 = methods.param("length", validators.isPositiveInteger), _dec3 = methods.param("sampleRate", validators.isPositiveInteger), _dec4 = props.readonly(), _dec5 = props.readonly(), _dec6 = props.readonly(), _dec7 = props.readonly(), _dec8 = methods.param("channel", validators.isPositiveInteger), _dec9 = methods.contract({
  precondition: function precondition(channel) {
    if (this._.data.length <= channel) {
      throw new TypeError("The {{channel}} index (" + channel + ") exceeds number of channels (" + this._.data.length + ").");
    }
  }
}), _dec10 = methods.returns(validators.isInstanceOf(Float32Array)), _dec11 = methods.param("destination", validators.isInstanceOf(Float32Array)), _dec12 = methods.param("channelNumber", validators.isPositiveInteger), _dec13 = methods.param("[ startInChannel ]", validators.isPositiveInteger), _dec14 = methods.contract({
  precondition: function precondition(destination, channelNumber) {
    var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    if (this._.data.length <= channelNumber) {
      throw new TypeError("The {{channelNumber}} provided (" + channelNumber + ") is outside the range [0, " + this._.data.length + ").");
    }
    if (this._.length <= startInChannel) {
      throw new TypeError("The {{startInChannel}} provided (" + startInChannel + ") is outside the range [0, " + this._.length + ").");
    }
    if (configuration.getState("AudioBuffer#copyFromChannel") !== "enabled") {
      throw new TypeError("not enabled");
    }
  }
}), _dec15 = methods.param("source", validators.isInstanceOf(Float32Array)), _dec16 = methods.param("channelNumber", validators.isPositiveInteger), _dec17 = methods.param("[ startInChannel ]", validators.isPositiveInteger), _dec18 = methods.contract({
  precondition: function precondition(source, channelNumber) {
    var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    if (this._.data.length <= channelNumber) {
      throw new TypeError("The {{channelNumber}} provided (" + channelNumber + ") is outside the range [0, " + this._.data.length + ").");
    }
    if (this._.length <= startInChannel) {
      throw new TypeError("The {{startInChannel}} provided (" + startInChannel + ") is outside the range [0, " + this._.length + ").");
    }
    if (configuration.getState("AudioBuffer#copyToChannel") !== "enabled") {
      throw new TypeError("not enabled");
    }
  }
}), (_class = function () {
  function AudioBuffer(admission, context, numberOfChannels, length, sampleRate) {
    _classCallCheck(this, AudioBuffer);

    immigration.check(admission, function () {
      throw new TypeError("Illegal constructor");
    });
    Object.defineProperty(this, "_", { value: {} });

    this._.context = context;
    this.__createAudioBuffer(numberOfChannels, length, sampleRate);
  }

  _createClass(AudioBuffer, [{
    key: "__createAudioBuffer",
    value: function __createAudioBuffer(numberOfChannels, length, sampleRate) {
      this._.numberOfChannels = numberOfChannels;
      this._.length = length;
      this._.sampleRate = sampleRate;
      this._.data = new Array(numberOfChannels);

      for (var i = 0; i < numberOfChannels; i++) {
        this._.data[i] = new Float32Array(length);
      }
    }
  }, {
    key: "sampleRate",
    value: function sampleRate() {
      return this._.sampleRate;
    }
  }, {
    key: "length",
    value: function length() {
      return this._.length;
    }
  }, {
    key: "duration",
    value: function duration() {
      return this.length / this.sampleRate;
    }
  }, {
    key: "numberOfChannels",
    value: function numberOfChannels() {
      return this._.numberOfChannels;
    }
  }, {
    key: "getChannelData",
    value: function getChannelData(channel) {
      return this._.data[channel];
    }
  }, {
    key: "copyFromChannel",
    value: function copyFromChannel(destination, channelNumber) {
      var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var source = this._.data[channelNumber].subarray(startInChannel);

      destination.set(source.subarray(0, Math.min(source.length, destination.length)));
    }
  }, {
    key: "copyToChannel",
    value: function copyToChannel(source, channelNumber) {
      var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var clipped = source.subarray(0, Math.min(source.length, this._.length - startInChannel));

      this._.data[channelNumber].set(clipped, startInChannel);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {
        name: this.$name,
        sampleRate: this.sampleRate,
        length: this.length,
        duration: this.duration,
        numberOfChannels: this.numberOfChannels
      };

      if (this.$context.VERBOSE_JSON) {
        json.data = this._.data.map(function (data) {
          return Array.prototype.slice.call(data);
        });
      }

      return json;
    }
  }, {
    key: "$name",
    get: function get() {
      return "AudioBuffer";
    }
  }, {
    key: "$context",
    get: function get() {
      return this._.context;
    }
  }]);

  return AudioBuffer;
}(), (_applyDecoratedDescriptor(_class.prototype, "__createAudioBuffer", [_dec, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class.prototype, "__createAudioBuffer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sampleRate", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "sampleRate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "length", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "length"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "duration", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "duration"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "numberOfChannels", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "numberOfChannels"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getChannelData", [_dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class.prototype, "getChannelData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyFromChannel", [_dec11, _dec12, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class.prototype, "copyFromChannel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyToChannel", [_dec15, _dec16, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class.prototype, "copyToChannel"), _class.prototype)), _class));
exports.default = AudioBuffer;