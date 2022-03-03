"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _desc, _value, _class;

var _Immigration = require("./utils/Immigration");

var _Immigration2 = _interopRequireDefault(_Immigration);

var _Junction = require("./utils/Junction");

var _Junction2 = _interopRequireDefault(_Junction);

var _defaults = require("./utils/defaults");

var _defaults2 = _interopRequireDefault(_defaults);

var _toJSON2 = require("./utils/toJSON");

var _toJSON3 = _interopRequireDefault(_toJSON2);

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

var immigration = _Immigration2.default.getInstance();

var AudioParam = (_dec = props.typed(validators.isNumber, 0), _dec2 = props.readonly(), _dec3 = props.readonly(), _dec4 = methods.param("value", validators.isNumber), _dec5 = methods.param("startTime", validators.isNumber), _dec6 = methods.param("value", validators.isNumber), _dec7 = methods.param("endTime", validators.isNumber), _dec8 = methods.param("value", validators.isNumber), _dec9 = methods.param("endTime", validators.isNumber), _dec10 = methods.param("value", validators.isNumber), _dec11 = methods.param("endTime", validators.isNumber), _dec12 = methods.param("timeConstant", validators.isNumber), _dec13 = methods.param("values", validators.isInstanceOf(Float32Array)), _dec14 = methods.param("startTime", validators.isNumber), _dec15 = methods.param("duration", validators.isNumber), _dec16 = methods.param("startTime", validators.isNumber), (_class = function () {
  function AudioParam(admission, node, name, defaultValue) {
    _classCallCheck(this, AudioParam);

    immigration.check(admission, function () {
      throw new TypeError("Illegal constructor");
    });
    Object.defineProperty(this, "_", { value: {} });

    this._.value = defaultValue;
    this._.name = name;
    this._.defaultValue = defaultValue;
    this._.context = node.context;
    this._.node = node;
    this._.inputs = [new _Junction2.default(this, 0)];
    this._.events = [];
    this._.tick = -1;
  }

  _createClass(AudioParam, [{
    key: "name",
    value: function name() {
      return this._.name;
    }
  }, {
    key: "defaultValue",
    value: function defaultValue() {
      return this._.defaultValue;
    }
  }, {
    key: "setValueAtTime",
    value: function setValueAtTime(value, startTime) {
      this.__insertEvent({ type: "SetValue", value: value, time: startTime });
    }
  }, {
    key: "linearRampToValueAtTime",
    value: function linearRampToValueAtTime(value, endTime) {
      this.__insertEvent({ type: "LinearRampToValue", value: value, time: endTime });
    }
  }, {
    key: "exponentialRampToValueAtTime",
    value: function exponentialRampToValueAtTime(value, endTime) {
      this.__insertEvent({ type: "ExponentialRampToValue", value: value, time: endTime });
    }
  }, {
    key: "setTargetAtTime",
    value: function setTargetAtTime(target, startTime, timeConstant) {
      this.__insertEvent({ type: "SetTarget", value: target, time: startTime, timeConstant: timeConstant });
    }
  }, {
    key: "setValueCurveAtTime",
    value: function setValueCurveAtTime(values, startTime, duration) {
      this.__insertEvent({ type: "SetValueCurve", time: startTime, duration: duration, curve: values });
    }
  }, {
    key: "cancelScheduledValues",
    value: function cancelScheduledValues(startTime) {
      var events = this.$events;

      for (var i = 0, imax = events.length; i < imax; ++i) {
        if (events[i].time >= startTime) {
          return events.splice(i);
        }
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON(memo) {
      return (0, _toJSON3.default)(this, function (node, memo) {
        var json = {};

        json.value = node.value;
        json.inputs = node.$inputs[0].toJSON(memo);

        return json;
      }, memo);
    }
  }, {
    key: "$valueAtTime",
    value: function $valueAtTime(when) {
      var time = (0, _toSeconds2.default)(when);
      var value = this._.value;
      var events = this.$events;
      var t0 = void 0;

      for (var i = 0; i < events.length; i++) {
        var e0 = events[i];
        var e1 = events[i + 1];

        if (time < e0.time) {
          break;
        }
        t0 = Math.min(time, e1 ? e1.time : time);

        if (e1 && e1.type === "LinearRampToValue") {
          value = AudioParam.$linearRampToValueAtTime(value, e0.value, e1.value, t0, e0.time, e1.time);
        } else if (e1 && e1.type === "ExponentialRampToValue") {
          value = AudioParam.$exponentialRampToValueAtTime(value, e0.value, e1.value, t0, e0.time, e1.time);
        } else {
          switch (e0.type) {
            case "SetValue":
            case "LinearRampToValue":
            case "ExponentialRampToValue":
              value = e0.value;
              break;
            case "SetTarget":
              value = AudioParam.$setTargetAtTime(value, e0.value, t0, e0.time, e0.timeConstant);
              break;
            case "SetValueCurve":
              value = AudioParam.$setValueCurveAtTime(value, t0, e0.time, e0.time + e0.duration, e0.curve);
              break;
            default:
            // no default
          }
        }
      }

      return value;
    }
  }, {
    key: "$process",
    value: function $process(inNumSamples, tick) {
      if (this._.tick !== tick) {
        this._.tick = tick;
        this.$inputs[0].process(inNumSamples, tick);
      }
    }
  }, {
    key: "$isConnectedFrom",
    value: function $isConnectedFrom(destination) {
      var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!(destination instanceof global.AudioNode)) {
        return false;
      }

      var outputJunction = destination._.outputs[output];
      var inputJunction = this._.inputs[0];

      if (!outputJunction || !inputJunction) {
        return false;
      }

      return inputJunction.inputs.some(function (junction) {
        return junction === outputJunction;
      });
    }
  }, {
    key: "__insertEvent",
    value: function __insertEvent(event) {
      var time = event.time;
      var events = this.$events;
      var replace = 0;
      var i = void 0,
          imax = events.length;

      for (i = 0; i < imax; ++i) {
        if (events[i].time === time && events[i].type === event.type) {
          replace = 1;
          break;
        }

        if (events[i].time > time) {
          break;
        }
      }

      events.splice(i, replace, event);
    }
  }, {
    key: "value",
    get: function get() {
      this._.value = this.$valueAtTime(this.$context.currentTime);
      return this._.value;
    }
  }, {
    key: "$name",
    get: function get() {
      return "AudioParam";
    }
  }, {
    key: "$context",
    get: function get() {
      return this._.context;
    }
  }, {
    key: "$node",
    get: function get() {
      return this._.node;
    }
  }, {
    key: "$inputs",
    get: function get() {
      return this._.inputs;
    }
  }, {
    key: "$events",
    get: function get() {
      return this._.events;
    }
  }], [{
    key: "$linearRampToValueAtTime",
    value: function $linearRampToValueAtTime(v, v0, v1, t, t0, t1) {
      if (t <= t0) {
        return v0;
      }
      if (t1 <= t) {
        return v1;
      }
      var dt = (t - t0) / (t1 - t0);

      return (1 - dt) * v0 + dt * v1;
    }
  }, {
    key: "$exponentialRampToValueAtTime",
    value: function $exponentialRampToValueAtTime(v, v0, v1, t, t0, t1) {
      if (t <= t0) {
        return v0;
      }
      if (t1 <= t) {
        return v1;
      }
      if (v0 === v1) {
        return v0;
      }

      var dt = (t - t0) / (t1 - t0);

      if (0 < v0 && 0 < v1 || v0 < 0 && v1 < 0) {
        return v0 * Math.pow(v1 / v0, dt);
      }

      return v;
    }
  }, {
    key: "$setTargetAtTime",
    value: function $setTargetAtTime(v0, v1, t, t0, tau) {
      if (t <= t0) {
        return v0;
      }
      return v1 + (v0 - v1) * Math.exp((t0 - t) / tau);
    }
  }, {
    key: "$setValueCurveAtTime",
    value: function $setValueCurveAtTime(v, t, t0, t1, curve) {
      var dt = (t - t0) / (t1 - t0);

      if (dt <= 0) {
        return (0, _defaults2.default)(curve[0], v);
      }

      if (1 <= dt) {
        return (0, _defaults2.default)(curve[curve.length - 1], v);
      }

      return (0, _defaults2.default)(curve[curve.length * dt | 0], v);
    }
  }]);

  return AudioParam;
}(), (_applyDecoratedDescriptor(_class.prototype, "value", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "value"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "name", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "name"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "defaultValue", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "defaultValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setValueAtTime", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class.prototype, "setValueAtTime"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "linearRampToValueAtTime", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class.prototype, "linearRampToValueAtTime"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "exponentialRampToValueAtTime", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class.prototype, "exponentialRampToValueAtTime"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setTargetAtTime", [_dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class.prototype, "setTargetAtTime"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setValueCurveAtTime", [_dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class.prototype, "setValueCurveAtTime"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancelScheduledValues", [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, "cancelScheduledValues"), _class.prototype)), _class));
exports.default = AudioParam;