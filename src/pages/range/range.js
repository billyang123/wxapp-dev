import wx from 'labrador';

export default class Range extends wx.Component {
	data = {
		slide:{},
		chevron:{},
		slideData:[
			{
				t:"国内国际航班意外身故/重度伤残",
				a:"最高100万元",
				chevron:{},
				slide:{},
				txt:[
					"保障会员自加入次日起，因乘坐国内、国际航班发生意外事故，导致保障会员意外身故或者重度伤残的，互助小组一次性给付身故或者重度伤残互助金100万。",
					"重度伤残是指根据《伤残评定标准》认定为1-3级。"
				],
				height:220,
				isdown:false
			}
		]
	};
	setSlide(event){		
		let id = event.currentTarget.dataset.id;
		let slideData = this.data.slideData;
		let curSlide = slideData[parseInt(id)];
		let o = 1,h = curSlide.height+"rpx",deg=-90;
		if(curSlide.isdown){
			o = 0;
			h = 0;
			deg = 90;
		}
		curSlide.isdown = !slideData.isdown
		curSlide.slide.opacity(o).height(h).step();
		curSlide.chevron.rotate(deg).step();
		curSlide.slide = curSlide.slide.export(),
		curSlide.chevron = curSlide.chevron.export()
		slideData[parseInt(id)] = curSlide;
		this.setData({
			slideData:slideData
		})
	}
    onLoad(e){
    	let slideData = this.data.slideData;
    	console.log(slideData)
    	for (var i = 0; i < slideData.length; i++) {
    		let curSlide =  slideData[i];
    		curSlide.slide = wx.createAnimation({
		      	duration: 400,
		        timingFunction: 'ease',
		    })
		    curSlide.chevron = wx.createAnimation({
		      	duration: 300,
		        timingFunction: 'ease',
		    })
		    curSlide.chevron.rotate(90).step();
	    	curSlide.slide.height(0).opacity(0).step();
	    	curSlide.slide = curSlide.slide.export(),
			curSlide.chevron = curSlide.chevron.export()
	    	slideData[i] = curSlide;
	    	this.setData({
		      slideData:slideData
		    })
    	}
    }
    onShow(){
    	// let slideData = this.data.slideData;
    	// console.log(slideData)
    	// for (var i = 0; i < slideData; i++) {
    	// 	let curSlide =  slideData[i];
    	// 	curSlide.slide = wx.createAnimation({
		   //    	duration: 400,
		   //      timingFunction: 'ease',
		   //  })
		   //  curSlide.chevron = wx.createAnimation({
		   //    	duration: 300,
		   //      timingFunction: 'ease',
		   //  })
		   //  curSlide.chevron.rotate(90).step();
	    // 	curSlide.slide.height(0).opacity(0).step();
	    // 	slideData[i] = curSlide;
	    // 	console.log(slideData)
	    // 	this.setData({
		   //    slideData:slideData
		   //  })
    	// }
    	//console.log(type);
    }
}