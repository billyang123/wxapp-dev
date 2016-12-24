"use strict";!function(t,e){function a(t){return t&&t.__esModule?t:{default:t}}var r=t.exports={};window=e("../../npm/labrador/global.js");Object.defineProperty(r,"__esModule",{value:!0});var n=e("../../npm/babel-runtime/regenerator/index.js"),s=a(n),i=e("../../npm/babel-runtime/helpers/asyncToGenerator.js"),u=a(i),d=e("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),o=a(d),l=e("../../npm/babel-runtime/helpers/classCallCheck.js"),c=a(l),h=e("../../npm/babel-runtime/helpers/createClass.js"),p=a(h),f=e("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),x=a(f),m=e("../../npm/babel-runtime/helpers/inherits.js"),g=a(m),b=e("../../npm/labrador/index.js"),v=a(b),k=e("../../components/alert/alert.js"),y=a(k),w=function(t){function e(){var t,a,r,n;(0,c.default)(this,e);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return a=r=(0,x.default)(this,(t=e.__proto__||(0,o.default)(e)).call.apply(t,[this].concat(i))),r.data={id:1,curLength:0,maxLength:60,textareaValue:"",list:[],windowHieght:"625",hidden:!1,hasMore:!0,hasRefesh:!1,size:5,page:0,detail:{},loading:!1,playAudio:{id:null,src:null},audio:{},praiseNum:{}},r.children={alert:new y.default({msg:"@msg"})},n=a,(0,x.default)(r,n)}return(0,g.default)(e,t),(0,p.default)(e,[{key:"audioPlayEnd",value:function(t){var e=t.currentTarget.dataset.id;this.data.audio[e].status=!1,this.setData({audio:this.data.audio})}},{key:"checkLink",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(s.default.mark(function t(e){var a,r,n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=this,!this.isloading){t.next=3;break}return t.abrupt("return");case 3:return this.isloading=!0,r=e.currentTarget.dataset.index,"number"==typeof r&&(this.commitIndex=r),t.next=8,v.default.app.checkLogin();case 8:if(n=t.sent){t.next=13;break}return t.next=12,v.default.app.doLogin();case 12:n=t.sent;case 13:if(!n){t.next=16;break}return t.next=16,v.default.navigateTo({url:e.currentTarget.dataset.link});case 16:this.isloading=!1;case 17:case"end":return t.stop()}},t,this)}));return t}()},{key:"setNumTune",value:function(t,e){var a=e+"_tune_"+t;if(this.tuneNum||(this.tuneNum=[]),this.tuneNum.indexOf(a)<0){v.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/tune",type:"post",data:{qaId:e}});var r=this.data.list;r[t].tuneNumber+=1,this.setData({list:r}),this.tuneNum.push(a)}}},{key:"bindAudio",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(s.default.mark(function t(e){var a,r,n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.currentTarget.dataset.url,r=e.currentTarget.dataset.id,n=e.currentTarget.dataset.index,this.data.audio[r]||(this.data.audio[r]={id:r,src:a,status:!1}),this.data.playAudio.src==a){t.next=12;break}return this.data.playAudio.id&&(this.data.audio[this.data.playAudio.id].status=!1,this.setData({audio:this.data.audio})),this.data.audio[r].status=!0,t.next=9,v.default.playBackgroundAudio({dataUrl:a});case 9:this.setData({audio:this.data.audio,playAudio:{id:r,src:a}}),t.next=22;break;case 12:if(!this.data.audio[r].status){t.next=18;break}return t.next=15,v.default.pauseBackgroundAudio();case 15:this.data.audio[r].status=!1,t.next=21;break;case 18:return t.next=20,v.default.playBackgroundAudio({dataUrl:a});case 20:this.data.audio[r].status=!0;case 21:this.setData({audio:this.data.audio});case 22:this.setNumTune(n,r);case 23:case"end":return t.stop()}},t,this)}));return t}()},{key:"getQAList",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(s.default.mark(function t(){var e,a,r,n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.data.loading){t.next=2;break}return t.abrupt("return");case 2:return this.data.loading=!0,t.next=5,v.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/list",data:{page:this.data.page,size:this.data.size,doctorId:this.data.id}});case 5:if(e=t.sent,e.data){t.next=10;break}return this.setData({hasMore:!1,list:[],hidden:!0,hasRefesh:!1,loading:!1}),this.data.loading=!1,t.abrupt("return");case 10:for(a=!0,r=e.data.content,(e.data.totalPages<=1||e.data.totalPages==this.data.page+1)&&(a=!1),n=0;n<r.length;n++)this.praiseTmp.indexOf(r[n].id+"")>=0?r[n].praiseed=!0:r[n].praiseed=!1;console.log(r),this.setData({hasMore:a,list:this.data.list.concat(r),hidden:!0,hasRefesh:!1}),this.data.loading=!1;case 17:case"end":return t.stop()}},t,this)}));return t}()},{key:"loadMore",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(s.default.mark(function t(e){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("loadMore"),this.data.hasMore){t.next=3;break}return t.abrupt("return");case 3:return this.data.page++,t.next=6,this.getQAList();case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"praise",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(s.default.mark(function t(e){var a,r,n,i,u;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.praiseLoad){t.next=2;break}return t.abrupt("return");case 2:if(this.praiseLoad=!0,a=e.currentTarget.dataset.index,r=e.currentTarget.dataset.id,n=r,!(this.praiseTmp.indexOf(n)>=0)){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,v.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise",type:"post",data:{qaId:r,code:v.default.app.globalData.storage.code}});case 10:i=t.sent,console.log(i),0==i.status&&(u=this.data.list,u[parseInt(a)].praiseNumber+=1,u[parseInt(a)].praiseed=!0,this.setData({list:u}),this.praiseTmp.push(n)),this.praiseLoad=!1;case 14:case"end":return t.stop()}},t,this)}));return t}()},{key:"formSubmit",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(s.default.mark(function t(e){var a,r,n,i;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.default.app.checkLogin();case 2:if(a=t.sent){t.next=7;break}return t.next=6,v.default.app.doLogin();case 6:a=t.sent;case 7:if(a){t.next=9;break}return t.abrupt("return");case 9:if(r=e.detail.value.questionContent,r=r.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,""),""!=r){t.next=13;break}return t.abrupt("return",this.children.alert.show("请输入提问内容"));case 13:if(!(r.length>60)){t.next=15;break}return t.abrupt("return",this.children.alert.show("提问内容需少于60个字"));case 15:return t.next=17,v.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/add",type:"post",data:{healthDoctorId:this.data.id,questionContent:r,code:v.default.app.globalData.storage.code}});case 17:if(n=t.sent,0==n.status&&(v.default.showToast({title:"提问成功",icon:"success",duration:2e3}),this.setData({textareaValue:"",curLength:0,disabled:!1})),1!=n.status){t.next=24;break}return t.next=22,v.default.showModal({title:"提示",content:"需要先登录"});case 22:i=t.sent,i.confirm&&v.default.redirectTo({url:"/pages/account/account"});case 24:case"end":return t.stop()}},t,this)}));return t}()},{key:"setNumValue",value:function(t){var e=t.detail.value;e=e.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,""),this.setData({curLength:e.length,textareaValue:e})}},{key:"getDetail",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(s.default.mark(function t(){var e,a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/doctor/detail",data:{doctorId:this.data.id}});case 2:e=t.sent,a=e.data.faNumber>1?900:500,this.setData({detail:e.data,windowHieght:a});case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"onLoad",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(s.default.mark(function t(e){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.praiseTmp=[],this.data.id=parseInt(e.id),t.next=4,v.default.getSystemInfo();case 4:a=t.sent,this.setData({windowHieght:a.windowHeight}),this.getQAList(),this.getDetail();case 8:case"end":return t.stop()}},t,this)}));return t}()},{key:"setCommit",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(s.default.mark(function t(){var e,a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.default.getStorage({key:"commit"});case 2:if(e=t.sent,e.data.time){t.next=5;break}return t.abrupt("return");case 5:if(a=this.data.list,!a[this.commitIndex].commentNumber){t.next=13;break}return console.log(a[this.commitIndex]),a[this.commitIndex].commentNumber+=1,this.setData({list:a}),t.next=12,v.default.setStorage({key:"commit",data:{}});case 12:this.commitIndex=null;case 13:case"end":return t.stop()}},t,this)}));return t}()},{key:"onShow",value:function(){v.default.app.stopAudio(),this.data.id&&"number"==typeof this.commitIndex&&this.setCommit()}},{key:"onPullDownRefresh",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setData({hasMore:!0,page:0,list:[]}),t.next=3,this.getQAList();case 3:return t.next=5,this.getDetail();case 5:v.default.stopPullDownRefresh();case 6:case"end":return t.stop()}},t,this)}));return t}()}]),e}(v.default.Component);Page(b._createPage(w))}(module,require);