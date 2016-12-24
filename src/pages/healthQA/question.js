import wx from 'labrador';
import Alert from '../../components/alert/alert';
export default class Question extends wx.Component {
	data = {
		id:1,
		// curLength:0,
		// maxLength:60,
		textareaValue:"",


		// list:[],
		// windowHieght:"625",
		// hidden:false,
		// hasMore:true,
  //    	hasRefesh:false,
  //    	size:5,
		// page:0,

		// detail:{},
		loading:false,



		//含有播放泡泡的
		// playAudio:{
		// 	id:null,
		// 	src:null
		// },
		// audio:{},
		// //赞
		// praiseNum:{}
		// lineValue:"",
		// top:"17rpx",
		// value:""
	};
	children = {
	    alert: new Alert({msg:"@msg"})
	};
	async formSubmit(e){
		let qcontent = e.detail.value.questionContent;
		qcontent = qcontent.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
		if(qcontent == ""){
			return this.children.alert.show("请输入提问内容");
		}
		if(qcontent.length>60){
			return this.children.alert.show("提问内容需少于60个字");
		}
		var res = await wx.app.ajax({
			url: wx.app.data.ajaxPath+'/wxapi/healthserv/qa/add',
			type:"post",
			data:{
				healthDoctorId:this.data.id,
				questionContent:qcontent,
				code:wx.app.globalData.storage.code
			}
		})
		if(res.status == 0){
			wx.showToast({
			  title: '提问成功',
			  icon: 'success',
			  duration: 2000
			})
			this.setData({
				textareaValue:'',
				curLength:0,
				disabled:false
			})
			setTimeout(function(){
				wx.navigateBack();
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
	// setNumValue(e){
	// 	let _value = e.detail.value;
	// 	_value = _value.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
	// 	this.setData({
	// 		curLength:_value.length,
	// 		textareaValue:_value
	// 	})
	// }
	// async getDetail(){
	// 	//https://xcx.chinamuxie.com/wxapi/healthserv/qa/detail?qaId=2
	// 	var res = await wx.app.ajax({
	// 		url: wx.app.data.ajaxPath+'/wxapi/healthserv/doctor/detail',
	// 		data:{
	// 			doctorId:this.data.id
	// 		}
	// 	})
	// 	let height = res.data.faNumber>1?900:500;
	// 	//console.log(res.data.faNumber)
	// 	this.setData({
	// 		detail:res.data
	// 	})
	// }
	async onLoad(e){
		this.data.id = parseInt(e.id);
		//加载更多设置高度
		//this.getDetail();
	}
}