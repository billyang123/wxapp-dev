import wx from 'labrador';
import { sleep } from './utils/util';

export default class {
  globalData = {
    userInfo: null,
    storage:null
  };
  async onLaunch() {
    var _this = this;
    //await wx.clearStorage();
    await this.__init();
  }
  async __init(){
    this.globalData.storage =  await this.getStorage();
    //let ckSess = await wx.checkSession();
    //ckSess.errMsg != "checkSession:ok"
    //console.log(ckSess.errMsg != "checkSession:ok" || !this.globalData.storage || (this.globalData.storage && !this.globalData.storage.code))
    if(!this.globalData.storage || (this.globalData.storage && !this.globalData.storage.code)){
      let loginInfo = await wx.login();
      await wx.setStorage({ key: 'code', data: loginInfo.code });
    }
    
    await this.getUserInfo();
    this.globalData.storage = await this.getStorage();
  }
  async getStorage (){
    // if (this.globalData.storage) {
    //   return this.globalData.storage;
    // }
    let localSession = {};
    let storageInfo = await wx.getStorageInfo();
    let keys = storageInfo.keys;
    for (let i = 0; i < keys.length; i++) {
      let res = await wx.getStorage({ key: keys[i] });
      localSession[keys[i]] = res.data || '';
    }
    //this.globalData.storage = localSession;
    return localSession;
  }
  async getUserInfo() {
    // if(this.globalData.userInfo){
    //   return this.globalData.userInfo;
    // }
    let res = await wx.getUserInfo();
    this.globalData.userInfo = res.userInfo;
    return res.userInfo;
  }

  
  async bindLogin(url,bl){
    await this.checkLogin(url,bl);
  }
  async checkLogin(url,bl){
    //wx.clearStorage();
    await this.doLogin(url,bl);
  }
  async doLogin(url,bl) {
    if(bl){
      wx.navigateTo({
        url:url
      });
      return;
    }
    let postdata = {
      code:wx.app.globalData.storage.code,
      sessionKey:wx.app.globalData.storage.sessionKey
    };
    //console.log(wx.app.globalData)
    if(!postdata.sessionKey){
      //await wx.setStorage({ key: 'sessionKey', data: "111"});
      let rdRes = await wx.request({
        url: 'https://xcx.chinamuxie.com/wxapi/user/oauth/wxLogin',
        method:"POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: postdata
      });
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
      wx.navigateTo({
       url:url
       });
    }
    if(userInfoPost.data.data == "notLogged"){
      await wx.navigateTo({
        url:'/pages/bindphone/bindphone'
      })
    }
  }
}
