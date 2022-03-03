"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _desc, _value, _class, _class2, _temp;

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

var PannerNode = (_dec = props.enums(["HRTF", "equalpower"]), _dec2 = props.enums(["inverse", "linear", "exponential"]), _dec3 = props.typed(validators.isNumber, 1), _dec4 = props.typed(validators.isNumber, 10000), _dec5 = props.typed(validators.isNumber, 1), _dec6 = props.typed(validators.isNumber, 360), _dec7 = props.typed(validators.isNumber, 360), _dec8 = props.typed(validators.isNumber, 0), _dec9 = methods.param("x", validators.isNumber), _dec10 = methods.param("y", validators.isNumber), _dec11 = methods.param("z", validators.isNumber), _dec12 = methods.param("x", validators.isNumber), _dec13 = methods.param("y", validators.isNumber), _dec14 = methods.param("z", validators.isNumber), _dec15 = methods.param("x", validators.isNumber), _dec16 = methods.param("y", validators.isNumber), _dec17 = methods.param("z", validators.isNumber), (_class = (_temp = _class2 = function (_AudioNode) {
  _inherits(PannerNode, _AudioNode);

  function PannerNode(admission, context) {
    _classCallCheck(this, PannerNode);

    return _possibleConstructorReturn(this, (PannerNode.__proto__ || Object.getPrototypeOf(PannerNode)).call(this, admission, {
      name: "PannerNode",
      context: context,
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 2,
      channelCountMode: "clamped-max",
      channelInterpretation: "speakers"
    }));
  }

  _createClass(PannerNode, [{
    key: "panningModel",
    value: function panningModel() {}
  }, {
    key: "distanceModel",
    value: function distanceModel() {}
  }, {
    key: "refDistance",
    value: function refDistance() {}
  }, {
    key: "maxDistance",
    value: function maxDistance() {}
  }, {
    key: "rolloffFactor",
    value: function rolloffFactor() {}
  }, {
    key: "coneInnerAngle",
    value: function coneInnerAngle() {}
  }, {
    key: "coneOuterAngle",
    value: function coneOuterAngle() {}
  }, {
    key: "coneOuterGain",
    value: function coneOuterGain() {}
  }, {
    key: "setPosition",
    value: function setPosition() {}
  }, {
    key: "setOrientation",
    value: function setOrientation() {}
  }, {
    key: "setVelocity",
    value: function setVelocity() {}
  }]);

  return PannerNode;
}(_AudioNode3.default), _class2.$JSONKeys = ["panningModel", "distanceModel", "refDistance", "maxDistance", "rolloffFactor", "coneInnerAngle", "coneOuterAngle", "coneOuterGain"], _temp), (_applyDecoratedDescriptor(_class.prototype, "panningModel", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "panningModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "distanceModel", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "distanceModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "refDistance", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "refDistance"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "maxDistance", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "maxDistance"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "rolloffFactor", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "rolloffFactor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "coneInnerAngle", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "coneInnerAngle"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "coneOuterAngle", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "coneOuterAngle"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "coneOuterGain", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "coneOuterGain"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setPosition", [_dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class.prototype, "setPosition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setOrientation", [_dec12, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class.prototype, "setOrientation"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setVelocity", [_dec15, _dec16, _dec17], Object.getOwnPropertyDescriptor(_class.prototype, "setVelocity"), _class.prototype)), _class));
exports.default = PannerNode;