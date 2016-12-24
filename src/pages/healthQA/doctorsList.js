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
		list:[],
		loading:false
	};
	async getDoctorList(id){
		if(this.data.loading) return;
		this.data.loading = true;
		var res = await wx.app.ajax({
			url: wx.app.data.ajaxPath+'/wxapi/healthserv/doctor/list',
			data:{
				page:this.data.page,
				size:this.data.size
			}
		})
		if(!res.data){
			this.setData({
		    	hasMore:false,
		    	list:[],
		    	hidden: true,
	       		hasRefesh: false,
	       		loading:false
		    })
		    this.data.loading = false;
		    return;
		}
		let loadMore = true;
		let content = res.data.content;
		if(res.data.totalPages <= 1 || res.data.totalPages == this.data.page+1){
			loadMore = false;
		}
	    this.setData({
	    	hasMore:loadMore,
	    	list:this.data.list.concat(res.data.content),
	    	hidden: true,
	       	hasRefesh: false
	    })
	    this.data.loading = false;
	}
	async loadMore(e){
		console.log("loadMore")
	    if (!this.data.hasMore) return
	    this.data.page++;
	   	await this.getQAList();
	}
	async onLoad(){

		wx.app.stopAudio();

		let systemInfo = await wx.getSystemInfo();
		this.setData({
	       windowHieght:systemInfo.windowHeight
	    });
		this.getDoctorList();
	}
	onShow(){
		wx.app.stopAudio();
	}
	async onPullDownRefresh(){
		this.setData({
	    	hasMore:true,
	    	page:0,
	    	list:[]
	    })
		await this.getDoctorList();
		wx.stopPullDownRefresh()
	}
}