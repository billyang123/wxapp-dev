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

var DoctorsList = function (_wx$Component) {
	(0, _inherits3.default)(DoctorsList, _wx$Component);

	function DoctorsList() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, DoctorsList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DoctorsList.__proto__ || (0, _getPrototypeOf2.default)(DoctorsList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			id: "",
			size: 5,
			page: 0,
			hidden: false,
			hasMore: true,
			hasRefesh: false,
			windowHieght: '',
			list: [],
			loading: false
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(DoctorsList, [{
		key: 'getDoctorList',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
				var res, loadMore, content;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!this.data.loading) {
									_context.next = 2;
									break;
								}

								return _context.abrupt('return');

							case 2:
								this.data.loading = true;
								_context.next = 5;
								return _labrador2.default.app.ajax({
									url: 'https://xcx.chinamuxie.com/wxapi/healthserv/doctor/list',
									data: {
										page: this.data.page,
										size: this.data.size
									}
								});

							case 5:
								res = _context.sent;

								if (res.data) {
									_context.next = 10;
									break;
								}

								this.setData({
									hasMore: false,
									list: [],
									hidden: true,
									hasRefesh: false,
									loading: false
								});
								this.data.loading = false;
								return _context.abrupt('return');

							case 10:
								loadMore = true;
								content = res.data.content;

								if (res.data.totalPages == 1 || res.data.totalPages == this.data.page + 1) {
									loadMore = false;
								}
								this.setData({
									hasMore: loadMore,
									list: this.data.list.concat(res.data.content),
									hidden: true,
									hasRefesh: false
								});
								this.data.loading = false;

							case 15:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getDoctorList(_x) {
				return _ref2.apply(this, arguments);
			}

			return getDoctorList;
		}()
	}, {
		key: 'loadMore',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								console.log("loadMore");

								if (this.data.hasMore) {
									_context2.next = 3;
									break;
								}

								return _context2.abrupt('return');

							case 3:
								this.data.page++;
								_context2.next = 6;
								return this.getQAList();

							case 6:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function loadMore(_x2) {
				return _ref3.apply(this, arguments);
			}

			return loadMore;
		}()
	}, {
		key: 'onLoad',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
				var systemInfo;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return _labrador2.default.getSystemInfo();

							case 2:
								systemInfo = _context3.sent;

								this.setData({
									windowHieght: systemInfo.windowHeight
								});
								this.getDoctorList();

							case 5:
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
								this.setData({
									hasMore: true,
									page: 0,
									list: []
								});
								_context4.next = 3;
								return this.getDoctorList();

							case 3:
								_labrador2.default.stopPullDownRefresh();

							case 4:
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
	return DoctorsList;
}(_labrador2.default.Component);


Page(_labrador._createPage(DoctorsList));

})(module,require);