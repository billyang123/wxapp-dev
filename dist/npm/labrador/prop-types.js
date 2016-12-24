'use strict';
(function(module,require){var exports=module.exports={};
/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-11
 * @author Liang <liang@maichong.it>
 */

/* eslint no-inner-declarations:0 no-inner-declarations:0 */


var _typeof2 = require('../babel-runtime/helpers/typeof.js');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  var numberTag;
  var boolTag;
  var stringTag;
  var symbolTag;
  var any;

  (function () {
    var isObjectLike = function isObjectLike(value) {
      return value != null && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object';
    };

    var objectToString = function objectToString(value) {
      return Object.prototype.toString.call(value);
    };

    var getType = function getType(value) {
      if (Array.isArray(value)) {
        return 'array';
      }

      var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);

      if (type === 'function') {
        return 'func';
      }
      if (type === 'number' || isObjectLike(value) && objectToString(value) === numberTag) {
        return 'number';
      }
      if (value === true || value === false || isObjectLike(value) && objectToString(value) === boolTag) {
        return 'bool';
      }
      if (type === 'string' || isObjectLike(value) && objectToString(value) === stringTag) {
        return 'string';
      }
      if (type === 'object' && value !== null) {
        return 'object';
      }
      if (type === 'symbol' || isObjectLike(value) && objectToString(value) === symbolTag) {
        return 'symbol';
      }
      return 'unknown';
    };

    var generate = function generate(name, allowNull) {
      var validator = function validator(props, propName, componentName) {
        var value = props[propName];
        if (value === undefined || allowNull && value === null) return null;
        var type = getType(value);
        return type === name ? null : new Error('组件"' + componentName + '"的属性"' + propName + '"类型声明为"' + name + '"，却得到"' + type + '"');
      };
      validator.isRequired = function (props, propName, componentName) {
        var value = props[propName];
        if (value === undefined || value === null) {
          return new Error('组件"' + componentName + '"的必要属性"' + propName + '"缺失，得到"' + value + '"');
        }
        return validator(props, propName, componentName);
      };
      return validator;
    };

    numberTag = '[object Number]';
    boolTag = '[object Boolean]';
    stringTag = '[object String]';
    symbolTag = '[object Symbol]';

    any = function any() {};

    any.isRequired = function (props, propName, componentName) {
      var value = props[propName];
      if (value === undefined) {
        return new Error('组件"' + componentName + '"的必要属性"' + propName + '"缺失，得到"' + value + '"');
      }
      return null;
    };

    module.exports = {
      number: generate('number'),
      string: generate('string'),
      func: generate('func', true),
      array: generate('array'),
      bool: generate('bool'),
      object: generate('object', true),
      symbol: generate('symbol'),
      any: any
    };
  })();
} else {
  var any = function any() {};
  any.isRequired = function () {};
  module.exports = {
    number: any,
    string: any,
    func: any,
    array: any,
    bool: any,
    object: any,
    symbol: any,
    any: any
  };
}
})(module,require);