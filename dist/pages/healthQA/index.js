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
			tabIndex: 1,
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
				_this.data.audio[id].status = false;
				_this.setData({
					audio: _this.data.audio
				});
			});
		}
	}, {
		key: 'bindAudio',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
				var src, id;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
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
									_context.next = 11;
									break;
								}

								if (this.data.playAudio.id) {
									this.data.audio[this.data.playAudio.id].status = false;
									this.setData({
										audio: this.data.audio
									});
								}
								this.data.audio[id].status = true;
								_context.next = 8;
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
								_context.next = 21;
								break;

							case 11:
								if (!this.data.audio[id].status) {
									_context.next = 17;
									break;
								}

								_context.next = 14;
								return _labrador2.default.pauseBackgroundAudio();

							case 14:
								this.data.audio[id].status = false;
								_context.next = 20;
								break;

							case 17:
								_context.next = 19;
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
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function bindAudio(_x) {
				return _ref2.apply(this, arguments);
			}

			return bindAudio;
		}()
	}, {
		key: 'tabs',
		value: function tabs(event) {
			console.log(event);
			this.setData({
				tabIndex: event.currentTarget.dataset.index
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
				var res, loadMore, content;
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
								this.setData({
									hasMore: loadMore,
									list: this.data.list.concat(res.data.content),
									hidden: true,
									hasRefesh: false
								});

								this.data.loading = false;

							case 12:
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
								index = event.currentTarget.dataset.index;
								id = event.currentTarget.dataset.id;
								localId = id + "_" + index;

								console.log(localId);

								if (!(this.praiseTmp.indexOf(localId) >= 0)) {
									_context5.next = 6;
									break;
								}

								return _context5.abrupt('return');

							case 6:
								_context5.next = 8;
								return _labrador2.default.app.ajax({
									url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise',
									type: "post",
									data: {
										qaId: id
									}
								});

							case 8:
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

							case 11:
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
		key: 'onLoad',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
				var systemInfo;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.next = 2;
								return _labrador2.default.getSystemInfo();

							case 2:
								systemInfo = _context6.sent;

								this.setData({
									windowHieght: systemInfo.windowHeight
								});
								//console.log(systemInfo)
								this.praiseTmp = [];
								this.getDoctors();
								this.getQAList();
								this.audioPlayEnd();

							case 8:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function onLoad() {
				return _ref7.apply(this, arguments);
			}

			return onLoad;
		}()
		// async refesh(){
		// 	//console.log("refesh")
		// 	 this.setData({
		// 	    hasRefesh:true
		// 	 });
		// 	 await sleep(2000);
		// 	 this.setData({
		//        hidden:true,
		//        hasRefesh:false
		//     });
		// }

	}, {
		key: 'onReady',
		value: function onReady(e) {
			// 使用 wx.createAudioContext 获取 audio 上下文 context
			//console.log(wx.createAudioContext)
			// this.audioCtx = wx.createAudioContext('myAudiod');
			// console.log(this.audioCtx)
			// this.audioCtx.play();
			this.playingAudio = {};
		}
	}]);
	return HealthIndex;
}(_labrador2.default.Component);


Page(_labrador._createPage(HealthIndex));

})(module,require);