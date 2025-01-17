"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = require("./api");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;

var Configuration = function () {
  function Configuration() {
    var _this = this;

    _classCallCheck(this, Configuration);

    this._states = {};
    Object.keys(_api2.default).forEach(function (key) {
      _this._states[key] = _api2.default[key].states[0];
    });
  }

  _createClass(Configuration, [{
    key: "getState",
    value: function getState(name) {
      if (!this._states.hasOwnProperty(name)) {
        throw new TypeError("invalid state name " + name);
      }
      return this._states[name];
    }
  }, {
    key: "setState",
    value: function setState(name, value) {
      var _this2 = this;

      if (name && (typeof name === "undefined" ? "undefined" : _typeof(name)) === "object") {
        var dict = name;

        Object.keys(dict).forEach(function (name) {
          _this2.setState(name, dict[name]);
        });
        return;
      }
      if (!this._states.hasOwnProperty(name)) {
        throw new TypeError("invalid state name " + name);
      }
      if (_api2.default[name].states.indexOf(value) === -1) {
        throw new TypeError("invalid state value " + value + " on " + name);
      }
      this._states[name] = value;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (instance === null) {
        instance = new Configuration();
      }
      return instance;
    }
  }]);

  return Configuration;
}();

exports.default = Configuration;