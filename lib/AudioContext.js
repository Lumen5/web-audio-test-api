"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _desc, _value, _class;

var _Configuration = require("./utils/Configuration");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _Immigration = require("./utils/Immigration");

var _Immigration2 = _interopRequireDefault(_Immigration);

var _Event = require("./dom/Event");

var _Event2 = _interopRequireDefault(_Event);

var _EventTarget2 = require("./dom/EventTarget");

var _EventTarget3 = _interopRequireDefault(_EventTarget2);

var _HTMLMediaElement = require("./dom/HTMLMediaElement");

var _HTMLMediaElement2 = _interopRequireDefault(_HTMLMediaElement);

var _MediaStream = require("./dom/MediaStream");

var _MediaStream2 = _interopRequireDefault(_MediaStream);

var _AudioBuffer = require("./AudioBuffer");

var _AudioBuffer2 = _interopRequireDefault(_AudioBuffer);

var _AnalyserNode = require("./AnalyserNode");

var _AnalyserNode2 = _interopRequireDefault(_AnalyserNode);

var _AudioBufferSourceNode = require("./AudioBufferSourceNode");

var _AudioBufferSourceNode2 = _interopRequireDefault(_AudioBufferSourceNode);

var _AudioDestinationNode = require("./AudioDestinationNode");

var _AudioDestinationNode2 = _interopRequireDefault(_AudioDestinationNode);

var _AudioListener = require("./AudioListener");

var _AudioListener2 = _interopRequireDefault(_AudioListener);

var _BiquadFilterNode = require("./BiquadFilterNode");

var _BiquadFilterNode2 = _interopRequireDefault(_BiquadFilterNode);

var _ChannelMergerNode = require("./ChannelMergerNode");

var _ChannelMergerNode2 = _interopRequireDefault(_ChannelMergerNode);

var _ChannelSplitterNode = require("./ChannelSplitterNode");

var _ChannelSplitterNode2 = _interopRequireDefault(_ChannelSplitterNode);

var _ConvolverNode = require("./ConvolverNode");

var _ConvolverNode2 = _interopRequireDefault(_ConvolverNode);

var _DelayNode = require("./DelayNode");

var _DelayNode2 = _interopRequireDefault(_DelayNode);

var _DynamicsCompressorNode = require("./DynamicsCompressorNode");

var _DynamicsCompressorNode2 = _interopRequireDefault(_DynamicsCompressorNode);

var _GainNode = require("./GainNode");

var _GainNode2 = _interopRequireDefault(_GainNode);

var _MediaElementAudioSourceNode = require("./MediaElementAudioSourceNode");

var _MediaElementAudioSourceNode2 = _interopRequireDefault(_MediaElementAudioSourceNode);

var _MediaStreamAudioDestinationNode = require("./MediaStreamAudioDestinationNode");

var _MediaStreamAudioDestinationNode2 = _interopRequireDefault(_MediaStreamAudioDestinationNode);

var _MediaStreamAudioSourceNode = require("./MediaStreamAudioSourceNode");

var _MediaStreamAudioSourceNode2 = _interopRequireDefault(_MediaStreamAudioSourceNode);

var _OscillatorNode = require("./OscillatorNode");

var _OscillatorNode2 = _interopRequireDefault(_OscillatorNode);

var _PannerNode = require("./PannerNode");

var _PannerNode2 = _interopRequireDefault(_PannerNode);

var _PeriodicWave = require("./PeriodicWave");

var _PeriodicWave2 = _interopRequireDefault(_PeriodicWave);

var _ScriptProcessorNode = require("./ScriptProcessorNode");

var _ScriptProcessorNode2 = _interopRequireDefault(_ScriptProcessorNode);

var _StereoPannerNode = require("./StereoPannerNode");

var _StereoPannerNode2 = _interopRequireDefault(_StereoPannerNode);

var _WaveShaperNode = require("./WaveShaperNode");

var _WaveShaperNode2 = _interopRequireDefault(_WaveShaperNode);

var _getAPIVersion = require("./utils/getAPIVersion");

var _getAPIVersion2 = _interopRequireDefault(_getAPIVersion);

var _defaults = require("./utils/defaults");

var _defaults2 = _interopRequireDefault(_defaults);

var _toMicroseconds = require("./utils/toMicroseconds");

var _toMicroseconds2 = _interopRequireDefault(_toMicroseconds);

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

var configuration = _Configuration2.default.getInstance();
var immigration = _Immigration2.default.getInstance();

function isEnabledState() {
  return configuration.getState("AudioContext#suspend") === "enabled" || configuration.getState("AudioContext#resume") === "enabled" || configuration.getState("AudioContext#close") === "enabled";
}

var AudioContext = (_dec = props.readonly(), _dec2 = props.readonly(), _dec3 = props.readonly(), _dec4 = props.readonly(), _dec5 = props.on("statechange"), _dec6 = methods.returns(validators.isInstanceOf(Promise)), _dec7 = methods.returns(validators.isInstanceOf(Promise)), _dec8 = methods.returns(validators.isInstanceOf(Promise)), _dec9 = methods.param("numberOfChannels", validators.isPositiveInteger), _dec10 = methods.param("length", validators.isPositiveInteger), _dec11 = methods.param("sampleRate", validators.isPositiveInteger), _dec12 = methods.returns(validators.isInstanceOf(_AudioBuffer2.default)), _dec13 = methods.param("audioData", validators.isInstanceOf(ArrayBuffer)), _dec14 = methods.param("[ successCallback ]", validators.isFunction), _dec15 = methods.param("[ errorCallback ]", validators.isFunction), _dec16 = methods.returns(validators.isInstanceOf(_AudioBufferSourceNode2.default)), _dec17 = methods.param("mediaElement", validators.isInstanceOf(_HTMLMediaElement2.default)), _dec18 = methods.returns(validators.isInstanceOf(_MediaElementAudioSourceNode2.default)), _dec19 = methods.param("mediaStream", validators.isInstanceOf(_MediaStream2.default)), _dec20 = methods.returns(validators.isInstanceOf(_MediaStreamAudioSourceNode2.default)), _dec21 = methods.returns(validators.isInstanceOf(_MediaStreamAudioDestinationNode2.default)), _dec22 = methods.contract({
  precondition: function precondition() {
    throw new TypeError("not enabled");
  }
}), _dec23 = methods.param("bufferSize", validators.isPositiveInteger), _dec24 = methods.param("[ numberOfInputChannels ]", validators.isPositiveInteger), _dec25 = methods.param("[ numberOfOutputChannels ]", validators.isPositiveInteger), _dec26 = methods.returns(validators.isInstanceOf(_ScriptProcessorNode2.default)), _dec27 = methods.returns(validators.isInstanceOf(_AnalyserNode2.default)), _dec28 = methods.returns(validators.isInstanceOf(_GainNode2.default)), _dec29 = methods.param("[ maxDelayTime ]", validators.isPositiveNumber), _dec30 = methods.returns(validators.isInstanceOf(_DelayNode2.default)), _dec31 = methods.returns(validators.isInstanceOf(_BiquadFilterNode2.default)), _dec32 = methods.returns(validators.isInstanceOf(_WaveShaperNode2.default)), _dec33 = methods.returns(validators.isInstanceOf(_PannerNode2.default)), _dec34 = methods.contract({
  precondition: function precondition() {
    if (configuration.getState("AudioContext#createStereoPanner") !== "enabled") {
      throw new TypeError("not enabled");
    }
  }
}), _dec35 = methods.returns(validators.isInstanceOf(_StereoPannerNode2.default)), _dec36 = methods.returns(validators.isInstanceOf(_ConvolverNode2.default)), _dec37 = methods.param("[ numberOfOutputs ]", validators.isPositiveInteger), _dec38 = methods.returns(validators.isInstanceOf(_ChannelSplitterNode2.default)), _dec39 = methods.param("[ numberOfInputs ]", validators.isPositiveInteger), _dec40 = methods.returns(validators.isInstanceOf(_ChannelMergerNode2.default)), _dec41 = methods.returns(validators.isInstanceOf(_DynamicsCompressorNode2.default)), _dec42 = methods.returns(validators.isInstanceOf(_OscillatorNode2.default)), _dec43 = methods.param("real", validators.isInstanceOf(Float32Array)), _dec44 = methods.param("imag", validators.isInstanceOf(Float32Array)), _dec45 = methods.returns(validators.isInstanceOf(_PeriodicWave2.default)), _dec46 = methods.contract({
  precondition: function precondition(methodName) {
    if (configuration.getState("AudioContext#" + methodName) !== "enabled") {
      throw new TypeError("not enabled");
    }
  }
}), (_class = function (_EventTarget) {
  _inherits(AudioContext, _EventTarget);

  function AudioContext() {
    _classCallCheck(this, AudioContext);

    var _this = _possibleConstructorReturn(this, (AudioContext.__proto__ || Object.getPrototypeOf(AudioContext)).call(this));

    Object.defineProperty(_this, "_", { value: {} });

    _this._.destination = immigration.apply(function (admission) {
      return new _AudioDestinationNode2.default(admission, _this);
    });
    _this._.sampleRate = global.WebAudioTestAPI.sampleRate;
    _this._.listener = immigration.apply(function (admission) {
      return new _AudioListener2.default(admission, _this);
    });
    _this._.microCurrentTime = 0;
    _this._.processedSamples = 0;
    _this._.tick = 0;
    _this._.state = "running";
    return _this;
  }

  _createClass(AudioContext, [{
    key: "destination",
    value: function destination() {
      return this._.destination;
    }
  }, {
    key: "sampleRate",
    value: function sampleRate() {
      return this._.sampleRate;
    }
  }, {
    key: "currentTime",
    value: function currentTime() {
      return this._.microCurrentTime / (1000 * 1000);
    }
  }, {
    key: "listener",
    value: function listener() {
      return this._.listener;
    }
  }, {
    key: "onstatechange",
    value: function onstatechange() {}
  }, {
    key: "suspend",
    value: function suspend() {
      var _this2 = this;

      return this.__transitionToState("suspend", function () {
        if (_this2._.state === "running") {
          _this2._.state = "suspended";
          _this2.dispatchEvent(new _Event2.default("statechange", _this2));
        }
      });
    }
  }, {
    key: "resume",
    value: function resume() {
      var _this3 = this;

      return this.__transitionToState("resume", function () {
        if (_this3._.state === "suspended") {
          _this3._.state = "running";
          _this3.dispatchEvent(new _Event2.default("statechange", _this3));
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      var _this4 = this;

      return this.__transitionToState("close", function () {
        if (_this4._.state !== "closed") {
          _this4._.state = "closed";
          _this4.$reset();
          _this4.dispatchEvent(new _Event2.default("statechange", _this4));
        }
      });
    }
  }, {
    key: "createBuffer",
    value: function createBuffer(numberOfChannels, length, sampleRate) {
      var _this5 = this;

      return immigration.apply(function (admission) {
        return new _AudioBuffer2.default(admission, _this5, numberOfChannels, length, sampleRate);
      });
    }
  }, {
    key: "decodeAudioData",
    value: function decodeAudioData(audioData, successCallback, errorCallback) {
      var _this6 = this;

      var isPromiseBased = configuration.getState("AudioContext#decodeAudioData") === "promise";

      if (isPromiseBased) {
        successCallback = (0, _defaults2.default)(successCallback, function () {});
        errorCallback = (0, _defaults2.default)(errorCallback, function () {});
      } else {
        errorCallback = (0, _defaults2.default)(errorCallback, function () {});
      }

      var promise = new Promise(function (resolve, reject) {
        if (_this6.DECODE_AUDIO_DATA_FAILED) {
          reject();
        } else {
          resolve(_this6.DECODE_AUDIO_DATA_RESULT || immigration.apply(function (admission) {
            return new _AudioBuffer2.default(admission, _this6, 2, 1024, _this6.sampleRate);
          }));
        }
      });

      promise.then(successCallback, errorCallback);

      if (isPromiseBased) {
        return promise;
      }
    }
  }, {
    key: "createBufferSource",
    value: function createBufferSource() {
      var _this7 = this;

      return immigration.apply(function (admission) {
        return new _AudioBufferSourceNode2.default(admission, _this7);
      });
    }
  }, {
    key: "createMediaElementSource",
    value: function createMediaElementSource(mediaElement) {
      var _this8 = this;

      return immigration.apply(function (admission) {
        return new _MediaElementAudioSourceNode2.default(admission, _this8, mediaElement);
      });
    }
  }, {
    key: "createMediaStreamSource",
    value: function createMediaStreamSource(mediaStream) {
      var _this9 = this;

      return immigration.apply(function (admission) {
        return new _MediaStreamAudioSourceNode2.default(admission, _this9, mediaStream);
      });
    }
  }, {
    key: "createMediaStreamDestination",
    value: function createMediaStreamDestination() {
      var _this10 = this;

      return immigration.apply(function (admission) {
        return new _MediaStreamAudioDestinationNode2.default(admission, _this10);
      });
    }
  }, {
    key: "createAudioWorker",
    value: function createAudioWorker() {}
  }, {
    key: "createScriptProcessor",
    value: function createScriptProcessor(bufferSize) {
      var _this11 = this;

      var numberOfInputChannels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var numberOfOutputChannels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

      return immigration.apply(function (admission) {
        return new _ScriptProcessorNode2.default(admission, _this11, bufferSize, numberOfInputChannels, numberOfOutputChannels);
      });
    }
  }, {
    key: "createAnalyser",
    value: function createAnalyser() {
      var _this12 = this;

      return immigration.apply(function (admission) {
        return new _AnalyserNode2.default(admission, _this12);
      });
    }
  }, {
    key: "createGain",
    value: function createGain() {
      var _this13 = this;

      return immigration.apply(function (admission) {
        return new _GainNode2.default(admission, _this13);
      });
    }
  }, {
    key: "createDelay",
    value: function createDelay() {
      var _this14 = this;

      var maxDelayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      return immigration.apply(function (admission) {
        return new _DelayNode2.default(admission, _this14, maxDelayTime);
      });
    }
  }, {
    key: "createBiquadFilter",
    value: function createBiquadFilter() {
      var _this15 = this;

      return immigration.apply(function (admission) {
        return new _BiquadFilterNode2.default(admission, _this15);
      });
    }
  }, {
    key: "createWaveShaper",
    value: function createWaveShaper() {
      var _this16 = this;

      return immigration.apply(function (admission) {
        return new _WaveShaperNode2.default(admission, _this16);
      });
    }
  }, {
    key: "createPanner",
    value: function createPanner() {
      var _this17 = this;

      return immigration.apply(function (admission) {
        return new _PannerNode2.default(admission, _this17);
      });
    }
  }, {
    key: "createStereoPanner",
    value: function createStereoPanner() {
      var _this18 = this;

      return immigration.apply(function (admission) {
        return new _StereoPannerNode2.default(admission, _this18);
      });
    }
  }, {
    key: "createConvolver",
    value: function createConvolver() {
      var _this19 = this;

      return immigration.apply(function (admission) {
        return new _ConvolverNode2.default(admission, _this19);
      });
    }
  }, {
    key: "createChannelSplitter",
    value: function createChannelSplitter() {
      var _this20 = this;

      var numberOfOutputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

      return immigration.apply(function (admission) {
        return new _ChannelSplitterNode2.default(admission, _this20, numberOfOutputs);
      });
    }
  }, {
    key: "createChannelMerger",
    value: function createChannelMerger() {
      var _this21 = this;

      var numberOfInputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

      return immigration.apply(function (admission) {
        return new _ChannelMergerNode2.default(admission, _this21, numberOfInputs);
      });
    }
  }, {
    key: "createDynamicsCompressor",
    value: function createDynamicsCompressor() {
      var _this22 = this;

      return immigration.apply(function (admission) {
        return new _DynamicsCompressorNode2.default(admission, _this22);
      });
    }
  }, {
    key: "createOscillator",
    value: function createOscillator() {
      var _this23 = this;

      return immigration.apply(function (admission) {
        return new _OscillatorNode2.default(admission, _this23);
      });
    }
  }, {
    key: "createPeriodicWave",
    value: function createPeriodicWave(real, imag) {
      var _this24 = this;

      return immigration.apply(function (admission) {
        return new _PeriodicWave2.default(admission, _this24, real, imag);
      });
    }
  }, {
    key: "__transitionToState",
    value: function __transitionToState(methodName, callback) {
      var _this25 = this;

      return new Promise(function (resolve) {
        if (_this25._.state === "close") {
          throw new TypeError("Cannot " + methodName + " a context that is being closed or has already been closed.");
        }
        callback();
        resolve();
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.destination.toJSON([]);
    }
  }, {
    key: "$process",
    value: function $process(when) {
      this.__process((0, _toMicroseconds2.default)(when));
    }
  }, {
    key: "$processTo",
    value: function $processTo(when) {
      var time = (0, _toMicroseconds2.default)(when);

      if (this._.microCurrentTime < time) {
        this.__process(time - this._.microCurrentTime);
      }
    }
  }, {
    key: "$reset",
    value: function $reset() {
      this._.microCurrentTime = 0;
      this._.processedSamples = 0;
      this.destination.$inputs.forEach(function (junction) {
        junction.inputs.forEach(function (junction) {
          junction.disconnectAll();
        });
      });
    }
  }, {
    key: "__process",
    value: function __process(microseconds) {
      var nextMicroCurrentTime = this._.microCurrentTime + microseconds;

      while (this._.state === "running" && this._.microCurrentTime < nextMicroCurrentTime) {
        var microCurrentTime = Math.min(this._.microCurrentTime + 1000, nextMicroCurrentTime);
        var processedSamples = Math.floor(microCurrentTime / (1000 * 1000) * this.sampleRate);
        var inNumSamples = processedSamples - this._.processedSamples;

        this._.microCurrentTime = microCurrentTime;
        this._.processedSamples = processedSamples;

        this.destination.$process(inNumSamples, ++this._.tick);
      }
    }
  }, {
    key: "state",
    get: function get() {
      if (isEnabledState()) {
        return this._.state;
      }
    },
    set: function set(value) {
      if (!isEnabledState(value)) {
        return;
      }
      throw new TypeError(this.constructor.name + "; Attempt to assign to readonly property: \"state\"");
    }
  }, {
    key: "$name",
    get: function get() {
      return "AudioContext";
    }
  }, {
    key: "$context",
    get: function get() {
      return this;
    }
  }], [{
    key: "WEB_AUDIO_TEST_API_VERSION",
    get: function get() {
      return (0, _getAPIVersion2.default)();
    }
  }]);

  return AudioContext;
}(_EventTarget3.default), (_applyDecoratedDescriptor(_class.prototype, "destination", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "destination"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sampleRate", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "sampleRate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "currentTime", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "currentTime"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "listener", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "listener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onstatechange", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "onstatechange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "suspend", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "suspend"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resume", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "resume"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "close", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "close"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createBuffer", [_dec9, _dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class.prototype, "createBuffer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "decodeAudioData", [_dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class.prototype, "decodeAudioData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createBufferSource", [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, "createBufferSource"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createMediaElementSource", [_dec17, _dec18], Object.getOwnPropertyDescriptor(_class.prototype, "createMediaElementSource"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createMediaStreamSource", [_dec19, _dec20], Object.getOwnPropertyDescriptor(_class.prototype, "createMediaStreamSource"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createMediaStreamDestination", [_dec21], Object.getOwnPropertyDescriptor(_class.prototype, "createMediaStreamDestination"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createAudioWorker", [_dec22], Object.getOwnPropertyDescriptor(_class.prototype, "createAudioWorker"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createScriptProcessor", [_dec23, _dec24, _dec25, _dec26], Object.getOwnPropertyDescriptor(_class.prototype, "createScriptProcessor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createAnalyser", [_dec27], Object.getOwnPropertyDescriptor(_class.prototype, "createAnalyser"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createGain", [_dec28], Object.getOwnPropertyDescriptor(_class.prototype, "createGain"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createDelay", [_dec29, _dec30], Object.getOwnPropertyDescriptor(_class.prototype, "createDelay"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createBiquadFilter", [_dec31], Object.getOwnPropertyDescriptor(_class.prototype, "createBiquadFilter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createWaveShaper", [_dec32], Object.getOwnPropertyDescriptor(_class.prototype, "createWaveShaper"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createPanner", [_dec33], Object.getOwnPropertyDescriptor(_class.prototype, "createPanner"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createStereoPanner", [_dec34, _dec35], Object.getOwnPropertyDescriptor(_class.prototype, "createStereoPanner"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createConvolver", [_dec36], Object.getOwnPropertyDescriptor(_class.prototype, "createConvolver"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createChannelSplitter", [_dec37, _dec38], Object.getOwnPropertyDescriptor(_class.prototype, "createChannelSplitter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createChannelMerger", [_dec39, _dec40], Object.getOwnPropertyDescriptor(_class.prototype, "createChannelMerger"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createDynamicsCompressor", [_dec41], Object.getOwnPropertyDescriptor(_class.prototype, "createDynamicsCompressor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createOscillator", [_dec42], Object.getOwnPropertyDescriptor(_class.prototype, "createOscillator"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createPeriodicWave", [_dec43, _dec44, _dec45], Object.getOwnPropertyDescriptor(_class.prototype, "createPeriodicWave"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "__transitionToState", [_dec46], Object.getOwnPropertyDescriptor(_class.prototype, "__transitionToState"), _class.prototype)), _class));
exports.default = AudioContext;