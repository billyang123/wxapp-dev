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

var Alert = function (_wx$Component) {
  (0, _inherits3.default)(Alert, _wx$Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Alert.__proto__ || (0, _getPrototypeOf2.default)(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      msg: '',
      maxheight: 70
    }, _this.data = {
      msg: '',
      animdata: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  //默认属性值

  //默认data数据


  (0, _createClass3.default)(Alert, [{
    key: 'onUpdate',


    //监听props值的改变
    value: function onUpdate(props) {

      if (props.msg !== this.props.msg) {
        //props.count 值发生了变化，更新data
        this.setData({ msg: props.msg });
      }
      if (props.maxheight !== this.props.maxheight) {
        //props.count 值发生了变化，更新data
        this.setData({ maxheight: props.maxheight });
      }
    }
  }, {
    key: 'show',
    value: function show(txt) {
      this.Animation.height(this.props.maxheight + "rpx").step();
      this.setData({
        animdata: this.Animation.export(),
        msg: txt
      });
      setTimeout(function () {
        this.Animation.height(0).step();
        this.setData({
          animdata: this.Animation.export()
        });
      }.bind(this), 3000);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.Animation.height(0).step();
      this.setData({
        animdata: this.Animation.export()
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.Animation = _labrador2.default.createAnimation({
        duration: 400,
        timingFunction: 'ease'
      });
      this.isOne = true;
      this.hide();
    }
  }]);
  return Alert;
}(_labrador2.default.Component);

exports.default = Alert;
})(module,require);