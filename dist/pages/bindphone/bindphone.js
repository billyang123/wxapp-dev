"use strict";var exports=module.exports={};var global=window=require('../../npm/labrador/global.js');"use strict";

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRwaG9uZS5qcyJdLCJuYW1lcyI6WyJCaW5kcGhvbmUiLCJkYXRhIiwidXNlckluZm8iLCJwaG9uZVZhbHVlIiwiY29kZVZhbHVlIiwiYnRuVGV4dCIsImRpc2FibGVkIiwiY0Rpc0NscyIsImxvYWRpbmciLCJ0bU9uIiwiYmwiLCJidG5CbCIsImUiLCJuYW1lIiwidGFyZ2V0IiwiZGF0YXNldCIsImRldGFpbCIsInZhbHVlIiwic2V0RGF0YSIsIl90aGlzIiwic2VjTnVtIiwiU1RNIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiX3Bob25lIiwicGhvbmUiLCJ0ZXN0IiwiY2hlY2tpc1Bob25lIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInN1Y2Nlc3MiLCJyZXMiLCJsZW5ndGgiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwidmFsaWRlQ29kZSIsImNvZGUiLCJhcHAiLCJnbG9iYWxEYXRhIiwic3RvcmFnZSIsInBvc3RCaW5kIiwic3RhdHVzIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibmF2aWdhdGVCYWNrIiwibXNnIiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJ0ZWxwaG9uZSIsInBvc3RDb2RlIiwic2hvdXRUaW1lIiwiZ2V0VXNlckluZm8iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7OztxTkFDcEJDLEksR0FBTztBQUNOQyxnQkFBUyxFQURIO0FBRU5DLGtCQUFXLEVBRkw7QUFHTkMsaUJBQVUsRUFISjtBQUlOQyxlQUFRLE9BSkY7QUFLTkMsZ0JBQVMsSUFMSDtBQU1OQyxlQUFRLEtBTkY7QUFPTkMsZUFBUSxLQVBGO0FBUU5DLFlBQUssS0FSQztBQVNKQyxVQUFHLElBVEM7QUFVSkMsYUFBTTtBQVZGLEs7Ozs7O2lDQVlNQyxDLEVBQUU7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bGFicmFkb3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5kcGhvbmUgZXh0ZW5kcyB3eC5Db21wb25lbnQge1xuXHRkYXRhID0ge1xuXHRcdHVzZXJJbmZvOnt9LFxuXHRcdHBob25lVmFsdWU6XCJcIixcblx0XHRjb2RlVmFsdWU6XCJcIixcblx0XHRidG5UZXh0Olwi6I635Y+W6aqM6K+B56CBXCIsXG5cdFx0ZGlzYWJsZWQ6dHJ1ZSxcblx0XHRjRGlzQ2xzOlwiYnRuXCIsXG5cdFx0bG9hZGluZzpmYWxzZSxcblx0XHR0bU9uOmZhbHNlLFxuICAgIGJsOnRydWUsXG4gICAgYnRuQmw6dHJ1ZVxuXHR9O1xuXHRiaW5kS2V5SW5wdXQoZSl7XG5cdFx0bGV0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWUsXG5cdFx0XHRkYXRhID0ge307XG5cdFx0ZGF0YVtuYW1lXSA9IGUuZGV0YWlsLnZhbHVlO1xuXHRcdHRoaXMuc2V0RGF0YShkYXRhKTtcblx0fVxuXHRzaG91dFRpbWUoKXtcblx0XHRsZXQgX3RoaXM9IHRoaXM7XG5cdFx0bGV0IHNlY051bSA9IDYwO1xuICAgIGxldCBTVE09bnVsbDtcblx0XHRpZih0aGlzLnRtT24pIHJldHVybjtcblx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0Y0Rpc0NsczpcImJ0biBkaXNhYmxlZFwiLFxuXHRcdFx0YnRuVGV4dDpzZWNOdW0rXCLnp5LlkI7ph43lj5FcIixcbiAgICAgIHRtT246dHJ1ZVxuXHRcdH0pO1xuXHRcdFNUTSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG5cdFx0XHRzZWNOdW0tLTtcblx0XHRcdGlmKHNlY051bSA8PTApe1xuXHRcdFx0XHRjbGVhckludGVydmFsKFNUTSk7XG5cdFx0XHRcdF90aGlzLnNldERhdGEoe1xuXHRcdFx0XHRcdGNEaXNDbHM6XCJidG5cIixcbiAgICAgICAgICBibDp0cnVlLFxuICAgICAgICAgIGJ0blRleHQ6XCLojrflj5bpqozor4HnoIFcIixcbiAgICAgICAgICB0bU9uOmZhbHNlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fWVsc2Uge1xuICAgICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBidG5UZXh0OnNlY051bStcIuenkuWQjumHjeWPkVwiXG4gICAgICAgIH0pXG4gICAgICB9XG5cdFx0XHRcblx0XHR9LDEwMDApO1xuXHR9XG4gIGNoZWNraXNQaG9uZSAoX3Bob25lKSB7XG4gICAgbGV0IHBob25lPS9eMSgyfDN8NHw1fDZ8N3w4KVswLTldezl9JC87XG5cbiAgICBpZihwaG9uZS50ZXN0KF9waG9uZSkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cdGFzeW5jIGRvQmluZChlKXtcbiAgICBpZiAoIXRoaXMuY2hlY2tpc1Bob25lKHRoaXMuZGF0YS5waG9uZVZhbHVlKSl7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmnInmlYjmiYvmnLrlj7cnLFxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRhdGEuY29kZVZhbHVlLmxlbmd0aD4wKXtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgY29udGVudDogJ+ivt+i+k+WFpeacieaViOmqjOivgeeggScsXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5kYXRhLmJ0bkJsKXtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGJ0bkJsOmZhbHNlXG4gICAgICB9KTtcbiAgICAgIGxldCBwb3N0QmluZCA9IGF3YWl0IHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3hjeC5jaGluYW11eGllLmNvbS93eGFwaS91c2VyL2RvQmluZFBob25lJyxcbiAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBob25lOnRoaXMuZGF0YS5waG9uZVZhbHVlLFxuICAgICAgICAgIHZhbGlkZUNvZGU6dGhpcy5kYXRhLmNvZGVWYWx1ZSxcbiAgICAgICAgICBjb2RlOnd4LmFwcC5nbG9iYWxEYXRhLnN0b3JhZ2UuY29kZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmKHBvc3RCaW5kLmRhdGEuc3RhdHVzID09IDApe1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn57uR5a6a5oiQ5YqfJyxcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIGNvbnRlbnQ6IHBvc3RCaW5kLmRhdGEubXNnLFxuICAgICAgICAgIHNob3dDYW5jZWw6ZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYnRuQmw6dHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXHR9XG5cdGFzeW5jIGdldENoZWNrQ29kZShlKXtcbiAgICBcbiAgICBpZiAoIXRoaXMuY2hlY2tpc1Bob25lKHRoaXMuZGF0YS5waG9uZVZhbHVlKSl7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmnInmlYjmiYvmnLrlj7cnLFxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuZGF0YS5ibCl7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBibDpmYWxzZVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGxldCBwb3N0Q29kZSA9IGF3YWl0IHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3hjeC5jaGluYW11eGllLmNvbS93eGFwaS91c2VyL3NlbmRDb2RlJyxcbiAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRlbHBob25lOnRoaXMuZGF0YS5waG9uZVZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihwb3N0Q29kZS5kYXRhLnN0YXR1cyA9PSAwKXtcbiAgICAgICAgdGhpcy5zaG91dFRpbWUoKTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBkaXNhYmxlZDpmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgIH1cblx0XHRcblx0fVxuXHRhc3luYyBvbkxvYWQoKSB7XG5cdCAgICB2YXIgdXNlckluZm8gPSBhd2FpdCB3eC5nZXRVc2VySW5mbygpO1xuXHQgICAgdGhpcy5zZXREYXRhKHtcblx0ICAgIFx0dXNlckluZm86dXNlckluZm8udXNlckluZm9cblx0ICAgIH0pXG5cdH1cbn1cbiJdfQ==
Page(_labrador._createPage(Bindphone));
