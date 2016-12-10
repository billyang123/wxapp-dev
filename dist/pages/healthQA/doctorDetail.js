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

var DoctorDetail = function (_wx$Component) {
	(0, _inherits3.default)(DoctorDetail, _wx$Component);

	function DoctorDetail() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, DoctorDetail);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DoctorDetail.__proto__ || (0, _getPrototypeOf2.default)(DoctorDetail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(DoctorDetail, [{
		key: 'bindTextAreaBlur',
		value: function bindTextAreaBlur(e) {
			console.log(e.detail.value);
		}
	}]);
	return DoctorDetail;
}(_labrador2.default.Component);


//# sourceMappingURL=data:application/json;charset=utf-8;base64;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3RvckRldGFpbC5qcyJdLCJuYW1lcyI6WyJEb2N0b3JEZXRhaWwiLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztzTkFDcEJDLEksR0FBTyxFOzs7OzttQ0FFVUMsQyxFQUFFO0FBQ2xCQyxXQUFRQyxHQUFSLENBQVlGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBckI7QUFDQTs7O0VBTHdDLG1CQUFHQyxTOztrQkFBeEJQLFkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3eCBmcm9tICdsYWJyYWRvcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N0b3JEZXRhaWwgZXh0ZW5kcyB3eC5Db21wb25lbnQge1xuXHRkYXRhID0ge1xuXHR9O1xuXHRiaW5kVGV4dEFyZWFCbHVyKGUpe1xuXHRcdGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuXHR9XG59Il19
Page(_labrador._createPage(DoctorDetail));
