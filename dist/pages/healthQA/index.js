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

var HealthIndex = function (_wx$Component) {
	(0, _inherits3.default)(HealthIndex, _wx$Component);

	function HealthIndex() {
		var _ref;

		var _temp, _this2, _ret;

		(0, _classCallCheck3.default)(this, HealthIndex);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = HealthIndex.__proto__ || (0, _getPrototypeOf2.default)(HealthIndex)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
			//tab
			tabIndex: 0,
			tabData: [{
				title: "全部",
				api: "#"
			}, {
				title: "肿瘤内科",
				api: "#"
			}, {
				title: "妇产科",
				api: "#"
			}, {
				title: "心理咨询",
				apai: "#"
			}],
			//含有播放泡泡的
			playAudio: {
				id: null,
				src: null
			},
			audio: {},
			//赞
			praiseNum: {},
			//加载更多数据
			list: [],
			windowHieght: "625",
			hidden: false,
			hasMore: true,
			hasRefesh: false,
			size: 5,
			page: 0,
			doclist: [],
			loading: false
		}, _this2.children = {
			navbar: new _navbar2.default({ cur: 1 })
		}, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
	}

	(0, _createClass3.default)(HealthIndex, [{
		key: 'audioPlay',
		value: function audioPlay(event) {
			// let id = event.currentTarget.dataset.id;
			// this.data.audio[id].status=!this.data.audio[id].status;
		}
	}, {
		key: 'audioPlayEnd',
		value: function audioPlayEnd() {
			var _this = this;
			_labrador2.default.onBackgroundAudioStop(function (e) {
				console.log(e);
				var id = _this.data.playAudio.id;
				var audio = _this.data.audio;
				audio[id].status = false;
				_this.setData({
					audio: audio
				});
			});
		}
	}, {
		key: 'checkLink',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
				var _this, d;

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
								_context.next = 6;
								return _labrador2.default.app.checkLogin();

							case 6:
								d = _context.sent;

								if (d) {
									_context.next = 11;
									break;
								}

								_context.next = 10;
								return _labrador2.default.app.doLogin();

							case 10:
								d = _context.sent;

							case 11:
								if (d) {
									_labrador2.default.navigateTo({
										url: event.currentTarget.dataset.link
									});
								}
								this.isLink = false;

							case 13:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function checkLink(_x) {
				return _ref2.apply(this, arguments);
			}

			return checkLink;
		}()
	}, {
		key: 'setNumTune',
		value: function setNumTune(index, id) {
			var locaId = id + "_tune_" + index;
			if (!this.tuneNum) {
				this.tuneNum = [];
			}
			if (this.tuneNum.indexOf(locaId) < 0) {
				_labrador2.default.app.ajax({ url: "https://xcx.chinamuxie.com/wxapi/healthserv/qa/tune", type: "post", data: { qaId: id } });
				var _list = this.data.list;
				_list[index].tuneNumber += 1;
				this.setData({
					list: _list
				});
				this.tuneNum.push(locaId);
			}
		}
	}, {
		key: 'bindAudio',
		value: function bindAudio(event) {
			var src = event.currentTarget.dataset.url;
			var id = event.currentTarget.dataset.id;
			var index = event.currentTarget.dataset.index;
			var auido = this.data.audio;
			var playAudio = this.data.playAudio;
			if (!auido[id]) {
				auido[id] = {
					id: id,
					src: src,
					status: false
				};
			}
			if (playAudio.id != id) {
				if (playAudio.id) {
					if (auido[playAudio.id].status) {
						auido[playAudio.id].status = false;
						_labrador2.default.stopBackgroundAudio();
					}
				}
				auido[id].status = true;
				_labrador2.default.playBackgroundAudio({
					dataUrl: src
				});
			} else {
				if (auido[id].status) {
					_labrador2.default.stopBackgroundAudio();
					auido[id].status = false;
				} else {
					_labrador2.default.playBackgroundAudio({
						dataUrl: src
					});
					auido[id].status = true;
				}
			}
			this.setData({
				audio: auido,
				playAudio: {
					id: id,
					src: src
				}
			});
			this.setNumTune(index, id);
		}
	}, {
		key: 'tabs',
		value: function tabs(event) {
			//console.log(event)
			_labrador2.default.app.stopAudio();
			this.setData({
				tabIndex: event.currentTarget.dataset.id
			});
			this.setData({
				hasMore: true,
				page: 0,
				list: []
			});
			this.getQAList();
		}
	}, {
		key: 'getDoctors',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
				var res;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _labrador2.default.app.ajax({
									url: 'https://xcx.chinamuxie.com/wxapi/healthserv/doctor/list',
									data: {
										page: 0,
										size: 2
									}
								});

							case 2:
								res = _context2.sent;

								if (!res.data) {
									this.setData({
										doclist: []
									});
								}
								this.setData({
									doclist: res.data.content.splice(0, 2)
								});

							case 5:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getDoctors() {
				return _ref3.apply(this, arguments);
			}

			return getDoctors;
		}()
	}, {
		key: 'getQAList',
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

								return _context3.abrupt('return');

							case 2:
								this.data.loading = true;
								_context3.next = 5;
								return _labrador2.default.app.ajax({
									url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/list',
									data: {
										page: this.data.page,
										size: this.data.size,
										label: this.data.tabIndex
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
									hasRefesh: false,
									loading: false
								});
								this.data.loading = false;
								return _context3.abrupt('return');

							case 10:
								loadMore = true;
								content = res.data.content;

								if (res.data.totalPages <= 1 || res.data.totalPages == this.data.page + 1) {
									loadMore = false;
								}
								for (i = 0; i < content.length; i++) {
									if (this.praiseTmp.indexOf(content[i].id) >= 0) {
										content[i].praiseed = true;
									} else {
										content[i].praiseed = false;
									}
								}
								console.log(content, this.praiseTmp);
								this.setData({
									hasMore: loadMore,
									list: this.data.list.concat(res.data.content),
									hidden: true,
									hasRefesh: false
								});
								this.data.loading = false;

							case 17:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getQAList() {
				return _ref4.apply(this, arguments);
			}

			return getQAList;
		}()
	}, {
		key: 'loadMore',
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

								return _context4.abrupt('return');

							case 3:
								this.data.page++;
								_context4.next = 6;
								return this.getQAList();

							case 6:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function loadMore(_x2) {
				return _ref5.apply(this, arguments);
			}

			return loadMore;
		}()
	}, {
		key: 'praise',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(event) {
				var index, id, localId, res, _list;

				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								if (!this.praiseLoad) {
									_context5.next = 2;
									break;
								}

								return _context5.abrupt('return');

							case 2:
								this.praiseLoad = true;
								index = event.currentTarget.dataset.index;
								id = event.currentTarget.dataset.id;
								localId = id;

								if (!(this.praiseTmp.indexOf(localId) >= 0)) {
									_context5.next = 8;
									break;
								}

								return _context5.abrupt('return');

							case 8:
								_context5.next = 10;
								return _labrador2.default.app.ajax({
									url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise',
									type: "post",
									data: {
										qaId: id
									}
								});

							case 10:
								res = _context5.sent;

								console.log(res);
								if (res.status == 0) {
									_list = this.data.list;

									_list[parseInt(index)].praiseNumber += 1;
									_list[parseInt(index)].praiseed = true;
									this.setData({
										list: _list
									});
									this.praiseTmp.push(localId);
								}
								this.praiseLoad = false;

							case 14:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function praise(_x3) {
				return _ref6.apply(this, arguments);
			}

			return praise;
		}()
	}, {
		key: 'getLabel',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
				var res;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.next = 2;
								return _labrador2.default.app.ajax({
									url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/labellist',
									type: "get"
								});

							case 2:
								res = _context6.sent;

								console.log(res);
								this.setData({
									tabData: res.data
								});

							case 5:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function getLabel() {
				return _ref7.apply(this, arguments);
			}

			return getLabel;
		}()
	}, {
		key: 'onLoad',
		value: function () {
			var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
				var systemInfo;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								//加载更多设置高度
								this.playingAudio = {};
								this.praiseLoad = false;
								_context7.next = 4;
								return _labrador2.default.getSystemInfo();

							case 4:
								systemInfo = _context7.sent;

								this.praiseLoad = false;
								this.setData({
									windowHieght: systemInfo.windowHeight
								});
								//console.log(systemInfo)
								this.praiseTmp = [];
								this.getDoctors();
								this.getLabel();
								this.getQAList();
								this.audioPlayEnd();

							case 12:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function onLoad() {
				return _ref8.apply(this, arguments);
			}

			return onLoad;
		}()
	}, {
		key: 'setCommit',
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

								if (_list[this.commitIndex].commentNumber) {
									_list[this.commitIndex].commentNumber += 1;
									this.setData({
										list: _list
									});
								}

							case 5:
							case 'end':
								return _context8.stop();
						}
					}
				}, _callee8, this);
			}));

			function setCommit() {
				return _ref9.apply(this, arguments);
			}

			return setCommit;
		}()
	}, {
		key: 'onShow',
		value: function onShow() {
			_labrador2.default.app.stopAudio();
			if (this.data.id) {
				if (typeof this.commitIndex == "number") {
					this.setCommit();
				}
			}
		}
	}, {
		key: 'onPullDownRefresh',
		value: function () {
			var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
				return _regenerator2.default.wrap(function _callee9$(_context9) {
					while (1) {
						switch (_context9.prev = _context9.next) {
							case 0:
								this.praiseLoad = false;
								this.setData({
									hasMore: true,
									page: 0,
									list: []
								});
								this.getDoctors();
								this.getLabel();
								this.getQAList();
								_labrador2.default.stopPullDownRefresh();

							case 6:
							case 'end':
								return _context9.stop();
						}
					}
				}, _callee9, this);
			}));

			function onPullDownRefresh() {
				return _ref10.apply(this, arguments);
			}

			return onPullDownRefresh;
		}()
	}]);
	return HealthIndex;
}(_labrador2.default.Component);


Page(_labrador._createPage(HealthIndex));

})(module,require);