import wx from 'labrador';
import { sleep } from './utils/util';
export default class {
  globalData = {
    userInfo: null,
    storage:null
  };
  data = {
    assetsPath:'https://s1.chinamuxie.com/www/assets/xcx',
    //ajaxPath:'https://xcx.chinamuxie.com'//'https://xcx.yiqihuzhu.com/',
    ajaxPath:'https://xcx.yiqihuzhu.com'//'https://xcx.yiqihuzhu.com/',
  };
  async onLaunch() {
    var _this = this;
    this.globalData.userInfo = await wx.getStorage({ key:'userInfo'});
    this.globalData.storage = await this.getStorage();
    // await wx.navigateTo({
    //     url:'/pages/paySuccess/paySuccess'
    // })
    //wx.app.data.ajaxPath
  }
  dateformat(date,fmt1,fmt2) {
    var formatNumber = function(n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    return [year, month, day].map(formatNumber).join(fmt1) + ' ' + [hour, minute, second].map(formatNumber).join(fmt2)       
  }
  setHttpsUrl(url){
    //https://wx.qlogo.cn/mmopen/PiajxSqBRaEJFWwlW2qwhv9WnHmcDoLcI83AWibecAEKAntTbSfmNp0ReEiarvEl5wx7UvWkQdaNMwOhtDxibibuhufkCmAPAy64MWvcaS2PjzIw/0
    if(/wx.qlogo.cn\/mmopen\/.+\/0$/.test(url)){
      url = url.substring(0,url.length-1)+ '132';
    }
    if(!/(http|https)\:/.test(url)){
      return "https:"+url;
    }
    return url;
  }
  makePhoneCall(event){
    wx.showModal({
      title: '拨打电话：'+event.currentTarget.dataset.phoneNumber,
      success: function(res) {
        wx.makePhoneCall({
          phoneNumber: event.currentTarget.dataset.phoneNumber
        }) 
      }
    })
  }
  async getStorage (){
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
  async stopAudio(){
    let sta = await wx.getBackgroundAudioPlayerState();
    if(sta.status==1){
      wx.stopBackgroundAudio()
    }
  }
  async getUserInfo() {
    let res = await wx.getUserInfo();
    this.globalData.userInfo = res.userInfo;
    return res.userInfo;
  }
  async getUser(code){
    let myuser = await this.ajax({
      url:wx.app.data.ajaxPath+'/wxapi/user/account',
      data: {
        code:code
      }
    })
    return myuser;
  }
  async checkLogin(){
    if(this.globalData.storage && this.globalData.storage.code){
      let res = await this.getUser(this.globalData.storage.code);
      if(res){
        return res.data.loginStatus;
      }
      return false
    }else{
      return false
    }
  }
  async login(callback,d){
    let loginStatus = false; 
    if(d){
      let res = await this.getUser(this.globalData.storage.code);
      loginStatus = res.data.loginStatus
    }
    if(loginStatus){
      callback && callback(res);
    }else{
      this.doLogin(callback)
    }
  }
  async doLogin(callback){
    wx.showToast({
      title: '登录中',
      icon: 'loading',
      duration: 10000
    })
    let loginInfo = await wx.login();
    let rdRes = await wx.request({
      url: wx.app.data.ajaxPath+"/wxapi/user/oauth/wxLogin",
      method:"post",
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        code:loginInfo.code
      }
    })
    
    if(rdRes.data.status == 7){
      wx.hideToast()
      await wx.showModal({
          title: '提示',
          content: res.data.msg
      })
      return
    }
    await wx.setStorage({ key: 'code', data: loginInfo.code });
    await wx.setStorage({ key: 'sessionKey', data: rdRes.data.data});
    this.globalData.storage =  {
      code:loginInfo.code,
      sessionKey:rdRes.data.data
    };
    //console.log(this.globalData.storage)
    let userInfo = await wx.getUserInfo();
    this.globalData.userInfo = userInfo.userInfo
    //await wx.setStorage({ key: 'userInfo', data: this.globalData.userInfo});
    let userInfoPost = await wx.request({
      url: wx.app.data.ajaxPath+"/wxapi/user/oauth/doOauth",
      method:"post",
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        rawData:userInfo.rawData,
        signature:userInfo.signature,
        encryptedData:userInfo.encryptedData,
        iv:userInfo.iv,
        sessionKey: rdRes.data.data,
        code:loginInfo.code
      }
    })
    wx.hideToast()
    if(userInfoPost.data.data == "logged"){
      let _user = await this.getUser(loginInfo.code);
      //return _user
      this.setUser(_user)
      callback && callback(_user,userInfo);
      return true;
    }
    if(userInfoPost.data.data == "notLogged"){
        await wx.navigateTo({
            url:'/pages/bindphone/bindphone'
        })
    }
    return false;
  }
  async setUser(myuser){
    if(!myuser || !myuser.data) return;
    if(myuser.data.nickName){
          this.globalData.userInfo.nickName = myuser.data.nickName
        }
        if(myuser.data.headImgUrl){
          myuser.data.headImgUrl = this.setHttpsUrl(myuser.data.headImgUrl);
            this.globalData.userInfo.avatarUrl = myuser.data.headImgUrl
        }
    await wx.setStorage({ key: 'userInfo', data: this.globalData.userInfo});
  }
  async ajax(options){
    let setting = {
        url: options.url,
        method:options.type ||"get",
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }
    if(options.data){
      setting.data = options.data
    }
    let res = await wx.request(setting);
    if(res.statusCode == 200){
      return res.data;
    }else{
      if(res.data.status == 1){
        let mMode = wx.showModal({
          title: '提示',
          content: "请先登录"
        })
        if(mMode.confirm){
          wx.redirectTo({
            url: '/pages/account'
          })
        }
        return;
      }else{
        wx.showModal({
          title: '提示',
          content: res.msg
        })
      }
    }
  }
}
