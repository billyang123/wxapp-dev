import wx from 'labrador';
import Slide from '../../components/slide/slide';
export default class Range extends wx.Component {
	data = {
		slidedata:[
			{
				t:"国内国际航班意外身故/重度伤残",
				a:"最高100万元",
				txt:[
					"保障会员自加入次日起，因乘坐国内、国际航班发生意外事故，导致保障会员意外身故或者重度伤残的，互助小组一次性给付身故或者重度伤残互助金100万。",
					"重度伤残是指根据《伤残评定标准》认定为1-3级。"
				],
				height:220,
				opacity:1,
				isDown:false
			},
			{
				t:"国内国际航班意外身故/重度伤残",
				a:"最高100万元",
				txt:[
					"保障会员自加入次日起，因乘坐国内、国际航班发生意外事故，导致保障会员意外身故或者重度伤残的，互助小组一次性给付身故或者重度伤残互助金100万。",
					"重度伤残是指根据《伤残评定标准》认定为1-3级。"
				],
				height:220,
				opacity:1,
				isDown:false
			}
		]
	};
	children = {
	    slide: new Slide({slideData:"@slidedata"})
	};
}