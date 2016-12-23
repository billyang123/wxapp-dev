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

var Recharge = function (_wx$Component) {
	(0, _inherits3.default)(Recharge, _wx$Component);

	function Recharge() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Recharge);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Recharge.__proto__ || (0, _getPrototypeOf2.default)(Recharge)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			tabNum: 0,
			totalNum: "",
			assetsPath: _labrador2.default.app.data.assetsPath,
			yuNum: "",
			name: "",
			pname: ""
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Recharge, [{
		key: "chashMoney",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
				var _url, res, payResult;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_url = "https://xcx.chinamuxie.com/wxapi/project/account/recharge";
								_context.next = 3;
								return _labrador2.default.request({
									url: _url,
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									method: "POST",
									data: {
										projectAccountId: this.projectAccountId,
										rechargeAmount: this.data.totalNum * 1,
										code: _labrador2.default.app.globalData.storage.code
									}
								});

							case 3:
								res = _context.sent;

								if (!(res.data.status == 0)) {
									_context.next = 10;
									break;
								}

								_context.next = 7;
								return _labrador2.default.requestPayment(res.data.data);

							case 7:
								payResult = _context.sent;
								_context.next = 10;
								return _labrador2.default.redirectTo({
									url: '/pages/paySuccess/paySuccess'
								});

							case 10:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function chashMoney(_x) {
				return _ref2.apply(this, arguments);
			}

			return chashMoney;
		}()
	}, {
		key: "bindinput",
		value: function bindinput(event) {
			if (event.detail.value != "") {
				this.setData({
					tabNum: 0
				});
			}
			this.setData({
				totalNum: event.detail.value
			});
		}
	}, {
		key: "moneyTab",
		value: function moneyTab(event) {
			console.log(event);
			var num = event.currentTarget.dataset.num;
			this.setData({
				tabNum: num * 1,
				totalNum: num * 1
			});
		}
	}, {
		key: "onLoad",
		value: function onLoad(e) {
			console.log(e);
			this.setData({
				yuNum: e["amp;num"],
				name: e["amp;name"],
				pname: e["amp;pname"]
			});
			this.projectAccountId = e.pid;
		}
	}]);
	return Recharge;
}(_labrador2.default.Component);


Page(_labrador._createPage(Recharge));

})(module,require);