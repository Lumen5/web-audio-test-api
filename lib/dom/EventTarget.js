"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _desc, _value, _class;

var _events = require("events");

var _Event = require("./Event");

var _Event2 = _interopRequireDefault(_Event);

var _inLaws2 = require("../utils/inLaws");

var _inLaws3 = _interopRequireDefault(_inLaws2);

var _methods = require("../decorators/methods");

var methods = _interopRequireWildcard(_methods);

var _validators = require("../validators");

var validators = _interopRequireWildcard(_validators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EMITTER = Symbol("emitter");

global.EventTarget = global.EventTarget || function EventTarget() {
  _classCallCheck(this, EventTarget);

  throw new TypeError("Illegal constructor");
};

var EventTarget = (_dec = methods.param("type", validators.isString), _dec2 = methods.param("listener", validators.isFunction), _dec3 = methods.param("type", validators.isString), _dec4 = methods.param("listener", validators.isFunction), _dec5 = methods.param("event", validators.isInstanceOf(_Event2.default)), (_class = function (_inLaws) {
  _inherits(EventTarget, _inLaws);

  function EventTarget() {
    _classCallCheck(this, EventTarget);

    var _this = _possibleConstructorReturn(this, (EventTarget.__proto__ || Object.getPrototypeOf(EventTarget)).call(this));

    _this[EMITTER] = new _events.EventEmitter();
    return _this;
  }

  _createClass(EventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      this[EMITTER].addListener(type, listener);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      this[EMITTER].removeListener(type, listener);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var _this2 = this;

      var type = event.type;
      var callback = this["on" + type];

      if (typeof callback === "function") {
        callback.call(this, event);
      }

      this[EMITTER].listeners(type).forEach(function (listener) {
        listener.call(_this2, event);
      });

      return true;
    }
  }, {
    key: "$addListener",
    value: function $addListener(event, listener) {
      this[EMITTER].addListener(event, listener);
      return this;
    }
  }, {
    key: "$emit",
    value: function $emit() {
      var _EMITTER;

      (_EMITTER = this[EMITTER]).emit.apply(_EMITTER, arguments);
      return this;
    }
  }, {
    key: "$getMaxListeners",
    value: function $getMaxListeners() {
      return this[EMITTER].getMaxListeners();
    }
  }, {
    key: "$listenerCount",
    value: function $listenerCount(type) {
      return this[EMITTER].listenerCount(type);
    }
  }, {
    key: "$listeners",
    value: function $listeners(event) {
      return this[EMITTER].listeners(event);
    }
  }, {
    key: "$on",
    value: function $on(event, listener) {
      this[EMITTER].on(event, listener);
      return this;
    }
  }, {
    key: "$once",
    value: function $once(event, listener) {
      this[EMITTER].on(event, listener);
      return this;
    }
  }, {
    key: "$removeAllListeners",
    value: function $removeAllListeners(event) {
      this[EMITTER].removeAllListeners(event);
      return this;
    }
  }, {
    key: "$removeListener",
    value: function $removeListener(event, listener) {
      this[EMITTER].removeAllListeners(event, listener);
      return this;
    }
  }, {
    key: "$setMaxListeners",
    value: function $setMaxListeners(event, listener) {
      this[EMITTER].setMaxListeners(event, listener);
      return this;
    }
  }]);

  return EventTarget;
}((0, _inLaws3.default)(global.EventTarget)), (_applyDecoratedDescriptor(_class.prototype, "addEventListener", [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, "addEventListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeEventListener", [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class.prototype, "removeEventListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "dispatchEvent", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "dispatchEvent"), _class.prototype)), _class));
exports.default = EventTarget;