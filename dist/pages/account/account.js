'use strict';
(function(module,require){var exports=module.exports={};

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
		key: 'isLogin',
		value: function isLogin() {
			this.checkLogin();
		}
	}, {
		key: 'checkLogin',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				var check, storageInfo, rdsData, rds, postdata, loginData, rdRes, userInfo, userInfoPost;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _labrador2.default.checkSession();

							case 2:
								check = _context.sent;

								_labrador2.default.clearStorage();

								if (!(check.errMsg == "checkSession:ok")) {
									_context.next = 38;
									break;
								}

								_context.next = 7;
								return _labrador2.default.getStorageInfo();

							case 7:
								storageInfo = _context.sent;

								if (!(storageInfo.keys.indexOf('Loginsessionkey') < 0)) {
									_context.next = 11;
									break;
								}

								_context.next = 11;
								return _labrador2.default.setStorage({ key: 'Loginsessionkey', data: '' });

							case 11:
								_context.next = 13;
								return _labrador2.default.getStorage({ key: 'Loginsessionkey' });

							case 13:
								rdsData = _context.sent;
								rds = rdsData.data;
								postdata = {};

								if (!(rds == '')) {
									_context.next = 25;
									break;
								}

								_context.next = 19;
								return _labrador2.default.login();

							case 19:
								loginData = _context.sent;

								postdata.code = loginData.code;
								_context.next = 23;
								return _labrador2.default.setStorage({ key: 'Loginsessionkey', data: loginData.code });

							case 23:
								_context.next = 26;
								break;

							case 25:
								postdata.sessionKey = rds;

							case 26:
								_context.next = 28;
								return _labrador2.default.request({
									url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/wxLogin',
									//method:"POST",
									header: {
										'Content-Type': 'application/x-www-form-urlencoded'
									},
									data: postdata
								});

							case 28:
								rdRes = _context.sent;
								_context.next = 31;
								return _labrador2.default.getUserInfo();

							case 31:
								userInfo = _context.sent;

								console.log(userInfo);

								if (!postdata.code) {
									_context.next = 37;
									break;
								}

								_context.next = 36;
								return _labrador2.default.request({
									url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/doOauth',
									//method:"POST",
									header: {
										'Content-Type': 'application/x-www-form-urlencoded'
									},
									data: {
										rawData: userInfo.rawData,
										signature: userInfo.signature,
										encryptedData: userInfo.encryptedData,
										iv: userInfo.iv,
										sessionKey: userInfo.sessionKey
									}
								});

							case 36:
								userInfoPost = _context.sent;

							case 37:
								this.setData({
									login: true,
									userInfo: userInfo.userInfo
								});

							case 38:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function checkLogin() {
				return _ref2.apply(this, arguments);
			}

			return checkLogin;
		}()
	}, {
		key: 'onLoad',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function onLoad() {
				return _ref3.apply(this, arguments);
			}

			return onLoad;
		}()
	}]);
	return Account;
}(_labrador2.default.Component);


Page(_labrador._createPage(Account));

})(module,require);