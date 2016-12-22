'use strict';
(function(module,require){var exports=module.exports={};

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var Slide = function (_wx$Component) {
	(0, _inherits3.default)(Slide, _wx$Component);

	function Slide() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Slide);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Slide.__proto__ || (0, _getPrototypeOf2.default)(Slide)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			slideAnim: [],
			chevronAnim: [],
			slideData: [],
			slideMore: []
		}, _this.props = {
			slideData: [],
			slideMore: []
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Slide, [{
		key: 'onUpdate',
		value: function onUpdate(props) {
			this.setData('slideData', props.slideData);
			if (props.slideMore) {
				this.setData('slideMore', props.slideMore);
			}
			this.initAnim();
		}
	}, {
		key: 'setSlide',
		value: function setSlide(e) {
			var index = parseInt(e.currentTarget.dataset.index);
			var slideData = this.data.slideData;
			var slideAnim = this.data.slideAnim;
			var chevronAnim = this.data.chevronAnim;

			var tempIndex = null;
			var curSlide = slideData[index];

			var o = 1,
			    h = curSlide.height + "rpx",
			    deg = -90;
			var auto = " auto";
			if (curSlide.isDown) {
				o = 0;
				h = 0;
				deg = 90;
				auto = "";
			}
			curSlide.isDown = !curSlide.isDown;
			curSlide.opacity = o;

			this.slide.opacity(o).height(h).step();

			this.chevron.rotate(deg).step();
			slideAnim[index] = this.slide.export();
			chevronAnim[index] = this.chevron.export();
			curSlide.auto = auto;
			slideData[index] = curSlide;
			this.setData({
				slideData: slideData,
				slideAnim: slideAnim,
				chevronAnim: chevronAnim
			});
		}
	}, {
		key: 'initAnim',
		value: function initAnim() {
			var slideData = this.data.slideData;
			var slide = _labrador2.default.createAnimation({
				duration: 400,
				timingFunction: 'ease'
			});
			var chevron = _labrador2.default.createAnimation({
				duration: 300,
				timingFunction: 'ease'
			});
			var animData = {
				slideAnim: [],
				chevronAnim: []
			};
			this.slide = slide;
			this.chevron = chevron;
			for (var i = 0; i < slideData.length; i++) {
				chevron.rotate(90).step();
				slide.height(0).opacity(0).step();
				animData.slideAnim[i] = slide.export();
				animData.chevronAnim[i] = chevron.export();
			}
			this.setData(animData);
		}
	}, {
		key: 'onLoad',
		value: function onLoad(e) {}
		//this.initAnim();

		/*onShow(){
  	this.initAnim();
  }*/

	}]);
	return Slide;
}(_labrador2.default.Component);

exports.default = Slide;
})(module,require);