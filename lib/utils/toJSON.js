"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toJSON;

var _toNodeName = require("./toNodeName");

var _toNodeName2 = _interopRequireDefault(_toNodeName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toJSON(node, func) {
  var memo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var result = void 0;

  if (memo.indexOf(node) !== -1) {
    return "<circular:" + (0, _toNodeName2.default)(node) + ">";
  }
  memo.push(node);

  result = func(node, memo);

  memo.pop();

  return result;
}