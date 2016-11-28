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
      userNickname: '',
      userTrueName: '',
      userGender: '',
      userIdNumber: '',
      userPhone: '',
      userEmail: '',
      userHeadimgurl: '',
      active: '',
      sexm: '',
      sexw: '',
      sex: '男',
      chooseSex: '男'
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Profile, [{
    key: 'getData',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/user/userInfo/index',
                  method: "GET",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    code: _labrador2.default.app.globalData.storage.code
                  }
                });

              case 2:
                res = _context.sent;

                if (res.data.status == 0) {
                  this.setData({
                    userNickname: res.data.data.userNickname,
                    userTrueName: res.data.data.userTrueName,
                    userGender: res.data.data.userGender,
                    userIdNumber: res.data.data.userIdNumber,
                    userPhone: res.data.data.userPhone,
                    userEmail: res.data.data.userEmail,
                    userHeadimgurl: res.data.data.userHeadimgurl
                  });
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref2.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'linkTo',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(event) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.isLink) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                this.isLink = true;
                _context2.next = 5;
                return _labrador2.default.navigateTo({
                  url: event.currentTarget.dataset.link
                });

              case 5:
                this.isLink = false;

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function linkTo(_x) {
        return _ref3.apply(this, arguments);
      }

      return linkTo;
    }()
  }, {
    key: 'choose',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var res, animation;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _labrador2.default.request({
                  url: "https://xcx.chinamuxie.com/wxapi/user/userInfo/gender",
                  method: "GET",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    code: _labrador2.default.app.globalData.storage.code
                  }
                });

              case 2:
                res = _context3.sent;

                if (res.data.status == 0) {
                  if (res.data.data == "男") {
                    this.setData({
                      sexm: res.data.data
                    });
                  } else if (res.data.data == "女") {
                    this.setData({
                      sexw: res.data.data
                    });
                  } else {
                    this.setData({
                      sexm: "男"
                    });
                  }
                }
                animation = _labrador2.default.createAnimation({
                  duration: 300,
                  timingFunction: 'ease'
                });

                this.animation = animation;

                animation.translateY(0).step();

                this.setData({
                  animationData: animation.export()
                });

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function choose() {
        return _ref4.apply(this, arguments);
      }

      return choose;
    }()
  }, {
    key: 'chooseSex',
    value: function chooseSex(e) {
      var id = e.currentTarget.id;
      if (id == "sexm") {
        this.setData({
          sexm: id,
          sexw: null,
          chooseSex: '男'
        });
      } else if (id == "sexw") {
        this.setData({
          sexm: null,
          sexw: id,
          chooseSex: '女'
        });
      } else {
        return;
      }
    }
  }, {
    key: 'chooseClose',
    value: function chooseClose() {
      var animation = _labrador2.default.createAnimation({
        duration: 300,
        timingFunction: 'ease'
      });
      this.animation = animation;

      animation.translateY('100%').step();

      this.setData({
        animationData: animation.export()
      });
    }
  }, {
    key: 'chooseSure',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(e) {
        var postData, res, animation;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.status) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return');

              case 2:
                this.status = true;
                postData = {
                  code: _labrador2.default.app.globalData.storage.code,
                  gender: e.currentTarget.dataset.choose
                };
                _context4.next = 6;
                return _labrador2.default.request({
                  url: "https://xcx.chinamuxie.com/wxapi/user/userInfo/modifyGender",
                  method: "POST",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: postData
                });

              case 6:
                res = _context4.sent;

                if (res.data.status == 0) {
                  this.setData({
                    userGender: e.currentTarget.dataset.choose
                  });
                  animation = _labrador2.default.createAnimation({
                    duration: 300,
                    timingFunction: 'ease'
                  });

                  this.animation = animation;

                  animation.translateY('100%').step();

                  this.setData({
                    animationData: animation.export()
                  });
                }
                this.status = false;

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function chooseSure(_x2) {
        return _ref5.apply(this, arguments);
      }

      return chooseSure;
    }()
  }, {
    key: 'quit',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(e) {
        var res;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this.status) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return');

              case 2:
                this.status = true;
                _context5.next = 5;
                return _labrador2.default.request({
                  url: "https://xcx.chinamuxie.com/wxapi/user/logout",
                  method: "GET",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    code: _labrador2.default.app.globalData.storage.code
                  }
                });

              case 5:
                res = _context5.sent;

                if (res.data.status == 0) {
                  _labrador2.default.clearStorage();
                  _labrador2.default.navigateBack();
                }
                this.status = false;

              case 8:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function quit(_x3) {
        return _ref6.apply(this, arguments);
      }

      return quit;
    }()
    /* async onLoad(e){
       this.getData();
     }*/

  }, {
    key: 'onShow',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(e) {
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.getData();

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onShow(_x4) {
        return _ref7.apply(this, arguments);
      }

      return onShow;
    }()
  }]);
  return Profile;
}(_labrador2.default.Component);


Page(_labrador._createPage(Profile));

})(module,require);