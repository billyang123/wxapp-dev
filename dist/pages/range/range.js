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

var postData = {
  project01: [{
    t: "住院医疗费用报销（含非医保类用药）",
    a: "最高30万元",
    txt: ["保障会员自加入之日起180日后，初次患保障范围内的25种重大疾病，因疾病产生的住院费用【包括：床位费、手术费、药费、治疗费、护理费、检查检验费、特殊检查治疗费、救护车费】，按照如下规则最高给予30万的住院费用报销。", "住院医疗费用报销 30万", "（1）对于参加医保的会员，若已从医保报销部分医疗费用，互助小组对于剩余住院医疗费用中符合医保支付范围的，按100%的比例报销。", "（2）对于未参加医保的会员，互助小组对于符合医保支付范围的住院医疗费用按照80%的比例报销。", "（3）对于住院医疗费用不符合医保支付范围的（包括进口药、自费药等），其报销比例为70%。"],
    height: 600,
    opacity: 1,
    isDown: false
  }]
};

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
      slidedata: postData.project01
    }, _this.children = {
      slide: new _slide2.default({ slideData: "@slidedata" })
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Range;
}(_labrador2.default.Component);


Page(_labrador._createPage(Range));

})(module,require);