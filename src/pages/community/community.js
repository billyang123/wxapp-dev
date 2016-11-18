import wx from 'labrador';

export default class Community extends wx.Component {
	data = {
		topBanner:[
			{
				b:"https://image1.chinamuxie.com/images/project/pj789_banner01.png",
				t:"789重大疾病互助社群"
			},
			{
				b:"https://image1.chinamuxie.com/images/project/pjleftoverChildren_banner01.png",
				t:"留守儿童互助社群"
			},
			{
				b:"https://image1.chinamuxie.com/images/project/pjtravel_banner01.png",
				t:"交通、旅游意外互助社群"
			},
			{
				b:"https://image1.chinamuxie.com/images/project/pjchildren_banner01.png",
				t:"少儿大病、意外互助社群"
			},
			{
				b:"https://image1.chinamuxie.com/images/project/pj80_banner01.png",
				t:"80后孕妈婴宝互助社群"
			},
			{
				b:"https://image1.chinamuxie.com/images/project/pjmiddleAged_banner01.png",
				t:"中老年大病、意外互助社群"
			}
		],
		bannerImg:{}
	};
	linkTo(event) {
	    wx.navigateTo({
	      url:event.currentTarget.dataset.link
	    })
	}
    async onLoad(e){
    	console.log(e)
    	this.setData({
    		bannerImg:this.data.topBanner[parseInt(e.type)-1]
    	})
    	console.log(type);
    }
}