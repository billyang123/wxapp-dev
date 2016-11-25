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
  items: [{ convention: '《17互助公约》', checked: 'true' }, { convention: '《789重大疾病互助公约》', checked: 'true', condition: '加入条件：适用于18-46周岁，在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。', remind: '请在加入本互助社群前咨询家人，避免重复加入。' }, { convention: '《留守儿童互助公约》', checked: 'true', condition: '加入条件：3-15周岁，父母双方或一方在外地打工，而自己留在农村生活的孩童，或不在父母身边的城市孩童，在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。', remind: '' }, { convention: '《公共交通、旅游意外互助公约》', checked: 'true', condition: '加入条件：16-60周岁。', remind: '请在加入本互助社群前咨询家人，避免重复加入。' }, { convention: '《少儿大病、意外互助计划公约》', checked: 'true', condition: '加入条件：1周岁－未满18周岁健康青少年在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。', remind: '请在加入本互助社群前咨询家人，避免重复加入。' }, { convention: '《80后孕妈婴宝互助公约》', checked: 'true', condition: '加入条件：未满36周岁的孕妈妈或者备孕妈妈，加入之日怀孕周期未超过24周。在加入互助社群之前，未曾患有互助公约所描述的疾病的人群', remind: '请在加入本互助社群前咨询家人，避免重复加入。' }, { convention: '《中老年大病意外互助公约》', checked: 'true', condition: '加入条件：46-70周岁，在加入互助社群之前，未曾患有互助公约所描述的恶性肿瘤或24种重大疾病的人群。', remind: '请在加入本互助社群前咨询家人，避免重复加入。' }]
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
      checked: true,
      conditionTxt: '',
      bl: true
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Join, [{
    key: 'addPerson',
    value: function addPerson(e) {
      for (var i = 0; i < this.data.persons.length; i++) {
        if (typeof this.data.persons[i].name == "undefined") {
          _labrador2.default.showModal({
            title: '提示',
            content: '请输入正确姓名',
            showCancel: false,
            success: function success(res) {}
          });
          return;
        }
        if (typeof this.data.persons[i].cardCode == "undefined") {
          _labrador2.default.showModal({
            title: '提示',
            content: '请输入有效身份证号',
            showCancel: false,
            success: function success(res) {}
          });
          return;
        }
        if (!this.data.persons[i].name.length > 0) {
          _labrador2.default.showModal({
            title: '提示',
            content: '请输入正确姓名',
            showCancel: false,
            success: function success(res) {}
          });
          return;
        }
        if (!this.checkisIDCard(this.data.persons[i].cardCode)) {
          _labrador2.default.showModal({
            title: '提示',
            content: '请输入有效身份证号',
            showCancel: false,
            success: function success(res) {}
          });
          return;
        }
      }
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
      this.data.persons.splice(parseInt(idx), 1);
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
    key: 'joinBind',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
        var i, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < this.data.persons.length)) {
                  _context.next = 17;
                  break;
                }

                if (!(typeof this.data.persons[i].name == "undefined")) {
                  _context.next = 5;
                  break;
                }

                _labrador2.default.showModal({
                  title: '提示',
                  content: '请输入正确姓名',
                  showCancel: false,
                  success: function success(res) {}
                });
                return _context.abrupt('return');

              case 5:
                if (!(typeof this.data.persons[i].cardCode == "undefined")) {
                  _context.next = 8;
                  break;
                }

                _labrador2.default.showModal({
                  title: '提示',
                  content: '请输入有效身份证号',
                  showCancel: false,
                  success: function success(res) {}
                });
                return _context.abrupt('return');

              case 8:
                if (!(!this.data.persons[i].name.length > 0)) {
                  _context.next = 11;
                  break;
                }

                _labrador2.default.showModal({
                  title: '提示',
                  content: '请输入正确姓名',
                  showCancel: false,
                  success: function success(res) {}
                });
                return _context.abrupt('return');

              case 11:
                if (this.checkisIDCard(this.data.persons[i].cardCode)) {
                  _context.next = 14;
                  break;
                }

                _labrador2.default.showModal({
                  title: '提示',
                  content: '请输入有效身份证号',
                  showCancel: false,
                  success: function success(res) {}
                });
                return _context.abrupt('return');

              case 14:
                i++;
                _context.next = 1;
                break;

              case 17:
                if (!this.data.bl) {
                  _context.next = 29;
                  break;
                }

                this.setData({
                  bl: false
                });
                _context.next = 21;
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

              case 21:
                res = _context.sent;

                if (!(res.data.status == 0)) {
                  _context.next = 27;
                  break;
                }

                _context.next = 25;
                return _labrador2.default.navigateTo({
                  url: '/pages/joinEnd/joinEnd'
                });

              case 25:
                _context.next = 28;
                break;

              case 27:
                _labrador2.default.showModal({
                  title: '提示',
                  content: res.data.msg,
                  showCancel: false,
                  success: function success(res) {
                    if (res.confirm) {
                      console.log('用户点击确定');
                    }
                  }
                });

              case 28:
                this.setData({
                  bl: true
                });

              case 29:
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
        var id;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = parseInt(e.type);

                this.setData({
                  publicConvention: jsonData.items[0].convention,
                  conventionTxt: jsonData.items[id].convention,
                  projectId: id,
                  conditionTxt: jsonData.items[id].condition
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