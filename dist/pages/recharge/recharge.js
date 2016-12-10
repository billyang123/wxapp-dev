"use strict";var exports=module.exports={};
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

var Recharge = function (_wx$Component) {
	(0, _inherits3.default)(Recharge, _wx$Component);

	function Recharge() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Recharge);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Recharge.__proto__ || (0, _getPrototypeOf2.default)(Recharge)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			tabNum: 0,
			totalNum: 0,
			assetsPath: _labrador2.default.app.data.assetsPath
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Recharge, [{
		key: 'moneyTab',
		value: function moneyTab(event) {
			console.log(event);
			var num = event.currentTarget.dataset.num;
			this.setData({
				tabNum: num * 1
			});
		}
	}]);
	return Recharge;
}(_labrador2.default.Component);


//# sourceMappingURL=data:application/json;charset=utf-8;base64;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2hhcmdlLmpzIl0sIm5hbWVzIjpbIlJlY2hhcmdlIiwiZGF0YSIsInRhYk51bSIsInRvdGFsTnVtIiwiYXNzZXRzUGF0aCIsImFwcCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIm51bSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2V0RGF0YSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7Ozs4TUFDcEJDLEksR0FBSztBQUNKQyxXQUFPLENBREg7QUFFREMsYUFBUyxDQUZSO0FBR0RDLGVBQVcsbUJBQUdDLEdBQUgsQ0FBT0osSUFBUCxDQUFZRztBQUh0QixHOzs7OzsyQkFLSUUsSyxFQUFNO0FBQ2RDLFdBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLE9BQUlHLE1BQU1ILE1BQU1JLGFBQU4sQ0FBb0JDLE9BQXBCLENBQTRCRixHQUF0QztBQUNBLFFBQUtHLE9BQUwsQ0FBYTtBQUNaVixZQUFPTyxNQUFJO0FBREMsSUFBYjtBQUdBOzs7RUFab0MsbUJBQUdJLFM7O2tCQUFwQmIsUSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd4IGZyb20gJ2xhYnJhZG9yJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY2hhcmdlIGV4dGVuZHMgd3guQ29tcG9uZW50IHtcblx0ZGF0YT17XG5cdFx0dGFiTnVtOjAsXG4gICAgXHR0b3RhbE51bTowLFxuICAgIFx0YXNzZXRzUGF0aDp3eC5hcHAuZGF0YS5hc3NldHNQYXRoXG5cdH07XG5cdG1vbmV5VGFiKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudClcblx0XHR2YXIgbnVtID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lm51bTtcblx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0dGFiTnVtOm51bSoxXG5cdFx0fSlcblx0fVxufSJdfQ==
Page(_labrador._createPage(Recharge));
