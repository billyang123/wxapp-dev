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

var _slide = require('../../components/slide/slide.js');

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Date.prototype.Format = function (fmt) {
  //author: meizz 
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }return fmt;
};

var Elecert = function (_wx$Component) {
  (0, _inherits3.default)(Elecert, _wx$Component);

  function Elecert() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Elecert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Elecert.__proto__ || (0, _getPrototypeOf2.default)(Elecert)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      project: {},
      list: {},
      projectAccount: {},
      projectId: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Elecert, [{
    key: 'showIntro',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var showModal;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _labrador2.default.showModal({
                  title: '什么是等待期？',
                  content: '等待期又称观察期，互助会员加入互助计划后，在等待期内发生的重大疾病不享受互助。设立等待期是为了防止互助会员明知道将发生事故，而马上加入以骗取互助金。',
                  showCancel: false,
                  confirmText: "知道了",
                  confirmColor: "#ff6a00"
                });

              case 2:
                showModal = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function showIntro() {
        return _ref2.apply(this, arguments);
      }

      return showIntro;
    }()
  }, {
    key: 'linkTo',
    value: function linkTo(e) {
      _labrador2.default.navigateTo({
        url: e.currentTarget.dataset.link
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var id, elecertData, createTime, effectiveTime;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = e.id;
                _context2.next = 3;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/project/account/detail',
                  method: "post",
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    code: _labrador2.default.app.globalData.storage.code,
                    projectAccountId: id
                  }
                });

              case 3:
                elecertData = _context2.sent;
                createTime = elecertData.data.data.projectAccount.createTime;
                effectiveTime = elecertData.data.data.projectAccount.effectiveTime;

                elecertData.data.data.projectAccount.createTime = new Date(createTime).Format("yyyy-MM-dd hh:mm:ss");
                elecertData.data.data.projectAccount.effectiveTime = new Date(effectiveTime).Format("yyyy-MM-dd hh:mm:ss");
                this.setData({
                  project: elecertData.data.data.project,
                  list: elecertData.data.data.list,
                  projectAccount: elecertData.data.data.projectAccount,
                  projectId: elecertData.data.data.project.id
                });
                console.log(elecertData);

              case 10:
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
  return Elecert;
}(_labrador2.default.Component);


Page(_labrador._createPage(Elecert));

})(module,require);