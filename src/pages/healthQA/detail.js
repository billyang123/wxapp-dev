import wx from 'labrador';
export default class HealthDetail extends wx.Component {
	data = {
		id:"",
		detail:{},
		list:[],
		windowHieght:"625",
		hidden:false,
		hasMore:true,
     	hasRefesh:false,
     	size:5,
		page:0,
		praiseNum:{},
		//含有播放泡泡的
		playAudio:{
			id:null,
			src:null
		},
		audio:{},
		totalComNum:0,
		commitfocus:false,
		commitValue:"",
		loading:false
	};
	audioPlay(event){
		// let id = event.currentTarget.dataset.id;
		// this.data.audio[id].status=!this.data.audio[id].status;
	}
	audioPlayEnd(){
		var _this = this;
	    wx.onBackgroundAudioStop(function(e){
	    	console.log(e);
	    	let id = _this.data.playAudio.id;
			_this.data.audio[id].status = false;
			_this.setData({
		       audio:_this.data.audio
		    });
	    })
	}
	async praise(event){
		if(this.praiseLoad) return;
		this.praiseLoad = true;
		var index = event.currentTarget.dataset.index;
		var id = event.currentTarget.dataset.id;
		var type = event.currentTarget.dataset.type
		var localId = type+id;
		if(this.praiseTmp.indexOf(localId)>=0){
			return;
		}
		let url = type=="detail"?'https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise':'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/praise'
		let data = {
			code:wx.app.globalData.storage.code
		}
		if(type=="detail"){
			data.qaId = id;
		}else{
			data.qaCommentId = id;
		}
		var res = await wx.app.ajax({
			url: url,
			type:"post",
			data:data
		})
		console.log(res)
		if(res.status==0){
			if(type == "detail"){
				this.data[type].praiseNumber+=1;
				this.data[type].praiseed = true;
			}else{
				this.data[type][index].praiseNumber+=1;
				this.data[type][index].praiseed = true;
			}
			let data = {}
			data[type] = this.data[type]
			this.setData(data)
			this.praiseTmp.push(localId);
		}
		this.praiseLoad = false;
	}
	setNumTune(index,id){
		let locaId = id+"_tune_"+index;
		if(!this.tuneNum){
			this.tuneNum = [];
		}
		if(this.tuneNum.indexOf(locaId)<0){
			wx.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/tune",type:"post",data:{qaId:id}});
			let detail = this.data.detail;
			detail.tuneNumber += 1;
			this.setData({
				detail:detail
			})
			this.tuneNum.push(locaId)
		}
	}
	async bindAudio(event){
		let src = event.currentTarget.dataset.url;
		let id = event.currentTarget.dataset.id;
		let index = event.currentTarget.dataset.index;
		if(!this.data.audio[id]){
			this.data.audio[id] = {
				id:id,
				src:src,
				status:false
			}
		}
		//wx.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/tune",type:"post",data:{qaId:id}})
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
		this.setNumTune(index,id);
	}
	async getCommitList(){
		if(this.data.loading) return;
		this.data.loading = true;
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/list',
			data:{
				qaId:this.data.id,
				page:this.data.page,
				size:this.data.size
			}
		})
		if(!res.data){
			this.setData({
		    	hasMore:false,
		    	list:[],
		    	hidden: true,
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
		for (var i = 0; i < content.length; i++) {
			content[i].createTime = (new Date(content[i].createTime)).format('yyyy/MM/dd HH:mm:ss');
			content[i].commentReply = JSON.parse(content[i].commentReply);
			if(this.praiseTmp.indexOf('list'+content[i].id)>=0){
				content[i].praiseed = true
			}else{
				content[i].praiseed = false
			}
		}
	    this.setData({
	    	hasMore:loadMore,
	    	list:this.data.list.concat(content),
	    	hidden: true,
	       	totalComNum:res.data.totalElements
	    })
	    this.data.loading = false;
	}
	async loadMore(e){
		console.log("loadMore")
	    if (!this.data.hasMore) return
	    this.data.page++;
	   	await this.getCommitList();
	}
	async getDetail(){
		//https://xcx.chinamuxie.com/wxapi/healthserv/qa/detail?qaId=2
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/detail',
			data:{
				qaId:this.data.id
			}
		})

		console.log(res)
		if(this.praiseTmp.indexOf('detail'+res.data.id)>=0){
			res.data.praiseed = true
		}else{
			res.data.praiseed = false
		}
		this.setData({
			detail:res.data
		})
	}
	commitFocus(){
		this.setData({
			commitfocus:true
		})
	}

	async checkLink(event){
		var _this = this;
		var _index = event.currentTarget.dataset.index;
		if(typeof(_index) == "number") {
			this.commitIndex = _index;
		}
		if(this.isLink) return;
      	this.isLink = true;
      	let d = await wx.app.checkLogin();
      	if(!d){
      		d = await wx.app.doLogin()
      	}
      	if(d){
      		wx.navigateTo({
	            url:event.currentTarget.dataset.link
	        })
      	}
    	this.isLink = false;
	}
	bindinput(e){
		this.setData({
			commitValue:e.detail.value
		})
	}
	async setSubCommit(){
		let commit = await wx.getStorage({key:'commit'})
		let _list = this.data.list;
		if(_list[this.commitIndex].commentReply){
			_list[this.commitIndex].commentReply.push({
				userNickname:commit.data.nickName,
				replyContent:commit.data.content
			})
			this.setData({
				list:_list
			})
			await wx.setStorage({
				key:"commit",
				data:{}
			})
		}
	}
	async setCommit(){
		let commit = await wx.getStorage({key:'commit'})
		let _list = this.data.list;
		if(commit.data.qaId){
			let ob = {
				commentContent:commit.data.content,
				commentRelyNumber:0,
				commentReply:[],
				createTime:commit.data.time,
				headImg:commit.data.avatar,
				healthQaId:this.data.id,
				id:commit.data.qaId,
				nickName:commit.data.nickName,
				praiseNumber:0,
				status:0,
				userInfoId:0
			}
			_list.unshift(ob);
			this.setData({
				list:_list
			})
			await wx.setStorage({
				key:"commit",
				data:{}
			})
		}
	}
	onShow(e){
		console.log("onShow",this.eId)
		wx.app.stopAudio();
		if(this.data.id){
			if(typeof(this.commitIndex) == "number"){
				this.setSubCommit();
			}else{
				this.setCommit();
			}
		}
	}

	async onLoad(e){
		wx.app.stopAudio();
		console.log("onLoad",this.showStatus)
		this.praiseTmp = [];
		let systemInfo = await wx.getSystemInfo();
		//this.eId = parseInt(e.id);
		this.data.id = parseInt(e.id);
		this.setData({
	       windowHieght:systemInfo.windowHeight
	    });
		this.getCommitList();
		this.getDetail();
		this.audioPlayEnd();
	}
	async onPullDownRefresh(){
		this.setData({
	    	hasMore:true,
	    	page:0,
	    	list:[]
	    })
		await this.getDetail();
		await this.getCommitList();
		wx.stopPullDownRefresh()
	}
}