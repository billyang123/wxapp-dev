'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('../../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('../../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('../../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _labrador = require('../../npm/labrador/index.js');

var _labrador2 = _interopRequireDefault(_labrador);

var _slide = require('../../components/slide/slide.js');

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Range = function (_wx$Component) {
	(0, _inherits3.default)(Range, _wx$Component);

	function Range() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Range);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Range.__proto__ || (0, _getPrototypeOf2.default)(Range)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			slidedata: [{
				t: "国内国际航班意外身故/重度伤残",
				a: "最高100万元",
				txt: ["保障会员自加入次日起，因乘坐国内、国际航班发生意外事故，导致保障会员意外身故或者重度伤残的，互助小组一次性给付身故或者重度伤残互助金100万。", "重度伤残是指根据《伤残评定标准》认定为1-3级。"],
				height: 220,
				opacity: 1,
				isDown: false
			}, {
				t: "国内国际航班意外身故/重度伤残",
				a: "最高100万元",
				txt: ["保障会员自加入次日起，因乘坐国内、国际航班发生意外事故，导致保障会员意外身故或者重度伤残的，互助小组一次性给付身故或者重度伤残互助金100万。", "重度伤残是指根据《伤残评定标准》认定为1-3级。"],
				height: 220,
				opacity: 1,
				isDown: false
			}]
		}, _this.children = {
			slide: new _slide2.default({ slideData: "@slidedata" })
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	return Range;
}(_labrador2.default.Component);


Page(_labrador._createPage(Range));

})(module,require);