import wx from 'labrador';
import Slide from '../../components/slide/slide';

let postData={
  project01:[
    {
      t:"住院医疗费用报销（含非医保类用药）",
      a:"最高30万元",
      txt:[
        "保障会员自加入之日起180日后，初次患保障范围内的25种重大疾病，因疾病产生的住院费用【包括：床位费、手术费、药费、治疗费、护理费、检查检验费、特殊检查治疗费、救护车费】，按照如下规则最高给予30万的住院费用报销。",
        "住院医疗费用报销 30万",
        "（1）对于参加医保的会员，若已从医保报销部分医疗费用，互助小组对于剩余住院医疗费用中符合医保支付范围的，按100%的比例报销。",
        "（2）对于未参加医保的会员，互助小组对于符合医保支付范围的住院医疗费用按照80%的比例报销。",
        "（3）对于住院医疗费用不符合医保支付范围的（包括进口药、自费药等），其报销比例为70%。"
      ],
      height:600,
      opacity:1,
      isDown:false
    }
  ]
};

export default class Range extends wx.Component {
	data = {
		slidedata:postData.project01
	};
	children = {
	    slide: new Slide({slideData:"@slidedata"})
	};
}
