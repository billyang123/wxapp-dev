import wx from 'labrador';
export default class Commit extends wx.Component {
	data = {
		qid:"",
		cid:"",
		textareaVal:"",
		disabled:false,
		url:""
	};
	bindTextAreaBlur(e){
		if(e.detail.value == "") {
			this.setData({
				disabled:true,
				textareaVal:''
			})
		}else{
			this.setData({
				disabled:false,
				textareaVal:e.detail.value
			})
		}
	}
	bindTextAreaFocus(e){
		if(e.detail.value =="") return;
		this.setData({
			disabled:false
		})
	}
	async submit(){
		this.postdata.content = this.data.textareaVal;
		var res = await wx.app.ajax({
			url: this.url,
			data:this.postdata,
			type:"post"
		})
		if(res.status==0){
			await wx.navigateBack()
		}
		if(res.status == 1){
			var sModal = await wx.showModal({
			  title: '提示',
			  content: '需要先登录'
			})
			if(sModal.confirm){
				wx.redirectTo({
		    		url:'/pages/account/account'
		    	})
			}
		}
	}
	async onLoad(e){
		this.data.cid = e.qid;
		this.data.rid = e.rid;
		if(e.qaCommentId){
			this.postdata = {
				qaCommentId:e.qaCommentId
			}
			this.url = 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/reply'
		}
		if(e.qaId){
			this.postdata = {
				qaId:e.qaId
			}
			this.url = 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/add'
		}
		console.log(e)
	}
}