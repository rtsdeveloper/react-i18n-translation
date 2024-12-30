"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _LangProvider = require("../context/LangProvider");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var LangWrapper = function LangWrapper(_ref) {
  var children = _ref.children,
    initialLang = _ref.initialLang;
  return /*#__PURE__*/_react["default"].createElement(_LangProvider.LangProvider, {
    initialLang: initialLang
  }, children);
};
var _default = exports["default"] = LangWrapper;