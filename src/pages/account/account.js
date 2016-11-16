import wx from 'labrador';

export default class Account extends wx.Component {
	data = {
		login:false,
		userInfo:{}
	};
	isLogin(){
		this.checkLogin();
	}
	async checkLogin(){
		//调用应用实例的方法获取全局数据 	
	    var check = await wx.checkSession();
	   	wx.clearStorage()
	    if(check.errMsg == "checkSession:ok") {
	    
	    	let storageInfo = await wx.getStorageInfo();
	    	if(storageInfo.keys.indexOf('Loginsessionkey')<0){
	    		await wx.setStorage({ key: 'Loginsessionkey', data: '' });
	    	}

	    	let rdsData = await wx.getStorage({ key: 'Loginsessionkey' });
	    	let rds = rdsData.data;
	    	let postdata = {};
	    	
	    	if(rds==''){
		      	let loginData = await wx.login();
		      	postdata.code = loginData.code;
		      	await wx.setStorage({ key: 'Loginsessionkey', data: loginData.code });
		    }else{
		    	postdata.sessionKey = rds;
		    }
		    let rdRes = await wx.request({
	            url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/wxLogin',
	            //method:"POST",
	            header: {
				    'Content-Type': 'application/x-www-form-urlencoded'
				},
	            data: postdata
	        })
			let userInfo = await wx.getUserInfo();
			console.log(userInfo)
			if(postdata.code){
				let userInfoPost = await wx.request({
		            url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/doOauth',
		            //method:"POST",
		            header: {
					    'Content-Type': 'application/x-www-form-urlencoded'
					},
		            data: {
		            	rawData:userInfo.rawData,
		            	signature:userInfo.signature,
		            	encryptedData:userInfo.encryptedData,
		            	iv:userInfo.iv,
		            	sessionKey:userInfo.sessionKey
		            }
		        })
			}
			this.setData({
				login:true,
				userInfo:userInfo.userInfo
			})
		}
	}
	async onLoad(){
		 //调用API从本地缓存中获取数据
	}
}