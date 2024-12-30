"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LangContext", {
  enumerable: true,
  get: function get() {
    return _LangProvider.LangContext;
  }
});
Object.defineProperty(exports, "LangProvider", {
  enumerable: true,
  get: function get() {
    return _LangProvider.LangProvider;
  }
});
Object.defineProperty(exports, "LangWrapper", {
  enumerable: true,
  get: function get() {
    return _LangWrapper["default"];
  }
});
Object.defineProperty(exports, "useTranslation", {
  enumerable: true,
  get: function get() {
    return _useTranslation["default"];
  }
});
var _LangProvider = require("./context/LangProvider");
var _LangWrapper = _interopRequireDefault(require("./wrapper/LangWrapper"));
var _useTranslation = _interopRequireDefault(require("./hooks/useTranslation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }