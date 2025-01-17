"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _class, _class2, _temp;

var _Immigration = require("./utils/Immigration");

var _Immigration2 = _interopRequireDefault(_Immigration);

var _AudioNode2 = require("./AudioNode");

var _AudioNode3 = _interopRequireDefault(_AudioNode2);

var _AudioBuffer = require("./AudioBuffer");

var _AudioBuffer2 = _interopRequireDefault(_AudioBuffer);

var _AudioProcessingEvent = require("./AudioProcessingEvent");

var _AudioProcessingEvent2 = _interopRequireDefault(_AudioProcessingEvent);

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

var immigration = _Immigration2.default.getInstance();

var ScriptProcessorNode = (_dec = methods.param("bufferSize", validators.isPositiveInteger), _dec2 = methods.param("numberOfInputChannels", validators.isPositiveInteger), _dec3 = methods.param("numberOfOutputChannels", validators.isPositiveInteger), _dec4 = methods.contract({
  precondition: function precondition(bufferSize) {
    if ([256, 512, 1024, 2048, 4096, 8192, 16384].indexOf(bufferSize) === -1) {
      throw new TypeError("The {{bufferSize}} should be one of [ 256, 512, 1024, 2048, 4096, 8192, 16384 ], but got " + bufferSize + ".");
    }
  }
}), _dec5 = props.readonly(), _dec6 = props.on("audioprocess"), (_class = (_temp = _class2 = function (_AudioNode) {
  _inherits(ScriptProcessorNode, _AudioNode);

  function ScriptProcessorNode(admission, context, bufferSize, numberOfInputChannels, numberOfOutputChannels) {
    _classCallCheck(this, ScriptProcessorNode);

    var _this = _possibleConstructorReturn(this, (ScriptProcessorNode.__proto__ || Object.getPrototypeOf(ScriptProcessorNode)).call(this, admission, {
      name: "ScriptProcessorNode",
      context: context,
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: numberOfInputChannels,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    }));

    _this.__createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
    return _this;
  }

  _createClass(ScriptProcessorNode, [{
    key: "__createScriptProcessor",
    value: function __createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels) {
      this._.bufferSize = bufferSize;
      this._.numberOfInputChannels = numberOfInputChannels;
      this._.numberOfOutputChannels = numberOfOutputChannels;
      this._.numSamples = 0;
    }
  }, {
    key: "bufferSize",
    value: function bufferSize() {
      return this._.bufferSize;
    }
  }, {
    key: "onaudioprocess",
    value: function onaudioprocess() {}
  }, {
    key: "__process",
    value: function __process(inNumSamples) {
      var _this2 = this;

      this._.numSamples -= inNumSamples;

      if (this._.numSamples <= 0) {
        this._.numSamples += this.bufferSize;

        var event = immigration.apply(function (admission) {
          return new _AudioProcessingEvent2.default(admission, _this2);
        });

        event.playbackTime = this.context.currentTime + this.bufferSize / this.context.sampleRate;
        event.inputBuffer = immigration.apply(function (admission) {
          return new _AudioBuffer2.default(admission, _this2.context, _this2._.numberOfInputChannels, _this2.bufferSize, _this2.context.sampleRate);
        });
        event.outputBuffer = immigration.apply(function (admission) {
          return new _AudioBuffer2.default(admission, _this2.context, _this2._.numberOfOutputChannels, _this2.bufferSize, _this2.context.sampleRate);
        });

        this.dispatchEvent(event);
      }
    }
  }]);

  return ScriptProcessorNode;
}(_AudioNode3.default), _class2.$JSONKeys = [], _temp), (_applyDecoratedDescriptor(_class.prototype, "__createScriptProcessor", [_dec, _dec2, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class.prototype, "__createScriptProcessor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bufferSize", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "bufferSize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onaudioprocess", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "onaudioprocess"), _class.prototype)), _class));
exports.default = ScriptProcessorNode;