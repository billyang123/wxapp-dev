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

var _navbar = require('../../components/navbar/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_wx$Component) {
  (0, _inherits3.default)(Index, _wx$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      banner: {
        img: '/images/banner_01_750x250.png',
        href: '/pages/bannerIndex/bannerIndex'
      },
      mImgArr: {},
      assetsPath: _labrador2.default.app.data.assetsPath
    }, _this.children = {
      //swiper: new Swiper({imgUrls:"@bannerImgs"}),
      navbar: new _navbar2.default({ cur: 0 })
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //console.log(e)
                // wx.redirectTo({
                //   url: '/pages/bindphone/bindphone'
                // })
                this.getIndexProject();

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'getIndexProject',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var res, _data, _mImgArr, i;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _labrador2.default.app.ajax({ url: "https://xcx.chinamuxie.com/wxapi/project/getIndexProject" });

              case 2:
                res = _context2.sent;
                _data = res.data;
                _mImgArr = {};

                for (i = 0; i < _data.length; i++) {
                  _mImgArr[_data[i].id] = _data[i];
                }
                console.log(_mImgArr);
                this.setData({
                  mImgArr: _mImgArr
                });

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getIndexProject() {
        return _ref3.apply(this, arguments);
      }

      return getIndexProject;
    }()
  }, {
    key: 'makePhoneCall',
    value: function makePhoneCall(event) {
      _labrador2.default.showModal({
        title: '拨打电话：' + event.currentTarget.dataset.phoneNumber,
        success: function success(res) {
          _labrador2.default.makePhoneCall({
            phoneNumber: event.currentTarget.dataset.phoneNumber
          });
        }
      });
    }
  }, {
    key: 'linkTo',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(event) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.isLink) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return');

              case 2:
                this.isLink = true;
                _context3.next = 5;
                return _labrador2.default.navigateTo({
                  url: event.currentTarget.dataset.link
                });

              case 5:
                this.isLink = false;

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function linkTo(_x) {
        return _ref4.apply(this, arguments);
      }

      return linkTo;
    }()
  }]);
  return Index;
}(_labrador2.default.Component);

//import Swiper from '../../components/swiper/swiper';



Page(_labrador._createPage(Index));

})(module,require);