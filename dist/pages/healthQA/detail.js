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
				var index, id, type, localId, url, data, res, _data;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!this.praiseLoad) {
									_context.next = 2;
									break;
								}

								return _context.abrupt("return");

							case 2:
								this.praiseLoad = true;
								index = event.currentTarget.dataset.index;
								id = event.currentTarget.dataset.id;
								type = event.currentTarget.dataset.type;
								localId = type + id;

								if (!(this.praiseTmp.indexOf(localId) >= 0)) {
									_context.next = 9;
									break;
								}

								return _context.abrupt("return");

							case 9:
								url = type == "detail" ? 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise' : 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/praise';
								data = {
									code: _labrador2.default.app.globalData.storage.code
								};

								if (type == "detail") {
									data.qaId = id;
								} else {
									data.qaCommentId = id;
								}
								_context.next = 14;
								return _labrador2.default.app.ajax({
									url: url,
									type: "post",
									data: data
								});

							case 14:
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
									_data = {};

									_data[type] = this.data[type];
									this.setData(_data);
									this.praiseTmp.push(localId);
								}
								this.praiseLoad = false;

							case 18:
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
		key: "setNumTune",
		value: function setNumTune(index, id) {
			var locaId = id + "_tune_" + index;
			if (!this.tuneNum) {
				this.tuneNum = [];
			}
			if (this.tuneNum.indexOf(locaId) < 0) {
				_labrador2.default.app.ajax({ url: "https://xcx.chinamuxie.com/wxapi/healthserv/qa/tune", type: "post", data: { qaId: id } });
				var detail = this.data.detail;
				detail.tuneNumber += 1;
				this.setData({
					detail: detail
				});
				this.tuneNum.push(locaId);
			}
		}
	}, {
		key: "bindAudio",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(event) {
				var src, id, index;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								src = event.currentTarget.dataset.url;
								id = event.currentTarget.dataset.id;
								index = event.currentTarget.dataset.index;

								if (!this.data.audio[id]) {
									this.data.audio[id] = {
										id: id,
										src: src,
										status: false
									};
								}
								//wx.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/tune",type:"post",data:{qaId:id}})

								if (!(this.data.playAudio.src != src)) {
									_context2.next = 12;
									break;
								}

								if (this.data.playAudio.id) {
									this.data.audio[this.data.playAudio.id].status = false;
									this.setData({
										audio: this.data.audio
									});
								}
								this.data.audio[id].status = true;
								_context2.next = 9;
								return _labrador2.default.playBackgroundAudio({
									dataUrl: src
								});

							case 9:
								this.setData({
									audio: this.data.audio,
									playAudio: {
										id: id,
										src: src
									}
								});
								_context2.next = 22;
								break;

							case 12:
								if (!this.data.audio[id].status) {
									_context2.next = 18;
									break;
								}

								_context2.next = 15;
								return _labrador2.default.pauseBackgroundAudio();

							case 15:
								this.data.audio[id].status = false;
								_context2.next = 21;
								break;

							case 18:
								_context2.next = 20;
								return _labrador2.default.playBackgroundAudio({
									dataUrl: src
								});

							case 20:
								this.data.audio[id].status = true;

							case 21:
								this.setData({
									audio: this.data.audio
								});

							case 22:
								this.setNumTune(index, id);

							case 23:
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

								if (res.data) {
									_context3.next = 10;
									break;
								}

								this.setData({
									hasMore: false,
									list: [],
									hidden: true,
									loading: false
								});
								this.data.loading = false;
								return _context3.abrupt("return");

							case 10:
								loadMore = true;
								content = res.data.content;

								if (res.data.totalPages <= 1 || res.data.totalPages == this.data.page + 1) {
									loadMore = false;
								}
								for (i = 0; i < content.length; i++) {
									content[i].createTime = new Date(content[i].createTime).format('yyyy/MM/dd HH:mm:ss');
									content[i].commentReply = JSON.parse(content[i].commentReply);
									if (this.praiseTmp.indexOf('list' + content[i].id) >= 0) {
										content[i].praiseed = true;
									} else {
										content[i].praiseed = false;
									}
								}
								this.setData({
									hasMore: loadMore,
									list: this.data.list.concat(content),
									hidden: true,
									totalComNum: res.data.totalElements
								});
								this.data.loading = false;

							case 16:
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

								if (this.data.hasMore) {
									_context4.next = 3;
									break;
								}

								return _context4.abrupt("return");

							case 3:
								this.data.page++;
								_context4.next = 6;
								return this.getCommitList();

							case 6:
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
								if (this.praiseTmp.indexOf('detail' + res.data.id) >= 0) {
									res.data.praiseed = true;
								} else {
									res.data.praiseed = false;
								}
								this.setData({
									detail: res.data
								});

							case 6:
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
		key: "checkLink",
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(event) {
				var _this, _index, d;

				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_this = this;
								_index = event.currentTarget.dataset.index;

								if (typeof _index == "number") {
									this.commitIndex = _index;
								}

								if (!this.isLink) {
									_context6.next = 5;
									break;
								}

								return _context6.abrupt("return");

							case 5:
								this.isLink = true;
								_context6.next = 8;
								return _labrador2.default.app.checkLogin();

							case 8:
								d = _context6.sent;

								if (d) {
									_context6.next = 13;
									break;
								}

								_context6.next = 12;
								return _labrador2.default.app.doLogin();

							case 12:
								d = _context6.sent;

							case 13:
								if (d) {
									_labrador2.default.navigateTo({
										url: event.currentTarget.dataset.link
									});
								}
								this.isLink = false;

							case 15:
							case "end":
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function checkLink(_x4) {
				return _ref7.apply(this, arguments);
			}

			return checkLink;
		}()
	}, {
		key: "bindinput",
		value: function bindinput(e) {
			this.setData({
				commitValue: e.detail.value
			});
		}
	}, {
		key: "setCommit",
		value: function () {
			var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
				var commit, _list, ob;

				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								_context7.next = 2;
								return _labrador2.default.getStorage({ key: 'commit' });

							case 2:
								commit = _context7.sent;
								_list = this.data.list;

								if (!commit.data.qaId) {
									_context7.next = 8;
									break;
								}

								ob = {
									commentContent: commit.data.content,
									commentRelyNumber: 0,
									commentReply: [],
									createTime: commit.data.time,
									headImg: commit.data.avatar,
									healthQaId: this.data.id,
									id: commit.data.qaId,
									nickName: commit.data.nickName,
									praiseNumber: 0,
									status: 0,
									userInfoId: 0
								};

								_list.unshift(ob);
								return _context7.abrupt("return", this.setData({
									list: _list
								}));

							case 8:
								if (_list[this.commitIndex].commentReply) {
									_list[this.commitIndex].commentReply.push({
										userNickname: commit.data.nickName,
										replyContent: commit.data.content
									});
									this.setData({
										list: _list
									});
								}

							case 9:
							case "end":
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function setCommit() {
				return _ref8.apply(this, arguments);
			}

			return setCommit;
		}()
	}, {
		key: "setSubCommit",
		value: function () {
			var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
				var commit, _list;

				return _regenerator2.default.wrap(function _callee8$(_context8) {
					while (1) {
						switch (_context8.prev = _context8.next) {
							case 0:
								_context8.next = 2;
								return _labrador2.default.getStorage({ key: 'commit' });

							case 2:
								commit = _context8.sent;
								_list = this.data.list;

								if (_list[this.commitIndex].commentReply) {
									_list[this.commitIndex].commentReply.push({
										userNickname: commit.data.nickName,
										replyContent: commit.data.content
									});
									this.setData({
										list: _list
									});
								}

							case 5:
							case "end":
								return _context8.stop();
						}
					}
				}, _callee8, this);
			}));

			function setSubCommit() {
				return _ref9.apply(this, arguments);
			}

			return setSubCommit;
		}()
	}, {
		key: "setCommit",
		value: function () {
			var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
				var commit, _list, ob;

				return _regenerator2.default.wrap(function _callee9$(_context9) {
					while (1) {
						switch (_context9.prev = _context9.next) {
							case 0:
								_context9.next = 2;
								return _labrador2.default.getStorage({ key: 'commit' });

							case 2:
								commit = _context9.sent;
								_list = this.data.list;

								if (commit.data.qaId) {
									ob = {
										commentContent: commit.data.content,
										commentRelyNumber: 0,
										commentReply: [],
										createTime: commit.data.time,
										headImg: commit.data.avatar,
										healthQaId: this.data.id,
										id: commit.data.qaId,
										nickName: commit.data.nickName,
										praiseNumber: 0,
										status: 0,
										userInfoId: 0
									};

									_list.unshift(ob);
									this.setData({
										list: _list
									});
								}

							case 5:
							case "end":
								return _context9.stop();
						}
					}
				}, _callee9, this);
			}));

			function setCommit() {
				return _ref10.apply(this, arguments);
			}

			return setCommit;
		}()
	}, {
		key: "onShow",
		value: function onShow(e) {
			console.log("onShow", this.eId);
			_labrador2.default.app.stopAudio();
			if (this.data.id) {
				if (typeof this.commitIndex == "number") {
					this.setSubCommit();
				} else {
					this.setCommit();
				}
			}
		}
	}, {
		key: "onLoad",
		value: function () {
			var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(e) {
				var systemInfo;
				return _regenerator2.default.wrap(function _callee10$(_context10) {
					while (1) {
						switch (_context10.prev = _context10.next) {
							case 0:
								_labrador2.default.app.stopAudio();
								console.log("onLoad", this.showStatus);
								this.praiseTmp = [];
								_context10.next = 5;
								return _labrador2.default.getSystemInfo();

							case 5:
								systemInfo = _context10.sent;

								//this.eId = parseInt(e.id);
								this.data.id = parseInt(e.id);
								this.setData({
									windowHieght: systemInfo.windowHeight
								});
								this.getCommitList();
								this.getDetail();
								this.audioPlayEnd();

							case 11:
							case "end":
								return _context10.stop();
						}
					}
				}, _callee10, this);
			}));

			function onLoad(_x5) {
				return _ref11.apply(this, arguments);
			}

			return onLoad;
		}()
	}, {
		key: "onPullDownRefresh",
		value: function () {
			var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
				return _regenerator2.default.wrap(function _callee11$(_context11) {
					while (1) {
						switch (_context11.prev = _context11.next) {
							case 0:
								this.setData({
									hasMore: true,
									page: 0,
									list: []
								});
								_context11.next = 3;
								return this.getDetail();

							case 3:
								_context11.next = 5;
								return this.getCommitList();

							case 5:
								_labrador2.default.stopPullDownRefresh();

							case 6:
							case "end":
								return _context11.stop();
						}
					}
				}, _callee11, this);
			}));

			function onPullDownRefresh() {
				return _ref12.apply(this, arguments);
			}

			return onPullDownRefresh;
		}()
	}]);
	return HealthDetail;
}(_labrador2.default.Component);


Page(_labrador._createPage(HealthDetail));

})(module,require);