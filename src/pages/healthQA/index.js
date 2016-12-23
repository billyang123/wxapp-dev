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
	    	let audio = _this.data.audio;
			audio[id].status = false;
			_this.setData({
		       audio:audio
		    });
	    })
	}
	async checkLink(event){
		var _this = this;
		if(this.isLink) return;
      	this.isLink = true;
      	let d = await wx.app.checkLogin();
      	if(!d){
      		await wx.app.doLogin()
      	}
      	wx.navigateTo({
            url:event.currentTarget.dataset.link
        })
    	this.isLink = false;
	}
	setNumTune(index,id){
		let locaId = id+"_tune_"+index;
		if(!this.tuneNum){
			this.tuneNum = [];
		}
		if(this.tuneNum.indexOf(locaId)<0){
			wx.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/tune",type:"post",data:{qaId:id}});
			let _list = this.data.list;
			_list[index].tuneNumber += 1;
			this.setData({
				list:_list
			})
			this.tuneNum.push(locaId)
		}
	}
	bindAudio(event){
		let src = event.currentTarget.dataset.url;
		let id = event.currentTarget.dataset.id;
		let index = event.currentTarget.dataset.index;
		let auido = this.data.audio;
		let playAudio = this.data.playAudio;
		if(!auido[id]){
			auido[id] = {
				id:id,
				src:src,
				status:false
			}
		}
		if(playAudio.id!=id){
			if(playAudio.id){
				if(auido[playAudio.id].status){
					auido[playAudio.id].status = false;
					wx.stopBackgroundAudio();
				}
			}
			auido[id].status = true;
			wx.playBackgroundAudio({
		    	dataUrl:src
		    })
		}else{
			if(auido[id].status){
				wx.stopBackgroundAudio();
				auido[id].status = false;
			}else{
				wx.playBackgroundAudio({
			    	dataUrl:src
			    })
				auido[id].status = true;
			}
		}
		this.setData({
	       audio:auido,
	       playAudio:{
	       		id:id,
				src:src
	       }
	    });
		this.setNumTune(index,id)
	}
	tabs(event){
		//console.log(event)
		//wx.app.stopAudio();
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
	async onPullDownRefresh(){
		this.setData({
	    	hasMore:true,
	    	page:0,
	    	list:[]
	    })
		await this.getDoctors();
		await this.getQAList();
		wx.stopPullDownRefresh()
	}
}