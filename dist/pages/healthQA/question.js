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

var _alert = require('../../components/alert/alert.js');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Question = function (_wx$Component) {
	(0, _inherits3.default)(Question, _wx$Component);

	function Question() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Question);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Question.__proto__ || (0, _getPrototypeOf2.default)(Question)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			id: 1,
			// curLength:0,
			// maxLength:60,
			textareaValue: "",

			// list:[],
			// windowHieght:"625",
			// hidden:false,
			// hasMore:true,
			//    	hasRefesh:false,
			//    	size:5,
			// page:0,

			// detail:{},
			loading: false

		}, _this.children = {
			alert: new _alert2.default({ msg: "@msg" })
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Question, [{
		key: 'formSubmit',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
				var qcontent, res, sModal;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								qcontent = e.detail.value.questionContent;

								qcontent = qcontent.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");

								if (!(qcontent == "")) {
									_context.next = 4;
									break;
								}

								return _context.abrupt('return', this.children.alert.show("请输入提问内容"));

							case 4:
								if (!(qcontent.length > 60)) {
									_context.next = 6;
									break;
								}

								return _context.abrupt('return', this.children.alert.show("提问内容需少于60个字"));

							case 6:
								_context.next = 8;
								return _labrador2.default.app.ajax({
									url: _labrador2.default.app.data.ajaxPath + '/wxapi/healthserv/qa/add',
									type: "post",
									data: {
										healthDoctorId: this.data.id,
										questionContent: qcontent,
										code: _labrador2.default.app.globalData.storage.code
									}
								});

							case 8:
								res = _context.sent;

								if (res.status == 0) {
									_labrador2.default.showToast({
										title: '提问成功',
										icon: 'success',
										duration: 2000
									});
									this.setData({
										textareaValue: '',
										curLength: 0,
										disabled: false
									});
									setTimeout(function () {
										_labrador2.default.navigateBack();
									}, 2000);
								}

								if (!(res.status == 1)) {
									_context.next = 15;
									break;
								}

								_context.next = 13;
								return _labrador2.default.showModal({
									title: '提示',
									content: '需要先登录'
								});

							case 13:
								sModal = _context.sent;

								if (sModal.confirm) {
									_labrador2.default.redirectTo({
										url: '/pages/account/account'
									});
								}

							case 15:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function formSubmit(_x) {
				return _ref2.apply(this, arguments);
			}

			return formSubmit;
		}()
		// setNumValue(e){
		// 	let _value = e.detail.value;
		// 	_value = _value.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
		// 	this.setData({
		// 		curLength:_value.length,
		// 		textareaValue:_value
		// 	})
		// }
		// async getDetail(){
		// 	//https://xcx.chinamuxie.com/wxapi/healthserv/qa/detail?qaId=2
		// 	var res = await wx.app.ajax({
		// 		url: wx.app.data.ajaxPath+'/wxapi/healthserv/doctor/detail',
		// 		data:{
		// 			doctorId:this.data.id
		// 		}
		// 	})
		// 	let height = res.data.faNumber>1?900:500;
		// 	//console.log(res.data.faNumber)
		// 	this.setData({
		// 		detail:res.data
		// 	})
		// }

	}, {
		key: 'onLoad',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								this.data.id = parseInt(e.id);
								//加载更多设置高度
								//this.getDetail();

							case 1:
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
	return Question;
}(_labrador2.default.Component);


Page(_labrador._createPage(Question));

})(module,require);