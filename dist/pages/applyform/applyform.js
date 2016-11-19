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

var Applyform = function (_wx$Component) {
	(0, _inherits3.default)(Applyform, _wx$Component);

	function Applyform() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Applyform);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Applyform.__proto__ || (0, _getPrototypeOf2.default)(Applyform)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			planArr: ["请选择", '美国', '中国', '巴西', '日本'],
			index: 0
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Applyform, [{
		key: 'bindPickerChange',
		value: function bindPickerChange(e) {
			console.log('picker发送选择改变，携带值为', e.detail.value);
			this.setData({
				index: e.detail.value
			});
		}
	}, {
		key: 'bindTextAreaBlur',
		value: function bindTextAreaBlur(e) {
			console.log(e.detail.value);
		}
	}, {
		key: 'linkTo',
		value: function linkTo(event) {
			_labrador2.default.navigateTo({
				url: event.currentTarget.dataset.link
			});
		}
	}]);
	return Applyform;
}(_labrador2.default.Component);


Page(_labrador._createPage(Applyform));

})(module,require);