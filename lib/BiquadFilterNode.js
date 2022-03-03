"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _desc, _value, _class, _class2, _temp;

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

var BiquadFilterNode = (_dec = props.enums(["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"]), _dec2 = props.audioparam(350), _dec3 = props.audioparam(0), _dec4 = props.audioparam(1), _dec5 = props.audioparam(0), _dec6 = methods.param("frequencyHz", validators.isInstanceOf(Float32Array)), _dec7 = methods.param("magResponse", validators.isInstanceOf(Float32Array)), _dec8 = methods.param("phaseResponse", validators.isInstanceOf(Float32Array)), (_class = (_temp = _class2 = function (_AudioNode) {
  _inherits(BiquadFilterNode, _AudioNode);

  function BiquadFilterNode(admission, context) {
    _classCallCheck(this, BiquadFilterNode);

    return _possibleConstructorReturn(this, (BiquadFilterNode.__proto__ || Object.getPrototypeOf(BiquadFilterNode)).call(this, admission, {
      name: "BiquadFilterNode",
      context: context,
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    }));
  }

  _createClass(BiquadFilterNode, [{
    key: "type",
    value: function type() {}
  }, {
    key: "frequency",
    value: function frequency() {}
  }, {
    key: "detune",
    value: function detune() {}
  }, {
    key: "Q",
    value: function Q() {}
  }, {
    key: "gain",
    value: function gain() {}
  }, {
    key: "getFrequencyResponse",
    value: function getFrequencyResponse() {}
  }]);

  return BiquadFilterNode;
}(_AudioNode3.default), _class2.$JSONKeys = ["type", "frequency", "detune", "Q", "gain"], _temp), (_applyDecoratedDescriptor(_class.prototype, "type", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "type"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "frequency", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "frequency"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "detune", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "detune"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "Q", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "Q"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "gain", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "gain"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getFrequencyResponse", [_dec6, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class.prototype, "getFrequencyResponse"), _class.prototype)), _class));
exports.default = BiquadFilterNode;