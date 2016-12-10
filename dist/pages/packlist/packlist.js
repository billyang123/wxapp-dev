'use strict';
(function(module,require){var exports=module.exports={};
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require('../../npm/babel-runtime/core-js/json/stringify.js');

var _stringify2 = _interopRequireDefault(_stringify);

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

var myData = [{
	title: "留守儿童互助公约",
	list: [{
		n: "《留守儿童重大疾病互助公约》",
		link: "/pages/hzpact/hzpact?type=2"
	}, {
		n: "《留守儿童意外伤害互助公约》",
		link: "/pages/hzpact/hzpact?type=3"
	}, {
		n: "《留守儿童走失互助公约》",
		link: "/pages/hzpact/hzpact?type=4"
	}, {
		n: "《留守儿童法律维权互助公约》",
		link: "/pages/hzpact/hzpact?type=5"
	}, {
		n: "《留守儿童辍学互助公约》",
		link: "/pages/hzpact/hzpact?type=6"
	}, {
		n: "《留守儿童心理疾病互助公约》",
		link: "/pages/hzpact/hzpact?type=7"
	}]
}, {
	title: "少儿大病、意外互助公约",
	list: [{
		n: "《少儿重大疾病互助公约》",
		link: "/pages/hzpact/hzpact?type=9"
	}, {
		n: "《少儿意外伤害互助公约》",
		link: "/pages/hzpact/hzpact?type=10"
	}]
}, {
	title: "中老年抗癌、大病互助公约",
	list: [{
		n: "《中老年抗癌、大病互助公约》",
		link: "/pages/hzpact/hzpact?type=12"
	}, {
		n: "《中老年意外伤害互助公约》",
		link: "/pages/hzpact/hzpact?type=13"
	}]
}];

var Hzpactlist = function (_wx$Component) {
	(0, _inherits3.default)(Hzpactlist, _wx$Component);

	function Hzpactlist() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Hzpactlist);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Hzpactlist.__proto__ || (0, _getPrototypeOf2.default)(Hzpactlist)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Hzpactlist, [{
		key: "onLoad",
		value: function onLoad(e) {
			var id = parseInt(e.id);
			var mdata = myData[id - 1];
			this.setData({
				title: mdata.title,
				list: mdata.list
			});
		}
	}]);
	return Hzpactlist;
}(_labrador2.default.Component);



function getTxt() {
	var obj = {
		title: $(".header-fixed > span").text()
	};
	var result = [];
	$('.am-panel').each(function (index, item) {
		$(item).find(".am-panel-collapse").show();
		var r = {
			a: "",
			height: $(item).find(".am-panel-collapse").outerHeight() * 2,
			opacity: 1,
			isDown: false
		};
		r.t = $(item).find(".am-panel-title").text();
		var arr = [];

		$(item).find(".am-panel-bd>p .am-panel-bd>table").each(function (idx, dt) {

			var str = "";
			$(dt).find("span").each(function (i, span) {
				str += $(span).html();
			});
			arr.push(str);
		});
		r.txt = arr;
		result.push(r);
	});
	obj.slidedata = result;
	return (0, _stringify2.default)(obj);
}
Page(_labrador._createPage(Hzpactlist));

})(module,require);