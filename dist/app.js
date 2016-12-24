"use strict";!function(e,t){function a(e){return e&&e.__esModule?e:{default:e}}var r=e.exports={};window=t("./npm/labrador/global.js");Object.defineProperty(r,"__esModule",{value:!0});var n=t("./npm/babel-runtime/regenerator/index.js"),u=a(n),s=t("./npm/babel-runtime/helpers/asyncToGenerator.js"),o=a(s),c=t("./npm/babel-runtime/helpers/classCallCheck.js"),l=a(c),i=t("./npm/babel-runtime/helpers/createClass.js"),d=a(i),f=t("./npm/labrador/index.js"),p=a(f);t("./utils/util.js");Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%12==0?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()},a={0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"/u661f/u671f":"/u5468":"")+a[this.getDay()+""]));for(var r in t)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[r]:("00"+t[r]).substr((""+t[r]).length)));return e};var h=function(){function e(){(0,l.default)(this,e),this.globalData={userInfo:null,storage:null},this.data={assetsPath:"https://s1.chinamuxie.com/www/assets/xcx",ajaxPath:"https://xcx.yiqihuzhu.com"}}return(0,d.default)(e,[{key:"onLaunch",value:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,p.default.getStorage({key:"userInfo"});case 3:return this.globalData.userInfo=e.sent,e.next=6,this.getStorage();case 6:this.globalData.storage=e.sent,p.default.app.data.ajaxPath;case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"makePhoneCall",value:function(e){p.default.showModal({title:"拨打电话："+e.currentTarget.dataset.phoneNumber,success:function(t){p.default.makePhoneCall({phoneNumber:e.currentTarget.dataset.phoneNumber})}})}},{key:"getStorage",value:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(){var t,a,r,n,s;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,p.default.getStorageInfo();case 3:a=e.sent,r=a.keys,n=0;case 6:if(!(n<r.length)){e.next=14;break}return e.next=9,p.default.getStorage({key:r[n]});case 9:s=e.sent,t[r[n]]=s.data||"";case 11:n++,e.next=6;break;case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}},e,this)}));return e}()},{key:"stopAudio",value:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.default.getBackgroundAudioPlayerState();case 2:t=e.sent,1==t.status&&p.default.stopBackgroundAudio();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"getUserInfo",value:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.default.getUserInfo();case 2:return t=e.sent,this.globalData.userInfo=t.userInfo,e.abrupt("return",t.userInfo);case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"getUser",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(t){var a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ajax({url:p.default.app.data.ajaxPath+"/wxapi/user/account",data:{code:t}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"checkLogin",value:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.globalData.storage||!this.globalData.storage.code){e.next=7;break}return e.next=3,this.getUser(this.globalData.storage.code);case 3:return t=e.sent,e.abrupt("return",t.data.loginStatus);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"login",value:function(){function e(e,a){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(t,a){var r,n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!1,!a){e.next=6;break}return e.next=4,this.getUser(this.globalData.storage.code);case 4:n=e.sent,r=n.data.loginStatus;case 6:r?t&&t(res):this.doLogin(t);case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"doLogin",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(t){var a,r,n,s,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.default.showToast({title:"登录中",icon:"loading",duration:1e4}),e.next=3,p.default.login();case 3:return a=e.sent,e.next=6,p.default.request({url:p.default.app.data.ajaxPath+"/wxapi/user/oauth/wxLogin",method:"post",header:{"content-type":"application/x-www-form-urlencoded"},data:{code:a.code}});case 6:if(r=e.sent,7!=r.data.status){e.next=12;break}return p.default.hideToast(),e.next=11,p.default.showModal({title:"提示",content:res.data.msg});case 11:return e.abrupt("return");case 12:return e.next=14,p.default.setStorage({key:"code",data:a.code});case 14:return e.next=16,p.default.setStorage({key:"sessionKey",data:r.data.data});case 16:return this.globalData.storage={code:a.code,sessionKey:r.data.data},e.next=19,p.default.getUserInfo();case 19:return n=e.sent,this.globalData.userInfo=n.userInfo,e.next=23,p.default.setStorage({key:"userInfo",data:this.globalData.userInfo});case 23:return e.next=25,p.default.request({url:p.default.app.data.ajaxPath+"/wxapi/user/oauth/doOauth",method:"post",header:{"content-type":"application/x-www-form-urlencoded"},data:{rawData:n.rawData,signature:n.signature,encryptedData:n.encryptedData,iv:n.iv,sessionKey:r.data.data,code:a.code}});case 25:if(s=e.sent,p.default.hideToast(),"logged"!=s.data.data){e.next=33;break}return e.next=30,this.getUser(a.code);case 30:return o=e.sent,t&&t(o,n),e.abrupt("return",!0);case 33:if("notLogged"!=s.data.data){e.next=36;break}return e.next=36,p.default.navigateTo({url:"/pages/bindphone/bindphone"});case 36:return e.abrupt("return",!1);case 37:case"end":return e.stop()}},e,this)}));return e}()},{key:"ajax",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(t){var a,r,n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={url:t.url,method:t.type||"get",header:{"content-type":"application/x-www-form-urlencoded"}},t.data&&(a.data=t.data),e.next=4,p.default.request(a);case 4:if(r=e.sent,200!=r.statusCode){e.next=9;break}return e.abrupt("return",r.data);case 9:if(1!=r.data.status){e.next=15;break}return n=p.default.showModal({title:"提示",content:"请先登录"}),n.confirm&&p.default.redirectTo({url:"/pages/account"}),e.abrupt("return");case 15:p.default.showModal({title:"提示",content:r.msg});case 16:case"end":return e.stop()}},e,this)}));return e}()}]),e}();r.default=h;var g=new r.default;Object.getOwnPropertyNames(g.constructor.prototype).forEach(function(e){"constructor"!==e&&(g[e]=g.constructor.prototype[e])}),App(g)}(module,require);