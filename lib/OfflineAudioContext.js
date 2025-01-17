"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _class;

var _Configuration = require("./utils/Configuration");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _Immigration = require("./utils/Immigration");

var _Immigration2 = _interopRequireDefault(_Immigration);

var _Event = require("./dom/Event");

var _Event2 = _interopRequireDefault(_Event);

var _AudioContext2 = require("./AudioContext");

var _AudioContext3 = _interopRequireDefault(_AudioContext2);

var _AudioBuffer = require("./AudioBuffer");

var _AudioBuffer2 = _interopRequireDefault(_AudioBuffer);

var _OfflineAudioCompletionEvent = require("./OfflineAudioCompletionEvent");

var _OfflineAudioCompletionEvent2 = _interopRequireDefault(_OfflineAudioCompletionEvent);

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

var OfflineAudioContext = (_dec = methods.param("numberOfChannels", validators.isPositiveInteger), _dec2 = methods.param("length", validators.isPositiveInteger), _dec3 = methods.param("sampleRate", validators.isPositiveInteger), _dec4 = props.on("complete"), _dec5 = methods.contract({
  precondition: function precondition() {
    if (this._.rendering) {
      throw new TypeError("Cannot call startRendering more than once.");
    }
  }
}), _dec6 = methods.contract({
  precondition: function precondition(methodName) {
    if (configuration.getState("AudioContext#" + methodName) !== "enabled") {
      throw new TypeError("not enabled");
    }
  }
}), (_class = function (_AudioContext) {
  _inherits(OfflineAudioContext, _AudioContext);

  function OfflineAudioContext(numberOfChannels, length, sampleRate) {
    _classCallCheck(this, OfflineAudioContext);

    var _this = _possibleConstructorReturn(this, (OfflineAudioContext.__proto__ || Object.getPrototypeOf(OfflineAudioContext)).call(this));

    _this.__OfflineAudioContext(numberOfChannels, length, sampleRate);
    return _this;
  }

  _createClass(OfflineAudioContext, [{
    key: "__OfflineAudioContext",
    value: function __OfflineAudioContext(numberOfChannels, length, sampleRate) {
      this._.sampleRate = sampleRate;
      this._.numberOfChannels = numberOfChannels;
      this._.length = length;
      this._.rendering = false;
      this._.resolve = null;
      this._.state = "suspended";
    }
  }, {
    key: "oncomplete",
    value: function oncomplete() {}
  }, {
    key: "suspend",
    value: function suspend() {
      return this.__transitionToState("suspend");
    }
  }, {
    key: "resume",
    value: function resume() {
      return this.__transitionToState("resume");
    }
  }, {
    key: "close",
    value: function close() {
      return this.__transitionToState("close");
    }
  }, {
    key: "startRendering",
    value: function startRendering() {
      var _this2 = this;

      var isPromiseBased = configuration.getState("OfflineAudioContext#startRendering") === "promise";

      this._.rendering = true;

      if (isPromiseBased) {
        return new Promise(function (resolve) {
          _this2._.resolve = resolve;
          _this2._.state = "running";
          _this2.dispatchEvent(new _Event2.default("statechange", _this2));
        });
      }

      this._.state = "running";
      this.dispatchEvent(new _Event2.default("statechange", this));
    }
  }, {
    key: "__transitionToState",
    value: function __transitionToState(methodName) {
      return new Promise(function () {
        throw new TypeError("Cannot " + methodName + " on an OfflineAudioContext.");
      });
    }
  }, {
    key: "__process",
    value: function __process(microseconds) {
      var _this3 = this;

      if (!this._.rendering || this._.length <= this._.processedSamples) {
        return;
      }

      var nextMicroCurrentTime = this._.microCurrentTime + microseconds;

      while (this._.microCurrentTime < nextMicroCurrentTime) {
        var microCurrentTime = Math.min(this._.microCurrentTime + 1000, nextMicroCurrentTime);
        var processedSamples = Math.floor(microCurrentTime / (1000 * 1000) * this.sampleRate);
        var inNumSamples = processedSamples - this._.processedSamples;

        this.destination.$process(inNumSamples, ++this._.tick);

        this._.microCurrentTime = microCurrentTime;
        this._.processedSamples = processedSamples;

        if (this._.length <= this._.processedSamples) {
          break;
        }
      }

      if (this._.length <= this._.processedSamples) {
        var renderedBuffer = immigration.apply(function (admission) {
          return new _AudioBuffer2.default(admission, _this3, _this3._.numberOfChannels, _this3._.length, _this3.sampleRate);
        });
        var event = immigration.apply(function (admission) {
          return new _OfflineAudioCompletionEvent2.default(admission, _this3);
        });

        event.renderedBuffer = renderedBuffer;

        this._.state = "closed";

        this.dispatchEvent(event);
        if (this._.resolve !== null) {
          this._.resolve(renderedBuffer);
          this._.resolve = null;
        }

        this.dispatchEvent(new _Event2.default("statechange", this));
      }
    }
  }, {
    key: "$name",
    get: function get() {
      return "OfflineAudioContext";
    }
  }]);

  return OfflineAudioContext;
}(_AudioContext3.default), (_applyDecoratedDescriptor(_class.prototype, "__OfflineAudioContext", [_dec, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class.prototype, "__OfflineAudioContext"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "oncomplete", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "oncomplete"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "startRendering", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "startRendering"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "__transitionToState", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "__transitionToState"), _class.prototype)), _class));
exports.default = OfflineAudioContext;