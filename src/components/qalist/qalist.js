import wx from 'labrador';
export default class Navbar extends wx.Component {
	data = {
		list:[],
		//含有播放泡泡的
		playAudio:{
			id:null,
			src:null
		},
		audio:{},
		//赞
		praiseNum:{}
	};
	props = {
	    list:[]
	};

	onUpdate(props) {
	    this.setData({
	    	list:props.list
	    });
	}
	
	audioPlay(event){
		// let id = event.currentTarget.dataset.id;
		// this.data.audio[id].status=!this.data.audio[id].status;
	}
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
}