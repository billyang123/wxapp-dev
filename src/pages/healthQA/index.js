import wx from 'labrador';
import Navbar from '../../components/navbar/navbar';
export default class HealthIndex extends wx.Component {
	data = {
		//tab
		tabIndex:1,
		tabData:[
			{
				title:"全部",
				api:"#"
			},{
				title:"肿瘤内科",
				api:"#"
			},{
				title:"妇产科",
				api:"#"
			},{
				title:"心理咨询",
				apai:"#"
			}
		],
		//含有播放泡泡的
		playAudio:{
			id:null,
			src:null
		},
		audio:{},
		//赞
		praiseNum:{},
		//加载更多数据
		list:[],
		windowHieght:"625",
		hidden:false,
		hasMore:true,
     	hasRefesh:false,
     	size:5,
		page:0,
		doclist:[],
		loading:false
	};
	children = {
	    navbar: new Navbar({cur:1})
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
	tabs(event){
		console.log(event)
		this.setData({
			tabIndex:event.currentTarget.dataset.index
		})
		this.setData({
	    	hasMore:true,
	    	page:0,
	    	list:[]
	    })
		this.getQAList();
	}
	async getDoctors(){
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/doctor/list',
			data:{
				page:0,
				size:2
			}
		})
		if(!res.data){
			this.setData({
		    	doclist:[]
		    })
		}
	    this.setData({
	    	doclist:res.data.content.splice(0,2)
	    })
	}
	async getQAList(){
		if(this.data.loading) return;
		this.data.loading = true;
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/list',
			data:{
				page:this.data.page,
				size:this.data.size,
				label:this.data.tabIndex
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
		console.log(content,this.praiseTmp)
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
	    if(!this.data.hasMore) return
	    this.data.page++
	   	await this.getQAList();
	}
	async praise(event){
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
				qaId:id
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

	}
	async onLoad(){
		//加载更多设置高度
		let systemInfo = await wx.getSystemInfo();
		this.setData({
	       windowHieght:systemInfo.windowHeight
	    });
		//console.log(systemInfo)
		this.praiseTmp = [];
		this.getDoctors();
		this.getQAList();
		this.audioPlayEnd();

	}
	// async refesh(){
	// 	//console.log("refesh")
	// 	 this.setData({
	// 	    hasRefesh:true
	// 	 });
	// 	 await sleep(2000);
	// 	 this.setData({
	//        hidden:true,
	//        hasRefesh:false
	//     });
	// }
	onReady(e) {
	    // 使用 wx.createAudioContext 获取 audio 上下文 context
	    //console.log(wx.createAudioContext)
	    // this.audioCtx = wx.createAudioContext('myAudiod');
	    // console.log(this.audioCtx)
	    // this.audioCtx.play();
	    this.playingAudio = {}
	}
}