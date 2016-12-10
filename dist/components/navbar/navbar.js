'use strict';
(function(module,require){var exports=module.exports={};
"use strict";

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
			assetsPath: _labrador2.default.app.data.assetsPath,
			cur: 0,
			list: [{
				img: "/images/page_icon01.png",
				selectedImg: "/images/page_icon11.png",
				txt: "互助计划",
				pagePath: "/pages/index/index"
			}, {
				img: "/images/page_icon05.png",
				selectedImg: "/images/page_icon15.png",
				txt: "健康问答",
				pagePath: "/pages/healthQA/index"
			}, {
				img: "/images/page_icon04.png",
				selectedImg: "/images/page_icon14.png",
				txt: "我的保障",
				pagePath: "/pages/account/account"
			}]
		}, _this.props = {
			cur: 0
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Navbar, [{
		key: "onUpdate",
		value: function onUpdate(props) {
			this.setData('cur', props.cur);
		}
	}]);
	return Navbar;
}(_labrador2.default.Component);

exports.default = Navbar;
})(module,require);