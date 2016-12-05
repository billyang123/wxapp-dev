'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

exports.formatTime = formatTime;
exports.sleep = sleep;
exports.add = add;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

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

function add(a, b) {
  return a + b;
}
})(module,require);