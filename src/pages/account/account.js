import wx from 'labrador';

export default class Account extends wx.Component {
	data = {
		login:false,
		userInfo:{}
	};
	linkTo(event) {
    wx.app.bindLogin(event.currentTarget.dataset.link,this.data.login);
		/*wx.navigateTo({
			url:event.currentTarget.dataset.link
		})*/
	}
	 bindLogin(){
		this.checkLogin();
	}
	json2Form(json) { 
	  var str = []; 
	  for(var p in json){ 
	    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p])); 
	  } 
	  return str.join("&"); 
	} 
	async doLogin() {
		if(this.data.login){
			return;
		}
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
            	rawData:userInfo.rawData,
            	signature:userInfo.signature,
            	encryptedData:encodeURIComponent(userInfo.encryptedData),
            	iv:encodeURIComponent(userInfo.iv),
            	sessionKey: wx.app.globalData.storage.sessionKey,
            	code:postdata.code
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
		this.doLogin();
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
    		await app.wx.__init();
    		this.setData({
				login:false
			})

    	}
	}
}
