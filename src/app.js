import wx from 'labrador';
import { sleep } from './utils/util';

export default class {
  globalData = {
    userInfo: null,
    storage:null
  };
  async onLaunch() {
    //调用API从本地缓存中获取数据
    this.globalData.userInfo = await this.getUserInfo();
    this.globalData.storage =  await this.getStorage();
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
    let ckSess = await wx.checkSession();
    if(ckSess.errMsg != "checkSession:ok"){
      let loginInfo = await wx.login();
      await wx.setStorage({ key: 'code', data: loginInfo.code });
    }
    let res = await wx.getUserInfo();
    //this.globalData.userInfo = res.userInfo;
    return res.userInfo;
  }
}
