"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;

var Immigration = function () {
  function Immigration() {
    _classCallCheck(this, Immigration);

    this._admissions = [];
  }

  _createClass(Immigration, [{
    key: "apply",
    value: function apply(fn) {
      var admission1 = { token: {}, count: 0 };

      this._admissions.push(admission1);

      var result = fn(admission1.token);

      var admission2 = this._admissions.pop();

      if (admission1 !== admission2 || admission2.count !== 1) {
        throw new Error("invalid admission");
      }

      return result;
    }
  }, {
    key: "check",
    value: function check(token, errorCallback) {
      var lastAdmission = this._admissions.pop();

      if (!lastAdmission || lastAdmission.token !== token || lastAdmission.count++ !== 0) {
        errorCallback();
      }

      this._admissions.push(lastAdmission);
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (instance === null) {
        instance = new Immigration();
      }
      return instance;
    }
  }]);

  return Immigration;
}();

exports.default = Immigration;