"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class;

var _Immigration = require("./utils/Immigration");

var _Immigration2 = _interopRequireDefault(_Immigration);

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

var PeriodicWave = (_dec = methods.param("real", validators.isInstanceOf(Float32Array)), _dec2 = methods.param("imag", validators.isInstanceOf(Float32Array)), _dec3 = methods.contract({
  precondition: function precondition(real, imag) {
    if (4096 < real.length) {
      throw new TypeError("The length of \"{{real}}\" array (" + real.length + ") exceeds allow maximum of 4096.");
    }
    if (4096 < imag.length) {
      throw new TypeError("The length of \"{{imag}}\" array (" + imag.length + ") exceeds allow maximum of 4096.");
    }
    if (real.length !== imag.length) {
      throw new TypeError("The length of \"{{real}}\" array (" + real.length + ") and length of \"imag\" array (" + imag.length + ") must match.");
    }
  }
}), (_class = function () {
  function PeriodicWave(admission, context, real, imag) {
    _classCallCheck(this, PeriodicWave);

    immigration.check(admission, function () {
      throw new TypeError("Illegal constructor");
    });
    Object.defineProperty(this, "_", { value: {} });

    this._.context = context;
    this.__createPeriodicWave(real, imag);
  }

  _createClass(PeriodicWave, [{
    key: "__createPeriodicWave",
    value: function __createPeriodicWave(real, imag) {
      this._.real = real;
      this._.imag = imag;
    }
  }, {
    key: "$name",
    get: function get() {
      return "PeriodicWave";
    }
  }, {
    key: "$context",
    get: function get() {
      return this._.context;
    }
  }, {
    key: "$real",
    get: function get() {
      return this._.real;
    }
  }, {
    key: "$imag",
    get: function get() {
      return this._.imag;
    }
  }]);

  return PeriodicWave;
}(), (_applyDecoratedDescriptor(_class.prototype, "__createPeriodicWave", [_dec, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class.prototype, "__createPeriodicWave"), _class.prototype)), _class));
exports.default = PeriodicWave;