'use strict';
(function(module,require){var exports=module.exports={};
var global=window=require('../../npm/labrador/global.js');

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

var jsonData = {
	items: [{ convention: '《17互助公约》', checked: 'true' }, { convention: '《789重大疾病互助公约》', checked: 'true' }, { convention: '《留守儿童互助公约》', checked: 'true' }, { convention: '《公共交通、旅游意外互助公约》', checked: 'true' }, { convention: '《少儿大病、意外互助计划公约》', checked: 'true' }, { convention: '《80后孕妈婴宝互助公约》', checked: 'true' }, { convention: '《中老年大病意外互助公约》', checked: 'true' }]
};

var Join = function (_wx$Component) {
	(0, _inherits3.default)(Join, _wx$Component);

	function Join() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Join);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Join.__proto__ || (0, _getPrototypeOf2.default)(Join)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			projectId: 1,
			persons: [{}],
			publicConvention: '',
			conventionTxt: '',
			publicChecked: true,
			checked: true
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Join, [{
		key: 'addPerson',
		value: function addPerson(e) {
			this.data.persons.push({});
			this.setData({
				persons: this.data.persons
			});
		}
	}, {
		key: 'removePerson',
		value: function removePerson(e) {
			if (this.data.persons.length == 1) {
				return;
			}
			var idx = e.currentTarget.dataset.idx;
			var index = this.data.persons[idx];
			this.data.persons.splice(parseInt(index), 1);
			this.setData({
				persons: this.data.persons
			});
		}
	}, {
		key: 'checkChange',
		value: function checkChange() {
			this.setData({
				checked: !this.data.publicChecked
			});
			console.log('publicChecked' + this.data.publicChecked);
			console.log('checked' + this.data.checked);
		}
	}, {
		key: 'joinBind',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
				var res;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								console.log(this.data.checked);
								_context.next = 3;
								return _labrador2.default.request({
									url: 'https://xcx.chinamuxie.com/wxapi/project/join/byIdCard',
									header: {
										'content-type': "application/json" //'application/x-www-form-urlencoded'
									},
									method: "POST",
									data: {
										projectId: this.data.projectId,
										persons: this.data.persons,
										code: _labrador2.default.app.globalData.storage.code
									}
								});

							case 3:
								res = _context.sent;

								if (!(res.data.status == 0)) {
									_context.next = 7;
									break;
								}

								_context.next = 7;
								return _labrador2.default.navigateTo({
									url: '/pages/joinEnd/joinEnd'
								});

							case 7:
								console.log(res);

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function joinBind(_x) {
				return _ref2.apply(this, arguments);
			}

			return joinBind;
		}()
	}, {
		key: 'bindKeyInput',
		value: function bindKeyInput(e) {
			var name = e.currentTarget.dataset.name,
			    index = e.currentTarget.dataset.idx;
			console.log(name, index);
			this.data.persons[index][name] = e.detail.value;
			this.setData({
				persons: this.data.persons
			});
		}
	}, {
		key: 'onLoad',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
				var id;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								id = parseInt(e.type);

								this.setData({
									publicConvention: jsonData.items[0].convention,
									conventionTxt: jsonData.items[id].convention
								});

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function onLoad(_x2) {
				return _ref3.apply(this, arguments);
			}

			return onLoad;
		}()
	}]);
	return Join;
}(_labrador2.default.Component);


Page(_labrador._createPage(Join));

})(module,require);