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

var Commit = function (_wx$Component) {
	(0, _inherits3.default)(Commit, _wx$Component);

	function Commit() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Commit);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Commit.__proto__ || (0, _getPrototypeOf2.default)(Commit)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			qid: "",
			cid: "",
			textareaVal: "",
			disabled: false,
			url: ""
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Commit, [{
		key: "bindTextAreaBlur",
		value: function bindTextAreaBlur(e) {
			if (e.detail.value == "") {
				this.setData({
					disabled: true,
					textareaVal: ''
				});
			} else {
				this.setData({
					disabled: false,
					textareaVal: e.detail.value
				});
			}
		}
	}, {
		key: "bindTextAreaFocus",
		value: function bindTextAreaFocus(e) {
			if (e.detail.value == "") return;
			this.setData({
				disabled: false
			});
		}
	}, {
		key: "submit",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				var res, sModal;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								this.postdata.content = this.data.textareaVal;
								console.log(this.postdata.content);
								_context.next = 4;
								return _labrador2.default.app.ajax({
									url: this.url,
									data: this.postdata,
									type: "post"
								});

							case 4:
								res = _context.sent;

								if (!(res.status == 0)) {
									_context.next = 8;
									break;
								}

								_context.next = 8;
								return _labrador2.default.navigateBack();

							case 8:
								if (!(res.status == 1)) {
									_context.next = 13;
									break;
								}

								_context.next = 11;
								return _labrador2.default.showModal({
									title: '提示',
									content: '需要先登录'
								});

							case 11:
								sModal = _context.sent;

								if (sModal.confirm) {
									_labrador2.default.redirectTo({
										url: '/pages/account/account'
									});
								}

							case 13:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function submit() {
				return _ref2.apply(this, arguments);
			}

			return submit;
		}()
	}, {
		key: "onLoad",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								this.data.cid = e.qid;
								this.data.rid = e.rid;
								this.postdata = {
									code: _labrador2.default.app.globalData.storage.code
								};
								if (e.qaCommentId) {
									this.postdata.qaCommentId = e.qaCommentId;
									this.url = 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/reply';
								}
								if (e.qaId) {
									this.postdata.qaId = e.qaId;
									this.url = 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/add';
								}
								console.log(e);

							case 6:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function onLoad(_x) {
				return _ref3.apply(this, arguments);
			}

			return onLoad;
		}()
	}]);
	return Commit;
}(_labrador2.default.Component);


Page(_labrador._createPage(Commit));

})(module,require);