"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _LangProvider = require("../context/LangProvider");
var useTranslation = function useTranslation(langFiles) {
  var _useContext = (0, _react.useContext)(_LangProvider.LangContext),
    lang = _useContext.lang;
  var t = function t(key) {
    var _langFiles$lang, _langFiles$en;
    return ((_langFiles$lang = langFiles[lang]) === null || _langFiles$lang === void 0 ? void 0 : _langFiles$lang[key]) || ((_langFiles$en = langFiles["en"]) === null || _langFiles$en === void 0 ? void 0 : _langFiles$en[key]) || key;
  };
  return {
    t: t
  };
};
var _default = exports["default"] = useTranslation;