'use strict';
(function(module,require){var exports=module.exports={};
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

var Community = function (_wx$Component) {
	(0, _inherits3.default)(Community, _wx$Component);

	function Community() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Community);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Community.__proto__ || (0, _getPrototypeOf2.default)(Community)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			topBanner: [{
				b: "https://image1.chinamuxie.com/images/project/pj789_banner01.png",
				t: "789重大疾病互助社群"
			}, {
				b: "https://image1.chinamuxie.com/images/project/pjleftoverChildren_banner01.png",
				t: "留守儿童互助社群"
			}, {
				b: "https://image1.chinamuxie.com/images/project/pjtravel_banner01.png",
				t: "交通、旅游意外互助社群"
			}, {
				b: "https://image1.chinamuxie.com/images/project/pjchildren_banner01.png",
				t: "少儿大病、意外互助社群"
			}, {
				b: "https://image1.chinamuxie.com/images/project/pj80_banner01.png",
				t: "80后孕妈婴宝互助社群"
			}, {
				b: "https://image1.chinamuxie.com/images/project/pjmiddleAged_banner01.png",
				t: "中老年大病、意外互助社群"
			}],
			bannerImg: {}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Community, [{
		key: "linkTo",
		value: function linkTo(event) {
			_labrador2.default.navigateTo({
				url: event.currentTarget.dataset.link
			});
		}
	}, {
		key: "onLoad",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
				var id, Res;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								id = parseInt(e.type);
								_context.next = 3;
								return _labrador2.default.request({
									url: 'https://xcx.chinamuxie.com/wxapi/project/detail',
									method: "get",
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									data: {
										id: id
									}
								});

							case 3:
								Res = _context.sent;

								this.setData({
									bannerImg: this.data.topBanner[id - 1]
								});
								console.log(Res);

							case 6:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function onLoad(_x) {
				return _ref2.apply(this, arguments);
			}

			return onLoad;
		}()
	}]);
	return Community;
}(_labrador2.default.Component);


Page(_labrador._createPage(Community));

})(module,require);