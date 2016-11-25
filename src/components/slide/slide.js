import wx from 'labrador';

export default class Slide extends wx.Component {
	data = {
		slideAnim:[],
		chevronAnim:[],
		slideData:[]
	};
	props = {
	    slideData: []
	};
	onUpdate(props) {
	    this.setData('slideData', props.slideData);
   /* this.setData({
      slideData:props.slideData
    });*/
    this.initAnim();
   

	}
	setSlide(e){
		let index = parseInt(e.currentTarget.dataset.index);
		let slideData = this.data.slideData;
		let slideAnim = this.data.slideAnim;
		let chevronAnim = this.data.chevronAnim;

		let tempIndex = null;
		let curSlide = slideData[index];
		
		let o = 1,h = curSlide.height+"rpx",deg=-90;
		if(curSlide.isDown){
			o = 0;
			h = 0;
			deg = 90;
		}
		curSlide.isDown = !curSlide.isDown;
		curSlide.opacity = o;
		this.slide.opacity(o).height(h).step();
		this.chevron.rotate(deg).step();
		slideAnim[index] = this.slide.export();
		chevronAnim[index] = this.chevron.export();
		slideData[index] = curSlide;
		this.setData({
			slideData:slideData,
			slideAnim:slideAnim,
			chevronAnim:chevronAnim
		})
	}
	initAnim(){
		let slideData = this.data.slideData;
		let slide = wx.createAnimation({
	      	duration: 400,
	        timingFunction: 'ease',
	    });
	    let chevron = wx.createAnimation({
	      	duration: 300,
	        timingFunction: 'ease',
	    });
	    let animData = {
			slideAnim:[],
			chevronAnim:[]
		};
		this.slide = slide;
		this.chevron = chevron;
		for (var i = 0; i < slideData.length; i++) {
		    chevron.rotate(90).step();
		    slide.height(0).opacity(0).step();
		    animData.slideAnim[i] = slide.export();
		    animData.chevronAnim[i] = chevron.export()
		}
		this.setData(animData);
	}
    onLoad(e){
    	//this.initAnim();
    }
    /*onShow(){
    	this.initAnim();
    }*/
}
