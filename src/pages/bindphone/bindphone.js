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
		tmOn:false,
    bl:true,
    btnBl:true
	};
	bindKeyInput(e){
		let name = e.target.dataset.name,
			data = {};
		data[name] = e.detail.value;
		this.setData(data);
	}
	shoutTime(){
		let _this= this;
		let secNum = 60;
    let STM=null;
		if(this.tmOn) return;
		this.setData({
			cDisCls:"btn disabled",
			btnText:secNum+"秒后重发",
      tmOn:true
		});
		STM = setInterval(function(){
			secNum--;
			if(secNum <=0){
				clearInterval(STM);
				_this.setData({
					cDisCls:"btn",
          bl:true,
          btnText:"获取验证码",
          tmOn:false
				});
			}else {
        _this.setData({
          btnText:secNum+"秒后重发"
        })
      }
			
		},1000);
	}
  checkisPhone (_phone) {
    let phone=/^1(2|3|4|5|6|7|8)[0-9]{9}$/;

    if(phone.test(_phone)){
      return true;
    }else{
      return false;
    }
  }
	async doBind(e){
    if (!this.checkisPhone(this.data.phoneValue)){
      wx.showModal({
        title: '提示',
        content: '请输入有效手机号',
        showCancel: false,
        success: function (res) {
        }
      });
      return;
    }
    if (!this.data.codeValue.length>0){
      wx.showModal({
        title: '提示',
        content: '请输入有效验证码',
        showCancel: false,
        success: function (res) {
        }
      });
      return;
    }
    
    if (this.data.btnBl){
      this.setData({
        btnBl:false
      });
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
      });
      if(postBind.data.status == 0){
        wx.showToast({
          title: '绑定成功',
          icon: 'success',
          duration: 2000
        });
        await wx.switchTab({
          url:"/pages/account/account"
        })
        //wx.navigateBack()
      }else {
        wx.showModal({
          title: '提示',
          content: postBind.data.msg,
          showCancel:false,
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      this.setData({
        btnBl:true
      });
    }
	}
	async getCheckCode(e){
    
    if (!this.checkisPhone(this.data.phoneValue)){
      wx.showModal({
        title: '提示',
        content: '请输入有效手机号',
        showCancel: false,
        success: function (res) {
        }
      });
      return;
    }
    
    if (this.data.bl){
      this.setData({
        bl:false
      });
      
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
		
	}
	async onLoad() {
	    var userInfo = await wx.getUserInfo();
	    this.setData({
	    	userInfo:userInfo.userInfo
	    })
	}
}
