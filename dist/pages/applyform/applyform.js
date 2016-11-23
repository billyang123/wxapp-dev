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

var Applyform = function (_wx$Component) {
  (0, _inherits3.default)(Applyform, _wx$Component);

  function Applyform() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Applyform);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Applyform.__proto__ || (0, _getPrototypeOf2.default)(Applyform)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      planArr: ["请选择", '美国', '中国', '巴西', '日本'],
      index: 0,
      TextArea: '',
      useName: '',
      phone: '',
      persons: {},
      arr: {}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Applyform, [{
    key: 'bindPickerChange',
    value: function bindPickerChange(e) {
      this.setData({
        index: e.detail.value
      });
    }
  }, {
    key: 'bindTextAreaBlur',
    value: function bindTextAreaBlur(e) {
      var name = e.currentTarget.dataset.name;
      this.data.persons[name] = e.detail.value;
      this.data.arr['code'] = _labrador2.default.app.globalData.storage.code;
      this.data.arr['persons'] = this.data.persons;
      this.data.arr['planArr'] = this.data.planArr[1];
      this.setData({
        persons: this.data.persons
      });
      console.log(this.data.arr);
    }
  }, {
    key: 'bindKeyInput',
    value: function bindKeyInput(e) {
      var name = e.currentTarget.dataset.name;
      this.data.persons[name] = e.detail.value;
      this.setData({
        persons: this.data.persons
      });
    }
  }, {
    key: 'onSub',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _labrador2.default.request({
                  url: '',
                  method: '',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    persons: this.data.persons,
                    code: _labrador2.default.app.globalData.storage.code
                  }
                });

              case 2:
                res = _context.sent;

                if (res.data.status == 0) {}

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onSub() {
        return _ref2.apply(this, arguments);
      }

      return onSub;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/user/claim/index',
                  method: "get",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    code: _labrador2.default.app.globalData.storage.code
                  }
                });

              case 2:
                res = _context2.sent;

                if (res.data.status == 0) {
                  console.log(res);
                  this.setData({});
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Applyform;
}(_labrador2.default.Component);


Page(_labrador._createPage(Applyform));

})(module,require);