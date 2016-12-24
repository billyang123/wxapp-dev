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
			var useInfo = await wx.getStorage({ key: 'userInfo'})
			console.log(useInfo)
			await wx.showToast({
			  title: '评论成功',
			  icon: 'success',
			  duration: 2000
			})
			let tme = new Date();
			let n_data = {
				resId:res.data,
				avatar:useInfo.data.avatarUrl.substring(0,useInfo.data.avatarUrl.length-1)+96,
				nickName:useInfo.data.nickName,
				content:content,
				time:tme.format("yyyy/MM/dd HH:mm:ss")
			}
			if(this.postdata.qaCommentId){
				n_data["qaCommentId"] = this.postdata.qaCommentId
			}else{
				n_data["qaId"] = this.postdata.qaId
			}
			await wx.setStorage({
				key:"commit",
				data:n_data
			})
			this.setData({
				content:""
			})
			//wx.navigateBack()
			setTimeout(function(){
				wx.navigateBack()
				// wx.redirectTo({
		  //   		url:'/pages/healthQA/detail?id='+this.qaId
		  //   	})
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
	async onShow(){
		wx.app.stopAudio();
		await wx.setStorage({
			key:"commit",
			data:{}
		})
	}
	async onLoad(e){

		// this.data.cid = e.qid;
		// this.data.rid = e.rid;
		wx.app.stopAudio();
		console.log(e)
		this.postdata = {
			code:wx.app.globalData.storage.code
		}
		if(e.qaCommentId){
			this.postdata.qaCommentId = e.qaCommentId
			this.qaId = e['amp;qaId'];
			this.url = wx.app.data.ajaxPath+'/wxapi/healthserv/qacomment/reply'
		}
		if(e.qaId){
			this.postdata.qaId = e.qaId;
			this.qaId = e.qaId;
			this.url = wx.app.data.ajaxPath+'/wxapi/healthserv/qacomment/add'
		}
		console.log(e)
	}
}