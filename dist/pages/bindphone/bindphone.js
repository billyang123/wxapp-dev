'use strict';
(function(module,require){var exports=module.exports={};
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
			tmOn: false
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
			if (this.tmOn) return;
			this.tmOn = true;
			this.setData({
				cDisCls: "btn disabled",
				btnText: secNum + "秒后重发"
			});
			var STM = setInterval(function () {
				secNum--;
				if (secNum <= 0) {
					clearInterval(STM);
					this.tmOn = false;
					_this.setData({
						cDisCls: ""
					});
				}
				_this.setData({
					btnText: secNum + "秒后重发"
				});
			}, 1000);
		}
	}, {
		key: "getCheckCode",
		value: function getCheckCode(e) {
			this.shoutTime();
		}
	}, {
		key: "onLoad",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				var userInfo;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _labrador2.default.getUserInfo();

							case 2:
								userInfo = _context.sent;

								this.setData({
									userInfo: userInfo.userInfo
								});

							case 4:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function onLoad() {
				return _ref2.apply(this, arguments);
			}

			return onLoad;
		}()
	}]);
	return Bindphone;
}(_labrador2.default.Component);


Page(_labrador._createPage(Bindphone));

})(module,require);