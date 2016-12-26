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

var _slide = require('../../components/slide/slide.js');

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonData = {
	topBanner: [{
		b: "https://image1.chinamuxie.com/images/project/pj789_banner01.png",
		t: "789重大疾病互助社群",
		n: "90万+"
	}, {
		b: "https://image1.chinamuxie.com/images/project/pjleftoverChildren_banner01.png",
		t: "留守儿童互助社群",
		n: "1000+"
	}, {
		b: "https://image1.chinamuxie.com/images/project/pjtravel_banner01.png",
		t: "交通、旅游意外互助社群",
		n: "8万+"
	}, {
		b: "https://image1.chinamuxie.com/images/project/pjchildren_banner01.png",
		t: "少儿大病、意外互助社群",
		n: "1万+"
	}, {
		b: "https://image1.chinamuxie.com/images/project/pj80_banner01.png",
		t: "80后孕妈婴宝互助社群",
		n: "1万+"
	}, {
		b: "https://image1.chinamuxie.com/images/project/pjmiddleAged_banner01.png",
		t: "中老年大病、意外互助社群",
		n: "6万+"
	}],
	purpose: [["为患癌症等25种重大疾病的会员提供互助金", "一人患病，会员均摊。每次均摊不超过3元"], ["为留守儿童的多种风险提供互助金", "一人患病，会员均摊。每次均摊不超过3元"], ["为遭遇旅游、公共交通意外的会员提供互助金", "一人患病，会员均摊。每次均摊不超过1元"], ["为患癌症等25种重大疾病的会员提供互助金", "一人患病，会员均摊。每次均摊不超过3元"], ["为孕妈的生育风险和新生儿大病等提供互助金", "一人患病，会员均摊。每次均摊不超过3元"], ["为患癌症以及24种重大疾病的会员提供互助金", "一人患病，会员均摊。每次均摊不超过3元"]],
	power: [{
		t: "加入789互助社群，180天后，如果会员不幸患25种重大疾病，即可获得：",
		l: [["住院医疗费用报销（含非医保类用药）", "最高30万元"], ["住院津贴", "100元/天"], ["一次性互助金", "2万元"]],
		ll: [
		/*{
    t:"免费预约公立医院700个专家门诊号",
    o:["［福利］"],
    link:"#"
  },*/
		{
			o: ["了解详情"],
			link: "/pages/range/range?type=1"
		}]
	}, {
		t: "加入留守儿童互助社群，如果不幸患重大疾病或发生意外事故，即可获得：",
		l: [["重大疾病保障(90天后)", "最高10万元"], ["意外伤残、死亡", "最高10万元"], ["走失、被拐寻子互助金", "最高10万元"], ["暴力、性侵法律维权互助金", "最高1万元"], ["辍学(180天后)", "最高2万元"], ["心理障碍(90天后)", "最高5000元"]],
		ll: [{
			o: ["了解详情"],
			link: "/pages/range/range?type=2"
		}]
	}, {
		t: "加入旅游、交通意外互助社群，自加入次日起，如果不幸发生意外事故，即可获得：",
		l: [["国内国际航班意外身故/重度伤残", "100万元"], ["火车意外身故/重度伤残", "100万元"], ["市内公交意外身故/重度伤残", "10万元"], ["旅游意外身故/重度伤残", "20万元"]],
		ll: [{
			o: ["了解详情"],
			link: "/pages/range/range?type=3"
		}]
	}, {
		t: "加入少儿大病、意外互助社群，如果会员不幸患如下25种重大疾病或遭遇意外事故，即可获得：",
		l: [["重大疾病(90天后)", "15万元"], ["意外身故残疾", "20万元"]],
		ll: [{
			o: ["了解详情"],
			link: "/pages/range/range?type=4"
		}]
	}, {
		t: "加入80后孕妈婴宝互助社群，30天后，如果会员不幸患如下重大疾病，即可获得：",
		l: [["妊娠分娩身故", "10万元"], ["孕期重大疾病", "1万元"], ["新生儿先天缺陷", "5万元"], ["新生儿大病医疗", "2万元"]],
		ll: [{
			o: ["了解详情"],
			link: "/pages/range/range?type=5"
		}]
	}, {
		t: "加入中老年大病、意外互助社群，如果会员不幸患癌症、24种重大疾病或遭遇意外事故，即可获得：",
		l: [["重大疾病保障(180天后)", "最高10万元"], ["抗癌互助金(180天后)", "最高15万元"], ["意外身故残疾", "最高20万元"]],
		ll: [{
			o: ["了解详情"],
			link: "/pages/range/range?type=6"
		}]
	}],
	treaty: [{
		t: "会员一旦出现事故，所产生医疗费用由本社群的全体会员共同均摊，除此之外，无其他任何费用。",
		l: [["预存9元 启动保障", "预计120元/年"], ["互助费用 会员均摊", "从预存费用中扣除"], ["单次互助 不超3元", "设定限额，保障用户权益"], ["扣至0元 需要续费", "不充值则退出社群"]],
		ll: [["《17互助公约》", "/pages/hzpact/hzpact?type=1"], ["《789重大疾病互助公约》", "/pages/hzpact/hzpact?type=14"]]
	}, {
		t: "会员一旦出现事故，所产生的费用由本社群的全体会员共同均摊，除此之外，无其他任何费用。",
		l: [["预存6元 启动保障", "预计50元/年"], ["互助费用 会员均摊", "从预存费用中扣除"], ["单次互助 不超3元", "设定限额，保障用户权益"], ["扣至0元 需要续费", "不充值则退出社群"]],
		ll: [["《17互助公约》", "/pages/hzpact/hzpact?type=1"], ["《留守儿童互助公约》", "/pages/packlist/packlist?id=1"]]
	}, {
		t: "会员一旦遭遇意外，所产生的互助金由本社群的全体会员共同均摊，除此之外，无其他任何费用。",
		l: [["预存3元 启动保障", "预计9元/年"], ["互助费用 会员均摊", "从预存费用中扣除"], ["单次互助 不超1元", "设定限额，保障用户权益"], ["扣至0元 需要续费", "不充值则退出社群"]],
		ll: [["《17互助公约》", "/pages/hzpact/hzpact?type=1"], ["《公共交通、旅游意外互助公约》", "/pages/hzpact/hzpact?type=11"]]
	}, {
		t: "会员一旦出现事故，所产生医疗费用由本社群的全体会员共同均摊，除此之外，无其他任何费用。",
		l: [["预存19元 启动保障", "预计160元/年"], ["互助费用 会员均摊", "从预存费用中扣除"], ["单次互助 不超3元", "设定限额，保障用户权益"], ["扣至0元 需要续费", "不充值则退出社群"]],
		ll: [["《17互助公约》", "/pages/hzpact/hzpact?type=1"], ["《少儿大病、意外互助计划公约》", "/pages/packlist/packlist?id=2"]]
	}, {
		t: "会员一旦出现事故，所产生医疗费用由本社群的全体会员共同均摊，除此之外，无其他任何费用。",
		l: [["预存39元 启动保障", "预计450元/年"], ["互助费用 会员均摊", "从预存费用中扣除"], ["单次互助 不超3元", "设定限额，保障用户权益"], ["扣至0元 需要续费", "不充值则退出社群"]],
		ll: [["《17互助公约》", "/pages/hzpact/hzpact?type=1"], ["《80后孕妈婴宝互助公约》", "/pages/hzpact/hzpact?type=8"]]
	}, {
		t: "会员一旦出现事故，所产生医疗费用由本社群的全体会员共同均摊，除此之外，无其他任何费用。",
		l: [["预存39元 启动保障", "预计500元/年"], ["互助费用 会员均摊", "从预存费用中扣除"], ["单次互助 不超3元", "设定限额，保障用户权益"], ["扣至0元 需要续费", "不充值则退出社群"]],
		ll: [["《17互助公约》", "/pages/hzpact/hzpact?type=1"], ["《中老年大病意外互助公约》", "/pages/packlist/packlist?id=3"]]
	}],
	condition: [["适用于18-46周岁，且身体健康", "在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。"], ["3-15周岁，父母双方或一方在外地打工，而自己留在农村生活的孩童，或不在父母身边的城市孩童，且身体健康。", "在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。"], ["16-60周岁"], ["1周岁－未满18周岁健康青少年", "在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。"], ["未满36周岁的孕妈妈或者备孕妈妈，加入之日怀孕周期未超过24周", "在加入互助社群之前，未曾患有互助公约所描述的疾病的人群"], ["46-70周岁，身体健康中老年人", "在加入互助社群之前，未曾患有互助公约所描述的恶性肿瘤或24种重大疾病的人群。"]],
	diff: [{
		t: "互助",
		n: "互助不是商业保险，是一种经济救助行为。事前加入社群，有享受别人捐助的权利，同时也有捐助别人的义务。"
	}, {
		t: "商保",
		n: "个人保障的基础设施，事前个人付费加入，保险公司承诺赔付，商保价格相对较高。"
	}, {
		t: "众筹",
		n: "事后发起求助，别人没有帮助您的义务，筹款金额无法保证。"
	}],
	question: [[{
		t: "Q: 17互助安全可信吗？",
		txt: ["17互助平台非常安全：", "1.17互助平台是由阿里巴巴前高管所带领的团队运营的；创始成员经历了中国第一家互联网保险公司众安保险、中国第一家互联网银行浙江网商银行，具备很强的专业能力；", "2.目前17互助平台已获得经纬创投、执一资本、晨兴资本、李治国近5000万元的投资；", "3.会员缴纳的互助金，全部由招商银行监管，每两周定期公示；", "4.事故损失核定由商保通等专业保险公估公司实地调查核定，避免欺诈风险；", "5.17互助平台的技术安全由阿里云提供支持，系统安全、数据安全，无后顾之忧。"],
		height: 802,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  9元能用多久？",
		txt: ["如果互助责任范围内的事故未发生，9元一直存在，没有时间限制。如果发生互助责任范围内的事故，每次事故扣款不超过3元人民币，9元扣完后，3天内续费可继续享受保障。"],
		height: 280,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  为什么加入后180天才开始享受保障？",
		txt: ["180天称为等待期或称观察期，是为了防止已罹患重大疾病的人群加入，遏制道德风险，保证所有保障会员的公平性。180天的观察期仅针对首次加入的保障会员，以及距上一次退出互助小组超过3个自然日重新加入时才存在。"],
		height: 340,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  为什么采用住院报销制？",
		txt: ["789重疾、抗癌互助采用住院报销制的目的在于规避道德风险，防范有人从中套利，确保所有加入会员的公平性。"],
		height: 260,
		opacity: 0,
		isDown: false
	}], [{
		t: "Q: 17互助安全可信吗？",
		txt: ["17互助平台非常安全：", "1.17互助平台是由阿里巴巴前高管所带领的团队运营的；创始成员经历了中国第一家互联网保险公司众安保险、中国第一家互联网银行浙江网商银行，具备很强的专业能力；", "2.目前17互助平台已获得经纬创投、执一资本、晨兴资本、李治国近5000万元的投资；", "3.会员缴纳的互助金，全部由招商银行监管，每两周定期公示；", "4.事故损失核定由商保通等专业保险公估公司实地调查核定，避免欺诈风险；", "5.17互助平台的技术安全由阿里云提供支持，系统安全、数据安全，无后顾之忧。"],
		height: 802,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  6元能用多久？",
		txt: ["如果互助责任范围内的事故未发生，6元一直存在，没有时间限制。如果发生互助责任范围内的事故，每次事故扣款不超过3元人民币，6元扣完后，3天内续费可继续享受保障。"],
		height: 280,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  为什么加入后90天、180天才开始享受保障？",
		txt: ["90天、180天称为等待期或称观察期，是为了防止已罹患重大疾病的人群加入，遏制道德风险，保证所有保障会员的公平性。90天、180天的观察期仅针对首次加入的保障会员，以及距上一次退出互助小组超过3个自然日重新加入时才存在。"],
		height: 396,
		opacity: 0,
		isDown: false
	}], [{
		t: "Q: 17互助安全可信吗？",
		txt: ["17互助平台非常安全：", "1.17互助平台是由阿里巴巴前高管所带领的团队运营的；创始成员经历了中国第一家互联网保险公司众安保险、中国第一家互联网银行浙江网商银行，具备很强的专业能力；", "2.目前17互助平台已获得经纬创投、执一资本、晨兴资本、李治国近5000万元的投资；", "3.会员缴纳的互助金，全部由招商银行监管，每两周定期公示；", "4.事故损失核定由商保通等专业保险公估公司实地调查核定，避免欺诈风险；", "5.17互助平台的技术安全由阿里云提供支持，系统安全、数据安全，无后顾之忧。"],
		height: 802,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  3元能用多久？",
		txt: ["如果互助责任范围内的事故未发生，3元一直存在，没有时间限制。如果发生互助责任范围内的事故，每次事故扣款不超过1元人民币，3元扣完后，3天内续费可继续享受保障。"],
		height: 280,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  公共交通包括哪些？",
		txt: ["国内、国际航班；火车；市内公交"],
		height: 128,
		opacity: 0,
		isDown: false
	}], [{
		t: "Q: 17互助安全可信吗？",
		txt: ["17互助平台非常安全：", "1.17互助平台是由阿里巴巴前高管所带领的团队运营的；创始成员经历了中国第一家互联网保险公司众安保险、中国第一家互联网银行浙江网商银行，具备很强的专业能力；", "2.目前17互助平台已获得经纬创投、执一资本、晨兴资本、李治国近5000万元的投资；", "3.会员缴纳的互助金，全部由招商银行监管，每两周定期公示；", "4.事故损失核定由商保通等专业保险公估公司实地调查核定，避免欺诈风险；", "5.17互助平台的技术安全由阿里云提供支持，系统安全、数据安全，无后顾之忧。"],
		height: 802,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  19元能用多久？",
		txt: ["如果互助责任范围内的事故未发生，19元一直存在，没有时间限制。如果发生互助责任范围内的事故，每次事故扣款不超过3元人民币，19元扣完后，3天内续费可继续享受保障。"],
		height: 280,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  为什么加入后90天才开始享受保障？",
		txt: ["90天称为等待期或称观察期，是为了防止已罹患重大疾病的人群加入，遏制道德风险，保证所有保障会员的公平性。90天的观察期仅针对首次加入的保障会员，以及距上一次退出互助小组超过3个自然日重新加入时才存在。"],
		height: 160,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  小孩没有身份证号怎么办？",
		txt: ["所有上报户籍的小孩都具有身份证号，只需在户口本上查看即可。"],
		height: 160,
		opacity: 0,
		isDown: false
	}], [{
		t: "Q: 17互助安全可信吗？",
		txt: ["17互助平台非常安全：", "1.17互助平台是由阿里巴巴前高管所带领的团队运营的；创始成员经历了中国第一家互联网保险公司众安保险、中国第一家互联网银行浙江网商银行，具备很强的专业能力；", "2.目前17互助平台已获得经纬创投、执一资本、晨兴资本、李治国近5000万元的投资；", "3.会员缴纳的互助金，全部由招商银行监管，每两周定期公示；", "4.事故损失核定由商保通等专业保险公估公司实地调查核定，避免欺诈风险；", "5.17互助平台的技术安全由阿里云提供支持，系统安全、数据安全，无后顾之忧。"],
		height: 802,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  39元能用多久？",
		txt: ["如果互助责任范围内的事故未发生，39元一直存在，没有时间限制。如果发生互助责任范围内的事故，每次事故扣款不超过3元人民币，39元扣完后，3天内续费可继续享受保障。"],
		height: 280,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  为什么加入后30天才开始享受保障？",
		txt: ["30天称为等待期或称观察期，是为了防止已罹患重大疾病的人群加入，遏制道德风险，保证所有保障会员的公平性。30天的观察期仅针对首次加入的保障会员，以及距上一次退出互助小组超过3个自然日重新加入时才存在。"],
		height: 340,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  还没怀孕能加入吗？",
		txt: ["只要是年满18周岁且未满36周岁，暂未怀孕或怀孕周期未超过24周的女性人群均可加入。当然，也必须保证加入时身体健康，未患有重大疾病史。"],
		height: 280,
		opacity: 0,
		isDown: false
	}], [{
		t: "Q: 17互助安全可信吗？",
		txt: ["17互助平台非常安全：", "1.17互助平台是由阿里巴巴前高管所带领的团队运营的；创始成员经历了中国第一家互联网保险公司众安保险、中国第一家互联网银行浙江网商银行，具备很强的专业能力；", "2.目前17互助平台已获得经纬创投、执一资本、晨兴资本、李治国近5000万元的投资；", "3.会员缴纳的互助金，全部由招商银行监管，每两周定期公示；", "4.事故损失核定由商保通等专业保险公估公司实地调查核定，避免欺诈风险；", "5.17互助平台的技术安全由阿里云提供支持，系统安全、数据安全，无后顾之忧。"],
		height: 802,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  39元能用多久？",
		txt: ["如果互助责任范围内的事故未发生，39元一直存在，没有时间限制。如果发生互助责任范围内的事故，每次事故扣款不超过3元人民币，39元扣完后，3天内续费可继续享受保障。"],
		height: 280,
		opacity: 0,
		isDown: false
	}, {
		t: "Q:  为什么加入后180天才开始享受保障？",
		txt: ["180天称为等待期或称观察期，是为了防止已罹患重大疾病的人群加入，遏制道德风险，保证所有保障会员的公平性。180天的观察期仅针对首次加入的保障会员，以及距上一次退出互助小组超过3个自然日重新加入时才存在。"],
		height: 340,
		opacity: 0,
		isDown: false
	}]]
};

var Community = function (_wx$Component) {
	(0, _inherits3.default)(Community, _wx$Component);

	function Community() {
		var _ref;

		var _temp, _this2, _ret;

		(0, _classCallCheck3.default)(this, Community);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Community.__proto__ || (0, _getPrototypeOf2.default)(Community)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
			id: "",
			purpose: [],
			power: {},
			treaty: {},
			condition: {},
			slidedata: [],
			bannerImg: {},
			numData: {},
			linkUrl: '',
			login: true
		}, _this2.children = {
			slide: new _slide2.default({ slideData: "@slidedata", slideMore: [{
					title: "更多常见问题",
					link: "/pages/qa/qa"
				}] })
		}, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
	}
	/*/pages/join/join*/


	(0, _createClass3.default)(Community, [{
		key: 'checkLink',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
				var _this, d;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this = this;

								if (!this.isloading) {
									_context.next = 3;
									break;
								}

								return _context.abrupt('return');

							case 3:
								this.isloading = true;
								_context.next = 6;
								return _labrador2.default.app.checkLogin();

							case 6:
								d = _context.sent;

								if (d) {
									_context.next = 11;
									break;
								}

								_context.next = 10;
								return _labrador2.default.app.doLogin();

							case 10:
								d = _context.sent;

							case 11:
								if (d) {
									_labrador2.default.navigateTo({
										url: event.currentTarget.dataset.link
									});
								}
								this.isloading = false;

							case 13:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function checkLink(_x) {
				return _ref2.apply(this, arguments);
			}

			return checkLink;
		}()
	}, {
		key: 'linkTo',
		value: function linkTo(event) {
			this.checkLink(event);
		}
	}, {
		key: 'onLoad',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
				var id, ResData;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								this.isloading = false;
								id = parseInt(e.type);

								this.setData({
									linkUrl: '/pages/join/join?type=' + id
								});
								_context2.next = 5;
								return _labrador2.default.app.ajax({
									url: _labrador2.default.app.data.ajaxPath + '/wxapi/project/detail',
									type: "get",
									data: {
										id: id
									}
								});

							case 5:
								ResData = _context2.sent;

								this.setData({
									id: id,
									bannerImg: jsonData.topBanner[id - 1],
									slidedata: jsonData.question[id - 1],
									power: jsonData.power[id - 1],
									purpose: jsonData.purpose[id - 1],
									treaty: jsonData.treaty[id - 1],
									condition: jsonData.condition[id - 1],
									diff: jsonData.diff,
									numData: ResData.data
								});

							case 7:
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
	return Community;
}(_labrador2.default.Component);


Page(_labrador._createPage(Community));

})(module,require);