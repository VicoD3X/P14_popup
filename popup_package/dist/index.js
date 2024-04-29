"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Popup = _ref => {
  let {
    isOpen,
    close,
    content
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "popup"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-btn",
    onClick: close
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, content)));
};
var _default = exports.default = Popup;