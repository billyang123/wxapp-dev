import wx from 'labrador';
import Navbar from '../../components/navbar/navbar';
export default class Account extends wx.Component {
	data = {
		login:false,
		userInfo:{},
		assetsPath:wx.app.data.assetsPath
	};
	children = {
	    navbar: new Navbar({cur:1})
	};
	async linkTo(event) {
		if(this.isLink) return;
      	this.isLink = true;
    	await wx.app.bindLogin(event.currentTarget.dataset.link,this.data.login);
    	this.isLink = false;
	    /*wx.navigateTo({
	      url:event.currentTarget.dataset.link
	    })*/
	}
	async bindLogin(){
		await this.checkLogin();
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
	async doLogin() {
		if(this.data.login){
			return;
		}
		if(this.status){
			return;
		}
		this.status = true;
		wx.showToast({
		  title: '登录中',
		  icon: 'loading',
		  duration: 30000
		});
    	let postdata = {
    		code:wx.app.globalData.storage.code,
    		sessionKey:wx.app.globalData.storage.sessionKey
    	};
        if(!postdata.sessionKey){
        	//await wx.setStorage({ key: 'sessionKey', data: "111"});
        	let rdRes = await wx.request({
	            url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/wxLogin',
	            method:"POST",
	            header: {
				    'content-type': 'application/x-www-form-urlencoded'
				},
	            data: postdata
	        })
	        await wx.setStorage({ key: 'sessionKey', data: rdRes.data.data});
	        wx.app.globalData.storage =  await  wx.app.getStorage();
        }
        let userInfo = await wx.getUserInfo();
        let userInfoPost = await wx.request({
            url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/doOauth',
            method:"POST",
            header: {
			    'content-type': 'application/x-www-form-urlencoded'
			},
            data: {
            	code:wx.app.globalData.storage.code,
            	rawData:userInfo.rawData,
            	signature:userInfo.signature,
            	encryptedData:encodeURIComponent(userInfo.encryptedData),
            	iv:encodeURIComponent(userInfo.iv),
            	code:postdata.code,
            	sessionKey:wx.app.globalData.storage.sessionKey
            }
        });
        if(userInfoPost.data.data == "logged"){
        	let myuser = await this.getUser(postdata.code);
        	if(myuser.data.data.loginStatus){
        		this.setData({
					login:true,
					userInfo:myuser.data.data
				    });
        	}
        }
        if(userInfoPost.data.data == "notLogged"){
        	await wx.navigateTo({
		      url:'/pages/bindphone/bindphone'
		    })
        }
		wx.hideToast();
		this.status = false;
	}
	async getUser(code){
		let myuser = await wx.request({
            url: 'https://xcx.chinamuxie.com/wxapi/user/account',
            method:"get",
            header: {
			    'content-type': 'application/x-www-form-urlencoded'
			},
            data: {
            	code:code
            }
        })
        return myuser;
	}
	async checkLogin(){
		//wx.clearStorage();
		await this.doLogin();
	}
	async onShow(){
		let myuser = await this.getUser(wx.app.globalData.storage.code);
		//console.log(myuser)
		if(myuser.data.data.loginStatus){
    		this.setData({
				login:true,
				userInfo:myuser.data.data
			})
    	}else{
    		await wx.clearStorage();
    		await wx.app.__init();
    		this.setData({
				login:false
			})

    	}
	}
}
