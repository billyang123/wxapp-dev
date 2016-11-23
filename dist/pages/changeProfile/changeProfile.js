'use strict';
(function(module,require){var exports=module.exports={};
var global=window=require('../../npm/labrador/global.js');

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

var Profile = function (_wx$Component) {
  (0, _inherits3.default)(Profile, _wx$Component);

  function Profile() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Profile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      index: '',
      url: '',
      value: '',
      txt: '',
      subUrl: '',
      nickName: '',
      email: '',
      arg: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Profile, [{
    key: 'onSub',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
        var postData, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                postData = {};

                if (!this.data.nickName) {
                  _context.next = 5;
                  break;
                }

                postData = {
                  code: _labrador2.default.app.globalData.storage.code,
                  nickName: this.data.nickName
                };
                _context.next = 10;
                break;

              case 5:
                if (!this.data.email) {
                  _context.next = 9;
                  break;
                }

                postData = {
                  code: _labrador2.default.app.globalData.storage.code,
                  email: this.data.email
                };
                _context.next = 10;
                break;

              case 9:
                return _context.abrupt('return');

              case 10:
                _context.next = 12;
                return _labrador2.default.request({
                  url: this.data.subUrl,
                  method: "POST",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: postData
                });

              case 12:
                res = _context.sent;

                if (res.data.status == 0) {
                  _labrador2.default.navigateBack();
                }

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onSub(_x) {
        return _ref2.apply(this, arguments);
      }

      return onSub;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var id, res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = parseInt(e.type);

                if (id == 1) {
                  this.setData({
                    url: 'https://xcx.chinamuxie.com/wxapi/user/userInfo/nickname',
                    subUrl: 'https://xcx.chinamuxie.com/wxapi/user/userInfo/modifyNickName',
                    value: '昵称',
                    txt: '昵称',
                    email: null,
                    index: id
                  });
                } else if (id == 2) {
                  this.setData({
                    url: 'https://xcx.chinamuxie.com/wxapi/user/userInfo/email',
                    subUrl: 'https://xcx.chinamuxie.com/wxapi/user/userInfo/modifyEmail',
                    value: '请输入您的邮箱',
                    txt: '邮箱',
                    nickName: null,
                    index: id
                  });
                }
                _context2.next = 4;
                return _labrador2.default.request({
                  url: this.data.url,
                  method: "GET",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    code: _labrador2.default.app.globalData.storage.code
                  }
                });

              case 4:
                res = _context2.sent;

                if (res.data.status == 0) {
                  if (res.data.data) {
                    if (id == 1) {
                      this.setData({
                        nickName: res.data.data,
                        value: res.data.data
                      });
                    } else if (id == 2) {
                      this.setData({
                        email: res.data.data,
                        value: res.data.data
                      });
                    }
                  } else {
                    this.setData({
                      value: this.data.value
                    });
                  }
                }

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x2) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'bindKeyInput',
    value: function bindKeyInput(e) {
      var index = e.currentTarget.dataset.index;
      if (index == 1) {
        this.setData({
          nickName: e.detail.value
        });
      } else if (index == 2) {
        this.setData({
          email: e.detail.value
        });
      }
    }
  }]);
  return Profile;
}(_labrador2.default.Component);


Page(_labrador._createPage(Profile));

})(module,require);