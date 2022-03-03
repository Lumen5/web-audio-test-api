"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _desc, _value, _class;

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

var immigration = _Immigration2.default.getInstance();

var AudioListener = (_dec = props.typed(validators.isNumber, 1), _dec2 = props.typed(validators.isNumber, 343.3), _dec3 = methods.param("x", validators.isNumber), _dec4 = methods.param("y", validators.isNumber), _dec5 = methods.param("z", validators.isNumber), _dec6 = methods.param("x", validators.isNumber), _dec7 = methods.param("y", validators.isNumber), _dec8 = methods.param("z", validators.isNumber), _dec9 = methods.param("xUp", validators.isNumber), _dec10 = methods.param("yUp", validators.isNumber), _dec11 = methods.param("zUp", validators.isNumber), _dec12 = methods.param("x", validators.isNumber), _dec13 = methods.param("y", validators.isNumber), _dec14 = methods.param("z", validators.isNumber), (_class = function () {
  function AudioListener(admission, context) {
    _classCallCheck(this, AudioListener);

    immigration.check(admission, function () {
      throw new TypeError("Illegal constructor");
    });
    Object.defineProperty(this, "_", { value: {} });

    this._.context = context;
  }

  _createClass(AudioListener, [{
    key: "dopplerFactor",
    value: function dopplerFactor() {}
  }, {
    key: "speedOfSound",
    value: function speedOfSound() {}
  }, {
    key: "setPosition",
    value: function setPosition() {}
  }, {
    key: "setOrientation",
    value: function setOrientation() {}
  }, {
    key: "setVelocity",
    value: function setVelocity() {}
  }, {
    key: "$name",
    get: function get() {
      return "AudioListener";
    }
  }, {
    key: "$context",
    get: function get() {
      return this._.context;
    }
  }]);

  return AudioListener;
}(), (_applyDecoratedDescriptor(_class.prototype, "dopplerFactor", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "dopplerFactor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "speedOfSound", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "speedOfSound"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setPosition", [_dec3, _dec4, _dec5], Object.getOwnPropertyDescriptor(_class.prototype, "setPosition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setOrientation", [_dec6, _dec7, _dec8, _dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class.prototype, "setOrientation"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setVelocity", [_dec12, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class.prototype, "setVelocity"), _class.prototype)), _class));
exports.default = AudioListener;