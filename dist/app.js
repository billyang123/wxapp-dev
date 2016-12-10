"use strict";var exports=module.exports={};var global=window=require('./npm/labrador/global.js');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJzdG9yYWdlIiwiZGF0YSIsImFzc2V0c1BhdGgiLCJfdGhpcyIsIl9faW5pdCIsImV2ZW50Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInBob25lTnVtYmVyIiwic3VjY2VzcyIsInJlcyIsIm1ha2VQaG9uZUNhbGwiLCJnZXRTdG9yYWdlIiwiY29kZSIsImxvZ2luIiwibG9naW5JbmZvIiwic2V0U3RvcmFnZSIsImtleSIsImdldFVzZXJJbmZvIiwibG9jYWxTZXNzaW9uIiwiZ2V0U3RvcmFnZUluZm8iLCJzdG9yYWdlSW5mbyIsImtleXMiLCJpIiwibGVuZ3RoIiwidXJsIiwiYmwiLCJjaGVja0xvZ2luIiwiZG9Mb2dpbiIsIm5hdmlnYXRlVG8iLCJwb3N0ZGF0YSIsImFwcCIsInNlc3Npb25LZXkiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVyIiwicmRSZXMiLCJyYXdEYXRhIiwic2lnbmF0dXJlIiwiZW5jcnlwdGVkRGF0YSIsImVuY29kZVVSSUNvbXBvbmVudCIsIml2IiwidXNlckluZm9Qb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7OztTQUdFQSxVLEdBQWE7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxlQUFRO0FBRkcsSztTQUliQyxJLEdBQU87QUFDTEMsa0JBQVc7QUFETixLOzs7Ozs7Ozs7Ozs7O0FBSURDLHFCLEdBQVEsSTtBQUNaOzs7dUJBQ00sS0FBS0MsTUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS01DLEssRUFBTTtBQUNsQix5QkFBR0MsU0FBSCxDQUFhO0FBQ1hDLGVBQU8sVUFBUUYsTUFBTUcsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJDLFdBRGhDO0FBRVhDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsNkJBQUdDLGFBQUgsQ0FBaUI7QUFDZkgs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SkMsbUNBQWNDLG1CQUFtQjNDLFNBQVMwQyxhQUE1QixDQUhWO0FBSUpFLHdCQUFHRCxtQkFBbUIzQyxTQUFTNEMsRUFBNUIsQ0FKQztBQUtKVCxnQ0FBWSxtQkFBR0QsR0FBSCxDQUFPbkMsVUFBUCxDQUFrQkUsT0FBbEIsQ0FBMEJrQyxVQUxsQztBQU1KbkIsMEJBQUtpQixTQUFTakI7QUFOVjtBQU40QixpQkFBWCxDOzs7QUFBckI2Qiw0Qjs7O0FBZ0JKLG9CQUFHQSxhQUFhM0MsSUFBYixDQUFrQkEsSUFBbEIsSUFBMEIsUUFBN0IsRUFBc0M7QUFDcEMscUNBQUc4QixVQUFILENBQWM7QUFDYkoseUJBQUlBO0FBRFMsbUJBQWQ7QUFHRDs7c0JBQ0VpQixhQUFhM0MsSUFBYixDQUFrQkEsSUFBbEIsSUFBMEIsVzs7Ozs7O3VCQUNyQixtQkFBRzhCLFVBQUgsQ0FBYztBQUNsQkosdUJBQUk7QUFEYyxpQkFBZCxDIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd3ggZnJvbSAnbGFicmFkb3InO1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICcuL3V0aWxzL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGwsXG4gICAgc3RvcmFnZTpudWxsXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgYXNzZXRzUGF0aDonaHR0cHM6Ly9zMS5jaGluYW11eGllLmNvbS93d3cvYXNzZXRzL3hjeCdcbiAgfTtcbiAgYXN5bmMgb25MYXVuY2goKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAvL2F3YWl0IHd4LmNsZWFyU3RvcmFnZSgpO1xuICAgIGF3YWl0IHRoaXMuX19pbml0KCk7XG4gICAgLy8gd3gubmF2aWdhdGVUbyh7XG4gICAgLy8gICB1cmw6XCIvcGFnZXMvcmVjaGFyZ2UvcmVjaGFyZ2VcIlxuICAgIC8vIH0pXG4gIH1cbiAgbWFrZVBob25lQ2FsbChldmVudCl7XG4gICAgd3guc2hvd01vZGFsKHtcbiAgICAgIHRpdGxlOiAn5ouo5omT55S16K+d77yaJytldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGhvbmVOdW1iZXIsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgd3gubWFrZVBob25lQ2FsbCh7XG4gICAgICAgICAgcGhvbmVOdW1iZXI6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5waG9uZU51bWJlclxuICAgICAgICB9KSBcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGFzeW5jIF9faW5pdCgpe1xuICAgIHRoaXMuZ2xvYmFsRGF0YS5zdG9yYWdlID0gIGF3YWl0IHRoaXMuZ2V0U3RvcmFnZSgpO1xuICAgIGlmKCF0aGlzLmdsb2JhbERhdGEuc3RvcmFnZSB8fCAodGhpcy5nbG9iYWxEYXRhLnN0b3JhZ2UgJiYgIXRoaXMuZ2xvYmFsRGF0YS5zdG9yYWdlLmNvZGUpKXtcbiAgICAgIGxldCBsb2dpbkluZm8gPSBhd2FpdCB3eC5sb2dpbigpO1xuICAgICAgYXdhaXQgd3guc2V0U3RvcmFnZSh7IGtleTogJ2NvZGUnLCBkYXRhOiBsb2dpbkluZm8uY29kZSB9KTtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIHRoaXMuZ2xvYmFsRGF0YS5zdG9yYWdlID0gYXdhaXQgdGhpcy5nZXRTdG9yYWdlKCk7XG4gIH1cbiAgYXN5bmMgZ2V0U3RvcmFnZSAoKXtcbiAgICBsZXQgbG9jYWxTZXNzaW9uID0ge307XG4gICAgbGV0IHN0b3JhZ2VJbmZvID0gYXdhaXQgd3guZ2V0U3RvcmFnZUluZm8oKTtcbiAgICBsZXQga2V5cyA9IHN0b3JhZ2VJbmZvLmtleXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgd3guZ2V0U3RvcmFnZSh7IGtleToga2V5c1tpXSB9KTtcbiAgICAgIGxvY2FsU2Vzc2lvbltrZXlzW2ldXSA9IHJlcy5kYXRhIHx8ICcnO1xuICAgIH1cbiAgICAvL3RoaXMuZ2xvYmFsRGF0YS5zdG9yYWdlID0gbG9jYWxTZXNzaW9uO1xuICAgIHJldHVybiBsb2NhbFNlc3Npb247XG4gIH1cbiAgYXN5bmMgZ2V0VXNlckluZm8oKSB7XG4gICAgbGV0IHJlcyA9IGF3YWl0IHd4LmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgIHJldHVybiByZXMudXNlckluZm87XG4gIH1cblxuICBcbiAgYXN5bmMgYmluZExvZ2luKHVybCxibCl7XG4gICAgYXdhaXQgdGhpcy5jaGVja0xvZ2luKHVybCxibCk7XG4gIH1cbiAgYXN5bmMgY2hlY2tMb2dpbih1cmwsYmwpe1xuICAgIC8vd3guY2xlYXJTdG9yYWdlKCk7XG4gICAgYXdhaXQgdGhpcy5kb0xvZ2luKHVybCxibCk7XG4gIH1cbiAgYXN5bmMgZG9Mb2dpbih1cmwsYmwpIHtcbiAgICBpZihibCl7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOnVybFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwb3N0ZGF0YSA9IHtcbiAgICAgIGNvZGU6d3guYXBwLmdsb2JhbERhdGEuc3RvcmFnZS5jb2RlLFxuICAgICAgc2Vzc2lvbktleTp3eC5hcHAuZ2xvYmFsRGF0YS5zdG9yYWdlLnNlc3Npb25LZXlcbiAgICB9O1xuICAgIC8vY29uc29sZS5sb2cod3guYXBwLmdsb2JhbERhdGEpXG4gICAgaWYoIXBvc3RkYXRhLnNlc3Npb25LZXkpe1xuICAgICAgLy9hd2FpdCB3eC5zZXRTdG9yYWdlKHsga2V5OiAnc2Vzc2lvbktleScsIGRhdGE6IFwiMTExXCJ9KTtcbiAgICAgIGxldCByZFJlcyA9IGF3YWl0IHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3hjeC5jaGluYW11eGllLmNvbS93eGFwaS91c2VyL29hdXRoL3d4TG9naW4nLFxuICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBwb3N0ZGF0YVxuICAgICAgfSk7XG4gICAgICBhd2FpdCB3eC5zZXRTdG9yYWdlKHsga2V5OiAnc2Vzc2lvbktleScsIGRhdGE6IHJkUmVzLmRhdGEuZGF0YX0pO1xuICAgICAgd3guYXBwLmdsb2JhbERhdGEuc3RvcmFnZSA9ICBhd2FpdCAgd3guYXBwLmdldFN0b3JhZ2UoKTtcbiAgICB9XG4gICAgbGV0IHVzZXJJbmZvID0gYXdhaXQgd3guZ2V0VXNlckluZm8oKTtcbiAgICBsZXQgdXNlckluZm9Qb3N0ID0gYXdhaXQgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwczovL3hjeC5jaGluYW11eGllLmNvbS93eGFwaS91c2VyL29hdXRoL2RvT2F1dGgnLFxuICAgICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmF3RGF0YTp1c2VySW5mby5yYXdEYXRhLFxuICAgICAgICBzaWduYXR1cmU6dXNlckluZm8uc2lnbmF0dXJlLFxuICAgICAgICBlbmNyeXB0ZWREYXRhOmVuY29kZVVSSUNvbXBvbmVudCh1c2VySW5mby5lbmNyeXB0ZWREYXRhKSxcbiAgICAgICAgaXY6ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJbmZvLml2KSxcbiAgICAgICAgc2Vzc2lvbktleTogd3guYXBwLmdsb2JhbERhdGEuc3RvcmFnZS5zZXNzaW9uS2V5LFxuICAgICAgICBjb2RlOnBvc3RkYXRhLmNvZGVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBpZih1c2VySW5mb1Bvc3QuZGF0YS5kYXRhID09IFwibG9nZ2VkXCIpe1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgdXJsOnVybFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmKHVzZXJJbmZvUG9zdC5kYXRhLmRhdGEgPT0gXCJub3RMb2dnZWRcIil7XG4gICAgICBhd2FpdCB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOicvcGFnZXMvYmluZHBob25lL2JpbmRwaG9uZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=
{
var __app=new exports.default();Object.getOwnPropertyNames(__app.constructor.prototype).forEach(function(name){if(name!=='constructor')__app[name]=__app.constructor.prototype[name]});App(__app);
}