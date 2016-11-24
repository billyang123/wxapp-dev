'use strict';
(function(module,require){var exports=module.exports={};
var global=window=require('../../npm/labrador/global.js');
"use strict";

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

var Accountlist = function (_wx$Component) {
  (0, _inherits3.default)(Accountlist, _wx$Component);

  function Accountlist() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Accountlist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Accountlist.__proto__ || (0, _getPrototypeOf2.default)(Accountlist)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      index: 0,
      typeArr: ["全部", "充值", "援助"],
      pageIndex: 1,
      rowsArr: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Accountlist, [{
    key: "linkTo",
    value: function linkTo(event) {
      _labrador2.default.navigateTo({
        url: event.currentTarget.dataset.link
      });
    }
  }, {
    key: "getAccount",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(options) {
        var accountList, __data, rows, i, times;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/project/account/money/bill/index',
                  method: "post",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    type: options.type || 0,
                    pageIndex: options.pageIndex || 1,
                    rows: options.rows || 30,
                    code: _labrador2.default.app.globalData.storage.code
                  }
                });

              case 2:
                accountList = _context.sent;

                if (!(accountList.data.status == 0)) {
                  _context.next = 10;
                  break;
                }

                __data = accountList.data.data;
                rows = null;

                if (__data.rows) {
                  rows = __data.rows;
                } else {
                  rows = [];
                }

                for (i = 0; i < rows.length; i++) {
                  times = rows[i].createTimeStr.split(" ");

                  rows[i].day = times[0];
                  rows[i].time = times[1];
                }
                __data.rows = rows;
                return _context.abrupt("return", __data);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAccount(_x) {
        return _ref2.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "bindPickerChange",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var index, _rows, accountList;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                index = e.detail.value;
                _rows = [];
                _context2.next = 4;
                return this.getAccount({
                  type: index,
                  pageIndex: 1,
                  rows: 30
                });

              case 4:
                accountList = _context2.sent;


                if (accountList.rows) {
                  _rows = accountList.rows;
                } else {
                  _rows = [];
                }
                this.setData({
                  rowsArr: _rows,
                  index: index
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function bindPickerChange(_x2) {
        return _ref3.apply(this, arguments);
      }

      return bindPickerChange;
    }()
  }, {
    key: "onLoad",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var accountList;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAccount({});

              case 2:
                accountList = _context3.sent;

                this.setData({
                  rowsArr: accountList.rows
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad() {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Accountlist;
}(_labrador2.default.Component);


Page(_labrador._createPage(Accountlist));

})(module,require);