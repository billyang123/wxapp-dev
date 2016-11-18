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

var _swiper = require('../../components/swiper/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_wx$Component) {
  (0, _inherits3.default)(Index, _wx$Component);

  function Index() {
    var _ref;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      bannerImgs: [],
      project: [{
        title: "789重大疾病互助社群",
        content: "适用于{0}-{1}周岁健康人群癌症等25种重大疾病互助最高可获30万元互助金{2}人加入",
        img: "/images/78902_img001.png",
        link: '/pages/community/community?type=1'
      }, {
        title: "留守儿童互助社群",
        content: "适用于{0}-{1}周岁人群大病、意外、走失、辍学互助最高可获33万元互助金{2}人加入",
        img: "/images/stayChildren02_img001.png",
        link: '/pages/community/community?type=2'
      }, {
        title: "交通、旅游意外互助社群",
        content: "适用于{0}-{1}周岁人群公共交通、旅游意外互助",
        img: "/images/traffic02_img001.png",
        link: '/pages/community/community?type=3'
      }, {
        title: "少儿大病、意外互助社群",
        content: "适用于{0}-{1}周岁少儿少儿大饼、意外互助最高可获35万元互助金{2}人加入",
        img: "/images/children02_img001.png",
        link: '/pages/community/community?type=4'
      }, {
        title: "80后孕妈婴宝互助社群",
        content: "适用于80后备孕、已孕妈妈孕期、孕产、婴儿疾病互助最高可获10万元互助金{2}人加入",
        img: "/images/8002_img001.png",
        link: '/pages/community/community?type=5'
      }, {
        title: "中老年大病、意外互助社群",
        content: "适用于{0}-{1}周岁人群抗癌、大病、意外互助最高可获35万元互助金{2}人加入",
        img: "/images/old02_img001.png",
        link: '/pages/community/community?type=6'
      }],
      media: []
    }, _this2.children = {
      swiper: new _swiper2.default({ imgUrls: "@bannerImgs" })
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'makePhoneCall',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _labrador2.default.makePhoneCall({
                  phoneNumber: event.currentTarget.dataset.phoneNumber
                });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function makePhoneCall(_x) {
        return _ref2.apply(this, arguments);
      }

      return makePhoneCall;
    }()
  }, {
    key: 'linkTo',
    value: function linkTo(event) {
      _labrador2.default.navigateTo({
        url: event.currentTarget.dataset.link
      });
    }
  }, {
    key: 'bannerInit',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var res, imgUrls, imgUrlsArr, i, imgObj;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/banner/list',
                  data: {
                    bannerType: 0
                  }
                });

              case 2:
                res = _context2.sent;
                imgUrls = [];
                imgUrlsArr = res.data.data || [];

                for (i = 0; i < imgUrlsArr.length; i++) {
                  imgObj = {};

                  imgObj.img = imgUrlsArr[i].bannerImgUrl;
                  imgObj.link = imgUrlsArr[i].bannerLinkUrl;
                  imgUrls.push(imgObj);
                }
                this.setData({
                  bannerImgs: imgUrls
                });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function bannerInit() {
        return _ref3.apply(this, arguments);
      }

      return bannerInit;
    }()
  }, {
    key: 'mreplace',
    value: function mreplace(str, arr) {
      for (var i = 0; i < arr.length; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gim");
        var mtch = str.match(reg);
        if (mtch) {
          str = str.replace(mtch[0], arr[i]);
        }
      }
      return str;
    }
  }, {
    key: 'objectInit',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _this, objRes, obj_data, project;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this = this;
                _context3.next = 3;
                return _labrador2.default.request({
                  url: 'https://xcx.chinamuxie.com/wxapi/project/getIndexProject',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  }
                });

              case 3:
                objRes = _context3.sent;
                obj_data = objRes.data.data;
                project = this.data.project;

                obj_data.forEach(function (item) {
                  var id = item.id - 1;
                  project[id].content = _this.mreplace(project[id].content, [item.minAge, item.maxAge, item.projectTotalUser]);
                  //project[item.id].content = project[item.id].content.replace("{0}",item.minAge).replace("{1}",item.maxAge).replace("{2}",item.projectTotalUser);
                  //console.log(project[item.id].content)
                  project[id].mImgArr = item.headImg;
                });
                this.setData({
                  project: project
                });

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function objectInit() {
        return _ref4.apply(this, arguments);
      }

      return objectInit;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(e) {
        var location;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.bannerInit();
                this.objectInit();
                _context4.next = 4;
                return _labrador2.default.getLocation();

              case 4:
                location = _context4.sent;

                console.log(e);

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onLoad(_x2) {
        return _ref5.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Index;
}(_labrador2.default.Component);


Page(_labrador._createPage(Index));

})(module,require);