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
    	let storageInfo = await wx.getStorageInfo();
    	if(storageInfo.keys.indexOf('sessionKey')<0){
    		await wx.setStorage({ key: 'sessionKey', data: '' });
    	}

    	let rdsData = await wx.getStorage({ key: 'sessionKey' });
    	let rds = rdsData.data;
    	let postdata = {};
    	
    	if(rds==''){
	      	let loginData = await wx.login();
	      	postdata.code = loginData.code;
	    }else{
	    	postdata.sessionKey = rds;
	    }
	    let rdRes = await wx.request({
            url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/wxLogin',
            method:"POST",
            header: {
			    'content-type': 'application/x-www-form-urlencoded'
			},
            data: postdata
        })
		let userInfo = await wx.getUserInfo();
		if(postdata.code){
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
	            	sessionKey:rdRes.data.data
	            }
	        })
	        await wx.setStorage({ key: 'sessionKey', data: rdRes.data.data });
		}
		wx.hideToast();
		this.setData({
			login:true,
			userInfo:userInfo.userInfo
		})
	}
	async checkLogin(){
		//调用应用实例的方法获取全局数据 
		wx.clearStorage();
		this.doLogin();
	 //    var check = await wx.checkSession();
	 //    if(check.errMsg == "checkSession:ok") {
	 //    	this.doLogin();
		// }else{
		// 	this.setData({
		// 		login:false,
		// 		userInfo:{}
		// 	})
		// }
	}
	async onLoad(){
		 //调用API从本地缓存中获取数据
	}
}