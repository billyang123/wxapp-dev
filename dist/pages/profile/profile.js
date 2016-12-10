"use strict";var exports=module.exports={};var global=window=require('../../npm/labrador/global.js');
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


//# sourceMappingURL=data:application/json;charset=utf-8;base64;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImRhdGEiLCJ1c2VyTmlja25hbWUiLCJ1c2VyVHJ1ZU5hbWUiLCJ1c2VyR2VuZGVyIiwidXNlcklkTnVtYmVyIiwidXNlclBob25lIiwidXNlckVtYWlsIiwidXNlckhlYWRpbWd1cmwiLCJhY3RpdmUiLCJzZXhtIiwic2V4dyIsInNleCIsImNob29zZVNleCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJjb2RlIiwiYXBwIiwiZ2xvYmFsRGF0YSIsInN0b3JhZ2UiLCJyZXMiLCJzdGF0dXMiLCJzZXREYXRhIiwiZXZlbnQiLCJpc0xpbmsiLCJuYXZpZ2F0ZVRvIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJsaW5rIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsInRyYW5zbGF0ZVkiLCJzdGVwIiwiYW5pbWF0aW9uRGF0YSIsImV4cG9ydCIsImUiLCJpZCIsInBvc3REYXRhIiwiZ2VuZGVyIiwiY2hvb3NlIiwiY2xlYXJTdG9yYWdlIiwibmF2aWdhdGVCYWNrIiwiZ2V0RGF0YSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7OzhNQUNwQkMsSSxHQUFLO0FBQ0ZDLG9CQUFhLEVBRFg7QUFFRkMsb0JBQWEsRUFGWDtBQUdGQyxrQkFBVyxFQUhUO0FBSUZDLG9CQUFhLEVBSlg7QUFLRkMsaUJBQVUsRUFMUjtBQU1GQyxpQkFBVSxFQU5SO0FBT0ZDLHNCQUFlLEVBUGI7QUFRRkMsY0FBTyxFQVJMO0FBU0ZDLFlBQUssRUFUSDtBQVVGQyxZQUFLLEVBVkg7QUFXRkMsV0FBSSxHQVhGO0FBWUZDLGlCQUFVO0FBWlIsSzs7Ozs7Ozs7Ozs7Ozt1QkFlYyxtQkFBR0MsT0FBSCxDQUFXO0FBQ3pCQyx1QkFBSyxz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QUZpQixtQkFBbkIsQ0FKTTs7QUFRdEIsdUJBQUtILFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBQSw0QkFBVUksVUFBVixDQUFxQixNQUFyQixFQUE2QkMsSUFBN0I7O0FBRUEsdUJBQUtaLE9BQUwsQ0FBYTtBQUNYYSxtQ0FBY04sVUFBVU8sTUFBVjtBQURILG1CQUFiO0FBSUQ7QUFDRCxxQkFBS2YsTUFBTCxHQUFjLEtBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0ZBRVNnQixDOzs7Ozs7cUJBQ04sS0FBS2hCLE07Ozs7Ozs7O0FBQ1IscUJBQUtBLE1BQUwsR0FBYyxJQUFkOzt1QkFDZ0IsbUJBQUdULE9BQUgsQ0FBVztBQUN6QkMsdUJBQUssOENBRG9CO0FBRXpCQywwQkFBTyxLQUZrQjtBQUd6QkMsMEJBQVE7QUFDTixvQ0FBZ0I7QUFEVixtQkFIaUI7QUFNekJoQix3QkFBTTtBQUNKaUIsMEJBQUssbUJBQUdDLEdBQUgsQ0FBT0MsVUFBUCxDQUFrQkMsT0FBbEIsQ0FBMEJIO0FBRDNCO0FBTm1CLGlCQUFYLEM7OztBQUFaSSxtQjs7QUFVSixvQkFBR0EsSUFBSXJCLElBQUosQ0FBU3NCLE1BQVQsSUFBbUIsQ0FBdEIsRUFBd0I7QUFDdEIscUNBQUdxQixZQUFIO0FBQ0EscUNBQUdDLFlBQUg7QUFJRDtBQUNELHFCQUFLdEIsTUFBTCxHQUFjLEtBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSDs7Ozs7OzsrRkFHY2dCLEM7Ozs7O0FBQ1gscUJBQUtPLE9BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5MaUMsbUJBQUdDLFM7O2tCQUFuQi9DLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3eCBmcm9tICdsYWJyYWRvcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgd3guQ29tcG9uZW50IHtcblx0ZGF0YT17XG4gICAgdXNlck5pY2tuYW1lOicnLFxuICAgIHVzZXJUcnVlTmFtZTonJyxcbiAgICB1c2VyR2VuZGVyOicnLFxuICAgIHVzZXJJZE51bWJlcjonJyxcbiAgICB1c2VyUGhvbmU6JycsXG4gICAgdXNlckVtYWlsOicnLFxuICAgIHVzZXJIZWFkaW1ndXJsOicnLFxuICAgIGFjdGl2ZTonJyxcbiAgICBzZXhtOicnLFxuICAgIHNleHc6JycsXG4gICAgc2V4OifnlLcnLFxuICAgIGNob29zZVNleDon55S3J1xuXHR9O1xuICBhc3luYyBnZXREYXRhKCl7XG4gICAgbGV0IHJlcyA9IGF3YWl0IHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cHM6Ly94Y3guY2hpbmFtdXhpZS5jb20vd3hhcGkvdXNlci91c2VySW5mby9pbmRleCcsXG4gICAgICBtZXRob2Q6XCJHRVRcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6d3guYXBwLmdsb2JhbERhdGEuc3RvcmFnZS5jb2RlXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYocmVzLmRhdGEuc3RhdHVzID09IDApe1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdXNlck5pY2tuYW1lOnJlcy5kYXRhLmRhdGEudXNlck5pY2tuYW1lLFxuICAgICAgICB1c2VyVHJ1ZU5hbWU6cmVzLmRhdGEuZGF0YS51c2VyVHJ1ZU5hbWUsXG4gICAgICAgIHVzZXJHZW5kZXI6cmVzLmRhdGEuZGF0YS51c2VyR2VuZGVyLFxuICAgICAgICB1c2VySWROdW1iZXI6cmVzLmRhdGEuZGF0YS51c2VySWROdW1iZXIsXG4gICAgICAgIHVzZXJQaG9uZTpyZXMuZGF0YS5kYXRhLnVzZXJQaG9uZSxcbiAgICAgICAgdXNlckVtYWlsOnJlcy5kYXRhLmRhdGEudXNlckVtYWlsLFxuICAgICAgICB1c2VySGVhZGltZ3VybDpyZXMuZGF0YS5kYXRhLnVzZXJIZWFkaW1ndXJsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBhc3luYyBsaW5rVG8oZXZlbnQpIHtcbiAgICAgIGlmKHRoaXMuaXNMaW5rKSByZXR1cm47XG4gICAgICB0aGlzLmlzTGluayA9IHRydWU7XG4gICAgICBhd2FpdCB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOmV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5saW5rXG4gICAgICB9KVxuICAgICAgdGhpcy5pc0xpbmsgPSBmYWxzZTtcbiAgfVxuICBhc3luYyBjaG9vc2UoKXtcbiAgICBsZXQgcmVzID0gYXdhaXQgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly94Y3guY2hpbmFtdXhpZS5jb20vd3hhcGkvdXNlci91c2VySW5mby9nZW5kZXJcIixcbiAgICAgIG1ldGhvZDpcIkdFVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTp3eC5hcHAuZ2xvYmFsRGF0YS5zdG9yYWdlLmNvZGVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihyZXMuZGF0YS5zdGF0dXMgPT0gMCl7XG4gICAgICBpZiAocmVzLmRhdGEuZGF0YT09XCLnlLdcIil7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgc2V4bTpyZXMuZGF0YS5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9ZWxzZSBpZiAocmVzLmRhdGEuZGF0YT09XCLlpbNcIil7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgc2V4dzpyZXMuZGF0YS5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgc2V4bTpcIueUt1wiXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBcblxuICAgIH1cbiAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxuICAgIH0pO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuXG4gICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpO1xuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFuaW1hdGlvbkRhdGE6YW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgfSk7XG4gICAgXG4gIH1cbiAgY2hvb3NlU2V4KGUpe1xuICAgIGxldCBpZD1lLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgaWYgKGlkPT1cInNleG1cIil7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZXhtOmlkLFxuICAgICAgICBzZXh3Om51bGwsXG4gICAgICAgIGNob29zZVNleDon55S3J1xuICAgICAgfSlcbiAgICB9ZWxzZSBpZiAoaWQ9PVwic2V4d1wiKXtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNleG06bnVsbCxcbiAgICAgICAgc2V4dzppZCxcbiAgICAgICAgY2hvb3NlU2V4OiflpbMnXG4gICAgICB9KVxuICAgIH1lbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gIH1cbiAgY2hvb3NlQ2xvc2UoKXtcbiAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxuICAgIH0pO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuXG4gICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoJzEwMCUnKS5zdGVwKCk7XG5cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYW5pbWF0aW9uRGF0YTphbmltYXRpb24uZXhwb3J0KClcbiAgICB9KVxuICB9XG4gIGFzeW5jIGNob29zZVN1cmUoZSl7XG4gICAgaWYodGhpcy5zdGF0dXMpIHJldHVybjtcbiAgICB0aGlzLnN0YXR1cyA9IHRydWU7XG4gICAgbGV0ICBwb3N0RGF0YT17XG4gICAgICBjb2RlOnd4LmFwcC5nbG9iYWxEYXRhLnN0b3JhZ2UuY29kZSxcbiAgICAgIGdlbmRlcjplLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jaG9vc2VcbiAgICB9O1xuICAgIGxldCByZXMgPSBhd2FpdCB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogXCJodHRwczovL3hjeC5jaGluYW11eGllLmNvbS93eGFwaS91c2VyL3VzZXJJbmZvL21vZGlmeUdlbmRlclwiLFxuICAgICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHBvc3REYXRhXG4gICAgfSk7XG4gICAgaWYocmVzLmRhdGEuc3RhdHVzID09IDApe1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdXNlckdlbmRlcjplLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jaG9vc2VcbiAgICAgIH0pO1xuICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuXG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgnMTAwJScpLnN0ZXAoKTtcblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYW5pbWF0aW9uRGF0YTphbmltYXRpb24uZXhwb3J0KClcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgfVxuICBhc3luYyBxdWl0KGUpe1xuICAgIGlmKHRoaXMuc3RhdHVzKSByZXR1cm47XG4gICAgdGhpcy5zdGF0dXMgPSB0cnVlO1xuICAgIGxldCByZXMgPSBhd2FpdCB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogXCJodHRwczovL3hjeC5jaGluYW11eGllLmNvbS93eGFwaS91c2VyL2xvZ291dFwiLFxuICAgICAgbWV0aG9kOlwiR0VUXCIsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOnd4LmFwcC5nbG9iYWxEYXRhLnN0b3JhZ2UuY29kZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKHJlcy5kYXRhLnN0YXR1cyA9PSAwKXtcbiAgICAgIHd4LmNsZWFyU3RvcmFnZSgpO1xuICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XG4gICAgIFxuXG5cbiAgICB9XG4gICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgfVxuIC8qIGFzeW5jIG9uTG9hZChlKXtcbiAgICB0aGlzLmdldERhdGEoKTtcbiAgfSovXG4gIGFzeW5jIG9uU2hvdyhlKXtcbiAgICB0aGlzLmdldERhdGEoKTtcbiAgfVxufVxuIl19
Page(_labrador._createPage(Profile));
