import wx from 'labrador';
export default class Commit extends wx.Component {
	data = {
		qid:"",
		cid:"",
		textareaVal:"",
		disabled:false
	};
	bindTextAreaBlur(e){
		this.setData({
			disabled:true,
			textareaVal:e.detail.value
		})
	}
	bindTextAreaFocus(){
		this.setData({
			disabled:false
		})
	}
	async submit(){
		var data = {
			content:this.data.textareaVal,
			qId:this.data.qid,
			cId:this.data.cid
		}
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/add',
			data:data,
			type:"post"
		})
		if(res.status==0){
			await wx.navigateBack()
		}
	}
	async onLoad(e){
		this.data.qid = e.qid;
		this.data.cid = e.cid;
		console.log(e)
	}
}