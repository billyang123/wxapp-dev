import wx from 'labrador';

export default class Bindphone extends wx.Component {
	data = {
		userInfo:{},
		phoneValue:"",
		codeValue:"",
		btnText:"获取验证码",
		disabled:true,
		cDisCls:"btn",
		loading:false,
		tmOn:false
	};
	bindKeyInput(e){
		let name = e.target.dataset.name,
			data = {};
		data[name] = e.detail.value
		this.setData(data);
	}
	shoutTime(){
		let _this= this;
		let secNum = 60;
		if(this.tmOn) return;
		this.tmOn = true;
		this.setData({
			cDisCls:"btn disabled",
			btnText:secNum+"秒后重发"
		})
		let STM = setInterval(function(){
			secNum--;
			if(secNum <=0){
				clearInterval(STM);
				this.tmOn = false;
				_this.setData({
					cDisCls:""
				})
				_this.setData({
					btnText:"重发"
				})
			}
			_this.setData({
				btnText:secNum+"秒后重发"
			})
		},1000);
	}
	async doBind(e){
		let postBind = await wx.request({
            url: 'https://xcx.chinamuxie.com/wxapi/user/doBindPhone',
            method:"POST",
            header: {
			    'content-type': 'application/x-www-form-urlencoded'
			},
            data: {
            	phone:this.data.phoneValue,
            	valideCode:this.data.codeValue,
            	code:wx.app.globalData.storage.code
            }
        })
        if(postBind.data.status == 0){
        	wx.showToast({
			  title: '绑定成功',
			  icon: 'success',
			  duration: 2000
			});
          wx.navigateBack()
        }
	}
	async getCheckCode(e){
		let postCode = await wx.request({
            url: 'https://xcx.chinamuxie.com/wxapi/user/sendCode',
            method:"POST",
            header: {
			    'content-type': 'application/x-www-form-urlencoded'
			},
            data: {
            	telphone:this.data.phoneValue
            }
        })
        if(postCode.data.status == 0){
        	this.shoutTime();
        	this.setData({
        		disabled:false
        	});
        	
        }
	}
	async onLoad() {
	    var userInfo = await wx.getUserInfo();
	    this.setData({
	    	userInfo:userInfo.userInfo
	    })
	}
}
