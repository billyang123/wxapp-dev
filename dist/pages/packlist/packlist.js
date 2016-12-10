"use strict";var exports=module.exports={};"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2tsaXN0LmpzIl0sIm5hbWVzIjpbIm15RGF0YSIsInRpdGxlIiwibGlzdCIsIm4iLCJsaW5rIiwiSHpwYWN0bGlzdCIsImRhdGEiLCJlIiwiaWQiLCJwYXJzZUludCIsIm1kYXRhIiwic2V0RGF0YSIsIkNvbXBvbmVudCIsImdldFR4dCIsIm9iaiIsIiQiLCJ0ZXh0IiwicmVzdWx0IiwiZWFjaCIsImluZGV4IiwiaXRlbSIsImZpbmQiLCJzaG93IiwiciIsImEiLCJoZWlnaHQiLCJvdXRlckhlaWdodCIsIm9wYWNpdHkiLCJpc0Rvd24iLCJ0IiwiYXJyIiwiaWR4IiwiZHQiLCJzdHIiLCJpIiwic3BhbiIsImh0bWwiLCJwdXNoIiwidHh0Iiwic2xpZGVkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBUyxDQUNaO0FBQ0NDLFFBQU0sVUFEUDtBQUVDQyxPQUFLLENBQ0o7QUFDQ0MsS0FBRSxnQkFESDtBQUVDQyxRQUFLO0FBRk4sRUFESSxFQUtKO0FBQ0NELEtBQUUsZ0JBREg7QUFFQ0MsUUFBSztBQUZOLEVBTEksRUFTSjtBQUNDRCxLQUFFLGNBREg7QUFFQ0MsUUFBSztBQUZOLEVBVEksRUFhSjtBQUNDRCxLQUFFLGdCQURIO0FBRUNDLFFBQUs7QUFGTixFQWJJLEVBaUJKO0FBQ0NELEtBQUUsY0FESDtBQUVDQyxRQUFLO0FBRk4sRUFqQkksRUFxQko7QUFDQ0QsS0FBRSxnQkFESDtBQUVDQyxRQUFLO0FBRk4sRUFyQkk7QUFGTixDQURZLEVBOEJaO0FBQ0NILFFBQU0sYUFEUDtBQUVDQyxPQUFLLENBQ0o7QUFDQ0MsS0FBRSxjQURIO0FBRUNDLFFBQUs7QUFGTixFQURJLEVBS0o7QUFDQ0QsS0FBRSxjQURIO0FBRUNDLFFBQUs7QUFGTixFQUxJO0FBRk4sQ0E5QlksRUEyQ1o7QUFDQ0gsUUFBTSxjQURQO0FBRUNDLE9BQUssQ0FDSjtBQUNDQyxLQUFFLGdCQURIO0FBRUNDLFFBQUs7QUFGTixFQURJLEVBS0o7QUFDQ0QsS0FBRSxlQURIO0FBRUNDLFFBQUs7QUFGTixFQUxJO0FBRk4sQ0EzQ1ksQ0FBYjs7SUF5RHFCQyxVOzs7Ozs7Ozs7Ozs7OztrTkFDcEJDLEksR0FBTyxFOzs7Ozt5QkFHQUMsQyxFQUFFO0FBQ1IsT0FBSUMsS0FBS0MsU0FBU0YsRUFBRUMsRUFBWCxDQUFUO0FBQ0EsT0FBSUUsUUFBUVYsT0FBT1EsS0FBRyxDQUFWLENBQVo7QUFDQSxRQUFLRyxPQUFMLENBQWE7QUFDWlYsV0FBTVMsTUFBTVQsS0FEQTtBQUVaQyxVQUFLUSxNQUFNUjtBQUZDLElBQWI7QUFJQTs7O0VBWHNDLG1CQUFHVSxTOztrQkFBdEJQLFU7O0FBYXJCLFNBQVNRLE1BQVQsR0FBaUI7QUFDaEIsS0FBSUMsTUFBTTtBQUNUYixTQUFNYyxFQUFFLHNCQUFGLEVBQTBCQyxJQUExQjtBQURHLEVBQVY7QUFHQSxLQUFJQyxTQUFTLEVBQWI7QUFDQUYsR0FBRSxXQUFGLEVBQWVHLElBQWYsQ0FBb0IsVUFBU0MsS0FBVCxFQUFlQyxJQUFmLEVBQXFCO0FBQ3hDTCxJQUFFSyxJQUFGLEVBQVFDLElBQVIsQ0FBYSxvQkFBYixFQUFtQ0MsSUFBbkM7QUFDQSxNQUFJQyxJQUFJO0FBQ1BDLE1BQUUsRUFESztBQUVQQyxXQUFPVixFQUFFSyxJQUFGLEVBQVFDLElBQVIsQ0FBYSxvQkFBYixFQUFtQ0ssV0FBbkMsS0FBaUQsQ0FGakQ7QUFHUEMsWUFBUSxDQUhEO0FBSVBDLFdBQU87QUFKQSxHQUFSO0FBTUFMLElBQUVNLENBQUYsR0FBTWQsRUFBRUssSUFBRixFQUFRQyxJQUFSLENBQWEsaUJBQWIsRUFBZ0NMLElBQWhDLEVBQU47QUFDQSxNQUFJYyxNQUFNLEVBQVY7O0FBRUFmLElBQUVLLElBQUYsRUFBUUMsSUFBUixDQUFhLG1DQUFiLEVBQWtESCxJQUFsRCxDQUF1RCxVQUFTYSxHQUFULEVBQWFDLEVBQWIsRUFBZ0I7O0FBRXRFLE9BQUlDLE1BQU0sRUFBVjtBQUNBbEIsS0FBRWlCLEVBQUYsRUFBTVgsSUFBTixDQUFXLE1BQVgsRUFBbUJILElBQW5CLENBQXdCLFVBQVNnQixDQUFULEVBQVdDLElBQVgsRUFBZ0I7QUFDdkNGLFdBQU9sQixFQUFFb0IsSUFBRixFQUFRQyxJQUFSLEVBQVA7QUFDQSxJQUZEO0FBR0FOLE9BQUlPLElBQUosQ0FBU0osR0FBVDtBQUNBLEdBUEQ7QUFRQVYsSUFBRWUsR0FBRixHQUFRUixHQUFSO0FBQ0FiLFNBQU9vQixJQUFQLENBQVlkLENBQVo7QUFDQSxFQXJCRDtBQXNCQVQsS0FBSXlCLFNBQUosR0FBZ0J0QixNQUFoQjtBQUNBLFFBQU8seUJBQWVILEdBQWYsQ0FBUDtBQUNBIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd3ggZnJvbSAnbGFicmFkb3InO1xuXG52YXIgbXlEYXRhID0gW1xuXHR7XG5cdFx0dGl0bGU6XCLnlZnlrojlhL/nq6XkupLliqnlhaznuqZcIixcblx0XHRsaXN0Oltcblx0XHRcdHtcblx0XHRcdFx0bjpcIuOAiueVmeWuiOWEv+erpemHjeWkp+eWvueXheS6kuWKqeWFrOe6puOAi1wiLFxuXHRcdFx0XHRsaW5rOlwiL3BhZ2VzL2h6cGFjdC9oenBhY3Q/dHlwZT0yXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG46XCLjgIrnlZnlrojlhL/nq6XmhI/lpJbkvKTlrrPkupLliqnlhaznuqbjgItcIixcblx0XHRcdFx0bGluazpcIi9wYWdlcy9oenBhY3QvaHpwYWN0P3R5cGU9M1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuOlwi44CK55WZ5a6I5YS/56ul6LWw5aSx5LqS5Yqp5YWs57qm44CLXCIsXG5cdFx0XHRcdGxpbms6XCIvcGFnZXMvaHpwYWN0L2h6cGFjdD90eXBlPTRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bjpcIuOAiueVmeWuiOWEv+erpeazleW+i+e7tOadg+S6kuWKqeWFrOe6puOAi1wiLFxuXHRcdFx0XHRsaW5rOlwiL3BhZ2VzL2h6cGFjdC9oenBhY3Q/dHlwZT01XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG46XCLjgIrnlZnlrojlhL/nq6Xovo3lrabkupLliqnlhaznuqbjgItcIixcblx0XHRcdFx0bGluazpcIi9wYWdlcy9oenBhY3QvaHpwYWN0P3R5cGU9NlwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuOlwi44CK55WZ5a6I5YS/56ul5b+D55CG55a+55eF5LqS5Yqp5YWs57qm44CLXCIsXG5cdFx0XHRcdGxpbms6XCIvcGFnZXMvaHpwYWN0L2h6cGFjdD90eXBlPTdcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdHRpdGxlOlwi5bCR5YS/5aSn55eF44CB5oSP5aSW5LqS5Yqp5YWs57qmXCIsXG5cdFx0bGlzdDpbXG5cdFx0XHR7XG5cdFx0XHRcdG46XCLjgIrlsJHlhL/ph43lpKfnlr7nl4XkupLliqnlhaznuqbjgItcIixcblx0XHRcdFx0bGluazpcIi9wYWdlcy9oenBhY3QvaHpwYWN0P3R5cGU9OVwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuOlwi44CK5bCR5YS/5oSP5aSW5Lyk5a6z5LqS5Yqp5YWs57qm44CLXCIsXG5cdFx0XHRcdGxpbms6XCIvcGFnZXMvaHpwYWN0L2h6cGFjdD90eXBlPTEwXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHR0aXRsZTpcIuS4reiAgeW5tOaKl+eZjOOAgeWkp+eXheS6kuWKqeWFrOe6plwiLFxuXHRcdGxpc3Q6W1xuXHRcdFx0e1xuXHRcdFx0XHRuOlwi44CK5Lit6ICB5bm05oqX55mM44CB5aSn55eF5LqS5Yqp5YWs57qm44CLXCIsXG5cdFx0XHRcdGxpbms6XCIvcGFnZXMvaHpwYWN0L2h6cGFjdD90eXBlPTEyXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG46XCLjgIrkuK3ogIHlubTmhI/lpJbkvKTlrrPkupLliqnlhaznuqbjgItcIixcblx0XHRcdFx0bGluazpcIi9wYWdlcy9oenBhY3QvaHpwYWN0P3R5cGU9MTNcIlxuXHRcdFx0fVxuXHRcdF1cblx0fVxuXVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHpwYWN0bGlzdCBleHRlbmRzIHd4LkNvbXBvbmVudCB7XG5cdGRhdGEgPSB7XG5cdFx0XG5cdH07XG5cdG9uTG9hZChlKXtcblx0XHRsZXQgaWQgPSBwYXJzZUludChlLmlkKTtcblx0XHRsZXQgbWRhdGEgPSBteURhdGFbaWQtMV07XG5cdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdHRpdGxlOm1kYXRhLnRpdGxlLFxuXHRcdFx0bGlzdDptZGF0YS5saXN0XG5cdFx0fSlcblx0fVxufVxuZnVuY3Rpb24gZ2V0VHh0KCl7XG5cdHZhciBvYmogPSB7XG5cdFx0dGl0bGU6JChcIi5oZWFkZXItZml4ZWQgPiBzcGFuXCIpLnRleHQoKVxuXHR9O1xuXHR2YXIgcmVzdWx0ID0gW11cblx0JCgnLmFtLXBhbmVsJykuZWFjaChmdW5jdGlvbihpbmRleCxpdGVtKSB7XG5cdFx0JChpdGVtKS5maW5kKFwiLmFtLXBhbmVsLWNvbGxhcHNlXCIpLnNob3coKTtcblx0XHR2YXIgciA9IHtcblx0XHRcdGE6XCJcIixcblx0XHRcdGhlaWdodDokKGl0ZW0pLmZpbmQoXCIuYW0tcGFuZWwtY29sbGFwc2VcIikub3V0ZXJIZWlnaHQoKSoyLFxuXHRcdFx0b3BhY2l0eToxLFxuXHRcdFx0aXNEb3duOmZhbHNlXG5cdFx0fTtcblx0XHRyLnQgPSAkKGl0ZW0pLmZpbmQoXCIuYW0tcGFuZWwtdGl0bGVcIikudGV4dCgpO1xuXHRcdHZhciBhcnIgPSBbXTtcblxuXHRcdCQoaXRlbSkuZmluZChcIi5hbS1wYW5lbC1iZD5wIC5hbS1wYW5lbC1iZD50YWJsZVwiKS5lYWNoKGZ1bmN0aW9uKGlkeCxkdCl7XG5cblx0XHRcdHZhciBzdHIgPSBcIlwiO1xuXHRcdFx0JChkdCkuZmluZChcInNwYW5cIikuZWFjaChmdW5jdGlvbihpLHNwYW4pe1xuXHRcdFx0XHRzdHIgKz0gJChzcGFuKS5odG1sKCk7XG5cdFx0XHR9KVxuXHRcdFx0YXJyLnB1c2goc3RyKVxuXHRcdH0pXG5cdFx0ci50eHQgPSBhcnI7XG5cdFx0cmVzdWx0LnB1c2gocik7XG5cdH0pXG5cdG9iai5zbGlkZWRhdGEgPSByZXN1bHQ7XG5cdHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopXG59Il19
Page(_labrador._createPage(Hzpactlist));
