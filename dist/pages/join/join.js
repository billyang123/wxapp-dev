'use strict';
(function(module,require){var exports=module.exports={};
var global=window=require('../../npm/labrador/global.js');

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('../../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('../../npm/babel-runtime/core-js/json/stringify.js');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _alert = require('../../components/alert/alert.js');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonData = {
  totalAmt: 0,
  items: [{ convention: '《17互助公约》', checked: 'true', link: "/pages/hzpact/hzpact?type=1" }, { convention: '《789重大疾病互助公约》', checked: 'true', condition: '加入条件：适用于18-46周岁，在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。', remind: '请在加入本互助社群前咨询家人，避免重复加入。', link: '/pages/hzpact/hzpact?type=14' }, { convention: '《留守儿童互助公约》', checked: 'true', condition: '加入条件：3-15周岁，父母双方或一方在外地打工，而自己留在农村生活的孩童，或不在父母身边的城市孩童，在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。', remind: '', link: '/pages/range/range?type=2' }, { convention: '《公共交通、旅游意外互助公约》', checked: 'true', condition: '加入条件：16-60周岁。', remind: '请在加入本互助社群前咨询家人，避免重复加入。', link: '/pages/range/range?type=3' }, { convention: '《少儿大病、意外互助计划公约》', checked: 'true', condition: '加入条件：1周岁－未满18周岁健康青少年在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。', remind: '请在加入本互助社群前咨询家人，避免重复加入。', link: "/pages/range/range?type=4" }, { convention: '《80后孕妈婴宝互助公约》', checked: 'true', condition: '加入条件：未满36周岁的孕妈妈或者备孕妈妈，加入之日怀孕周期未超过24周。在加入互助社群之前，未曾患有互助公约所描述的疾病的人群', remind: '请在加入本互助社群前咨询家人，避免重复加入。', link: "/pages/range/range?type=5" }, { convention: '《中老年大病意外互助公约》', checked: 'true', condition: '加入条件：46-70周岁，在加入互助社群之前，未曾患有互助公约所描述的恶性肿瘤或24种重大疾病的人群。', remind: '请在加入本互助社群前咨询家人，避免重复加入。', link: "/pages/range/range?type=6" }]
};

var Join = function (_wx$Component) {
  (0, _inherits3.default)(Join, _wx$Component);

  function Join() {
    var _ref;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, Join);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Join.__proto__ || (0, _getPrototypeOf2.default)(Join)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      projectId: 1,
      persons: [{}],
      publicConvention: '',
      conventionTxt: '',
      publicChecked: true,
      checked: true,
      conditionTxt: '',
      bl: true,
      checkedValue: ["1", "2"]
    }, _this2.children = {
      alert: new _alert2.default({ msg: "@msg" })
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(Join, [{
    key: 'addPerson',
    value: function addPerson(e) {
      for (var i = 0; i < this.data.persons.length; i++) {
        if (typeof this.data.persons[i].name == "undefined") {
          this.children.alert.show("请输入正确姓名");
          return;
        }
        if (typeof this.data.persons[i].cardCode == "undefined") {
          this.children.alert.show("请输入有效身份证号");
          return;
        }
        if (!this.data.persons[i].name.length > 0) {
          this.children.alert.show("请输入正确姓名");
          return;
        }
        if (!this.checkisIDCard(this.data.persons[i].cardCode)) {
          this.children.alert.show("请输入有效身份证号");
          return;
        }
      }
      this.data.persons.push({});
      this.setData({
        persons: this.data.persons,
        totalAmt: this.initAmt * this.data.persons.length
      });
    }
  }, {
    key: 'removePerson',
    value: function removePerson(e) {
      if (this.data.persons.length == 1) {

        return;
      }
      var idx = e.currentTarget.dataset.idx;
      this.data.persons.splice(parseInt(idx), 1);
      this.setData({
        persons: this.data.persons,
        totalAmt: this.initAmt * this.data.persons.length
      });
    }
  }, {
    key: 'checkChange',
    value: function checkChange(e) {
      this.setData({
        checkedValue: e.detail.value
      });
    }
    /*身份证校验*/

  }, {
    key: 'checkisIDCard',
    value: function checkisIDCard(IDcard) {
      var isIDCard = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/;

      if (isIDCard.test(IDcard)) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'showAlert',
    value: function showAlert(txt) {
      var _this = this;
      if (!this.Animation) {
        this.Animation = _labrador2.default.createAnimation({
          duration: 400,
          timingFunction: 'ease'
        });
      }
      this.Animation.height("70rpx").step();
      this.setData({
        error: {
          msg: txt,
          anim: this.Animation.export()
        }
      });
      setTimeout(function () {
        this.Animation.height(0).step();
        _this.setData({
          error: {
            anim: _this.Animation.export()
          }
        });
      }, 3000);
    }
  }, {
    key: 'joinBind',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
        var i, res, payResult;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.status) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                this.status = true;
                console.log(this.data.persons);
                i = 0;

              case 5:
                if (!(i < this.data.persons.length)) {
                  _context.next = 29;
                  break;
                }

                if (!(typeof this.data.persons[i].name == "undefined")) {
                  _context.next = 10;
                  break;
                }

                this.children.alert.show("请输入正确姓名");
                this.status = false;
                return _context.abrupt('return');

              case 10:
                if (!(typeof this.data.persons[i].cardCode == "undefined")) {
                  _context.next = 14;
                  break;
                }

                this.children.alert.show("请输入有效身份证号");

                this.status = false;
                return _context.abrupt('return');

              case 14:
                if (!(!this.data.persons[i].name.length > 0)) {
                  _context.next = 18;
                  break;
                }

                this.children.alert.show("请输入正确姓名");
                this.status = false;
                return _context.abrupt('return');

              case 18:
                if (this.checkisIDCard(this.data.persons[i].cardCode)) {
                  _context.next = 22;
                  break;
                }

                this.children.alert.show("请输入有效身份证号");
                this.status = false;
                return _context.abrupt('return');

              case 22:
                if (!(this.data.checkedValue.length < 2)) {
                  _context.next = 26;
                  break;
                }

                this.children.alert.show("加入前请先同意社群公约");
                this.status = false;
                return _context.abrupt('return');

              case 26:
                i++;
                _context.next = 5;
                break;

              case 29:
                _context.next = 31;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/project/join/byIdCardPay',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  method: "POST",
                  data: {
                    projectId: this.data.projectId,
                    persons: (0, _stringify2.default)(this.data.persons),
                    code: _labrador2.default.app.globalData.storage.code
                  }
                });

              case 31:
                res = _context.sent;

                this.status = false;

                if (!(res.data.status == 0)) {
                  _context.next = 41;
                  break;
                }

                _context.next = 36;
                return _labrador2.default.requestPayment(res.data.data);

              case 36:
                payResult = _context.sent;
                _context.next = 39;
                return _labrador2.default.redirectTo({
                  url: '/pages/joinEnd/joinEnd'
                });

              case 39:
                _context.next = 42;
                break;

              case 41:
                _labrador2.default.showModal({
                  title: '提示',
                  content: res.data.msg,
                  showCancel: false
                });

              case 42:
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
      this.data.persons[index][name] = e.detail.value;
      this.setData({
        persons: this.data.persons
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var id, sResDta;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = parseInt(e.type);
                _context2.next = 3;
                return _labrador2.default.app.ajax({
                  url: 'https://xcx.chinamuxie.com/wxapi/project/detail',
                  type: "get",
                  data: {
                    id: id
                  }
                });

              case 3:
                sResDta = _context2.sent;

                this.initAmt = sResDta.data.initAmt;
                this.setData({
                  totalAmt: this.initAmt,
                  publicConvention: jsonData.items[0].convention,
                  conventionTxt: jsonData.items[id].convention,
                  projectId: id,
                  link: jsonData.items[id].link,
                  conditionTxt: jsonData.items[id].condition
                });

              case 6:
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