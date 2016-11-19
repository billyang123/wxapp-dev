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
			userInfo: {}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Account, [{
		key: "linkTo",
		value: function linkTo(event) {
			_labrador2.default.navigateTo({
				url: event.currentTarget.dataset.link
			});
		}
	}, {
		key: "bindLogin",
		value: function bindLogin() {
			this.checkLogin();
		}
	}, {
		key: "json2Form",
		value: function json2Form(json) {
			var str = [];
			for (var p in json) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
			}
			return str.join("&");
		}
	}, {
		key: "doLogin",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				var postdata, rdRes, userInfo, userInfoPost, myuser;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!this.data.login) {
									_context.next = 2;
									break;
								}

								return _context.abrupt("return");

							case 2:
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
									_context.next = 13;
									break;
								}

								_context.next = 7;
								return _labrador2.default.request({
									url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/wxLogin',
									method: "POST",
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									data: postdata
								});

							case 7:
								rdRes = _context.sent;
								_context.next = 10;
								return _labrador2.default.setStorage({ key: 'sessionKey', data: rdRes.data.data });

							case 10:
								_context.next = 12;
								return _labrador2.default.app.getStorage();

							case 12:
								_labrador2.default.app.globalData.storage = _context.sent;

							case 13:
								_context.next = 15;
								return _labrador2.default.getUserInfo();

							case 15:
								userInfo = _context.sent;
								_context.next = 18;
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
										iv: userInfo.iv,
										sessionKey: _labrador2.default.app.globalData.storage.sessionKey,
										code: postdata.code
									}
								});

							case 18:
								userInfoPost = _context.sent;

								if (!(userInfoPost.data.data == "logged")) {
									_context.next = 24;
									break;
								}

								_context.next = 22;
								return this.getUser(postdata.code);

							case 22:
								myuser = _context.sent;

								if (myuser.data.loginStatus) {
									this.setData({
										login: true,
										userInfo: myuser.data.data
									});
								}

							case 24:
								if (!(userInfoPost.data.data == "notlogged")) {
									_context.next = 27;
									break;
								}

								_context.next = 27;
								return _labrador2.default.navigateTo({
									url: '/pages/bindphone/bindphone'
								});

							case 27:
								_labrador2.default.hideToast();

							case 28:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function doLogin() {
				return _ref2.apply(this, arguments);
			}

			return doLogin;
		}()
	}, {
		key: "getUser",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(code) {
				var myuser;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
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
								myuser = _context2.sent;
								return _context2.abrupt("return", myuser);

							case 4:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getUser(_x) {
				return _ref3.apply(this, arguments);
			}

			return getUser;
		}()
	}, {
		key: "checkLogin",
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								//wx.clearStorage();
								this.doLogin();

							case 1:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function checkLogin() {
				return _ref4.apply(this, arguments);
			}

			return checkLogin;
		}()
	}, {
		key: "onLoad",
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
				var myuser;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return this.getUser(_labrador2.default.app.globalData.storage.code);

							case 2:
								myuser = _context4.sent;

								console.log(myuser);
								if (myuser.data.data.loginStatus) {
									this.setData({
										login: true,
										userInfo: myuser.data.data
									});
								} else {
									this.setData({
										login: false
									});
								}

							case 5:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function onLoad() {
				return _ref5.apply(this, arguments);
			}

			return onLoad;
		}()
	}]);
	return Account;
}(_labrador2.default.Component);


Page(_labrador._createPage(Account));

})(module,require);