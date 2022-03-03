"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _desc, _value, _class, _class2, _temp;

var _Configuration = require("./utils/Configuration");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _AudioNode2 = require("./AudioNode");

var _AudioNode3 = _interopRequireDefault(_AudioNode2);

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

var AnalyserNode = (_dec = props.enums([32, 64, 128, 256, 512, 1024, 2048]), _dec2 = props.readonly(), _dec3 = props.typed(validators.isNumber, -100), _dec4 = props.typed(validators.isNumber, 30), _dec5 = props.typed(validators.isNumber, 0.8), _dec6 = methods.param("array", validators.isInstanceOf(Float32Array)), _dec7 = methods.param("array", validators.isInstanceOf(Uint8Array)), _dec8 = methods.param("array", validators.isInstanceOf(Float32Array)), _dec9 = methods.contract({
  precondition: function precondition() {
    if (configuration.getState("AnalyserNode#getFloatTimeDomainData") !== "enabled") {
      throw new TypeError("not enabled");
    }
  }
}), _dec10 = methods.param("array", validators.isInstanceOf(Uint8Array)), (_class = (_temp = _class2 = function (_AudioNode) {
  _inherits(AnalyserNode, _AudioNode);

  function AnalyserNode(admission, context) {
    _classCallCheck(this, AnalyserNode);

    var _this = _possibleConstructorReturn(this, (AnalyserNode.__proto__ || Object.getPrototypeOf(AnalyserNode)).call(this, admission, {
      name: "AnalyserNode",
      context: context,
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "speakers"
    }));

    _this._.fftSize = 2048;
    return _this;
  }

  _createClass(AnalyserNode, [{
    key: "fftSize",
    value: function fftSize() {}
  }, {
    key: "frequencyBinCount",
    value: function frequencyBinCount() {
      return this.fftSize >> 1;
    }
  }, {
    key: "minDecibels",
    value: function minDecibels() {}
  }, {
    key: "maxDecibels",
    value: function maxDecibels() {}
  }, {
    key: "smoothingTimeConstant",
    value: function smoothingTimeConstant() {}
  }, {
    key: "getFloatFrequencyData",
    value: function getFloatFrequencyData() {}
  }, {
    key: "getByteFrequencyData",
    value: function getByteFrequencyData() {}
  }, {
    key: "getFloatTimeDomainData",
    value: function getFloatTimeDomainData() {}
  }, {
    key: "getByteTimeDomainData",
    value: function getByteTimeDomainData() {}
  }]);

  return AnalyserNode;
}(_AudioNode3.default), _class2.$JSONKeys = ["fftSize", "minDecibels", "maxDecibels", "smoothingTimeConstant"], _temp), (_applyDecoratedDescriptor(_class.prototype, "fftSize", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "fftSize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "frequencyBinCount", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "frequencyBinCount"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "minDecibels", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "minDecibels"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "maxDecibels", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "maxDecibels"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "smoothingTimeConstant", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "smoothingTimeConstant"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getFloatFrequencyData", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "getFloatFrequencyData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getByteFrequencyData", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "getByteFrequencyData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getFloatTimeDomainData", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class.prototype, "getFloatTimeDomainData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getByteTimeDomainData", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "getByteTimeDomainData"), _class.prototype)), _class));
exports.default = AnalyserNode;