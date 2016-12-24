'use strict';
(function(module,require){var exports=module.exports={};
var global=window=require('../../npm/labrador/global.js');
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('../../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('../../npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('../../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('../../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../../npm/babel-runtime/helpers/createClass.js');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _labrador = require('../../npm/labrador/index.js');

var _labrador2 = _interopRequireDefault(_labrador);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bindphone = function (_wx$Component) {
  (0, _inherits3.default)(Bindphone, _wx$Component);

  function Bindphone() {
    var _ref;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, Bindphone);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Bindphone.__proto__ || (0, _getPrototypeOf2.default)(Bindphone)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      userInfo: {},
      phoneValue: "",
      codeValue: "",
      btnText: "获取验证码",
      disabled: true,
      cDisCls: "btn",
      loading: false,
      tmOn: false,
      bl: true,
      btnBl: true
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(Bindphone, [{
    key: "bindKeyInput",
    value: function bindKeyInput(e) {
      var name = e.target.dataset.name,
          data = {};
      data[name] = e.detail.value;
      this.setData(data);
    }
  }, {
    key: "shoutTime",
    value: function shoutTime() {
      var _this = this;
      var secNum = 60;
      var STM = null;
      if (this.tmOn) return;
      this.setData({
        cDisCls: "btn disabled",
        btnText: secNum + "秒后重发",
        tmOn: true
      });
      STM = setInterval(function () {
        secNum--;
        if (secNum <= 0) {
          clearInterval(STM);
          _this.setData({
            cDisCls: "btn",
            bl: true,
            btnText: "获取验证码",
            tmOn: false
          });
        } else {
          _this.setData({
            btnText: secNum + "秒后重发"
          });
        }
      }, 1000);
    }
  }, {
    key: "checkisPhone",
    value: function checkisPhone(_phone) {
      var phone = /^1(2|3|4|5|6|7|8)[0-9]{9}$/;

      if (phone.test(_phone)) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "doBind",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
        var postBind;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.checkisPhone(this.data.phoneValue)) {
                  _context.next = 3;
                  break;
                }

                _labrador2.default.showModal({
                  title: '提示',
                  content: '请输入有效手机号',
                  showCancel: false,
                  success: function success(res) {}
                });
                return _context.abrupt("return");

              case 3:
                if (!(!this.data.codeValue.length > 0)) {
                  _context.next = 6;
                  break;
                }

                _labrador2.default.showModal({
                  title: '提示',
                  content: '请输入有效验证码',
                  showCancel: false,
                  success: function success(res) {}
                });
                return _context.abrupt("return");

              case 6:
                if (!this.data.btnBl) {
                  _context.next = 13;
                  break;
                }

                this.setData({
                  btnBl: false
                });
                _context.next = 10;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/user/doBindPhone',
                  method: "POST",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    phone: this.data.phoneValue,
                    valideCode: this.data.codeValue,
                    code: _labrador2.default.app.globalData.storage.code
                  }
                });

              case 10:
                postBind = _context.sent;

                if (postBind.data.status == 0) {
                  _labrador2.default.showToast({
                    title: '绑定成功',
                    icon: 'success',
                    duration: 2000
                  });
                  // await wx.switchTab({
                  //   url:"/pages/account/account"
                  // })
                  _labrador2.default.navigateBack();
                } else {
                  _labrador2.default.showModal({
                    title: '提示',
                    content: postBind.data.msg,
                    showCancel: false,
                    success: function success(res) {
                      if (res.confirm) {
                        console.log('用户点击确定');
                      }
                    }
                  });
                }
                this.setData({
                  btnBl: true
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function doBind(_x) {
        return _ref2.apply(this, arguments);
      }

      return doBind;
    }()
  }, {
    key: "getCheckCode",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var postCode;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.checkisPhone(this.data.phoneValue)) {
                  _context2.next = 3;
                  break;
                }

                _labrador2.default.showModal({
                  title: '提示',
                  content: '请输入有效手机号',
                  showCancel: false,
                  success: function success(res) {}
                });
                return _context2.abrupt("return");

              case 3:
                if (!this.data.bl) {
                  _context2.next = 9;
                  break;
                }

                this.setData({
                  bl: false
                });

                _context2.next = 7;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/user/sendCode',
                  method: "POST",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    telphone: this.data.phoneValue
                  }
                });

              case 7:
                postCode = _context2.sent;

                if (postCode.data.status == 0) {
                  this.shoutTime();
                  this.setData({
                    disabled: false
                  });
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCheckCode(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getCheckCode;
    }()
  }, {
    key: "onLoad",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var userInfo;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _labrador2.default.getUserInfo();

              case 2:
                userInfo = _context3.sent;

                this.setData({
                  userInfo: userInfo.userInfo
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad() {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Bindphone;
}(_labrador2.default.Component);


Page(_labrador._createPage(Bindphone));

})(module,require);