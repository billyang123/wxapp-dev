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

var Forfamily = function (_wx$Component) {
	(0, _inherits3.default)(Forfamily, _wx$Component);

	function Forfamily() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Forfamily);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Forfamily.__proto__ || (0, _getPrototypeOf2.default)(Forfamily)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Forfamily, [{
		key: 'linkTo',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!this.isLink) {
									_context.next = 2;
									break;
								}

								return _context.abrupt('return');

							case 2:
								this.isLink = true;
								_context.next = 5;
								return _labrador2.default.navigateTo({
									url: event.currentTarget.dataset.link
								});

							case 5:
								this.isLink = false;

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function linkTo(_x) {
				return _ref2.apply(this, arguments);
			}

			return linkTo;
		}()
	}]);
	return Forfamily;
}(_labrador2.default.Component);


Page(_labrador._createPage(Forfamily));

})(module,require);