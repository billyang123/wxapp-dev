import wx from 'labrador';
import Navbar from '../../components/navbar/navbar';
export default class Account extends wx.Component {
	data = {
		login:false,
		userInfo:{},
		assetsPath:wx.app.data.assetsPath,
		wxUserInfo:wx.app.globalData.userInfo
	};
	children = {
	    navbar: new Navbar({cur:2})
	};
	async linkTo(event) {
		var _this = this;
		if(this.isLink) return;
      	this.isLink = true;
      	if(!this.data.login){
      		await wx.app.doLogin(function(res){
				_this.setData({
					login:true,
					userInfo:res.data
				});
				wx.navigateTo({
		            url:event.currentTarget.dataset.link
		        })
			})
      	}else{
      		await wx.navigateTo({
	            url:event.currentTarget.dataset.link
	        })
      	}
    	this.isLink = false;
	}
	async bindLogin(){
		var _this = this;
		//await this.checkLogin();
		//console.log(_this)
		wx.app.doLogin(function(res,wxUserInfo){
			_this.setData({
				login:true,
				userInfo:res.data,
				wxUserInfo:wxUserInfo
			});
		})
	}
	json2Form(json) { 
	  var str = []; 
	  for(var p in json){ 
	    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p])); 
	  } 
	  return str.join("&"); 
	} 
	makePhoneCall(event){
		wx.app.makePhoneCall(event)
	}
	async initAcount(){
		if(!wx.app.globalData.storage.code){
			this.setData({
				login:false
			})
		}else{
			let myuser = await wx.app.getUser(wx.app.globalData.storage.code);
			if(myuser.data.loginStatus){
	    		this.setData({
					login:true,
					userInfo:myuser.data,
					wxUserInfo:wx.app.globalData.userInfo
				})
	    	}else{
	    		//await wx.clearStorage();
	    		this.setData({
					login:false
				})
	    	}
		}
	}
	async onLoad(){
		//console.log(wx.app.globalData)
		this.initAcount()
	}
	async onPullDownRefresh(){
		
		await this.initAcount()
		wx.stopPullDownRefresh()
	}
}
