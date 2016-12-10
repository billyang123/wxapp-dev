"use strict";var exports=module.exports={};var global=window=require('../../npm/labrador/global.js');
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
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(event) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.isLink) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                this.isLink = true;
                _context2.next = 5;
                return _labrador2.default.redirectTo({
                  url: event.currentTarget.dataset.link
                });

              case 5:
                this.isLink = false;

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function linkTo(_x) {
        return _ref3.apply(this, arguments);
      }

      return linkTo;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(e) {
        var id, elecertData, createTime, effectiveTime;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = e.id;
                _context3.next = 3;
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
                elecertData = _context3.sent;
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
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad(_x2) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Elecert;
}(_labrador2.default.Component);


//# sourceMappingURL=data:application/json;charset=utf-8;base64;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZWNlcnQuanMiXSwibmFtZXMiOlsiRGF0ZSIsInByb3RvdHlwZSIsIkZvcm1hdCIsImZtdCIsIm8iLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiZ2V0TWlsbGlzZWNvbmRzIiwidGVzdCIsInJlcGxhY2UiLCJSZWdFeHAiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwibGVuZ3RoIiwiayIsIkVsZWNlcnQiLCJkYXRhIiwicHJvamVjdCIsImxpc3QiLCJwcm9qZWN0QWNjb3VudCIsInByb2plY3RJZCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsImV2ZW50IiwiaXNMaW5rIiwicmVkaXJlY3RUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibGluayIsImUiLCJpZCIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJjb2RlIiwiYXBwIiwiZ2xvYmFsRGF0YSIsInN0b3JhZ2UiLCJwcm9qZWN0QWNjb3VudElkIiwiZWxlY2VydERhdGEiLCJjcmVhdGVUaW1lIiwiZWZmZWN0aXZlVGltZSIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0FBLEtBQUtDLFNBQUwsQ0FBZUMsTUFBZixHQUF3QixVQUFVQyxHQUFWLEVBQWU7QUFBRTtBQUNyQyxNQUFJQyxJQUFJO0FBQ0osVUFBTSxLQUFLQyxRQUFMLEtBQWtCLENBRHBCLEVBQ3VCO0FBQzNCLFVBQU0sS0FBS0MsT0FBTCxFQUZGLEVBRWtCO0FBQ3RCLFVBQU0sS0FBS0MsUUFBTCxFQUhGLEVBR21CO0FBQ3ZCLFVBQU0sS0FBS0MsVUFBTCxFQUpGLEVBSXFCO0FBQ3pC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bUQsT0FBTCxDQUFhO0FBQ1o5QiwyQkFBUTJCLFlBQVk1QixJQUFaLENBQWlCQSxJQUFqQixDQUFzQkMsT0FEbEI7QUFFZEMsd0JBQUswQixZQUFZNUIsSUFBWixDQUFpQkEsSUFBakIsQ0FBc0JFLElBRmI7QUFHZEMsa0NBQWV5QixZQUFZNUIsSUFBWixDQUFpQkEsSUFBakIsQ0FBc0JHLGNBSHZCO0FBSVhDLDZCQUFVd0IsWUFBWTVCLElBQVosQ0FBaUJBLElBQWpCLENBQXNCQyxPQUF0QixDQUE4QmtCO0FBSjdCLGlCQUFiO0FBTUFhLHdCQUFRQyxHQUFSLENBQVlMLFdBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9DNkIsbUJBQUdNLFM7O2tCQUFuQm5DLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3eCBmcm9tICdsYWJyYWRvcic7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zbGlkZS9zbGlkZSc7XG5EYXRlLnByb3RvdHlwZS5Gb3JtYXQgPSBmdW5jdGlvbiAoZm10KSB7IC8vYXV0aG9yOiBtZWl6eiBcbiAgICB2YXIgbyA9IHtcbiAgICAgICAgXCJNK1wiOiB0aGlzLmdldE1vbnRoKCkgKyAxLCAvL+aciOS7vSBcbiAgICAgICAgXCJkK1wiOiB0aGlzLmdldERhdGUoKSwgLy/ml6UgXG4gICAgICAgIFwiaCtcIjogdGhpcy5nZXRIb3VycygpLCAvL+Wwj+aXtiBcbiAgICAgICAgXCJtK1wiOiB0aGlzLmdldE1pbnV0ZXMoKSwgLy/liIYgXG4gICAgICAgIFwicytcIjogdGhpcy5nZXRTZWNvbmRzKCksIC8v56eSIFxuICAgICAgICBcInErXCI6IE1hdGguZmxvb3IoKHRoaXMuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmIFxuICAgICAgICBcIlNcIjogdGhpcy5nZXRNaWxsaXNlY29uZHMoKSAvL+avq+enkiBcbiAgICB9O1xuICAgIGlmICgvKHkrKS8udGVzdChmbXQpKSBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsICh0aGlzLmdldEZ1bGxZZWFyKCkgKyBcIlwiKS5zdWJzdHIoNCAtIFJlZ0V4cC4kMS5sZW5ndGgpKTtcbiAgICBmb3IgKHZhciBrIGluIG8pXG4gICAgaWYgKG5ldyBSZWdFeHAoXCIoXCIgKyBrICsgXCIpXCIpLnRlc3QoZm10KSkgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSkubGVuZ3RoKSkpO1xuICAgIHJldHVybiBmbXQ7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVjZXJ0IGV4dGVuZHMgd3guQ29tcG9uZW50IHtcblx0ZGF0YSA9IHtcblx0XHRwcm9qZWN0Ont9LFxuXHRcdGxpc3Q6e30sXG5cdFx0cHJvamVjdEFjY291bnQ6e30sXG4gICAgcHJvamVjdElkOicnXG5cdH07XG5cdGFzeW5jIHNob3dJbnRybygpe1xuXHRcdGxldCBzaG93TW9kYWwgPSBhd2FpdCB3eC5zaG93TW9kYWwoe1xuXHRcdCAgdGl0bGU6ICfku4DkuYjmmK/nrYnlvoXmnJ/vvJ8nLFxuXHRcdCAgY29udGVudDogJ+etieW+heacn+WPiOensOinguWvn+acn++8jOS6kuWKqeS8muWRmOWKoOWFpeS6kuWKqeiuoeWIkuWQju+8jOWcqOetieW+heacn+WGheWPkeeUn+eahOmHjeWkp+eWvueXheS4jeS6q+WPl+S6kuWKqeOAguiuvueri+etieW+heacn+aYr+S4uuS6humYsuatouS6kuWKqeS8muWRmOaYjuefpemBk+WwhuWPkeeUn+S6i+aVhe+8jOiAjOmprOS4iuWKoOWFpeS7pemql+WPluS6kuWKqemHkeOAgicsXG5cdFx0ICBzaG93Q2FuY2VsOmZhbHNlLFxuXHRcdCAgY29uZmlybVRleHQ6XCLnn6XpgZPkuoZcIixcblx0XHQgIGNvbmZpcm1Db2xvcjpcIiNmZjZhMDBcIlxuXHRcdH0pXG5cdH1cblx0YXN5bmMgbGlua1RvKGV2ZW50KSB7XG4gICAgICAgICAgaWYodGhpcy5pc0xpbmspIHJldHVybjtcbiAgICAgICAgICB0aGlzLmlzTGluayA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICB1cmw6ZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmxpbmtcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuaXNMaW5rID0gZmFsc2U7XG4gICAgfVxuXHRhc3luYyBvbkxvYWQoZSl7XG5cdFx0bGV0IGlkID0gZS5pZDtcblx0XHRsZXQgZWxlY2VydERhdGEgPSBhd2FpdCB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8veGN4LmNoaW5hbXV4aWUuY29tL3d4YXBpL3Byb2plY3QvYWNjb3VudC9kZXRhaWwnLFxuICAgICAgICAgICAgbWV0aG9kOlwicG9zdFwiLFxuICAgICAgICAgICAgaGVhZGVyOiB7XG5cdFx0XHQgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuXHRcdFx0ICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFx0Y29kZTp3eC5hcHAuZ2xvYmFsRGF0YS5zdG9yYWdlLmNvZGUsXG4gICAgICAgICAgICBcdHByb2plY3RBY2NvdW50SWQ6aWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBjcmVhdGVUaW1lID0gZWxlY2VydERhdGEuZGF0YS5kYXRhLnByb2plY3RBY2NvdW50LmNyZWF0ZVRpbWU7XG4gICAgICAgIGxldCBlZmZlY3RpdmVUaW1lID0gZWxlY2VydERhdGEuZGF0YS5kYXRhLnByb2plY3RBY2NvdW50LmVmZmVjdGl2ZVRpbWU7XG4gICAgICAgIGVsZWNlcnREYXRhLmRhdGEuZGF0YS5wcm9qZWN0QWNjb3VudC5jcmVhdGVUaW1lID0gKG5ldyBEYXRlKGNyZWF0ZVRpbWUpKS5Gb3JtYXQoXCJ5eXl5LU1NLWRkIGhoOm1tOnNzXCIpO1xuICAgICAgICBlbGVjZXJ0RGF0YS5kYXRhLmRhdGEucHJvamVjdEFjY291bnQuZWZmZWN0aXZlVGltZSA9IChuZXcgRGF0ZShlZmZlY3RpdmVUaW1lKSkuRm9ybWF0KFwieXl5eS1NTS1kZCBoaDptbTpzc1wiKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBcdHByb2plY3Q6ZWxlY2VydERhdGEuZGF0YS5kYXRhLnByb2plY3QsXG5cdFx0XHQgICAgbGlzdDplbGVjZXJ0RGF0YS5kYXRhLmRhdGEubGlzdCxcblx0XHRcdCAgICBwcm9qZWN0QWNjb3VudDplbGVjZXJ0RGF0YS5kYXRhLmRhdGEucHJvamVjdEFjY291bnQsXG4gICAgICAgICAgcHJvamVjdElkOmVsZWNlcnREYXRhLmRhdGEuZGF0YS5wcm9qZWN0LmlkXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVjZXJ0RGF0YSlcblx0fVxufVxuIl19
Page(_labrador._createPage(Elecert));
