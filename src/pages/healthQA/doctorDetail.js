import wx from 'labrador';
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
		disabled:true
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
		    	list:[]
		    })
		}
		let loadMore = true;
		let content = res.data.content;
		if(res.data.totalPages == 1){
			loadMore = false;
		}
	    this.setData({
	    	hasMore:loadMore,
	    	list:res.data.content,
	    	hidden: true,
	       	hasRefesh: false
	    })
	}
	async loadMore(e){	
		console.log("loadMore")
		that.setData({
		    hasRefesh:true
		});
	    if (!this.data.hasMore) return
	   	await this.getQAList();
	   	this.data.page++;
	}
	async praise(event){
		var index = event.currentTarget.dataset.index;
		var id = event.currentTarget.dataset.id;
		var localId = id+"_"+index;
		console.log(localId)
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
	async QaAdd(){
		var res = await wx.app.ajax({
			url: 'https://xcx.chinamuxie.com/wxapi/healthserv/qa/add',
			type:"post",
			data:{
				healthDoctorId:this.data.id,
				questionContent:this.data.textareaValue
			}
		})
		if(res.status == 0){
			wx.showToast({
			  title: '提问成功',
			  icon: 'success',
			  duration: 2000
			})
		}
	}
	setNumValue(e){
		let _value = e.detail.value;
		if(!_value) return;
		_value = _value.replace(/(^\s*)|(\s*$)/g, "");
		this.setData({
			curLength:_value.length,
			textareaValue:_value,
			disabled:false
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
	}
}