import wx from 'labrador';
export default class Navbar extends wx.Component {
	data = {
		assetsPath:wx.app.data.assetsPath,
		cur:0,
	    list:[
	    	{
	    		img:"/images/page_icon01.png",
	    		selectedImg:"/images/page_icon11.png",
	    		txt:"互助计划",
	    		pagePath:"/pages/index/index"
	    	},
	    	{
	    		img:"/images/page_icon05.png",
	    		selectedImg:"/images/page_icon15.png",
	    		txt:"健康问答",
	    		pagePath:"/pages/healthQA/index"
	    	},
	    	{
	    		img:"/images/page_icon04.png",
	    		selectedImg:"/images/page_icon14.png",
	    		txt:"我的保障",
	    		pagePath:"/pages/account/account"
	    	}
	    ]
	};
	props = {
	    cur: 0
	};
	onUpdate(props) {
	    this.setData('cur', props.cur);
	}
}