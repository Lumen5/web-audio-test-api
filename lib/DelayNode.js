"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class, _class2, _temp;

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

var DelayNode = (_dec = methods.param("maxDelayTime", validators.isPositiveNumber), _dec2 = props.audioparam(0), (_class = (_temp = _class2 = function (_AudioNode) {
  _inherits(DelayNode, _AudioNode);

  function DelayNode(admission, context, maxDelayTime) {
    _classCallCheck(this, DelayNode);

    var _this = _possibleConstructorReturn(this, (DelayNode.__proto__ || Object.getPrototypeOf(DelayNode)).call(this, admission, {
      name: "DelayNode",
      context: context,
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    }));

    _this.__createDelay(maxDelayTime);
    return _this;
  }

  _createClass(DelayNode, [{
    key: "__createDelay",
    value: function __createDelay(maxDelayTime) {
      this._.maxDelayTime = maxDelayTime;
    }
  }, {
    key: "delayTime",
    value: function delayTime() {}
  }, {
    key: "$maxDelayTime",
    get: function get() {
      return this._.maxDelayTime;
    }
  }]);

  return DelayNode;
}(_AudioNode3.default), _class2.$JSONKeys = ["delayTime"], _temp), (_applyDecoratedDescriptor(_class.prototype, "__createDelay", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "__createDelay"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "delayTime", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "delayTime"), _class.prototype)), _class));
exports.default = DelayNode;