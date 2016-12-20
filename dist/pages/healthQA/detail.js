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

var HealthDetail = function (_wx$Component) {
	(0, _inherits3.default)(HealthDetail, _wx$Component);

	function HealthDetail() {
		var _ref;

		var _temp, _this2, _ret;

		(0, _classCallCheck3.default)(this, HealthDetail);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = HealthDetail.__proto__ || (0, _getPrototypeOf2.default)(HealthDetail)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
			id: "",
			detail: {},
			list: [],
			windowHieght: "625",
			hidden: false,
			hasMore: true,
			hasRefesh: false,
			size: 5,
			page: 0,
			praiseNum: {},
			//含有播放泡泡的
			playAudio: {
				id: null,
				src: null
			},
			audio: {},
			totalComNum: 0,
			commitfocus: false,
			commitValue: "",
			loading: false
		}, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
	}

	(0, _createClass3.default)(HealthDetail, [{
		key: "audioPlay",
		value: function audioPlay(event) {
			// let id = event.currentTarget.dataset.id;
			// this.data.audio[id].status=!this.data.audio[id].status;
		}
	}, {
		key: "audioPlayEnd",
		value: function audioPlayEnd() {
			var _this = this;
			_labrador2.default.onBackgroundAudioStop(function (e) {
				console.log(e);
				var id = _this.data.playAudio.id;
				_this.data.audio[id].status = false;
				_this.setData({
					audio: _this.data.audio
				});
			});
		}
	}, {
		key: "praise",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
				var index, id, type, localId, res, data;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								index = event.currentTarget.dataset.index;
								id = event.currentTarget.dataset.id;
								type = event.currentTarget.dataset.type;
								localId = [type, id, index].join("_");

								if (!this.praiseTmp[localId]) {
									_context.next = 6;
									break;
								}

								return _context.abrupt("return");

							case 6:
								_context.next = 8;
								return _labrador2.default.app.ajax({
									url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise',
									type: "post",
									data: {
										qaId: id
									}
								});

							case 8:
								res = _context.sent;

								console.log(res);
								if (res.status == 0) {
									if (type == "detail") {
										this.data[type].praiseNumber += 1;
										this.data[type].praiseed = true;
									} else {
										this.data[type][index].praiseNumber += 1;
										this.data[type][index].praiseed = true;
									}
									data = {};

									data[type] = this.data[type];
									this.setData(data);
									this.praiseTmp[localId] = 1;
								}

							case 11:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function praise(_x) {
				return _ref2.apply(this, arguments);
			}

			return praise;
		}()
	}, {
		key: "bindAudio",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(event) {
				var src, id;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								src = event.currentTarget.dataset.url;
								id = event.currentTarget.dataset.id;

								if (!this.data.audio[id]) {
									this.data.audio[id] = {
										id: id,
										src: src,
										status: false
									};
								}

								if (!(this.data.playAudio.src != src)) {
									_context2.next = 11;
									break;
								}

								if (this.data.playAudio.id) {
									this.data.audio[this.data.playAudio.id].status = false;
									this.setData({
										audio: this.data.audio
									});
								}
								this.data.audio[id].status = true;
								_context2.next = 8;
								return _labrador2.default.playBackgroundAudio({
									dataUrl: src
								});

							case 8:
								this.setData({
									audio: this.data.audio,
									playAudio: {
										id: id,
										src: src
									}
								});
								_context2.next = 21;
								break;

							case 11:
								if (!this.data.audio[id].status) {
									_context2.next = 17;
									break;
								}

								_context2.next = 14;
								return _labrador2.default.pauseBackgroundAudio();

							case 14:
								this.data.audio[id].status = false;
								_context2.next = 20;
								break;

							case 17:
								_context2.next = 19;
								return _labrador2.default.playBackgroundAudio({
									dataUrl: src
								});

							case 19:
								this.data.audio[id].status = true;

							case 20:
								this.setData({
									audio: this.data.audio
								});

							case 21:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function bindAudio(_x2) {
				return _ref3.apply(this, arguments);
			}

			return bindAudio;
		}()
	}, {
		key: "getCommitList",
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
				var res, loadMore, content, i;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (!this.data.loading) {
									_context3.next = 2;
									break;
								}

								return _context3.abrupt("return");

							case 2:
								this.data.loading = true;
								_context3.next = 5;
								return _labrador2.default.app.ajax({
									url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/list',
									data: {
										qaId: this.data.id,
										page: this.data.page,
										size: this.data.size
									}
								});

							case 5:
								res = _context3.sent;

								if (!res.data) {
									this.setData({
										hasMore: false,
										list: []
									});
								}
								loadMore = true;
								content = res.data.content;

								if (res.data.totalPages == 1 || res.data.totalPages == this.data.page + 1) {
									loadMore = false;
								}
								for (i = 0; i < content.length; i++) {
									content[i].createTime = new Date(content[i].createTime).format('yyyy/MM/dd hh:mm:ss');
									content[i].commentReply = JSON.parse(content[i].commentReply);
								}
								this.setData({
									hasMore: loadMore,
									list: this.data.list.concat(content),
									hidden: true,
									hasRefesh: false,
									totalComNum: res.data.totalElements
								});
								this.data.loading = false;

							case 13:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getCommitList() {
				return _ref4.apply(this, arguments);
			}

			return getCommitList;
		}()
	}, {
		key: "loadMore",
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(e) {
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								console.log("loadMore");
								that.setData({
									hasRefesh: true
								});

								if (this.data.hasMore) {
									_context4.next = 4;
									break;
								}

								return _context4.abrupt("return");

							case 4:
								this.data.page++;
								_context4.next = 7;
								return this.getCommitList();

							case 7:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function loadMore(_x3) {
				return _ref5.apply(this, arguments);
			}

			return loadMore;
		}()
	}, {
		key: "getDetail",
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
				var res;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.next = 2;
								return _labrador2.default.app.ajax({
									url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/detail',
									data: {
										qaId: this.data.id
									}
								});

							case 2:
								res = _context5.sent;


								console.log(res);
								this.setData({
									detail: res.data
								});

							case 5:
							case "end":
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function getDetail() {
				return _ref6.apply(this, arguments);
			}

			return getDetail;
		}()
	}, {
		key: "commitFocus",
		value: function commitFocus() {
			this.setData({
				commitfocus: true
			});
		}
	}, {
		key: "bindinput",
		value: function bindinput(e) {
			this.setData({
				commitValue: e.detail.value
			});
		}
	}, {
		key: "onLoad",
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(e) {
				var systemInfo;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								this.praiseTmp = {};
								_context6.next = 3;
								return _labrador2.default.getSystemInfo();

							case 3:
								systemInfo = _context6.sent;

								this.data.id = parseInt(e.id);
								this.setData({
									windowHieght: systemInfo.windowHeight
								});
								this.getCommitList();
								this.getDetail();
								this.audioPlayEnd();

							case 9:
							case "end":
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function onLoad(_x4) {
				return _ref7.apply(this, arguments);
			}

			return onLoad;
		}()
	}]);
	return HealthDetail;
}(_labrador2.default.Component);


Page(_labrador._createPage(HealthDetail));

})(module,require);