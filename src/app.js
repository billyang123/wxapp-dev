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
    let ckSess = await wx.checkSession();
    console.log(ckSess.errMsg != "checkSession:ok" || !this.globalData.storage || (this.globalData.storage && !this.globalData.storage.code))
    if(ckSess.errMsg != "checkSession:ok" || !this.globalData.storage || (this.globalData.storage && !this.globalData.storage.code)){
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
    console.log(keys)
    for (let i = 0; i < keys.length; i++) {
      let res = await wx.getStorage({ key: keys[i] });
      localSession[keys[i]] = res.data || '';
    }
    //this.globalData.storage = localSession;
    return localSession;
  }
  async getUserInfo() {
    let res = await wx.getUserInfo();
    this.globalData.userInfo = res.userInfo;
    return res.userInfo;
  }
}
