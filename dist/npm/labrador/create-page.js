'use strict';
(function(module,require){var exports=module.exports={};
/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-11
 * @author Liang <liang@maichong.it>
 */


var _assign = require('../babel-runtime/core-js/object/assign.js');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('../babel-runtime/core-js/object/keys.js');

var _keys2 = _interopRequireDefault(_keys);

var _stringify = require('../babel-runtime/core-js/json/stringify.js');

var _stringify2 = _interopRequireDefault(_stringify);

var _getOwnPropertyNames = require('../babel-runtime/core-js/object/get-own-property-names.js');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function createPage(Component) {
  var config = {};

  var t = new Component();
  config.data = t.data || {};
  config.name = Component.name;

  //复制组件定义的原型方法
  (0, _getOwnPropertyNames2.default)(Component.prototype).forEach(function (name) {
    if (name === 'constructor') return;
    config[name] = Component.prototype[name];
  });

  var onLoad = config.onLoad;

  var getter = Component.prototype.__lookupGetter__('children');
  var children;
  if (!getter) {
    children = t.children;
  }

  config._dispatch = function (event) {
    var com = this;
    var path = event.currentTarget.dataset.path || '';
    var handler = event.currentTarget.dataset['bind' + event.type] || event.currentTarget.dataset['catch' + event.type];
    while (path) {
      var index = path.indexOf('.');
      var key = '';
      if (index === -1) {
        key = path;
        path = '';
      } else {
        key = path.substr(0, index);
        path = path.substr(index + 1);
      }
      com = com.children[key];
      if (!com) {
        console.error('Can not resolve component by path ' + event.currentTarget.dataset.path);
        return;
      }
    }
    if (com[handler]) {
      if (false) {
        console.log('%c%s %s(%o)', 'color:#2a8f99', com.id, handler, event);
      }
      return com[handler](event);
    } else {
      console.error('Can not resolve event handle ' + event.currentTarget.dataset.path + '#' + handler);
    }
  };

  config.onLoad = function () {
    var me = this;
    me.id = me.__route__;
    me.onLoad = function () {};
    me.props = {};
    if (false) {
      console.log('%c%s onLoad', 'color:#2a8f99', me.id);
    }
    if (getter) {
      children = getter.call(me);
    }

    Object.defineProperty(me, 'children', {
      value: children
    });

    var setData = me.setData;

    /**
     * 设置模板数据
     * @param {object|string} data
     * @param {object} [value]
     */
    me.setData = function (data, value) {
      if (typeof data === 'string') {
        var tmp = {};
        tmp[data] = value;
        data = tmp;
      }
      if (false) {
        var original = JSON.parse((0, _stringify2.default)(this.data));
        var append = JSON.parse((0, _stringify2.default)(data));
        setData.call(me, data);
        var changed = (0, _stringify2.default)(original) !== (0, _stringify2.default)(this.data);
        console.log('%c%s setData(%o) : %o -> %o Page:%o %s', 'color:#' + (changed ? '2a8f99' : 'bbb'), me.id, append, original, JSON.parse((0, _stringify2.default)(this.data)), me, changed ? '' : 'Unchanged');
      } else {
        setData.call(me, data);
      }

      if (!children) return;
      //需要用到更新的数据key列表
      var updatedKeys = [];
      (0, _keys2.default)(data).forEach(function (k) {
        if (me._refs[k]) {
          updatedKeys.push(k);
        }
      });
      //console.log('updatedKeys', updatedKeys, this);
      if (!updatedKeys.length) return;

      var datas = {};
      updatedKeys.forEach(function (k) {
        me._refs[k].forEach(function (arr) {
          var com = arr[1];
          if (!datas[com.key]) {
            datas[com.key] = {};
          }
          datas[com.key][arr[0]] = data[k];
        });
      });

      //console.log('datas', datas);
      (0, _keys2.default)(datas).forEach(function (k) {
        var com = children[k];
        var d = (0, _assign2.default)({}, com.props, datas[k]);
        if (false && com.propTypes) {
          (0, _keys2.default)(datas[k]).forEach(function (propName) {
            var validator = com.propTypes[propName];
            if (typeof validator !== 'function') {
              console.warn('组件"' + com.name + '"的"' + propName + '"属性类型检测器不是一个有效函数');
              return;
            }
            var error = validator(d, propName, com.name);
            if (error) {
              console.warn(error.message);
            }
          });
        }
        if (com.onUpdate) {
          if (false) {
            console.log('%c%s onUpdate(%o)', 'color:#2a8f99', com.id, JSON.parse((0, _stringify2.default)(d)));
          }
          com.onUpdate(d);
        }
        com.props = d;
      });
    };

    if (children) {
      me._refs = {};

      me._registerRef = function (ref, prop, component) {
        if (!me._refs[ref]) {
          me._refs[ref] = [];
        }
        me._refs[ref].push([prop, component]);
      };
      var data = {};
      (0, _keys2.default)(children).forEach(function (key) {
        var component = children[key];
        component._init(key, me);
        data[key] = component.data;
      });

      this.setData(data);

      //优化性能
      var existFn = [];
      var allFn = ['onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefreash'];
      (0, _keys2.default)(children).forEach(function (key) {
        var component = children[key];
        if (component.onLoad) {
          if (false) {
            console.log('%c%s onLoad', 'color:#2a8f99', component.id);
          }
          component.onLoad();
        }

        allFn.forEach(function (name) {
          if (existFn.indexOf(name) === -1 && component[name]) {
            existFn.push(name);
          }
        });
      });

      existFn.forEach(function (name) {
        var func = me[name];
        me[name] = function () {
          (0, _keys2.default)(children).forEach(function (k) {
            var component = children[k];
            if (component[name]) {
              if (false) {
                console.log('%c%s %s', 'color:#2a8f99', component.id, name);
              }
              component[name].apply(component, arguments);
            }
          });
          if (func) {
            if (false) {
              console.log('%c%s %s', 'color:#2a8f99', me.id, name);
            }
            func.apply(this, arguments);
          }
        };
      });
    }

    if (onLoad) {
      onLoad.apply(me, arguments);
    }
  }; //end of onLoad

  return config;
};
})(module,require);