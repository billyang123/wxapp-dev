'use strict';
(function(module,require){var exports=module.exports={};
var global=window=require('../../npm/labrador/global.js');

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('../../npm/babel-runtime/helpers/defineProperty.js');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _navbar = require('../../components/navbar/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Account = function (_wx$Component) {
	(0, _inherits3.default)(Account, _wx$Component);

	function Account() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Account);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Account.__proto__ || (0, _getPrototypeOf2.default)(Account)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			login: false,
			userInfo: {},
			assetsPath: _labrador2.default.app.data.assetsPath
		}, _this.children = {
			navbar: new _navbar2.default({ cur: 1 })
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Account, [{
		key: 'linkTo',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!this.isLink) {
									_context.next = 2;
									break;
								}

								return _context.abrupt('return');

							case 2:
								this.isLink = true;
								_context.next = 5;
								return _labrador2.default.app.bindLogin(event.currentTarget.dataset.link, this.data.login);

							case 5:
								this.isLink = false;
								/*wx.navigateTo({
          url:event.currentTarget.dataset.link
        })*/

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function linkTo(_x) {
				return _ref2.apply(this, arguments);
			}

			return linkTo;
		}()
	}, {
		key: 'bindLogin',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.checkLogin();

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function bindLogin() {
				return _ref3.apply(this, arguments);
			}

			return bindLogin;
		}()
	}, {
		key: 'json2Form',
		value: function json2Form(json) {
			var str = [];
			for (var p in json) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
			}
			return str.join("&");
		}
	}, {
		key: 'makePhoneCall',
		value: function makePhoneCall(event) {
			_labrador2.default.app.makePhoneCall(event);
		}
	}, {
		key: 'doLogin',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
				var _data;

				var postdata, rdRes, userInfo, userInfoPost, myuser;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (!this.data.login) {
									_context3.next = 2;
									break;
								}

								return _context3.abrupt('return');

							case 2:
								if (!this.status) {
									_context3.next = 4;
									break;
								}

								return _context3.abrupt('return');

							case 4:
								this.status = true;
								_labrador2.default.showToast({
									title: '登录中',
									icon: 'loading',
									duration: 30000
								});
								postdata = {
									code: _labrador2.default.app.globalData.storage.code,
									sessionKey: _labrador2.default.app.globalData.storage.sessionKey
								};

								if (postdata.sessionKey) {
									_context3.next = 16;
									break;
								}

								_context3.next = 10;
								return _labrador2.default.request({
									url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/wxLogin',
									method: "POST",
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									data: postdata
								});

							case 10:
								rdRes = _context3.sent;
								_context3.next = 13;
								return _labrador2.default.setStorage({ key: 'sessionKey', data: rdRes.data.data });

							case 13:
								_context3.next = 15;
								return _labrador2.default.app.getStorage();

							case 15:
								_labrador2.default.app.globalData.storage = _context3.sent;

							case 16:
								_context3.next = 18;
								return _labrador2.default.getUserInfo();

							case 18:
								userInfo = _context3.sent;
								_context3.next = 21;
								return _labrador2.default.request({
									url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/doOauth',
									method: "POST",
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									data: (_data = {
										code: _labrador2.default.app.globalData.storage.code,
										rawData: userInfo.rawData,
										signature: userInfo.signature,
										encryptedData: encodeURIComponent(userInfo.encryptedData),
										iv: encodeURIComponent(userInfo.iv)
									}, (0, _defineProperty3.default)(_data, 'code', postdata.code), (0, _defineProperty3.default)(_data, 'sessionKey', _labrador2.default.app.globalData.storage.sessionKey), _data)
								});

							case 21:
								userInfoPost = _context3.sent;

								if (!(userInfoPost.data.data == "logged")) {
									_context3.next = 27;
									break;
								}

								_context3.next = 25;
								return this.getUser(postdata.code);

							case 25:
								myuser = _context3.sent;

								if (myuser.data.data.loginStatus) {
									this.setData({
										login: true,
										userInfo: myuser.data.data
									});
								}

							case 27:
								if (!(userInfoPost.data.data == "notLogged")) {
									_context3.next = 30;
									break;
								}

								_context3.next = 30;
								return _labrador2.default.navigateTo({
									url: '/pages/bindphone/bindphone'
								});

							case 30:
								_labrador2.default.hideToast();
								this.status = false;

							case 32:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function doLogin() {
				return _ref4.apply(this, arguments);
			}

			return doLogin;
		}()
	}, {
		key: 'getUser',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(code) {
				var myuser;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return _labrador2.default.request({
									url: 'https://xcx.chinamuxie.com/wxapi/user/account',
									method: "get",
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									data: {
										code: code
									}
								});

							case 2:
								myuser = _context4.sent;
								return _context4.abrupt('return', myuser);

							case 4:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function getUser(_x2) {
				return _ref5.apply(this, arguments);
			}

			return getUser;
		}()
	}, {
		key: 'checkLogin',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.next = 2;
								return this.doLogin();

							case 2:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function checkLogin() {
				return _ref6.apply(this, arguments);
			}

			return checkLogin;
		}()
	}, {
		key: 'onShow',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
				var myuser;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.next = 2;
								return this.getUser(_labrador2.default.app.globalData.storage.code);

							case 2:
								myuser = _context6.sent;

								if (!myuser.data.data.loginStatus) {
									_context6.next = 7;
									break;
								}

								this.setData({
									login: true,
									userInfo: myuser.data.data
								});
								_context6.next = 12;
								break;

							case 7:
								_context6.next = 9;
								return _labrador2.default.clearStorage();

							case 9:
								_context6.next = 11;
								return _labrador2.default.app.__init();

							case 11:
								this.setData({
									login: false
								});

							case 12:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function onShow() {
				return _ref7.apply(this, arguments);
			}

			return onShow;
		}()
	}]);
	return Account;
}(_labrador2.default.Component);


Page(_labrador._createPage(Account));

})(module,require);