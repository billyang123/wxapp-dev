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
  }],
  project02: [{
    t: "重大疾病保障",
    a: "最高10万元",
    txt: ["保障会员自加入之日起90日后初次患重大疾病，一次性给付10万元的重大疾病医疗互助金", "等待期"],
    height: 200,
    opacity: 1,
    isDown: false
  }, {
    t: "意外伤残、死亡",
    a: "最高10万元",
    txt: ["保障会员自加入次日起，因意外事故造成符合《人身保险伤残评定标准（行业标准）》（简称《伤残评定标准》）所列伤残之一的，一次性按照如下标准给予互助金：", "1、保障会员自事故发生之日起180天内因该事故身故的，一次性给予互助金10万元", "2、符合《伤残评定标准》，与伤残程度等级相对应的互助金给付比例分为十档，伤残程度第一级对应的互助给付比例为100%，伤残程度第十级对应的互助金给付比例为10%，每级相差10%”"],
    height: 380,
    opacity: 1,
    isDown: false
  }, {
    t: "走失、被拐寻子互助金",
    a: "最高10万元",
    txt: ["保障会员走失后下落不明且经公安机关立案的，自立案之日起走失超过15天，按照如下标准给付寻子互助金：", "1、走失超过15天，且未达到一年；寻子互助金=走失天数*150元/天", "2、自立案之日起走失超过1年，一次性给付10万元寻子互助金。"],
    height: 300,
    opacity: 1,
    isDown: false
  }, {
    t: "暴力、性侵法律维权互助金",
    a: "最高1万元",
    txt: ["保障会员自加入之日起，因遭受暴力事件、性侵事件，被公安机关立案受理，且互助会员或其监护人以诉讼当事人的身份参加一审民事诉讼或仲裁，一次性给予0.5万元法律援助互助金"],
    height: 220,
    opacity: 1,
    isDown: false
  }, {
    t: "辍学",
    a: "最高2万元",
    txt: ["保障会员父母自加入之日起因意外伤害丧失劳动能力；或自加入之日起180天后因首次发生致使丧失劳动能力的重大疾病而丧失劳动能力，符合《职工非因工伤残或因病丧失劳动能力程度鉴定标准(试行)》认定的标准，影响家庭收入导致互助会员辍学的，按照如下条件给予辍学互助金：", "1、保障会员父母，双方完全丧失劳动能力；或者一方完全丧失劳动能力，一方部分丧失劳动能力；一次性给予互助金2万元", "2、保障会员父母，双方部分丧失劳动能力；或者一方完全丧失劳动能力，一次性给予互助金1万元；", "3、保障会员父母，一方部分丧失劳动能力，一次性给予互助金0.5万元"],
    height: 320,
    opacity: 1,
    isDown: false
  }, {
    t: "心理障碍",
    a: "最高5000元",
    txt: ["保障会员自加入之日起90日后初次患心理疾病，因治疗心理疾病产生的费用，按照如下标准给与互助金：", "1、心理治疗费实报实销，每次最多给付500元治疗费", "2、一年最多给付10次治疗费互助金"],
    height: 266,
    opacity: 1,
    isDown: false
  }, {
    t: "25种重大疾病介绍",
    a: "",
    txt: ["保障会员自加入之日起90日后初次患心理疾病，因治疗心理疾病产生的费用，按照如下标准给与互助金：", "1、心理治疗费实报实销，每次最多给付500元治疗费", "2、一年最多给付10次治疗费互助金"],
    height: 1480,
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
      slidedata: [{}]
    }, _this.children = {
      slide: new _slide2.default({ slideData: "@slidedata" })
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Range, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
        var id;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = parseInt(e.type);

                if (!(id == 1)) {
                  _context.next = 4;
                  break;
                }

                this.setData({
                  slidedata: postData.project01
                });
                return _context.abrupt('return');

              case 4:
                if (!(id == 2)) {
                  _context.next = 7;
                  break;
                }

                this.setData({
                  slidedata: postData.project02
                });
                return _context.abrupt('return');

              case 7:
                if (!(id == 3)) {
                  _context.next = 10;
                  break;
                }

                this.setData({
                  slidedata: postData.project03
                });
                return _context.abrupt('return');

              case 10:
                if (!(id == 4)) {
                  _context.next = 13;
                  break;
                }

                this.setData({
                  slidedata: postData.project04
                });
                return _context.abrupt('return');

              case 13:
                if (!(id == 5)) {
                  _context.next = 16;
                  break;
                }

                this.setData({
                  slidedata: postData.project05
                });
                return _context.abrupt('return');

              case 16:
                if (!(id == 6)) {
                  _context.next = 19;
                  break;
                }

                this.setData({
                  slidedata: postData.project06
                });
                return _context.abrupt('return');

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Range;
}(_labrador2.default.Component);


Page(_labrador._createPage(Range));

})(module,require);