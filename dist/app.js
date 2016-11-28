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
                //await wx.clearStorage();

                _context.next = 3;
                return this.__init();

              case 3:
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
    key: '__init',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var loginInfo;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getStorage();

              case 2:
                this.globalData.storage = _context2.sent;

                if (!(!this.globalData.storage || this.globalData.storage && !this.globalData.storage.code)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 6;
                return _labrador2.default.login();

              case 6:
                loginInfo = _context2.sent;
                _context2.next = 9;
                return _labrador2.default.setStorage({ key: 'code', data: loginInfo.code });

              case 9:
                _context2.next = 11;
                return this.getUserInfo();

              case 11:
                _context2.next = 13;
                return this.getStorage();

              case 13:
                this.globalData.storage = _context2.sent;

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function __init() {
        return _ref2.apply(this, arguments);
      }

      return __init;
    }()
  }, {
    key: 'getStorage',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var localSession, storageInfo, keys, i, res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // if (this.globalData.storage) {
                //   return this.globalData.storage;
                // }
                localSession = {};
                _context3.next = 3;
                return _labrador2.default.getStorageInfo();

              case 3:
                storageInfo = _context3.sent;
                keys = storageInfo.keys;
                i = 0;

              case 6:
                if (!(i < keys.length)) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 9;
                return _labrador2.default.getStorage({ key: keys[i] });

              case 9:
                res = _context3.sent;

                localSession[keys[i]] = res.data || '';

              case 11:
                i++;
                _context3.next = 6;
                break;

              case 14:
                return _context3.abrupt('return', localSession);

              case 15:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getStorage() {
        return _ref3.apply(this, arguments);
      }

      return getStorage;
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
    key: 'bindLogin',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(url, bl) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.checkLogin(url, bl);

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function bindLogin(_x, _x2) {
        return _ref5.apply(this, arguments);
      }

      return bindLogin;
    }()
  }, {
    key: 'checkLogin',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(url, bl) {
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.doLogin(url, bl);

              case 2:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkLogin(_x3, _x4) {
        return _ref6.apply(this, arguments);
      }

      return checkLogin;
    }()
  }, {
    key: 'doLogin',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(url, bl) {
        var postdata, rdRes, userInfo, userInfoPost;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!bl) {
                  _context7.next = 3;
                  break;
                }

                _labrador2.default.navigateTo({
                  url: url
                });
                return _context7.abrupt('return');

              case 3:
                postdata = {
                  code: _labrador2.default.app.globalData.storage.code,
                  sessionKey: _labrador2.default.app.globalData.storage.sessionKey
                };
                //console.log(wx.app.globalData)

                if (postdata.sessionKey) {
                  _context7.next = 13;
                  break;
                }

                _context7.next = 7;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/wxLogin',
                  method: "POST",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: postdata
                });

              case 7:
                rdRes = _context7.sent;
                _context7.next = 10;
                return _labrador2.default.setStorage({ key: 'sessionKey', data: rdRes.data.data });

              case 10:
                _context7.next = 12;
                return _labrador2.default.app.getStorage();

              case 12:
                _labrador2.default.app.globalData.storage = _context7.sent;

              case 13:
                _context7.next = 15;
                return _labrador2.default.getUserInfo();

              case 15:
                userInfo = _context7.sent;
                _context7.next = 18;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/doOauth',
                  method: "POST",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    rawData: userInfo.rawData,
                    signature: userInfo.signature,
                    encryptedData: encodeURIComponent(userInfo.encryptedData),
                    iv: encodeURIComponent(userInfo.iv),
                    sessionKey: _labrador2.default.app.globalData.storage.sessionKey,
                    code: postdata.code
                  }
                });

              case 18:
                userInfoPost = _context7.sent;


                if (userInfoPost.data.data == "logged") {
                  _labrador2.default.navigateTo({
                    url: url
                  });
                }

                if (!(userInfoPost.data.data == "notLogged")) {
                  _context7.next = 23;
                  break;
                }

                _context7.next = 23;
                return _labrador2.default.navigateTo({
                  url: '/pages/bindphone/bindphone'
                });

              case 23:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function doLogin(_x5, _x6) {
        return _ref7.apply(this, arguments);
      }

      return doLogin;
    }()
  }]);
  return _class;
}();

exports.default = _class;
{
var __app=new exports.default();Object.getOwnPropertyNames(__app.constructor.prototype).forEach(function(name){if(name!=='constructor')__app[name]=__app.constructor.prototype[name]});App(__app);
}
})(module,require);