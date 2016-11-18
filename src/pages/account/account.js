import wx from 'labrador';

export default class Account extends wx.Component {
	data = {
		login:false,
		userInfo:{}
	};
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
		wx.showToast({
		  title: '登录中',
		  icon: 'loading',
		  duration: 30000
		})
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
            	encryptedData:userInfo.encryptedData,
            	iv:userInfo.iv,
            	sessionKey: wx.app.globalData.storage.sessionKey,
            	code:postdata.code
            }
        })
		wx.hideToast();
		wx.navigateTo({
	      url:'/pages/bindphone/bindphone'
	    })
		this.setData({
			login:true,
			userInfo:userInfo.userInfo
		})
	}
	async checkLogin(){
		//wx.clearStorage();
		this.doLogin();
	}
	async onLoad(){
		 //调用API从本地缓存中获取数据
		 console.log(wx.app.globalData)
	}
}