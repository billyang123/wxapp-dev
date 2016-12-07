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

var _wx$Types = _labrador2.default.Types,
    number = _wx$Types.number,
    func = _wx$Types.func;

var Counter = function (_wx$Component) {
  (0, _inherits3.default)(Counter, _wx$Component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.propTypes = {
      count: number,
      onChange: func.isRequired
    }, _this.props = {
      count: 0
    }, _this.data = {
      num: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  //属性类型


  //默认属性值


  //默认data数据


  (0, _createClass3.default)(Counter, [{
    key: 'onUpdate',


    //监听props值的改变
    value: function onUpdate(props) {
      if (props.count !== this.props.count) {
        //props.count 值发生了变化，更新data
        this.setData({ num: props.count * 2 });
      }
    }
  }, {
    key: 'handleTap',
    value: function handleTap() {
      var count = this.props.count + 1;
      if (this.props.onChange) {
        this.props.onChange(count);
      }
    }
  }]);
  return Counter;
}(_labrador2.default.Component);

exports.default = Counter;
})(module,require);