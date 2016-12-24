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

var _alert = require('../../components/alert/alert.js');

var _alert2 = _interopRequireDefault(_alert);

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
			url: "",
			content: ''
		}, _this.children = {
			alert: new _alert2.default({ msg: "@msg" })
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Commit, [{
		key: 'formSubmit',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
				var content, res, useInfo, tme, n_data, sModal;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								content = e.detail.value.content;

								content = content.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");

								if (!(content == "")) {
									_context.next = 4;
									break;
								}

								return _context.abrupt('return', this.children.alert.show("请输入评论内容"));

							case 4:
								if (!(content.length >= 60)) {
									_context.next = 6;
									break;
								}

								return _context.abrupt('return', this.children.alert.show("评论内容需少于60个字"));

							case 6:
								this.postdata.content = content;
								_context.next = 9;
								return _labrador2.default.app.ajax({
									url: this.url,
									type: "post",
									data: this.postdata
								});

							case 9:
								res = _context.sent;

								if (!(res.status == 0)) {
									_context.next = 24;
									break;
								}

								_context.next = 13;
								return _labrador2.default.getStorage({ key: 'userInfo' });

							case 13:
								useInfo = _context.sent;

								console.log(useInfo);
								_context.next = 17;
								return _labrador2.default.showToast({
									title: '评论成功',
									icon: 'success',
									duration: 2000
								});

							case 17:
								tme = new Date();
								n_data = {
									resId: res.data,
									avatar: useInfo.data.avatarUrl.substring(0, useInfo.data.avatarUrl.length - 1) + 96,
									nickName: useInfo.data.nickName,
									content: content,
									time: tme.format("yyyy/MM/dd HH:mm:ss")
								};

								if (this.postdata.qaCommentId) {
									n_data["qaCommentId"] = this.postdata.qaCommentId;
								} else {
									n_data["qaId"] = this.postdata.qaId;
								}
								_context.next = 22;
								return _labrador2.default.setStorage({
									key: "commit",
									data: n_data
								});

							case 22:
								this.setData({
									content: ""
								});
								//wx.navigateBack()
								setTimeout(function () {
									_labrador2.default.navigateBack();
									// wx.redirectTo({
									//   		url:'/pages/healthQA/detail?id='+this.qaId
									//   	})
								}, 2000);

							case 24:
								if (!(res.status == 1)) {
									_context.next = 29;
									break;
								}

								_context.next = 27;
								return _labrador2.default.showModal({
									title: '提示',
									content: '需要先登录'
								});

							case 27:
								sModal = _context.sent;

								if (sModal.confirm) {
									_labrador2.default.redirectTo({
										url: '/pages/account/account'
									});
								}

							case 29:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function formSubmit(_x) {
				return _ref2.apply(this, arguments);
			}

			return formSubmit;
		}()
	}, {
		key: 'onShow',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_labrador2.default.app.stopAudio();
								_context2.next = 3;
								return _labrador2.default.setStorage({
									key: "commit",
									data: {}
								});

							case 3:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function onShow() {
				return _ref3.apply(this, arguments);
			}

			return onShow;
		}()
	}, {
		key: 'onLoad',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(e) {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:

								// this.data.cid = e.qid;
								// this.data.rid = e.rid;
								_labrador2.default.app.stopAudio();
								console.log(e);
								this.postdata = {
									code: _labrador2.default.app.globalData.storage.code
								};
								if (e.qaCommentId) {
									this.postdata.qaCommentId = e.qaCommentId;
									this.qaId = e['amp;qaId'];
									this.url = 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/reply';
								}
								if (e.qaId) {
									this.postdata.qaId = e.qaId;
									this.qaId = e.qaId;
									this.url = 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/add';
								}
								console.log(e);

							case 6:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function onLoad(_x2) {
				return _ref4.apply(this, arguments);
			}

			return onLoad;
		}()
	}]);
	return Commit;
}(_labrador2.default.Component);


Page(_labrador._createPage(Commit));

})(module,require);