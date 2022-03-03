"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toS;
function toS(value) {
  if (value === null || typeof value === "undefined") {
    return String(value);
  }
  var type = typeof value === "undefined" ? "undefined" : _typeof(value);

  if (type === "number" || type === "boolean") {
    return String(value);
  }

  if (type === "string") {
    return "'" + value + "'";
  }

  if (Array.isArray(value)) {
    return "[ " + value.map(toS).join(", ") + " ]";
  }

  if (value.constructor === {}.constructor) {
    return "{ " + Object.keys(value).map(function (key) {
      return key + ": " + toS(value[key]);
    }).join(", ") + "}";
  }

  var name = value.constructor.name || Object.prototype.toString.call(value).slice(8, -1);

  return "a " + name;
}