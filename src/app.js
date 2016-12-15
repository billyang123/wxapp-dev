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
    assetsPath:'https://s1.chinamuxie.com/www/assets/xcx'
  };
  async onLaunch() {
    var _this = this;
    //await wx.clearStorage();
    await this.__init();
    // wx.navigateTo({
    //   url:"/pages/recharge/recharge"
    // })
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
  async __init(){
    this.globalData.storage =  await this.getStorage();
    if(!this.globalData.storage || (this.globalData.storage && !this.globalData.storage.code)){
      let loginInfo = await wx.login();
      await wx.setStorage({ key: 'code', data: loginInfo.code });
    }
    await this.getUserInfo();
    this.globalData.storage = await this.getStorage();
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
  async getUserInfo() {
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
      wx.showModal({
        title: '提示',
        content: res.errMsg,
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  }
}
