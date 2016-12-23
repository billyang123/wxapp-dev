'use strict';
(function(module,require){var exports=module.exports={};

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

var Navbar = function (_wx$Component) {
	(0, _inherits3.default)(Navbar, _wx$Component);

	function Navbar() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Navbar);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			list: [],
			//含有播放泡泡的
			playAudio: {
				id: null,
				src: null
			},
			audio: {},
			//赞
			praiseNum: {}
		}, _this.props = {
			list: []
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Navbar, [{
		key: 'onUpdate',
		value: function onUpdate(props) {
			this.setData({
				list: props.list
			});
		}
	}, {
		key: 'audioPlay',
		value: function audioPlay(event) {
			// let id = event.currentTarget.dataset.id;
			// this.data.audio[id].status=!this.data.audio[id].status;
		}
	}, {
		key: 'audioPlayEnd',
		value: function audioPlayEnd(event) {
			var id = event.currentTarget.dataset.id;
			this.data.audio[id].status = false;
			this.setData({
				audio: this.data.audio
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
		key: 'praise',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(event) {
				var index, id, localId, res, _list;

				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								index = event.currentTarget.dataset.index;
								id = event.currentTarget.dataset.id;
								localId = id + "_" + index;

								console.log(localId);

								if (!(this.praiseTmp.indexOf(localId) >= 0)) {
									_context2.next = 6;
									break;
								}

								return _context2.abrupt('return');

							case 6:
								_context2.next = 8;
								return _labrador2.default.app.ajax({
									url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise',
									type: "post",
									data: {
										qaId: id
									}
								});

							case 8:
								res = _context2.sent;

								if (res.status == 0) {
									_list = this.data.list;

									_list[parseInt(index)].praiseNumber += 1;
									_list[parseInt(index)].praiseed = true;
									this.setData({
										list: _list
									});
									this.praiseTmp.push(localId);
								}

							case 10:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function praise(_x2) {
				return _ref3.apply(this, arguments);
			}

			return praise;
		}()
	}]);
	return Navbar;
}(_labrador2.default.Component);

exports.default = Navbar;
})(module,require);