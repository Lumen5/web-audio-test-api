"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.param = param;
exports.returns = returns;
exports.contract = contract;

var _format = require("../utils/format");

var _format2 = _interopRequireDefault(_format);

var _toS = require("../utils/toS");

var _toS2 = _interopRequireDefault(_toS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var repository = new WeakMap();

function createMethodForm(methodName, parameters, returnValue, errParamName) {
  var retType = returnValue ? returnValue.typeName : "void";
  var result = methodName + "(";
  var optional = false;
  var errArgIndex = -1;

  for (var i = 0; i < parameters.length; i++) {
    if (!optional && parameters[i].optional) {
      optional = true;
      result += "[ ";
    }
    if (parameters[i].paramName === errParamName) {
      errArgIndex = result.length;
    }
    result += parameters[i].paramName;
    // result += ": " + parameters[i].validator.typeName;
    if (i < parameters.length - 1) {
      result += ", ";
    }
  }

  if (optional) {
    result += " ]";
  }

  result += "): " + retType;

  return [errArgIndex, result];
}

function repeat(ch, n) {
  var str = "";

  while (n--) {
    str += ch;
  }

  return str;
}

function createExecuteError(klassName, methodName, parameters, returnValue, message) {
  var matches = /{{(\w+)}}/.exec(message);

  if (matches) {
    var _createMethodForm = createMethodForm(methodName, parameters, returnValue, matches[1]),
        _createMethodForm2 = _slicedToArray(_createMethodForm, 2),
        errArgIndex = _createMethodForm2[0],
        methodForm = _createMethodForm2[1];

    if (errArgIndex !== -1) {
      message = ["\t" + methodForm, "\t" + repeat(" ", errArgIndex) + "|", "\t" + repeat(" ", errArgIndex) + message].join("\n");
    }
  }

  return new TypeError((0, _format2.default)("\n    Failed to execute the '" + methodName + "' on '" + klassName + "'\n\n    " + message + "\n  ") + "\n");
}

function createValidator(methodName) {
  var config = {};

  function validate() {
    var _config$methodBody;

    var methodName = config.methodName;
    var parameters = config.parameters;
    var returnValue = config.returnValue;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var errArgIndex = validateArguments(args, parameters);

    if (errArgIndex !== -1) {
      var errParamName = parameters[errArgIndex].paramName;
      var expectedType = parameters[errArgIndex].validator.description;
      var actualValue = (0, _toS2.default)(args[errArgIndex]);
      var errMessage = "'{{" + errParamName + "}}' require $a " + expectedType + ", but got " + actualValue + ".";

      throw createExecuteError(this.constructor.name, methodName, parameters, returnValue, errMessage);
    }

    if (typeof config.precondition === "function") {
      try {
        var _config$precondition;

        (_config$precondition = config.precondition).call.apply(_config$precondition, [this].concat(args));
      } catch (e) {
        throw createExecuteError(this.constructor.name, methodName, parameters, returnValue, e.message.trim());
      }
    }

    var res = (_config$methodBody = config.methodBody).call.apply(_config$methodBody, [this].concat(args));

    if (typeof config.postcondition === "function") {
      try {
        config.postcondition.call(this, res);
      } catch (e) {
        throw createExecuteError(this.constructor.name, methodName, parameters, returnValue, e.message.trim());
      }
    }

    return res;
  }

  config.methodName = /(?:__)?(\w+)/.exec(methodName)[1];
  config.parameters = [];
  config.descriptor = {
    value: validate, enumerable: true, configurable: true
  };

  return config;
}

function validateArguments(values, validators) {
  for (var i = 0; i < validators.length; i++) {
    if (validators[i].optional === true && values.length <= i) {
      break;
    }
    if (!validators[i].validator.test(values[i])) {
      return i;
    }
  }
  return -1;
}

function getMethodConfig(target, methodName) {
  var classConfig = repository.get(target);

  if (!classConfig) {
    repository.set(target, classConfig = {});
  }

  if (!classConfig[methodName]) {
    classConfig[methodName] = createValidator(methodName);
  }

  return classConfig[methodName];
}

function param(paramName, validator) {
  return function (target, methodName, descriptor) {
    var methodConfig = getMethodConfig(target, methodName);
    var optional = /^\[\s*\w+?\s*\]$/.test(paramName);

    if (optional) {
      paramName = paramName.replace(/^\[|\]$/g, "").trim();
    }

    methodConfig.parameters.unshift({ paramName: paramName, validator: validator, optional: optional });
    methodConfig.methodBody = methodConfig.methodBody || descriptor.value;

    return methodConfig.descriptor;
  };
}

function returns(validator) {
  return function (target, methodName, descriptor) {
    var methodConfig = getMethodConfig(target, methodName);

    methodConfig.returnValue = validator;
    methodConfig.methodBody = methodConfig.methodBody || descriptor.value;

    return methodConfig.descriptor;
  };
}

function contract(_ref) {
  var precondition = _ref.precondition,
      postcondition = _ref.postcondition;

  return function (target, methodName, descriptor) {
    var methodConfig = getMethodConfig(target, methodName);

    methodConfig.precondition = precondition;
    methodConfig.postcondition = postcondition;
    methodConfig.methodBody = methodConfig.methodBody || descriptor.value;

    return methodConfig.descriptor;
  };
}