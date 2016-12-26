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

var _class = function () {
  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    this.globalData = {
      userInfo: null,
      storage: null
    };
    this.data = {
      assetsPath: 'https://s1.chinamuxie.com/www/assets/xcx',
      ajaxPath: 'https://xcx.chinamuxie.com' //'https://xcx.yiqihuzhu.com/',
      //ajaxPath:'https://xcx.yiqihuzhu.com'//'https://xcx.yiqihuzhu.com/',
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
    key: 'dateformat',
    value: function dateformat(date, fmt1, fmt2) {
      var formatNumber = function formatNumber(n) {
        n = n.toString();
        return n[1] ? n : '0' + n;
      };
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      return [year, month, day].map(formatNumber).join(fmt1) + ' ' + [hour, minute, second].map(formatNumber).join(fmt2);
    }
  }, {
    key: 'setHttpsUrl',
    value: function setHttpsUrl(url) {
      //https://wx.qlogo.cn/mmopen/PiajxSqBRaEJFWwlW2qwhv9WnHmcDoLcI83AWibecAEKAntTbSfmNp0ReEiarvEl5wx7UvWkQdaNMwOhtDxibibuhufkCmAPAy64MWvcaS2PjzIw/0
      if (/wx.qlogo.cn\/mmopen\/.+\/0/.test(url)) {
        url = url.replace('/0', '/132');
      }
      if (!/(http|https)\:/.test(url)) {
        return "https:" + url;
      }
      return url;
    }
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
    key: 'stopAudio',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var sta;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _labrador2.default.getBackgroundAudioPlayerState();

              case 2:
                sta = _context3.sent;

                if (sta.status == 1) {
                  _labrador2.default.stopBackgroundAudio();
                }

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function stopAudio() {
        return _ref3.apply(this, arguments);
      }

      return stopAudio;
    }()
  }, {
    key: 'getUserInfo',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        var res;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _labrador2.default.getUserInfo();

              case 2:
                res = _context4.sent;

                this.globalData.userInfo = res.userInfo;
                return _context4.abrupt('return', res.userInfo);

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUserInfo() {
        return _ref4.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: 'getUser',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(code) {
        var myuser;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.ajax({
                  url: _labrador2.default.app.data.ajaxPath + '/wxapi/user/account',
                  data: {
                    code: code
                  }
                });

              case 2:
                myuser = _context5.sent;
                return _context5.abrupt('return', myuser);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getUser(_x) {
        return _ref5.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: 'checkLogin',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        var _res2;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(this.globalData.storage && this.globalData.storage.code)) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 3;
                return this.getUser(this.globalData.storage.code);

              case 3:
                _res2 = _context6.sent;

                if (!_res2) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt('return', _res2.data.loginStatus);

              case 6:
                return _context6.abrupt('return', false);

              case 9:
                return _context6.abrupt('return', false);

              case 10:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkLogin() {
        return _ref6.apply(this, arguments);
      }

      return checkLogin;
    }()
  }, {
    key: 'login',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(callback, d) {
        var loginStatus, _res3;

        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                loginStatus = false;

                if (!d) {
                  _context7.next = 6;
                  break;
                }

                _context7.next = 4;
                return this.getUser(this.globalData.storage.code);

              case 4:
                _res3 = _context7.sent;

                loginStatus = _res3.data.loginStatus;

              case 6:
                if (loginStatus) {
                  callback && callback(res);
                } else {
                  this.doLogin(callback);
                }

              case 7:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function login(_x2, _x3) {
        return _ref7.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'doLogin',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(callback) {
        var loginInfo, rdRes, userInfo, userInfoPost, _user;

        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _labrador2.default.showToast({
                  title: '登录中',
                  icon: 'loading',
                  duration: 10000
                });
                _context8.next = 3;
                return _labrador2.default.login();

              case 3:
                loginInfo = _context8.sent;
                _context8.next = 6;
                return _labrador2.default.request({
                  url: _labrador2.default.app.data.ajaxPath + "/wxapi/user/oauth/wxLogin",
                  method: "post",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    code: loginInfo.code
                  }
                });

              case 6:
                rdRes = _context8.sent;

                if (!(rdRes.data.status == 7)) {
                  _context8.next = 12;
                  break;
                }

                _labrador2.default.hideToast();
                _context8.next = 11;
                return _labrador2.default.showModal({
                  title: '提示',
                  content: res.data.msg
                });

              case 11:
                return _context8.abrupt('return');

              case 12:
                _context8.next = 14;
                return _labrador2.default.setStorage({ key: 'code', data: loginInfo.code });

              case 14:
                _context8.next = 16;
                return _labrador2.default.setStorage({ key: 'sessionKey', data: rdRes.data.data });

              case 16:
                this.globalData.storage = {
                  code: loginInfo.code,
                  sessionKey: rdRes.data.data
                };
                //console.log(this.globalData.storage)
                _context8.next = 19;
                return _labrador2.default.getUserInfo();

              case 19:
                userInfo = _context8.sent;

                this.globalData.userInfo = userInfo.userInfo;
                _context8.next = 23;
                return _labrador2.default.setStorage({ key: 'userInfo', data: this.globalData.userInfo });

              case 23:
                _context8.next = 25;
                return _labrador2.default.request({
                  url: _labrador2.default.app.data.ajaxPath + "/wxapi/user/oauth/doOauth",
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

              case 25:
                userInfoPost = _context8.sent;

                _labrador2.default.hideToast();

                if (!(userInfoPost.data.data == "logged")) {
                  _context8.next = 33;
                  break;
                }

                _context8.next = 30;
                return this.getUser(loginInfo.code);

              case 30:
                _user = _context8.sent;

                //return _user
                callback && callback(_user, userInfo);
                return _context8.abrupt('return', true);

              case 33:
                if (!(userInfoPost.data.data == "notLogged")) {
                  _context8.next = 36;
                  break;
                }

                _context8.next = 36;
                return _labrador2.default.navigateTo({
                  url: '/pages/bindphone/bindphone'
                });

              case 36:
                return _context8.abrupt('return', false);

              case 37:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function doLogin(_x4) {
        return _ref8.apply(this, arguments);
      }

      return doLogin;
    }()
  }, {
    key: 'ajax',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(options) {
        var setting, res, mMode;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
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
                _context9.next = 4;
                return _labrador2.default.request(setting);

              case 4:
                res = _context9.sent;

                if (!(res.statusCode == 200)) {
                  _context9.next = 9;
                  break;
                }

                return _context9.abrupt('return', res.data);

              case 9:
                if (!(res.data.status == 1)) {
                  _context9.next = 15;
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
                return _context9.abrupt('return');

              case 15:
                _labrador2.default.showModal({
                  title: '提示',
                  content: res.msg
                });

              case 16:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function ajax(_x5) {
        return _ref9.apply(this, arguments);
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