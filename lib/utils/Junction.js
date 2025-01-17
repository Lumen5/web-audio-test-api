"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _appendIfNotExists = require("./appendIfNotExists");

var _appendIfNotExists2 = _interopRequireDefault(_appendIfNotExists);

var _removeIfExists = require("./removeIfExists");

var _removeIfExists2 = _interopRequireDefault(_removeIfExists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Junction = function () {
  function Junction(node, index) {
    _classCallCheck(this, Junction);

    this.node = node;
    this.index = index;
    this.inputs = [];
    this.outputs = [];
  }

  _createClass(Junction, [{
    key: "connect",
    value: function connect(destination) {
      (0, _appendIfNotExists2.default)(this.outputs, destination);
      (0, _appendIfNotExists2.default)(destination.inputs, this);
    }
  }, {
    key: "disconnectAll",
    value: function disconnectAll() {
      var _this = this;

      this.outputs.splice(0).forEach(function (destination) {
        (0, _removeIfExists2.default)(destination.inputs, _this);
      });
    }
  }, {
    key: "disconnectNode",
    value: function disconnectNode(node) {
      for (var i = this.outputs.length - 1; i >= 0; i--) {
        var destination = this.outputs[i];

        if (destination.node === node) {
          this.outputs.splice(i, 1);
          (0, _removeIfExists2.default)(destination.inputs, this);
        }
      }
    }
  }, {
    key: "disconnectChannel",
    value: function disconnectChannel(node, input) {
      for (var i = this.outputs.length - 1; i >= 0; i--) {
        var destination = this.outputs[i];

        if (destination.node === node && destination.index === input) {
          this.outputs.splice(i, 1);
          (0, _removeIfExists2.default)(destination.inputs, this);
        }
      }
    }
  }, {
    key: "isConnected",
    value: function isConnected(destination) {
      return this.outputs.some(function (junction) {
        return junction.node === destination;
      });
    }
  }, {
    key: "process",
    value: function process(inNumSamples, tick) {
      this.inputs.forEach(function (junction) {
        junction.node.$process(inNumSamples, tick);
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON(memo) {
      return this.inputs.map(function (junction) {
        return junction.node.toJSON(memo);
      });
    }
  }]);

  return Junction;
}();

exports.default = Junction;