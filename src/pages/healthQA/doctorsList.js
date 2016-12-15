import wx from 'labrador';
export default class DoctorsList extends wx.Component {
	data = {
		id:"",
		size:5,
		page:0,
		hidden:false,
		hasMore:true,
     	hasRefesh:false,
     	windowHieght:'',
		list:[]
	};
	async getDoctorList(id){
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/doctor/list',
			data:{
				page:this.data.page,
				size:this.data.size
			}
		})
		if(!res.data){
			this.setData({
		    	hasMore:false,
		    	list:[]
		    })
		}
		let loadMore = true;
		let content = res.data.content;
		if(res.data.totalPages == 1){
			loadMore = false;
		}
	    this.setData({
	    	hasMore:loadMore,
	    	list:res.data.content,
	    	hidden: true,
	       	hasRefesh: false
	    })
	}
	async loadMore(e){
		console.log("loadMore")
		this.data.page++;
		that.setData({
		    hasRefesh:true
		});
	    if (!this.data.hasMore) return
	   	await this.getQAList();
	}
	async onLoad(){
		let systemInfo = await wx.getSystemInfo();
		this.setData({
	       windowHieght:systemInfo.windowHeight
	    });
		this.getDoctorList();
	}
}