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

var Indemnification = function (_wx$Component) {
	(0, _inherits3.default)(Indemnification, _wx$Component);

	function Indemnification() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Indemnification);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Indemnification.__proto__ || (0, _getPrototypeOf2.default)(Indemnification)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			tpNum: [],
			taNum: [],
			totalPersons: 0,
			totalAmt: 0,
			hasAcount: true,
			list: {}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Indemnification, [{
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
								return _labrador2.default.navigateTo({
									url: event.currentTarget.dataset.link
								});

							case 5:
								this.isLink = false;

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
		key: 'getAcList',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
				var listData;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _labrador2.default.request({
									url: _labrador2.default.app.data.ajaxPath + '/wxapi/project/account/list',
									method: "get",
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									data: {
										code: _labrador2.default.app.globalData.storage.code
									}
								});

							case 2:
								listData = _context2.sent;

								this.setData({
									tpNum: (listData.data.data.totalPersons + "").split(""),
									taNum: (listData.data.data.totalAmt + "").split(""),
									totalPersons: listData.data.data.totalPersons,
									totalAmt: listData.data.data.totalAmt,
									hasAcount: listData.data.data.hasAcount,
									list: listData.data.data.list
								});

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getAcList() {
				return _ref3.apply(this, arguments);
			}

			return getAcList;
		}()
	}, {
		key: 'onLoad',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								this.getAcList();

							case 1:
							case 'end':
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
	}, {
		key: 'onPullDownRefresh',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return this.getAcList();

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
	return Indemnification;
}(_labrador2.default.Component);


Page(_labrador._createPage(Indemnification));

})(module,require);