"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _desc, _value, _class, _class2, _temp;

var _Configuration = require("./utils/Configuration");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _Immigration = require("./utils/Immigration");

var _Immigration2 = _interopRequireDefault(_Immigration);

var _Junction = require("./utils/Junction");

var _Junction2 = _interopRequireDefault(_Junction);

var _EventTarget2 = require("./dom/EventTarget");

var _EventTarget3 = _interopRequireDefault(_EventTarget2);

var _defaults = require("./utils/defaults");

var _defaults2 = _interopRequireDefault(_defaults);

var _toJSON2 = require("./utils/toJSON");

var _toJSON3 = _interopRequireDefault(_toJSON2);

var _toNodeName = require("./utils/toNodeName");

var _toNodeName2 = _interopRequireDefault(_toNodeName);

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

var AudioNode = (_dec = methods.contract({
  precondition: function precondition() {
    if (this._.context.state === "closed") {
      throw new TypeError("AudioContext has been closed");
    }
  }
}), _dec2 = props.readonly(), _dec3 = props.readonly(), _dec4 = props.readonly(), _dec5 = props.typed(validators.isPositiveInteger, 2), _dec6 = props.enums(["max", "clamped-max", "explicit"]), _dec7 = props.enums(["speakers", "discrete"]), _dec8 = methods.param("destination", validators.isAudioSource), _dec9 = methods.param("[ output ]", validators.isPositiveInteger), _dec10 = methods.param("[ input ]", validators.isPositiveInteger), _dec11 = methods.contract({
  precondition: function precondition(destination) {
    var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var input = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    if (this.$context !== destination.$context) {
      throw new TypeError("Cannot connect to a destination belonging to a different AudioContext.");
    }
    if (this.numberOfOutputs <= output) {
      throw new TypeError("The {{output}} index (" + output + ") exceeds number of outputs (" + this.numberOfOutputs + ").");
    }
    if ((destination.numberOfInputs || 1) <= input) {
      throw new TypeError("The {{input}} index (" + input + ") exceeds number of inputs (" + destination.numberOfInputs + ").");
    }
  }
}), _dec12 = methods.param("output", validators.isPositiveInteger), _dec13 = methods.contract({
  precondition: function precondition(output) {
    if (this.numberOfOutputs <= output) {
      throw new TypeError("The {{output}} index (" + output + ") exceeds number of outputs (" + this.numberOfOutputs + ").");
    }
  }
}), _dec14 = methods.param("destination", validators.isAudioSource), _dec15 = methods.contract({
  precondition: function precondition(destination) {
    if (!this._.outputs.some(function (junction) {
      return junction.isConnected(destination);
    })) {
      throw new TypeError("The given {{destination}} is not connected.");
    }
  }
}), _dec16 = methods.param("destination", validators.isAudioSource), _dec17 = methods.param("output", validators.isPositiveInteger), _dec18 = methods.contract({
  precondition: function precondition(destination, output) {
    if (!this._.outputs.some(function (junction) {
      return junction.isConnected(destination);
    })) {
      throw new TypeError("The given {{destination}} is not connected.");
    }
    if (this.numberOfOutputs <= output) {
      throw new TypeError("The {{output}} provided (" + output + ") is outside the range [0, " + this.numberOfOutputs + ").");
    }
  }
}), _dec19 = methods.param("destination", validators.isAudioSource), _dec20 = methods.param("output", validators.isPositiveInteger), _dec21 = methods.param("input", validators.isPositiveInteger), _dec22 = methods.contract({
  precondition: function precondition(destination, output, input) {
    if (!this._.outputs.some(function (junction) {
      return junction.isConnected(destination);
    })) {
      throw new TypeError("The given {{destination}} is not connected.");
    }
    if (output < 0 || this.numberOfOutputs <= output) {
      throw new TypeError("The {{output}} provided (" + output + ") is outside the range [0, " + this.numberOfOutputs + ").");
    }
    if (input < 0 || destination.numberOfInputs <= input) {
      throw new TypeError("The {{input}} provided (" + input + ") is outside the range [0, " + this.numberOfInputs + ").");
    }
  }
}), (_class = (_temp = _class2 = function (_EventTarget) {
  _inherits(AudioNode, _EventTarget);

  function AudioNode(admission, spec) {
    _classCallCheck(this, AudioNode);

    immigration.check(admission, function () {
      throw new TypeError("Illegal constructor");
    });

    var _this = _possibleConstructorReturn(this, (AudioNode.__proto__ || Object.getPrototypeOf(AudioNode)).call(this));

    Object.defineProperty(_this, "_", { value: {} });

    _this._.context = spec.context;
    _this.__createAudioNode(spec);
    return _this;
  }

  _createClass(AudioNode, [{
    key: "__createAudioNode",
    value: function __createAudioNode(spec) {
      var _this2 = this;

      this._.name = (0, _defaults2.default)(spec.name, "AudioNode");
      this._.numberOfInputs = (0, _defaults2.default)(spec.numberOfInputs, 1);
      this._.numberOfOutputs = (0, _defaults2.default)(spec.numberOfOutputs, 1);
      this._.channelCount = (0, _defaults2.default)(spec.channelCount, 2);
      this._.channelCountMode = (0, _defaults2.default)(spec.channelCountMode, "max");
      this._.channelInterpretation = (0, _defaults2.default)(spec.channelInterpretation, "speakers");
      this._.inputs = new Array(this._.numberOfInputs).fill().map(function (i) {
        return new _Junction2.default(_this2, i);
      });
      this._.outputs = new Array(this._.numberOfOutputs).fill().map(function (i) {
        return new _Junction2.default(_this2, i);
      });
      this._.tick = -1;
    }
  }, {
    key: "context",
    value: function context() {
      return this._.context;
    }
  }, {
    key: "numberOfInputs",
    value: function numberOfInputs() {
      return this._.numberOfInputs;
    }
  }, {
    key: "numberOfOutputs",
    value: function numberOfOutputs() {
      return this._.numberOfOutputs;
    }
  }, {
    key: "channelCount",
    value: function channelCount() {}
  }, {
    key: "channelCountMode",
    value: function channelCountMode() {}
  }, {
    key: "channelInterpretation",
    value: function channelInterpretation() {}
  }, {
    key: "connect",
    value: function connect(destination) {
      var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var input = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this._.outputs[output].connect(destination.$inputs[input]);
    }
  }, {
    key: "disconnect",
    value: function disconnect(destination, output, input) {
      if (configuration.getState("AudioNode#disconnect") !== "selective") {
        return this.__disconnect$$Channel((0, _defaults2.default)(destination, 0));
      }

      switch (arguments.length) {
        case 0:
          return this.__disconnect$$All();
        case 1:
          if (typeof destination === "number") {
            return this.__disconnect$$Channel(destination);
          }
          return this.__disconnect$$Selective1(destination);
        case 2:
          return this.__disconnect$$Selective2(destination, output);
        case 3:
          return this.__disconnect$$Selective3(destination, output, input);
        default:
        // no default
      }
    }
  }, {
    key: "__disconnect$$All",
    value: function __disconnect$$All() {
      this._.outputs.forEach(function (junction) {
        junction.disconnectAll();
      });
    }
  }, {
    key: "__disconnect$$Channel",
    value: function __disconnect$$Channel(output) {
      this._.outputs[output].disconnectAll();
    }
  }, {
    key: "__disconnect$$Selective1",
    value: function __disconnect$$Selective1(destination) {
      this._.outputs.forEach(function (junction) {
        junction.disconnectNode(destination);
      });
    }
  }, {
    key: "__disconnect$$Selective2",
    value: function __disconnect$$Selective2(destination, output) {
      this._.outputs[output].disconnectNode(destination);
    }
  }, {
    key: "__disconnect$$Selective3",
    value: function __disconnect$$Selective3(destination, output, input) {
      this._.outputs[output].disconnectChannel(destination, input);
    }
  }, {
    key: "toJSON",
    value: function toJSON(memo) {
      function __toJSON(obj, memo) {
        if (obj && typeof obj.toJSON === "function") {
          return obj.toJSON(memo);
        }
        return obj;
      }

      return (0, _toJSON3.default)(this, function (node, memo) {
        var json = {};

        json.name = (0, _toNodeName2.default)(node);

        node.constructor.$JSONKeys.forEach(function (key) {
          json[key] = __toJSON(node[key], memo);
        });

        if (node.$context.VERBOSE_JSON) {
          json.numberOfInputs = node.numberOfInputs;
          json.numberOfOutputs = node.numberOfOutputs;
          json.channelCount = node.channelCount;
          json.channelCountMode = node.channelCountMode;
          json.channelInterpretation = node.channelInterpretation;
        }

        if (node.$inputs.length === 1) {
          json.inputs = node.$inputs[0].toJSON(memo);
        } else {
          json.inputs = node.$inputs.map(function (junction) {
            return junction.toJSON(memo);
          });
        }

        return json;
      }, memo);
    }
  }, {
    key: "$process",
    value: function $process(inNumSamples, tick) {
      var _this3 = this;

      if (this._.tick !== tick) {
        this._.tick = tick;
        this.$inputs.forEach(function (junction) {
          junction.process(inNumSamples, tick);
        });
        Object.keys(this._).forEach(function (key) {
          if (_this3[key] instanceof global.AudioParam) {
            _this3[key].$process(inNumSamples, tick);
          }
        });
        if (this.__process) {
          this.__process(inNumSamples);
        }
      }
    }
  }, {
    key: "$isConnectedTo",
    value: function $isConnectedTo(destination) {
      var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var input = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!(destination instanceof global.AudioNode) && !(destination instanceof global.AudioParam)) {
        return false;
      }

      var outputJunction = this._.outputs[output];
      var inputJunction = destination._.inputs[input];

      if (!outputJunction || !inputJunction) {
        return false;
      }

      return outputJunction.outputs.some(function (junction) {
        return junction === inputJunction;
      });
    }
  }, {
    key: "$isConnectedFrom",
    value: function $isConnectedFrom(destination) {
      var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var input = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!(destination instanceof global.AudioNode)) {
        return false;
      }

      var outputJunction = destination._.outputs[output];
      var inputJunction = this._.inputs[input];

      if (!outputJunction || !inputJunction) {
        return false;
      }

      return inputJunction.inputs.some(function (junction) {
        return junction === outputJunction;
      });
    }
  }, {
    key: "$name",
    get: function get() {
      return this._.name;
    }
  }, {
    key: "$context",
    get: function get() {
      return this._.context;
    }
  }, {
    key: "$inputs",
    get: function get() {
      // TODO: remove v0.4.0
      if (this._.inputs.length === 0) {
        return [new _Junction2.default(this, 0)];
      }
      return this._.inputs;
    }
  }]);

  return AudioNode;
}(_EventTarget3.default), _class2.$JSONKeys = [], _temp), (_applyDecoratedDescriptor(_class.prototype, "__createAudioNode", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "__createAudioNode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "context", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "context"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "numberOfInputs", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "numberOfInputs"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "numberOfOutputs", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "numberOfOutputs"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "channelCount", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "channelCount"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "channelCountMode", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "channelCountMode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "channelInterpretation", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "channelInterpretation"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "connect", [_dec8, _dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class.prototype, "connect"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "__disconnect$$Channel", [_dec12, _dec13], Object.getOwnPropertyDescriptor(_class.prototype, "__disconnect$$Channel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "__disconnect$$Selective1", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class.prototype, "__disconnect$$Selective1"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "__disconnect$$Selective2", [_dec16, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class.prototype, "__disconnect$$Selective2"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "__disconnect$$Selective3", [_dec19, _dec20, _dec21, _dec22], Object.getOwnPropertyDescriptor(_class.prototype, "__disconnect$$Selective3"), _class.prototype)), _class));
exports.default = AudioNode;