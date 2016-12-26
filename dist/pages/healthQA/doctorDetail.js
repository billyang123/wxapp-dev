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

// import Alert from '../../components/alert/alert';
var DoctorDetail = function (_wx$Component) {
	(0, _inherits3.default)(DoctorDetail, _wx$Component);

	function DoctorDetail() {
		var _ref;

		var _temp, _this2, _ret;

		(0, _classCallCheck3.default)(this, DoctorDetail);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = DoctorDetail.__proto__ || (0, _getPrototypeOf2.default)(DoctorDetail)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
			id: 1,
			// curLength:0,
			// maxLength:60,
			// textareaValue:"",


			list: [],
			windowHieght: "625",
			hidden: false,
			hasMore: true,
			hasRefesh: false,
			size: 20,
			page: 0,

			detail: {},
			loading: false,

			//含有播放泡泡的
			playAudio: {
				id: null,
				src: null
			},
			audio: {},
			//赞
			praiseNum: {}
			// lineValue:"",
			// top:"17rpx",
			// value:""
		}, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
	}

	(0, _createClass3.default)(DoctorDetail, [{
		key: "audioPlayEnd",

		// children = {
		//     alert: new Alert({msg:"@msg"})
		// };
		value: function audioPlayEnd(event) {
			var id = event.currentTarget.dataset.id;
			this.data.audio[id].status = false;
			this.setData({
				audio: this.data.audio
			});
		}
	}, {
		key: "checkLink",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
				var _this, _index, d;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this = this;

								if (!this.isloading) {
									_context.next = 3;
									break;
								}

								return _context.abrupt("return");

							case 3:
								this.isloading = true;
								_index = event.currentTarget.dataset.index;

								if (typeof _index == "number") {
									this.commitIndex = _index;
								}
								_context.next = 8;
								return _labrador2.default.app.checkLogin();

							case 8:
								d = _context.sent;

								if (d) {
									_context.next = 13;
									break;
								}

								_context.next = 12;
								return _labrador2.default.app.doLogin();

							case 12:
								d = _context.sent;

							case 13:
								if (!d) {
									_context.next = 16;
									break;
								}

								_context.next = 16;
								return _labrador2.default.navigateTo({
									url: event.currentTarget.dataset.link
								});

							case 16:
								this.isloading = false;

							case 17:
							case "end":
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
		key: "setNumTune",
		value: function setNumTune(index, id) {
			var locaId = id + "_tune_" + index;
			if (!this.tuneNum) {
				this.tuneNum = [];
			}
			if (this.tuneNum.indexOf(locaId) < 0) {
				_labrador2.default.app.ajax({ url: _labrador2.default.app.data.ajaxPath + "/wxapi/healthserv/qa/tune", type: "post", data: { qaId: id } });
				var _list = this.data.list;
				_list[index].tuneNumber += 1;
				this.setData({
					list: _list
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
		key: "getQAList",
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
									url: _labrador2.default.app.data.ajaxPath + '/wxapi/healthserv/qa/list',
									data: {
										page: this.data.page,
										size: this.data.size,
										doctorId: this.data.id
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
								return _context3.abrupt("return");

							case 10:
								loadMore = true;
								content = res.data.content;

								if (res.data.totalPages <= 1 || res.data.totalPages == this.data.page + 1) {
									loadMore = false;
								}
								for (i = 0; i < content.length; i++) {
									content[i].healthDoctor.doctorHeadImgUrl = _labrador2.default.app.setHttpsUrl(content[i].healthDoctor.doctorHeadImgUrl);
									if (this.praiseTmp.indexOf(content[i].id + '') >= 0) {
										content[i].praiseed = true;
									} else {
										content[i].praiseed = false;
									}
								}
								//console.log(content)
								this.setData({
									hasMore: loadMore,
									list: this.data.list.concat(content),
									hidden: true,
									hasRefesh: false
								});
								this.data.loading = false;

							case 16:
							case "end":
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
		key: "loadMore",
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(e) {
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								if (this.data.hasMore) {
									_context4.next = 2;
									break;
								}

								return _context4.abrupt("return");

							case 2:
								this.data.page++;
								_context4.next = 5;
								return this.getQAList();

							case 5:
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
		key: "praise",
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

								return _context5.abrupt("return");

							case 2:
								this.praiseLoad = true;
								index = event.currentTarget.dataset.index;
								id = event.currentTarget.dataset.id;
								localId = id;

								if (!(this.praiseTmp.indexOf(localId) >= 0)) {
									_context5.next = 8;
									break;
								}

								return _context5.abrupt("return");

							case 8:
								_context5.next = 10;
								return _labrador2.default.app.ajax({
									url: _labrador2.default.app.data.ajaxPath + '/wxapi/healthserv/qa/praise',
									type: "post",
									data: {
										qaId: id,
										code: _labrador2.default.app.globalData.storage.code
									}
								});

							case 10:
								res = _context5.sent;

								// console.log(res)
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

							case 13:
							case "end":
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function praise(_x4) {
				return _ref6.apply(this, arguments);
			}

			return praise;
		}()
		// async formSubmit(e){
		// 	let d = await wx.app.checkLogin();
		//      	if(!d){
		//      		d = await wx.app.doLogin()
		//      	}
		//      	if(!d) return;
		// 	let qcontent = e.detail.value.questionContent;
		// 	qcontent = qcontent.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
		// 	if(qcontent == ""){
		// 		return this.children.alert.show("请输入提问内容");
		// 	}
		// 	if(qcontent.length>60){
		// 		return this.children.alert.show("提问内容需少于60个字");
		// 	}
		// 	var res = await wx.app.ajax({
		// 		url: wx.app.data.ajaxPath+'/wxapi/healthserv/qa/add',
		// 		type:"post",
		// 		data:{
		// 			healthDoctorId:this.data.id,
		// 			questionContent:qcontent,
		// 			code:wx.app.globalData.storage.code
		// 		}
		// 	})
		// 	if(res.status == 0){
		// 		wx.showToast({
		// 		  title: '提问成功',
		// 		  icon: 'success',
		// 		  duration: 2000
		// 		})
		// 		this.setData({
		// 			textareaValue:'',
		// 			curLength:0,
		// 			disabled:false
		// 		})
		// 	}
		// 	if(res.status == 1){
		// 		var sModal = await wx.showModal({
		// 		  title: '提示',
		// 		  content: '需要先登录'
		// 		})
		// 		if(sModal.confirm){
		// 			wx.redirectTo({
		// 	    		url:'/pages/account/account'
		// 	    	})
		// 		}
		// 	}
		// }

	}, {
		key: "setNumValue",
		value: function setNumValue(e) {
			var _value = e.detail.value;
			_value = _value.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
			this.setData({
				curLength: _value.length,
				textareaValue: _value
			});
		}
	}, {
		key: "getDetail",
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
				var res;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.next = 2;
								return _labrador2.default.app.ajax({
									url: _labrador2.default.app.data.ajaxPath + '/wxapi/healthserv/doctor/detail',
									data: {
										doctorId: this.data.id
									}
								});

							case 2:
								res = _context6.sent;

								//let height = res.data.faNumber>1?900:500;
								//console.log(res.data.faNumber)
								res.data.doctorHeadImgUrl = _labrador2.default.app.setHttpsUrl(res.data.doctorHeadImgUrl);
								this.setData({
									detail: res.data
								});

							case 5:
							case "end":
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function getDetail() {
				return _ref7.apply(this, arguments);
			}

			return getDetail;
		}()
	}, {
		key: "onLoad",
		value: function () {
			var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(e) {
				var systemInfo;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								//console.log(e.id)
								//wx.app.stopAudio();
								this.praiseTmp = [];
								this.data.id = parseInt(e.id);
								//加载更多设置高度
								_context7.next = 4;
								return _labrador2.default.getSystemInfo();

							case 4:
								systemInfo = _context7.sent;

								// console.log(systemInfo.windowHeight)
								this.setData({
									windowHieght: systemInfo.windowHeight,
									id: this.data.id
								});
								//console.log(systemInfo)

								this.getQAList();
								this.getDetail();

							case 8:
							case "end":
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function onLoad(_x5) {
				return _ref8.apply(this, arguments);
			}

			return onLoad;
		}()
	}, {
		key: "setCommit",
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

								if (commit.data.time) {
									_context8.next = 5;
									break;
								}

								return _context8.abrupt("return");

							case 5:
								_list = this.data.list;

								if (!_list[this.commitIndex].commentNumber) {
									_context8.next = 12;
									break;
								}

								// console.log(_list[this.commitIndex])
								_list[this.commitIndex].commentNumber += 1;
								this.setData({
									list: _list
								});
								_context8.next = 11;
								return _labrador2.default.setStorage({
									key: "commit",
									data: {}
								});

							case 11:
								this.commitIndex = null;

							case 12:
							case "end":
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
		key: "onShow",
		value: function onShow() {
			_labrador2.default.app.stopAudio();
			if (this.data.id) {
				if (typeof this.commitIndex == "number") {
					this.setCommit();
				}
			}
		}
	}, {
		key: "onPullDownRefresh",
		value: function () {
			var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
				return _regenerator2.default.wrap(function _callee9$(_context9) {
					while (1) {
						switch (_context9.prev = _context9.next) {
							case 0:
								this.setData({
									hasMore: true,
									page: 0,
									list: [],
									playAudio: {
										id: null,
										src: null
									},
									audio: {},
									//赞
									praiseNum: {}
								});
								_context9.next = 3;
								return this.getQAList();

							case 3:
								_context9.next = 5;
								return this.getDetail();

							case 5:
								_labrador2.default.stopPullDownRefresh();

							case 6:
							case "end":
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
	return DoctorDetail;
}(_labrador2.default.Component);


Page(_labrador._createPage(DoctorDetail));

})(module,require);