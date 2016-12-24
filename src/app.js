import wx from 'labrador';
import { sleep } from './utils/util';
Date.prototype.format=function(fmt) {         
    var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
    "H+" : this.getHours(), //小时         
    "m+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "/u65e5",         
    "1" : "/u4e00",         
    "2" : "/u4e8c",         
    "3" : "/u4e09",         
    "4" : "/u56db",         
    "5" : "/u4e94",         
    "6" : "/u516d"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;         
}
export default class {
  globalData = {
    userInfo: null,
    storage:null
  };
  data = {
    assetsPath:'https://s1.chinamuxie.com/www/assets/xcx',
    //ajaxPath:'https://xcx.chinamuxie.com',//'https://xcx.yiqihuzhu.com/',
    ajaxPath:'https://xcx.yiqihuzhu.com'//'https://xcx.yiqihuzhu.com/',
  };
  async onLaunch() {
    var _this = this;
    this.globalData.userInfo = await wx.getStorage({ key:'userInfo'});
    this.globalData.storage = await this.getStorage();
    // await wx.navigateTo({
    //     url:'/pages/paySuccess/paySuccess'
    // })
    wx.app.data.ajaxPath
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
      return res.data.loginStatus;
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
    await wx.setStorage({ key: 'userInfo', data: this.globalData.userInfo});
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
