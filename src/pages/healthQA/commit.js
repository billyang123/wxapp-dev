import wx from 'labrador';
import Alert from '../../components/alert/alert';
export default class Commit extends wx.Component {
	data = {
		qid:"",
		cid:"",
		url:"",
		content:''
	};
	children = {
	    alert: new Alert({msg:"@msg"})
	};
	async formSubmit(e){
		let content = e.detail.value.content;
		content = content.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
		if(content == ""){
			return this.children.alert.show("请输入评论内容");
		}
		if(content.length>=60){
			return this.children.alert.show("评论内容需少于60个字");
		}
		this.postdata.content = content;
		var res = await wx.app.ajax({
			url: this.url,
			type:"post",
			data:this.postdata
		})
		if(res.status==0){
			await wx.showToast({
			  title: '评论成功',
			  icon: 'success',
			  duration: 2000
			})
			this.setData({
				content:""
			})
			setTimeout(function(){
				wx.redirectTo({
		    		url:'/pages/healthQA/detail?id='
		    	})
			},2000)
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

		// this.data.cid = e.qid;
		// this.data.rid = e.rid;
		console.log(e)
		this.postdata = {
			code:wx.app.globalData.storage.code
		}
		if(e.qaCommentId){
			this.postdata.qaCommentId = e.qaCommentId
			this.url = 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/reply'
		}
		if(e.qaId){
			this.postdata.qaId = e.qaId
			this.url = 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/add'
		}
		console.log(e)
	}
}