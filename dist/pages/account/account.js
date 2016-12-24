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

var _navbar = require('../../components/navbar/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Account = function (_wx$Component) {
	(0, _inherits3.default)(Account, _wx$Component);

	function Account() {
		var _ref;

		var _temp, _this2, _ret;

		(0, _classCallCheck3.default)(this, Account);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Account.__proto__ || (0, _getPrototypeOf2.default)(Account)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
			login: false,
			userInfo: {},
			assetsPath: _labrador2.default.app.data.assetsPath,
			wxUserInfo: _labrador2.default.app.globalData.userInfo
		}, _this2.children = {
			navbar: new _navbar2.default({ cur: 2 })
		}, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
	}

	(0, _createClass3.default)(Account, [{
		key: 'linkTo',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
				var _this;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this = this;

								if (!this.isLink) {
									_context.next = 3;
									break;
								}

								return _context.abrupt('return');

							case 3:
								this.isLink = true;

								if (this.data.login) {
									_context.next = 9;
									break;
								}

								_context.next = 7;
								return _labrador2.default.app.doLogin(function (res) {
									_this.setData({
										login: true,
										userInfo: res.data
									});
									_labrador2.default.navigateTo({
										url: event.currentTarget.dataset.link
									});
								});

							case 7:
								_context.next = 11;
								break;

							case 9:
								_context.next = 11;
								return _labrador2.default.navigateTo({
									url: event.currentTarget.dataset.link
								});

							case 11:
								this.isLink = false;

							case 12:
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
				var _this;

				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_this = this;
								//await this.checkLogin();
								//console.log(_this)

								_labrador2.default.app.doLogin(function (res, wxUserInfo) {
									_this.setData({
										login: true,
										userInfo: res.data,
										wxUserInfo: wxUserInfo
									});
								});

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
		key: 'initAcount',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
				var myuser;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (_labrador2.default.app.globalData.storage.code) {
									_context3.next = 4;
									break;
								}

								this.setData({
									login: false
								});
								_context3.next = 8;
								break;

							case 4:
								_context3.next = 6;
								return _labrador2.default.app.getUser(_labrador2.default.app.globalData.storage.code);

							case 6:
								myuser = _context3.sent;

								if (myuser.data.loginStatus) {
									this.setData({
										login: true,
										userInfo: myuser.data,
										wxUserInfo: _labrador2.default.app.globalData.userInfo
									});
								} else {
									//await wx.clearStorage();
									this.setData({
										login: false
									});
								}

							case 8:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function initAcount() {
				return _ref4.apply(this, arguments);
			}

			return initAcount;
		}()
		// async onLoad(){
		// 	//console.log(wx.app.globalData)
		// 	//this.initAcount();
		// }

	}, {
		key: 'onShow',
		value: function onShow() {
			this.initAcount();
			_labrador2.default.app.stopAudio();
		}
	}, {
		key: 'onPullDownRefresh',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return this.initAcount();

							case 2:
								_labrador2.default.stopPullDownRefresh();

							case 3:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function onPullDownRefresh() {
				return _ref5.apply(this, arguments);
			}

			return onPullDownRefresh;
		}()
	}]);
	return Account;
}(_labrador2.default.Component);


Page(_labrador._createPage(Account));

})(module,require);