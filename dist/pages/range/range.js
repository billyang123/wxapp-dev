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

var postData = {
  project01: [{
    t: "住院医疗费用报销（含非医保类用药）",
    a: "最高30万元",
    txt: ["保障会员自加入之日起180日后，初次患保障范围内的25种重大疾病，因疾病产生的住院费用【包括：床位费、手术费、药费、治疗费、护理费、检查检验费、特殊检查治疗费、救护车费】，按照如下规则最高给予30万的住院费用报销。", "住院医疗费用报销 30万", "（1）对于参加医保的会员，若已从医保报销部分医疗费用，互助小组对于剩余住院医疗费用中符合医保支付范围的，按100%的比例报销。", "（2）对于未参加医保的会员，互助小组对于符合医保支付范围的住院医疗费用按照80%的比例报销。", "（3）对于住院医疗费用不符合医保支付范围的（包括进口药、自费药等），其报销比例为70%。"],
    height: 600,
    opacity: 1,
    isDown: false
  }],
  project02: [{
    t: "重大疾病保障",
    a: "最高10万元",
    txt: ["保障会员自加入之日起90日后初次患重大疾病，一次性给付10万元的重大疾病医疗互助金", "等待期"],
    height: 200,
    opacity: 1,
    isDown: false
  }, {
    t: "意外伤残、死亡",
    a: "最高10万元",
    txt: ["保障会员自加入次日起，因意外事故造成符合《人身保险伤残评定标准（行业标准）》（简称《伤残评定标准》）所列伤残之一的，一次性按照如下标准给予互助金：", "1、保障会员自事故发生之日起180天内因该事故身故的，一次性给予互助金10万元", "2、符合《伤残评定标准》，与伤残程度等级相对应的互助金给付比例分为十档，伤残程度第一级对应的互助给付比例为100%，伤残程度第十级对应的互助金给付比例为10%，每级相差10%”"],
    height: 380,
    opacity: 1,
    isDown: false
  }, {
    t: "走失、被拐寻子互助金",
    a: "最高10万元",
    txt: ["保障会员走失后下落不明且经公安机关立案的，自立案之日起走失超过15天，按照如下标准给付寻子互助金：", "1、走失超过15天，且未达到一年；寻子互助金=走失天数*150元/天", "2、自立案之日起走失超过1年，一次性给付10万元寻子互助金。"],
    height: 300,
    opacity: 1,
    isDown: false
  }, {
    t: "暴力、性侵法律维权互助金",
    a: "最高1万元",
    txt: ["保障会员自加入之日起，因遭受暴力事件、性侵事件，被公安机关立案受理，且互助会员或其监护人以诉讼当事人的身份参加一审民事诉讼或仲裁，一次性给予0.5万元法律援助互助金"],
    height: 220,
    opacity: 1,
    isDown: false
  }, {
    t: "辍学",
    a: "最高2万元",
    txt: ["保障会员父母自加入之日起因意外伤害丧失劳动能力；或自加入之日起180天后因首次发生致使丧失劳动能力的重大疾病而丧失劳动能力，符合《职工非因工伤残或因病丧失劳动能力程度鉴定标准(试行)》认定的标准，影响家庭收入导致互助会员辍学的，按照如下条件给予辍学互助金：", "1、保障会员父母，双方完全丧失劳动能力；或者一方完全丧失劳动能力，一方部分丧失劳动能力；一次性给予互助金2万元", "2、保障会员父母，双方部分丧失劳动能力；或者一方完全丧失劳动能力，一次性给予互助金1万元；", "3、保障会员父母，一方部分丧失劳动能力，一次性给予互助金0.5万元"],
    height: 320,
    opacity: 1,
    isDown: false
  }, {
    t: "心理障碍",
    a: "最高5000元",
    txt: ["保障会员自加入之日起90日后初次患心理疾病，因治疗心理疾病产生的费用，按照如下标准给与互助金：", "1、心理治疗费实报实销，每次最多给付500元治疗费", "2、一年最多给付10次治疗费互助金"],
    height: 266,
    opacity: 1,
    isDown: false
  }, {
    t: "25种重大疾病介绍",
    a: "",
    txt: ["【重大疾病】指被保障会员初次发生符合下列定义的疾病，或初次接受符合下列定义的手术。该疾病或手术应当由专科医生明确诊断。", "恶性肿瘤：指恶性细胞不受控制的进行性增长和扩散，浸润和破坏周围正常组织，可以经血管、淋巴管和体腔扩散转移到身体其它部位的疾病。经病理学检查结果明确诊断，临床诊断属于世界卫生组织《疾病和有关健康问题的国际统计分类》（ICD-10）的恶性肿瘤范畴。", "下列疾病不在保障范围内：", "(1)原位癌；", "(2)相当于Binet分期方案A期程度的慢性淋巴细胞白血病；", "(3)相当于Ann Arbor分期方案I期程度的何杰金氏病；", "(4)皮肤癌（不包括恶性黑色素瘤及已发生转移的皮肤癌）；", "(5)TNM 分期为T1N0M0期或更轻分期的前列腺癌；", "(6)感染艾滋病病毒或患艾滋病期间所患恶性肿瘤；", "（7）甲状腺癌", "重大器官移植术或造血干细胞移植术：", "重大器官移植术，指因相应器官功能衰竭，已经实施了肾脏、肝脏、心脏或肺脏的异体移植手术。", "造血干细胞移植术，指因造血功能损害或造血系统恶性肿瘤，已经实施了造血干细胞（包括骨髓造血干细胞、外周血造血干细胞和脐血造血干细胞）的异体移植手术。", "终末期肾病（或称慢性肾功能衰竭尿毒症期）：", "指双肾功能慢性不可逆性衰竭，达到尿毒症期，经诊断后已经进行了至少90天的规律性透析治疗或实施了肾脏移植手术。", "急性或亚急性重症肝炎：", "指因肝炎病毒感染引起肝脏组织弥漫性坏死，导致急性肝功能衰竭，且经血清学或病毒学检查证实，并须满足下列全部条件：", "(1)重度黄疸或黄疸迅速加重；", "(2)肝性脑病；", "(3)B 超或其它影像学检查显示肝脏体积急速萎缩；", "(4)肝功能指标进行性恶化。", "良性脑肿瘤：", "指脑的良性肿瘤，已经引起颅内压增高，临床表现为视神经乳头水肿、精神症状、癫痫及运动感觉障碍等，并危及生命。须由头颅断层扫描（CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实，并须满足下列至少一项条件：", "(1)实际实施了开颅进行的脑肿瘤完全切除或部分切除的手术；", "(2)实际实施了对脑肿瘤进行的放射治疗。", "脑垂体瘤、脑囊肿、脑血管性疾病不在保障范围内", "脑炎后遗症或脑膜炎后遗症：", "指因患脑炎或脑膜炎导致的神经系统永久性的功能障碍。神经系统永久性的功能障碍，指疾病确诊180天后，仍遗留下列一种或一种以上障碍：", "(1)一肢或一肢以上肢体机能完全丧失；", "(2)语言能力或咀嚼吞咽能力完全丧失；", "(3)自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上", "深度昏迷：", "指因疾病或意外伤害导致意识丧失,对外界刺激和体内需求均无反应,昏迷程度按照格拉斯哥昏迷分级（Glasgow coma scale）结果为5分或5分以下，且已经持续使用呼吸机及其它生命维持系统96小时以上。", "因酗酒或药物滥用导致的深度昏迷不在保障范围内。", "双耳失聪：", "指因疾病或意外伤害导致双耳听力永久不可逆（详见释义）性丧失，在500赫兹、1000赫兹和2000赫兹语音频率下，平均听阈大于90分贝，且经纯音听力测试、声导抗检测或听觉诱发电位检测等证实。", "双目失明：", "指因疾病或意外伤害导致双眼视力永久不可逆性丧失，双眼中较好眼须满足下列至少一项条件：", "(1)眼球缺失或摘除；", "(2)矫正视力低于0.02（采用国际标准视力表，如果使用其它视力表应进行换算）；", "(3)视野半径小于5度", "心脏瓣膜手术：指为治疗心脏瓣膜疾病，实际实施了开胸进行的心脏瓣膜置换或修复的手术。", "严重脑损伤：指因头部遭受机械性外力，引起脑重要部位损伤，导致神经系统永久性的功能障碍。须由头颅断层扫描（CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实。神经系统永久性的功能障碍，指脑损伤180 天后，仍遗留下列一种或一种以上障碍：", "(1)一肢或一肢以上肢体机能完全丧失；", "(2)语言能力或咀嚼吞咽能力完全丧失；", "(3)自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。", "严重Ⅲ度烧伤：指烧伤程度为Ⅲ度，且Ⅲ度烧伤的面积达到全身体表面积的20％或20％以上。体表面积根据《中国新九分法》计算。", "语言能力丧失：指因疾病或意外伤害导致完全丧失语言能力，经过积极治疗至少12 个月（声带完全切除不受此时间限制），仍无法通过现有医疗手段恢复。", "精神心理因素所致的语言能力丧失不在保障范围内。", "重型再生障碍性贫血：指因骨髓造血功能慢性持续性衰竭导致的贫血、中性粒细胞减少及血小板减少。须满足下列全部条件：", "(1)骨髓穿刺检查或骨髓活检结果支持诊断；", "(2)外周血象须具备以下三项条件：", "① 中性粒细胞绝对值≤0.5×109/L；", "② 网织红细胞＜1%；", "③ 血小板绝对值≤20×109/L。", "川崎病：本保障仅限于伴有冠状动脉扩张或冠状动脉瘤的川崎病，且此冠状动脉扩张或冠状动脉瘤于最初急性发病后持续至少6个月。理赔时必须提供超声心动图显示其有冠状动脉扩张或冠状动脉瘤。", "婴儿进行性脊肌萎缩症：该病是累及脊髓前角细胞及延髓运动核的神经元退行性变性病。理赔时必须提供支持诊断的肌肉活检病理报告。其它类型的脊肌萎缩症如II型中间型进行性脊肌萎缩症、III型少年性脊肌萎缩症（Kugelberg-Welander氏病）不在本保障范围内。", "严重哮喘：", "一种可逆性、反复发作的支气管阻塞性疾病。须满足下列至少三项条件：", "(1)过去两年中有哮喘持续状态病史；", "(2)身体活动耐受能力显著且持续下降或在家中需要医师处方的氧气治疗法；", "(3)胸部X片证实肺部慢性过度膨胀充气导致的胸廓畸形；", "(4)持续日常服用口服可的松类固醇激素（至少持续服用6个月以上）。", "成骨不全症：一种胶元病，特征为骨易碎、骨质疏松和易骨折。该病有4种类型：I 型、II型、III型、IV型。", "本合同只对III型成骨不全予以理赔。其主要临床特点有：发育迟缓、多发性骨折、进行性脊柱后侧凸及听力损害。III型成骨不全的诊断必须根据身体检查、家族史、X线检查和皮肤活检报告资料确诊。", "幼年型类风湿性关节炎：", "一种少儿慢性关节炎，其特征为发热和系统性疾病体征，该体征可能于关节炎出现之前的数月间持续存在。主要临床症状包括每日发高热、消散性皮疹、关节炎、脾肿大、淋巴结肿大、浆膜炎、体重下降、中性白细胞增多、急性期蛋白增加及血清抗核抗体（ANA）和类风湿因子（RF）阳性。", "严重胃肠炎：以严重的腹泻、便血和肠段坏死为特征的胃肠道严重感染。大肠或小肠的一处或多处需手术切除，且经病理检查证实存在严重感染和坏死。", "严重心肌炎：心肌的严重感染而导致至少持续6个月的心功能损害。严重的心功能损害必须具备如下条件：左室腔扩大至少达到正常值上限的120%，且左室射血分数持续性低于40%。", "脊髓灰质炎：脊髓灰质炎是指由于脊髓灰质炎病毒感染致脊髓运动神经元损害所导致的瘫痪性疾病，至少导致两个或以上的肢体瘫痪程度达到肌力在0-III级，经180天治疗后肢体肌力仍然不能恢复到IV级。诊断需提供脊髓灰质炎病毒检查的证据（如粪便或脑脊液检查，血液中抗体检查）。肢体的定义为整个上肢或是整个下肢。未导致肢体瘫痪（肢体肌力达IV或V级）者及其他原因导致的瘫痪不在保障范围内。", "重症手足口病：由肠道病毒引起的急性传染病，主要症状表现为手、足、口腔等部位的斑丘疹、疱疹。重症手足口病必须符合下列全部条件：", "(1) 经专科医生诊断为手足口病；", "(2) 伴有所列危重并发症之一：脑膜炎、脑炎、脑脊髓炎、肺水肿或心肌炎；", "(3) 接受了住院治疗。", "经输血导致的人类免疫缺陷病毒感染：", "互助会员因输血而感染上人类免疫缺陷病毒（HIV）必须同时满足以下条件：", "(1)在保障起始日或复效日之后，互助会员因输血而感染HIV；", "(2)受感染的互助会员不是血友病患者；", "以及下列条件(3)或(4)中的任意一条：", "(3)提供输血治疗的输血中心或医院承认该项输血感染责任的证明；", "(4)提供输血前一个月内HIV检查阴性的报告、输血血液来源的证明以及输血后HIV检查阳性的报告。", "任何因其他传播方式（包括：性传播或静脉注射毒品）导致的HIV感染不在本保单保障范围内。互助小组必须拥有获得使用互助会员的所有血液样本的权利和能够对这些样本进行独立检验的权利。", "定义来源及确诊医院范围：以上“8.1.1恶性肿瘤”至“8.1.15重型再生障碍性贫血”所列重大疾病定义根据中国保险行业协会2007年公布的《重大疾病保险的疾病定义使用规范》作出，其他重大疾病由我们增加，其定义由我们根据通行的医学标准制定。", "以上重大疾病，除严重原发性心肌病须在卫生行政部门认定的三级以上（含三级）医院确诊外，其他疾病均须在卫生行政部门认定的二级以上（含二级）医院确诊。", "上述重大疾病定义中部分术语释义如下：", "（一）专科医生", "专科医生应当同时满足以下四项资格条件：", "1．具有有效的中华人民共和国《医师资格证书》；", "2．具有有效的中华人民共和国《医师执业证书》，并按期到相关部门登记注册；", "3．具有有效的中华人民共和国主治医师或主治医师以上职称的《医师职称证书》；", "4．在二级或二级以上医院的相应科室从事临床工作三年以上。", "（二）肢体机能完全丧失", "肢体机能完全丧失是指肢体的三大关节中的两大关节僵硬，或不能随意识活动。肢体是指包括肩关节的整个上肢或包括髋关节的整个下肢。", "（三）白血病", "白血病是一种造血系统的恶性肿瘤，其主要表现为白血病细胞在骨髓或其他造血组织中大量克隆、异常增生，大量聚集的白细胞抑制正常造血并浸润全身器官和组织。周围白细胞有质和量的变化，出现相应临床表现。互助会员所患白血病必须根据骨髓的活组织检查和周围血象由儿科、血液科或肿瘤科的专科医生确诊。", "相当于Binet分期方案A期程度的慢性淋巴细胞白血病不在保障范围内。", "（四）语言能力或咀嚼吞咽能力完全丧失", "语言能力完全丧失是指无法发出四种语音（包括口唇音、齿舌音、口盖音和喉头音）中的任何三种、或声带全部切除，或因大脑语言中枢受伤害而患失语症。", "咀嚼吞咽能力完全丧失是指因牙齿以外的原因导致器质障碍或机能障碍，以致不能作咀嚼吞咽运动，除流质食物外不能摄取或吞咽的状态。", "（五）永久不可逆", "永久不可逆是指自疾病确诊或意外伤害发生之日起，经过积极治疗180天后，仍无法通过现有医疗手段恢复。"],
    height: 8480,
    opacity: 1,
    isDown: false
  }],
  project03: [{
    t: "国内国际航班意外身故/重度伤残",
    a: "最高100万元",
    txt: ["保障会员自加入次日起，因乘坐国内、国际航班发生意外事故，导致保障会员意外身故或者重度伤残的，互助小组一次性给付身故或者重度伤残互助金100万。", "重度伤残是指根据《伤残评定标准》认定为1-3级。"],
    height: 222,
    opacity: 1,
    isDown: false
  }, {
    t: "火车意外身故/重度伤残",
    a: "最高100万元",
    txt: ["保障会员自加入次日起，因乘坐国内火车发生意外事故，导致保障会员意外身故或者重度伤残的，互助小组一次性给付身故或者重度伤残互助金100万。", " 重度伤残是指根据《伤残评定标准》认定为1-3级。"],
    height: 222,
    opacity: 1,
    isDown: false
  }, {
    t: "市内公交意外身故/重度伤残",
    a: "最高10万元",
    txt: ["保障会员自加入次日起，因乘坐国内市内公共汽车、轨道交通意外事故，导致保障会员意外身故或者重度伤残的，互助小组按照如下标准给付互助金：", " 意外身故给付人民币10万；", "重度伤残给付人民币5万；", "重度伤残是指根据《伤残评定标准》认定为1-3级。", "公共交通包括市内公交车、地铁、市内轻轨。"],
    height: 335,
    opacity: 1,
    isDown: false
  }, {
    t: "旅游意外身故/重度伤残",
    a: "最高20万元",
    txt: ["保障会员自加入之日起在境内、境外旅行期间因遭受意外伤害事故导致身故或者重度伤残的，互助小组按照如下标准给付互助金：", "意外身故给付人民币20万；", " 重度伤残给付人民币10万；", "重度伤残是指根据《伤残评定标准》认定为1-3级。"],
    height: 295,
    opacity: 1,
    isDown: false
  }],
  project04: [{
    t: "重大疾病保障",
    a: "最高15万元",
    txt: ["保障会员自加入之日起90日后，经医院确诊初次发生保障范围内25种常见重大疾病，互助小组一次性给付150000元重大疾病医疗互助金。", "存在90天等待期"],
    height: 235,
    opacity: 1,
    isDown: false
  }, {
    t: "意外身故、伤残",
    a: "最高20万元",
    txt: ["保障会员自加入次日起，因意外事故造成符合《人身保险伤残评定标准（行业标准）》（简称《伤残评定标准》）所列伤残之一的，一次性按照如下标准给予互助金：", " 1、保障会员自事故发生之日起180天内因该事故身故的，一次性给付20万元互助金", "2、符合《伤残评定标准》，与伤残程度等级相对应的互助金给付比例分为十档，伤残程度第一级对应的互助给付比例为100%，伤残程度第十级对应的互助金给付比例为10%，每级相差10%"],
    height: 380,
    opacity: 1,
    isDown: false
  }, {
    t: "25种重大疾病介绍",
    a: "",
    txt: ["【25种重大疾病】指被保障会员初次发生符合下列定义的疾病，或初次接受符合下列定义的手术。该疾病或手术应当由专科医生明确诊断。", "一、恶性肿瘤：", " 指恶性细胞不受控制的进行性增长和扩散，浸润和破坏周围正常组织，可以经血管、淋巴管和体腔扩散转移到身体其它部位的疾病。经病理学检查结果明确诊断，临床诊断属于世界卫生组织《疾病和有关健康问题的国际统计分类》（ICD-10）的恶性肿瘤范畴。", "下列疾病不在保障范围内：(1)原位癌；(2)相当于Binet分期方案A期程度的慢性淋巴细胞白血病；(3)相当于Ann Arbor分期方案I期程度的何杰金氏病；(4)皮肤癌（不包括恶性黑色素瘤及已发生转移的皮肤癌）；(5)TNM 分期为T1N0M0期或更轻分期的前列腺癌；(6)感染艾滋病病毒或患艾滋病期间所患恶性肿瘤；（7）甲状腺癌", "二、重大器官移植术或造血干细胞移植术：", "重大器官移植术，指因相应器官功能衰竭，已经实施了肾脏、肝脏、心脏或肺脏的异体移植手术。", "造血干细胞移植术，指因造血功能损害或造血系统恶性肿瘤，已经实施了造血干细胞（包括骨髓造血干细胞、外周血造血干细胞和脐血造血干细胞）的异体移植手术。", "三、终末期肾病（或称慢性肾功能衰竭尿毒症期）:", "指双肾功能慢性不可逆性衰竭，达到尿毒症期，经诊断后已经进行了至少90天的规律性透析治疗或实施了肾脏移植手术。", "四、急性或亚急性重症肝炎:", "指因肝炎病毒感染引起肝脏组织弥漫性坏死，导致急性肝功能衰竭，且经血清学或病毒学检查证实，并须满足下列全部条件：", "(1)重度黄疸或黄疸迅速加重；", "(2)肝性脑病；", "(3)B 超或其它影像学检查显示肝脏体积急速萎缩；", "(4)肝功能指标进行性恶化。", "五、良性脑肿瘤:指脑的良性肿瘤，已经引起颅内压增高，临床表现为视神经乳头水肿、精神症状、癫痫及运动感觉障碍等，并危及生命。须由头颅断层扫描（CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实，并须满足下列至少一项条件：", "(1)实际实施了开颅进行的脑肿瘤完全切除或部分切除的手术；", "(2)实际实施了对脑肿瘤进行的放射治疗。", "脑垂体瘤、脑囊肿、脑血管性疾病不在保障范围内。", "六、慢性肝功能衰竭失代偿期:指因慢性肝脏疾病导致肝功能衰竭。须满足下列全部条件：", "(1)持续性黄疸；(2)腹水；(3)肝性脑病；(4)充血性脾肿大伴脾功能亢进或食管胃底静脉曲张。因酗酒或药物滥用导致的肝功能衰竭不在保障范围内。", "七、脑炎后遗症或脑膜炎后遗症:指因患脑炎或脑膜炎导致的神经系统永久性的功能障碍。神经系统永久性的功能障碍，指疾病确诊180天后，仍遗留下列一种或一种以上障碍：", "(1)一肢或一肢以上肢体机能完全丧失；", "(2)语言能力或咀嚼吞咽能力完全丧失；", "(3)自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。", "八、深度昏迷:", "指因疾病或意外伤害导致意识丧失,对外界刺激和体内需求均无反应,昏迷程度按照格拉斯哥昏迷分级（Glasgow coma scale）结果为5分或5分以下，且已经持续使用呼吸机及其它生命维持系统96小时以上。", "因酗酒或药物滥用导致的深度昏迷不在保障范围内。", "九、双耳失聪:", "指因疾病或意外伤害导致双耳听力永久不可逆（详见释义）性丧失，在500赫兹、1000赫兹和2000赫兹语音频率下，平均听阈大于90分贝，且经纯音听力测试、声导抗检测或听觉诱发电位检测等证实。", "十、双目失明:指因疾病或意外伤害导致双眼视力永久不可逆性丧失，双眼中较好眼须满足下列至少一项条件：", "(1)眼球缺失或摘除；", "(2)矫正视力低于0.02（采用国际标准视力表，如果使用其它视力表应进行换算）；", "(3)视野半径小于5度", "十一、心脏瓣膜手术:指为治疗心脏瓣膜疾病，实际实施了开胸进行的心脏瓣膜置换或修复的手术。", "十二、严重脑损伤:", "指因头部遭受机械性外力，引起脑重要部位损伤，导致神经系统永久性的功能障碍。须由头颅断层扫描（CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实。神经系统永久性的功能障碍，指脑损伤180 天后，仍遗留下列一种或一种以上障碍：", "(1)一肢或一肢以上肢体机能完全丧失；", "(2)语言能力或咀嚼吞咽能力完全丧失；", "(3)自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。", "十三、严重Ⅲ度烧伤:", "指烧伤程度为Ⅲ度，且Ⅲ度烧伤的面积达到全身体表面积的20％或20％以上。体表面积根据《中国新九分法》计算。", "十四、语言能力丧失:", "指因疾病或意外伤害导致完全丧失语言能力，经过积极治疗至少12 个月（声带完全切除不受此时间限制），仍无法通过现有医疗手段恢复。", "精神心理因素所致的语言能力丧失不在保障范围内。", "十五、重型再生障碍性贫血", "指因骨髓造血功能慢性持续性衰竭导致的贫血、中性粒细胞减少及血小板减少。须满足下列全部条件：", "(1)骨髓穿刺检查或骨髓活检结果支持诊断；", "(2)外周血象须具备以下三项条件：① 中性粒细胞绝对值≤0.5×109/L；② 网织红细胞＜1%； ③ 血小板绝对值≤20×109/L。", "十六、川崎病", "本保障仅限于伴有冠状动脉扩张或冠状动脉瘤的川崎病，且此冠状动脉扩张或冠状动脉瘤于最初急性发病后持续至少6个月。理赔时必须提供超声心动图显示其有冠状动脉扩张或冠状动脉瘤。", "十七、婴儿进行性脊肌萎缩症", "该病是累及脊髓前角细胞及延髓运动核的神经元退行性变性病。理赔时必须提供支持诊断的肌肉活检病理报告。其它类型的脊肌萎缩症如II型中间型进行性脊肌萎缩症、III型少年性脊肌萎缩症（Kugelberg-Welander氏病）不在本保障范围内。", "十八、严重哮喘:", "一种可逆性、反复发作的支气管阻塞性疾病。须满足下列至少三项条件：", "(1)过去两年中有哮喘持续状态病史；", "(2)身体活动耐受能力显著且持续下降或在家中需要医师处方的氧气治疗法；", "(3)胸部X片证实肺部慢性过度膨胀充气导致的胸廓畸形；", "(4)持续日常服用口服可的松类固醇激素（至少持续服用6个月以上）。", "十九、成骨不全症:", "一种胶元病，特征为骨易碎、骨质疏松和易骨折。该病有4种类型：I 型、II型、III型、IV型。", "本合同只对III型成骨不全予以理赔。其主要临床特点有：发育迟缓、多发性骨折、进行性脊柱后侧凸及听力损害。III型成骨不全的诊断必须根据身体检查、家族史、X线检查和皮肤活检报告资料确诊。", "二十、幼年型类风湿性关节炎:", "一种少儿慢性关节炎，其特征为发热和系统性疾病体征，该体征可能于关节炎出现之前的数月间持续存在。主要临床症状包括每日发高热、消散性皮疹、关节炎、脾肿大、淋巴结肿大、浆膜炎、体重下降、中性白细胞增多、急性期蛋白增加及血清抗核抗体（ANA）和类风湿因子（RF）阳性。", "二十一、严重胃肠炎:", "以严重的腹泻、便血和肠段坏死为特征的胃肠道严重感染。大肠或小肠的一处或多处需手术切除，且经病理检查证实存在严重感染和坏死。", "二十二、严重心肌炎:", "心肌的严重感染而导致至少持续6个月的心功能损害。严重的心功能损害必须具备如下条件：左室腔扩大至少达到正常值上限的120%，且左室射血分数持续性低于40%。", "二十三、脊髓灰质炎:", "脊髓灰质炎是指由于脊髓灰质炎病毒感染致脊髓运动神经元损害所导致的瘫痪性疾病，至少导致两个或以上的肢体瘫痪程度达到肌力在0-III级，经180天治疗后肢体肌力仍然不能恢复到IV级。诊断需提供脊髓灰质炎病毒检查的证据（如粪便或脑脊液检查，血液中抗体检查）。肢体的定义为整个上肢或是整个下肢。未导致肢体瘫痪（肢体肌力达IV或V级）者及其他原因导致的瘫痪不在保障范围内。", "二十四、重症手足口病:", "由肠道病毒引起的急性传染病，主要症状表现为手、足、口腔等部位的斑丘疹、疱疹。重症手足口病必须符合下列全部条件：(1) 经专科医生诊断为手足口病；(2) 伴有所列危重并发症之一：脑膜炎、脑炎、脑脊髓炎、肺水肿或心肌炎；(3) 接受了住院治疗。", "二十五、经输血导致的人类免疫缺陷病毒感染:", "互助会员因输血而感染上人类免疫缺陷病毒（HIV）必须同时满足以下条件：", "(1)在保障起始日或复效日之后，互助会员因输血而感染HIV；", "(2)受感染的互助会员不是血友病患者；", "以及下列条件(3)或(4)中的任意一条：", "(3)提供输血治疗的输血中心或医院承认该项输血感染责任的证明；", "(4)提供输血前一个月内HIV检查阴性的报告、输血血液来源的证明以及输血后HIV检查阳性的报告。", "任何因其他传播方式（包括：性传播或静脉注射毒品）导致的HIV感染不在本保单保障范围内。互助小组必须拥有获得使用互助会员的所有血液样本的权利和能够对这些样本进行独立检验的权利。", "定义来源及确诊医院范围:", "以上“8.1.1恶性肿瘤”至“8.1.15重型再生障碍性贫血”所列重大疾病定义根据中国保险行业协会2007年公布的《重大疾病保险的疾病定义使用规范》作出，其他重大疾病由我们增加，其定义由我们根据通行的医学标准制定。", "以上重大疾病，除严重原发性心肌病须在卫生行政部门认定的三级以上（含三级）医院确诊外，其他疾病均须在卫生行政部门认定的二级以上（含二级）医院确诊。", "上述重大疾病定义中部分术语释义如下：", "（一）专科医生", "专科医生应当同时满足以下四项资格条件：", "1．具有有效的中华人民共和国《医师资格证书》；", "2．具有有效的中华人民共和国《医师执业证书》，并按期到相关部门登记注册；", "3．具有有效的中华人民共和国主治医师或主治医师以上职称的《医师职称证书》；", "4．在二级或二级以上医院的相应科室从事临床工作三年以上。", "（二）肢体机能完全丧失", "肢体机能完全丧失是指肢体的三大关节中的两大关节僵硬，或不能随意识活动。肢体是指包括肩关节的整个上肢或包括髋关节的整个下肢。", "(三）白血病", "白血病是一种造血系统的恶性肿瘤，其主要表现为白血病细胞在骨髓或其他造血组织中大量克隆、异常增生，大量聚集的白细胞抑制正常造血并浸润全身器官和组织。周围白细胞有质和量的变化，出现相应临床表现。互助会员所患白血病必须根据骨髓的活组织检查和周围血象由儿科、血液科或肿瘤科的专科医生确诊。", "相当于Binet分期方案A期程度的慢性淋巴细胞白血病不在保障范围内。", "（四）语言能力或咀嚼吞咽能力完全丧失", "语言能力完全丧失是指无法发出四种语音（包括口唇音、齿舌音、口盖音和喉头音）中的任何三种、或声带全部切除，或因大脑语言中枢受伤害而患失语症。", "咀嚼吞咽能力完全丧失是指因牙齿以外的原因导致器质障碍或机能障碍，以致不能作咀嚼吞咽运动，除流质食物外不能摄取或吞咽的状态。", "（五）永久不可逆", "永久不可逆是指自疾病确诊或意外伤害发生之日起，经过积极治疗180天后，仍无法通过现有医疗手段恢复。"],
    height: 8480,
    opacity: 1,
    isDown: false
  }],
  project05: [{
    t: "孕妈妈妊娠身故",
    a: "最高10万元",
    txt: ["保障会员加入计划30天后，在怀孕期间身故或分娩之日起15日内因分娩或分娩并发症身故，互助小组一次性给付互助金10万元", "存在30天等待期"],
    height: 400,
    opacity: 1,
    isDown: false
  }, {
    t: "孕妈妈重大疾病",
    a: "最高1万元",
    txt: ["保障会员加入互助计划30天后，首次确诊患如下5种重大疾病，互助小组一次性给付互助金1万元。", "保障疾病范围：弥漫性血管内凝血、恶性葡萄胎、胎盘早期脱离、羊水栓塞、子痫症", "存在30天等待期"],
    height: 270,
    opacity: 1,
    isDown: false
  }, {
    t: "新生儿缺陷",
    a: "最高5万元",
    txt: ["保障会员——新生儿出生后30天内仍存活，且患有如下9种重大疾病，互助小组一次给付互助金5万元", "保障疾病范围：脊柱裂或颅裂、先天性脑积水、先天性室间隔缺损、法乐氏四联症、唇腭裂、完全性大动脉转位、先天性试管闭锁或食管气管瘘、先天性肛门闭锁、先天性两肢体缺失"],
    height: 270,
    opacity: 1,
    isDown: false
  }, {
    t: "新生儿大病医疗",
    a: "最高2万元",
    txt: ["保障会员——新生儿出生一周岁内，发生保障范围约定的25种重大疾病，互助小组一次性给付互助金2万元"],
    height: 270,
    opacity: 1,
    isDown: false
  }, {
    t: "新生儿疫苗保障",
    a: "最高10万元",
    txt: ["保障会员——新生儿出生一周岁内，在接种疫苗24小内因疫苗引发的并发症导致在接种后3天内身故，互助小组一次性给付10万元互助金。"],
    height: 270,
    opacity: 1,
    isDown: false
  }, {
    t: "25种重大疾病介绍",
    a: "",
    txt: ["【重大疾病】指被保障会员初次发生符合下列定义的疾病，或初次接受符合下列定义的手术。该疾病或手术应当由专科医生明确诊断。", "恶性肿瘤：指恶性细胞不受控制的进行性增长和扩散，浸润和破坏周围正常组织，可以经血管、淋巴管和体腔扩散转移到身体其它部位的疾病。经病理学检查结果明确诊断，临床诊断属于世界卫生组织《疾病和有关健康问题的国际统计分类》（ICD-10）的恶性肿瘤范畴。", "下列疾病不在保障范围内：", "(1)原位癌；", "(2)相当于Binet分期方案A期程度的慢性淋巴细胞白血病；", "(3)相当于Ann Arbor分期方案I期程度的何杰金氏病；", "(4)皮肤癌（不包括恶性黑色素瘤及已发生转移的皮肤癌）；", "(5)TNM 分期为T1N0M0期或更轻分期的前列腺癌；", "(6)感染艾滋病病毒或患艾滋病期间所患恶性肿瘤；", "（7）甲状腺癌", "重大器官移植术或造血干细胞移植术：", "重大器官移植术，指因相应器官功能衰竭，已经实施了肾脏、肝脏、心脏或肺脏的异体移植手术。", "造血干细胞移植术，指因造血功能损害或造血系统恶性肿瘤，已经实施了造血干细胞（包括骨髓造血干细胞、外周血造血干细胞和脐血造血干细胞）的异体移植手术。", "终末期肾病（或称慢性肾功能衰竭尿毒症期）：", "指双肾功能慢性不可逆性衰竭，达到尿毒症期，经诊断后已经进行了至少90天的规律性透析治疗或实施了肾脏移植手术。", "急性或亚急性重症肝炎：", "指因肝炎病毒感染引起肝脏组织弥漫性坏死，导致急性肝功能衰竭，且经血清学或病毒学检查证实，并须满足下列全部条件：", "(1)重度黄疸或黄疸迅速加重；", "(2)肝性脑病；", "(3)B 超或其它影像学检查显示肝脏体积急速萎缩；", "(4)肝功能指标进行性恶化。", "良性脑肿瘤：", "指脑的良性肿瘤，已经引起颅内压增高，临床表现为视神经乳头水肿、精神症状、癫痫及运动感觉障碍等，并危及生命。须由头颅断层扫描（CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实，并须满足下列至少一项条件：", "(1)实际实施了开颅进行的脑肿瘤完全切除或部分切除的手术；", "(2)实际实施了对脑肿瘤进行的放射治疗。", "脑垂体瘤、脑囊肿、脑血管性疾病不在保障范围内", "脑炎后遗症或脑膜炎后遗症：", "指因患脑炎或脑膜炎导致的神经系统永久性的功能障碍。神经系统永久性的功能障碍，指疾病确诊180天后，仍遗留下列一种或一种以上障碍：", "(1)一肢或一肢以上肢体机能完全丧失；", "(2)语言能力或咀嚼吞咽能力完全丧失；", "(3)自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上", "深度昏迷：", "指因疾病或意外伤害导致意识丧失,对外界刺激和体内需求均无反应,昏迷程度按照格拉斯哥昏迷分级（Glasgow coma scale）结果为5分或5分以下，且已经持续使用呼吸机及其它生命维持系统96小时以上。", "因酗酒或药物滥用导致的深度昏迷不在保障范围内。", "双耳失聪：", "指因疾病或意外伤害导致双耳听力永久不可逆（详见释义）性丧失，在500赫兹、1000赫兹和2000赫兹语音频率下，平均听阈大于90分贝，且经纯音听力测试、声导抗检测或听觉诱发电位检测等证实。", "双目失明：", "指因疾病或意外伤害导致双眼视力永久不可逆性丧失，双眼中较好眼须满足下列至少一项条件：", "(1)眼球缺失或摘除；", "(2)矫正视力低于0.02（采用国际标准视力表，如果使用其它视力表应进行换算）；", "(3)视野半径小于5度", "心脏瓣膜手术：指为治疗心脏瓣膜疾病，实际实施了开胸进行的心脏瓣膜置换或修复的手术。", "严重脑损伤：指因头部遭受机械性外力，引起脑重要部位损伤，导致神经系统永久性的功能障碍。须由头颅断层扫描（CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实。神经系统永久性的功能障碍，指脑损伤180 天后，仍遗留下列一种或一种以上障碍：", "(1)一肢或一肢以上肢体机能完全丧失；", "(2)语言能力或咀嚼吞咽能力完全丧失；", "(3)自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。", "严重Ⅲ度烧伤：指烧伤程度为Ⅲ度，且Ⅲ度烧伤的面积达到全身体表面积的20％或20％以上。体表面积根据《中国新九分法》计算。", "语言能力丧失：指因疾病或意外伤害导致完全丧失语言能力，经过积极治疗至少12 个月（声带完全切除不受此时间限制），仍无法通过现有医疗手段恢复。", "精神心理因素所致的语言能力丧失不在保障范围内。", "重型再生障碍性贫血：指因骨髓造血功能慢性持续性衰竭导致的贫血、中性粒细胞减少及血小板减少。须满足下列全部条件：", "(1)骨髓穿刺检查或骨髓活检结果支持诊断；", "(2)外周血象须具备以下三项条件：", "① 中性粒细胞绝对值≤0.5×109/L；", "② 网织红细胞＜1%；", "③ 血小板绝对值≤20×109/L。", "川崎病：本保障仅限于伴有冠状动脉扩张或冠状动脉瘤的川崎病，且此冠状动脉扩张或冠状动脉瘤于最初急性发病后持续至少6个月。理赔时必须提供超声心动图显示其有冠状动脉扩张或冠状动脉瘤。", "婴儿进行性脊肌萎缩症：该病是累及脊髓前角细胞及延髓运动核的神经元退行性变性病。理赔时必须提供支持诊断的肌肉活检病理报告。其它类型的脊肌萎缩症如II型中间型进行性脊肌萎缩症、III型少年性脊肌萎缩症（Kugelberg-Welander氏病）不在本保障范围内。", "严重哮喘：", "一种可逆性、反复发作的支气管阻塞性疾病。须满足下列至少三项条件：", "(1)过去两年中有哮喘持续状态病史；", "(2)身体活动耐受能力显著且持续下降或在家中需要医师处方的氧气治疗法；", "(3)胸部X片证实肺部慢性过度膨胀充气导致的胸廓畸形；", "(4)持续日常服用口服可的松类固醇激素（至少持续服用6个月以上）。", "成骨不全症：一种胶元病，特征为骨易碎、骨质疏松和易骨折。该病有4种类型：I 型、II型、III型、IV型。", "本合同只对III型成骨不全予以理赔。其主要临床特点有：发育迟缓、多发性骨折、进行性脊柱后侧凸及听力损害。III型成骨不全的诊断必须根据身体检查、家族史、X线检查和皮肤活检报告资料确诊。", "幼年型类风湿性关节炎：", "一种少儿慢性关节炎，其特征为发热和系统性疾病体征，该体征可能于关节炎出现之前的数月间持续存在。主要临床症状包括每日发高热、消散性皮疹、关节炎、脾肿大、淋巴结肿大、浆膜炎、体重下降、中性白细胞增多、急性期蛋白增加及血清抗核抗体（ANA）和类风湿因子（RF）阳性。", "严重胃肠炎：以严重的腹泻、便血和肠段坏死为特征的胃肠道严重感染。大肠或小肠的一处或多处需手术切除，且经病理检查证实存在严重感染和坏死。", "严重心肌炎：心肌的严重感染而导致至少持续6个月的心功能损害。严重的心功能损害必须具备如下条件：左室腔扩大至少达到正常值上限的120%，且左室射血分数持续性低于40%。", "脊髓灰质炎：脊髓灰质炎是指由于脊髓灰质炎病毒感染致脊髓运动神经元损害所导致的瘫痪性疾病，至少导致两个或以上的肢体瘫痪程度达到肌力在0-III级，经180天治疗后肢体肌力仍然不能恢复到IV级。诊断需提供脊髓灰质炎病毒检查的证据（如粪便或脑脊液检查，血液中抗体检查）。肢体的定义为整个上肢或是整个下肢。未导致肢体瘫痪（肢体肌力达IV或V级）者及其他原因导致的瘫痪不在保障范围内。", "重症手足口病：由肠道病毒引起的急性传染病，主要症状表现为手、足、口腔等部位的斑丘疹、疱疹。重症手足口病必须符合下列全部条件：", "(1) 经专科医生诊断为手足口病；", "(2) 伴有所列危重并发症之一：脑膜炎、脑炎、脑脊髓炎、肺水肿或心肌炎；", "(3) 接受了住院治疗。", "经输血导致的人类免疫缺陷病毒感染：", "互助会员因输血而感染上人类免疫缺陷病毒（HIV）必须同时满足以下条件：", "(1)在保障起始日或复效日之后，互助会员因输血而感染HIV；", "(2)受感染的互助会员不是血友病患者；", "以及下列条件(3)或(4)中的任意一条：", "(3)提供输血治疗的输血中心或医院承认该项输血感染责任的证明；", "(4)提供输血前一个月内HIV检查阴性的报告、输血血液来源的证明以及输血后HIV检查阳性的报告。", "任何因其他传播方式（包括：性传播或静脉注射毒品）导致的HIV感染不在本保单保障范围内。互助小组必须拥有获得使用互助会员的所有血液样本的权利和能够对这些样本进行独立检验的权利。", "定义来源及确诊医院范围：以上“8.1.1恶性肿瘤”至“8.1.15重型再生障碍性贫血”所列重大疾病定义根据中国保险行业协会2007年公布的《重大疾病保险的疾病定义使用规范》作出，其他重大疾病由我们增加，其定义由我们根据通行的医学标准制定。", "以上重大疾病，除严重原发性心肌病须在卫生行政部门认定的三级以上（含三级）医院确诊外，其他疾病均须在卫生行政部门认定的二级以上（含二级）医院确诊。", "上述重大疾病定义中部分术语释义如下:", "（一）专科医生", "专科医生应当同时满足以下四项资格条件：", "1．具有有效的中华人民共和国《医师资格证书》；", "2．具有有效的中华人民共和国《医师执业证书》，并按期到相关部门登记注册；", "3．具有有效的中华人民共和国主治医师或主治医师以上职称的《医师职称证书》；", "4．在二级或二级以上医院的相应科室从事临床工作三年以上。", "（二）肢体机能完全丧失", "肢体机能完全丧失是指肢体的三大关节中的两大关节僵硬，或不能随意识活动。肢体是指包括肩关节的整个上肢或包括髋关节的整个下肢。", "（三）白血病", "白血病是一种造血系统的恶性肿瘤，其主要表现为白血病细胞在骨髓或其他造血组织中大量克隆、异常增生，大量聚集的白细胞抑制正常造血并浸润全身器官和组织。周围白细胞有质和量的变化，出现相应临床表现。互助会员所患白血病必须根据骨髓的活组织检查和周围血象由儿科、血液科或肿瘤科的专科医生确诊。", "相当于Binet分期方案A期程度的慢性淋巴细胞白血病不在保障范围内。", "（四）语言能力或咀嚼吞咽能力完全丧失", "语言能力完全丧失是指无法发出四种语音（包括口唇音、齿舌音、口盖音和喉头音）中的任何三种、或声带全部切除，或因大脑语言中枢受伤害而患失语症。", "咀嚼吞咽能力完全丧失是指因牙齿以外的原因导致器质障碍或机能障碍，以致不能作咀嚼吞咽运动，除流质食物外不能摄取或吞咽的状态。", "（五）永久不可逆", "永久不可逆是指自疾病确诊或意外伤害发生之日起，经过积极治疗180天后，仍无法通过现有医疗手段恢复。"],
    height: 8480,
    opacity: 1,
    isDown: false
  }]
};

var Range = function (_wx$Component) {
  (0, _inherits3.default)(Range, _wx$Component);

  function Range() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Range);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Range.__proto__ || (0, _getPrototypeOf2.default)(Range)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      slidedata: [{}]
    }, _this.children = {
      slide: new _slide2.default({ slideData: "@slidedata" })
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Range, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
        var id;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = parseInt(e.type);

                if (!(id == 1)) {
                  _context.next = 4;
                  break;
                }

                this.setData({
                  slidedata: postData.project01
                });
                return _context.abrupt('return');

              case 4:
                if (!(id == 2)) {
                  _context.next = 7;
                  break;
                }

                this.setData({
                  slidedata: postData.project02
                });
                return _context.abrupt('return');

              case 7:
                if (!(id == 3)) {
                  _context.next = 10;
                  break;
                }

                this.setData({
                  slidedata: postData.project03
                });
                return _context.abrupt('return');

              case 10:
                if (!(id == 4)) {
                  _context.next = 13;
                  break;
                }

                this.setData({
                  slidedata: postData.project04
                });
                return _context.abrupt('return');

              case 13:
                if (!(id == 5)) {
                  _context.next = 16;
                  break;
                }

                this.setData({
                  slidedata: postData.project05
                });
                return _context.abrupt('return');

              case 16:
                if (!(id == 6)) {
                  _context.next = 19;
                  break;
                }

                this.setData({
                  slidedata: postData.project06
                });
                return _context.abrupt('return');

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Range;
}(_labrador2.default.Component);


Page(_labrador._createPage(Range));

})(module,require);