'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('../npm/babel-runtime/core-js/json/stringify.js');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('../npm/babel-runtime/helpers/typeof.js');

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = require('../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

exports.formatTime = formatTime;
exports.sleep = sleep;
exports.getParams = getParams;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
function sleep(time) {
  return new _promise2.default(function (resolve) {
    return setTimeout(resolve, time);
  });
}
function getParams(obj) {
  var arr = [];
  for (index in obj) {
    if ((0, _typeof3.default)(obj[index]) == "object") {
      obj[index] = (0, _stringify2.default)(obj[index]);
    }
    arr.push(index + "=" + obj[index]);
  }
  return arr.join("&");
}
})(module,require);