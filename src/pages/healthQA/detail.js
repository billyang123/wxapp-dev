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
		var index = event.currentTarget.dataset.index;
		var id = event.currentTarget.dataset.id;
		var type = event.currentTarget.dataset.type
		var localId = [type,id,index].join("_");
		if(this.praiseTmp[localId]){
			return;
		}
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise',
			type:"post",
			data:{
				qaId:id
			}
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
			this.praiseTmp[localId] = 1;
		}

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
		    	list:[]
		    })
		}
		let loadMore = true;
		let content = res.data.content;
		if(res.data.totalPages == 1 || res.data.totalPages == this.data.page+1){
			loadMore = false;
		}
		for (var i = 0; i < content.length; i++) {
			content[i].createTime = (new Date(content[i].createTime)).format('yyyy/MM/dd hh:mm:ss');
			content[i].commentReply = JSON.parse(content[i].commentReply)
		}
	    this.setData({
	    	hasMore:loadMore,
	    	list:this.data.list.concat(content),
	    	hidden: true,
	       	hasRefesh: false,
	       	totalComNum:res.data.totalElements
	    })
	    this.data.loading = false;
	}
	async loadMore(e){
		console.log("loadMore")
		that.setData({
		    hasRefesh:true
		});
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
		this.setData({
			detail:res.data
		})
	}
	commitFocus(){
		this.setData({
			commitfocus:true
		})
	}
	bindinput(e){
		this.setData({
			commitValue:e.detail.value
		})
	}
	async onLoad(e){
		this.praiseTmp = {};
		let systemInfo = await wx.getSystemInfo();
		this.data.id = parseInt(e.id);
		this.setData({
	       windowHieght:systemInfo.windowHeight
	    });
		this.getCommitList();
		this.getDetail();
		this.audioPlayEnd();
	}
}