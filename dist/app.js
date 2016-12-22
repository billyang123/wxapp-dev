'use strict';
(function(module,require){var exports=module.exports={};
var global=window=require('./npm/labrador/global.js');

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('./npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('./npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('./npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('./npm/babel-runtime/helpers/createClass.js');

var _createClass3 = _interopRequireDefault(_createClass2);

var _labrador = require('./npm/labrador/index.js');

var _labrador2 = _interopRequireDefault(_labrador);

var _util = require('./utils/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份         
    "d+": this.getDate(), //日         
    "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时         
    "H+": this.getHours(), //小时         
    "m+": this.getMinutes(), //分         
    "s+": this.getSeconds(), //秒         
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度         
    "S": this.getMilliseconds() //毫秒         
  };
  var week = {
    "0": "/u65e5",
    "1": "/u4e00",
    "2": "/u4e8c",
    "3": "/u4e09",
    "4": "/u56db",
    "5": "/u4e94",
    "6": "/u516d"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + week[this.getDay() + ""]);
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
};

var _class = function () {
  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    this.globalData = {
      userInfo: null,
      storage: null
    };
    this.data = {
      assetsPath: 'https://s1.chinamuxie.com/www/assets/xcx'
    };
  }

  (0, _createClass3.default)(_class, [{
    key: 'onLaunch',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = this;
                _context.next = 3;
                return _labrador2.default.getStorage({ key: 'userInfo' });

              case 3:
                this.globalData.userInfo = _context.sent;
                _context.next = 6;
                return this.getStorage();

              case 6:
                this.globalData.storage = _context.sent;

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }, {
    key: 'makePhoneCall',
    value: function makePhoneCall(event) {
      _labrador2.default.showModal({
        title: '拨打电话：' + event.currentTarget.dataset.phoneNumber,
        success: function success(res) {
          _labrador2.default.makePhoneCall({
            phoneNumber: event.currentTarget.dataset.phoneNumber
          });
        }
      });
    }
  }, {
    key: 'getStorage',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var localSession, storageInfo, keys, i, _res;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                localSession = {};
                _context2.next = 3;
                return _labrador2.default.getStorageInfo();

              case 3:
                storageInfo = _context2.sent;
                keys = storageInfo.keys;
                i = 0;

              case 6:
                if (!(i < keys.length)) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 9;
                return _labrador2.default.getStorage({ key: keys[i] });

              case 9:
                _res = _context2.sent;

                localSession[keys[i]] = _res.data || '';

              case 11:
                i++;
                _context2.next = 6;
                break;

              case 14:
                return _context2.abrupt('return', localSession);

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getStorage() {
        return _ref2.apply(this, arguments);
      }

      return getStorage;
    }()
  }, {
    key: 'getUserInfo',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _labrador2.default.getUserInfo();

              case 2:
                res = _context3.sent;

                this.globalData.userInfo = res.userInfo;
                return _context3.abrupt('return', res.userInfo);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUserInfo() {
        return _ref3.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: 'getUser',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(code) {
        var myuser;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                myuser = this.ajax({
                  url: 'https://xcx.chinamuxie.com/wxapi/user/account',
                  type: "get",
                  data: {
                    code: code
                  }
                });
                return _context4.abrupt('return', myuser);

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUser(_x) {
        return _ref4.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: 'checkLogin',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        var res;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getUser(this.globalData.storage.code);

              case 2:
                res = _context5.sent;
                return _context5.abrupt('return', res.data.loginStatus);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function checkLogin() {
        return _ref5.apply(this, arguments);
      }

      return checkLogin;
    }()
  }, {
    key: 'login',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(callback, d) {
        var loginStatus, _res2;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                loginStatus = false;

                if (!d) {
                  _context6.next = 6;
                  break;
                }

                _context6.next = 4;
                return this.getUser(this.globalData.storage.code);

              case 4:
                _res2 = _context6.sent;

                loginStatus = _res2.data.loginStatus;

              case 6:
                if (loginStatus) {
                  callback && callback(res);
                } else {
                  this.doLogin(callback);
                }

              case 7:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function login(_x2, _x3) {
        return _ref6.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'doLogin',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(callback) {
        var loginInfo, rdRes, userInfo, userInfoPost, _user;

        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _labrador2.default.showToast({
                  title: '登录中',
                  icon: 'loading',
                  duration: 10000
                });
                _context7.next = 3;
                return _labrador2.default.login();

              case 3:
                loginInfo = _context7.sent;
                _context7.next = 6;
                return _labrador2.default.request({
                  url: "https://xcx.chinamuxie.com/wxapi/user/oauth/wxLogin",
                  method: "post",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    code: loginInfo.code
                  }
                });

              case 6:
                rdRes = _context7.sent;

                console.log(rdRes.data);

                if (!(rdRes.data.status == 7)) {
                  _context7.next = 13;
                  break;
                }

                _labrador2.default.hideToast();
                _context7.next = 12;
                return _labrador2.default.showModal({
                  title: '提示',
                  content: res.data.msg
                });

              case 12:
                return _context7.abrupt('return');

              case 13:
                _context7.next = 15;
                return _labrador2.default.setStorage({ key: 'code', data: loginInfo.code });

              case 15:
                _context7.next = 17;
                return _labrador2.default.setStorage({ key: 'sessionKey', data: rdRes.data.data });

              case 17:
                this.globalData.storage = {
                  code: loginInfo.code,
                  sessionKey: rdRes.data.data
                };
                //console.log(this.globalData.storage)
                _context7.next = 20;
                return _labrador2.default.getUserInfo();

              case 20:
                userInfo = _context7.sent;

                this.globalData.userInfo = userInfo.userInfo;
                _context7.next = 24;
                return _labrador2.default.setStorage({ key: 'userInfo', data: this.globalData.userInfo });

              case 24:
                _context7.next = 26;
                return _labrador2.default.request({
                  url: "https://xcx.chinamuxie.com/wxapi/user/oauth/doOauth",
                  method: "post",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    rawData: userInfo.rawData,
                    signature: userInfo.signature,
                    encryptedData: userInfo.encryptedData,
                    iv: userInfo.iv,
                    sessionKey: rdRes.data.data,
                    code: loginInfo.code
                  }
                });

              case 26:
                userInfoPost = _context7.sent;

                _labrador2.default.hideToast();

                if (!(userInfoPost.data.data == "logged")) {
                  _context7.next = 33;
                  break;
                }

                _context7.next = 31;
                return this.getUser(loginInfo.code);

              case 31:
                _user = _context7.sent;

                callback && callback(_user, userInfo);

              case 33:
                if (!(userInfoPost.data.data == "notLogged")) {
                  _context7.next = 36;
                  break;
                }

                _context7.next = 36;
                return _labrador2.default.navigateTo({
                  url: '/pages/bindphone/bindphone'
                });

              case 36:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function doLogin(_x4) {
        return _ref7.apply(this, arguments);
      }

      return doLogin;
    }()
  }, {
    key: 'ajax',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(options) {
        var setting, res, mMode;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                setting = {
                  url: options.url,
                  method: options.type || "get",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  }
                };

                if (options.data) {
                  setting.data = options.data;
                }
                _context8.next = 4;
                return _labrador2.default.request(setting);

              case 4:
                res = _context8.sent;

                if (!(res.statusCode == 200)) {
                  _context8.next = 9;
                  break;
                }

                return _context8.abrupt('return', res.data);

              case 9:
                if (!(res.data.status == 1)) {
                  _context8.next = 15;
                  break;
                }

                mMode = _labrador2.default.showModal({
                  title: '提示',
                  content: "请先登录"
                });

                if (mMode.confirm) {
                  _labrador2.default.redirectTo({
                    url: '/pages/account'
                  });
                }
                return _context8.abrupt('return');

              case 15:
                _labrador2.default.showModal({
                  title: '提示',
                  content: res.msg
                });

              case 16:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function ajax(_x5) {
        return _ref8.apply(this, arguments);
      }

      return ajax;
    }()
  }]);
  return _class;
}();

exports.default = _class;
{
var __app=new exports.default();Object.getOwnPropertyNames(__app.constructor.prototype).forEach(function(name){if(name!=='constructor')__app[name]=__app.constructor.prototype[name]});App(__app);
}
})(module,require);