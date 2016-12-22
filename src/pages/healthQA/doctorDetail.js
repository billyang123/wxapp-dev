import wx from 'labrador';
import Alert from '../../components/alert/alert';
export default class DoctorDetail extends wx.Component {
	data = {
		id:1,
		curLength:0,
		maxLength:60,
		textareaValue:"",


		list:[],
		windowHieght:"625",
		hidden:false,
		hasMore:true,
     	hasRefesh:false,
     	size:5,
		page:0,

		detail:{},
		loading:false
		// lineValue:"",
		// top:"17rpx",
		// value:""
	};
	children = {
	    alert: new Alert({msg:"@msg"})
	};
	audioPlayEnd(event){
		let id = event.currentTarget.dataset.id;
		this.data.audio[id].status = false;
		this.setData({
	       audio:this.data.audio
	    });
	}
	async bindAudio(event){
		let src = event.currentTarget.dataset.url;
		let id = event.currentTarget.dataset.id;
		if(!this.data.audio[id]){
			this.data.audio[id] = {
				id:id,
				src:src,
				status:false
			}
		}
		if(this.data.playAudio.src!=src){
			if(this.data.playAudio.id){
				this.data.audio[this.data.playAudio.id].status = false;
				this.setData({
			       audio:this.data.audio
			    });
			}
			this.data.audio[id].status = true;
			await wx.playBackgroundAudio({
		    	dataUrl:src
		    })
			this.setData({
		       audio:this.data.audio,
		       playAudio:{
		       		id:id,
					src:src
		       }
		    });
		}else{
			if(this.data.audio[id].status){
				//let playerState = await wx.getBackgroundAudioPlayerState();
				await wx.pauseBackgroundAudio()
				this.data.audio[id].status = false;
			}else{
				await wx.playBackgroundAudio({
			    	dataUrl:src
			    })
				this.data.audio[id].status = true;
			}
			this.setData({
		       audio:this.data.audio
		    });
		}

	}
	async getQAList(){
		if(this.data.loading) return;
		this.data.loading = true;
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/list',
			data:{
				page:this.data.page,
				size:this.data.size,
				dockerId:this.data.id
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
		if(res.data.totalPages == 1 || res.data.totalPages == this.data.page+1){
			loadMore = false;
		}
		for (var i = 0; i < content.length; i++) {
			if(this.praiseTmp.indexOf(content[i].id+'')>=0){
				content[i].praiseed = true
			}else{
				content[i].praiseed = false
			}
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
	async praise(event){
		//this.praiseLoad = false;
		if(this.praiseLoad) return;
		this.praiseLoad = true;
		var index = event.currentTarget.dataset.index;
		var id = event.currentTarget.dataset.id;
		var localId = id;
		if(this.praiseTmp.indexOf(localId)>=0){
			return;
		}
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise',
			type:"post",
			data:{
				qaId:id,
				code:wx.app.globalData.storage.code
			}
		})
		console.log(res)
		if(res.status==0){
			let _list = this.data.list;
			_list[parseInt(index)].praiseNumber+=1;
			_list[parseInt(index)].praiseed = true;
			this.setData({
				list:_list
			})
			this.praiseTmp.push(localId);
		}
		this.praiseLoad = false;
	}
	async formSubmit(e){
		let qcontent = e.detail.value.questionContent;
		qcontent = qcontent.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
		if(qcontent == ""){
			return this.children.alert.show("请输入提问内容");
		}
		if(qcontent.length>=60){
			return this.children.alert.show("提问内容需少于60个字");
		}
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/add',
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
	setNumValue(e){
		let _value = e.detail.value;
		_value = _value.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
		this.setData({
			curLength:_value.length,
			textareaValue:_value
		})
	}
	async getDetail(){
		//https://xcx.chinamuxie.com/wxapi/healthserv/qa/detail?qaId=2
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/doctor/detail',
			data:{
				doctorId:this.data.id
			}
		})
		this.setData({
			detail:res.data
		})
	}
	// bindinput(e){
	// 	let _value = e.detail.value;
	// 	let disabled = this.data.disabled;
	// 	this.data.textareaValue = _value
	// 	this.data.value = _value.replace(/(^\s*)|(\s*$)/g, "");
	// 	if(this.data.value == ""){
	// 		disabled = false;
	// 	}else{
	// 		disabled = true;
	// 	}
	// 	this.setData({
	// 		curLength:_value.length,
	// 		textareaValue:this.data.textareaValue,
	// 		disabled:disabled
	// 	})
	// }
	async onLoad(e){
		//console.log(e.id)
		this.data.id = parseInt(e.id);
		//加载更多设置高度
		let systemInfo = await wx.getSystemInfo();
		this.setData({
	       windowHieght:systemInfo.windowHeight
	    });
		//console.log(systemInfo)

		this.getQAList();
		this.getDetail();
	}
	async onPullDownRefresh(){
		this.setData({
	    	hasMore:true,
	    	page:0,
	    	list:[]
	    })
		await this.getQAList();
		await this.getDetail();
		wx.stopPullDownRefresh()
	}
}