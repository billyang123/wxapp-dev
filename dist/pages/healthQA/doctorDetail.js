"use strict";!function(t,a){function e(t){return t&&t.__esModule?t:{default:t}}var r=t.exports={};window=a("../../npm/labrador/global.js");Object.defineProperty(r,"__esModule",{value:!0});var s=a("../../npm/babel-runtime/regenerator/index.js"),n=e(s),i=a("../../npm/babel-runtime/helpers/asyncToGenerator.js"),u=e(i),d=a("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),o=e(d),l=a("../../npm/babel-runtime/helpers/classCallCheck.js"),c=e(l),h=a("../../npm/babel-runtime/helpers/createClass.js"),p=e(h),f=a("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),m=e(f),x=a("../../npm/babel-runtime/helpers/inherits.js"),g=e(x),v=a("../../npm/labrador/index.js"),b=e(v),k=function(t){function a(){var t,e,r,s;(0,c.default)(this,a);for(var n=arguments.length,i=Array(n),u=0;u<n;u++)i[u]=arguments[u];return e=r=(0,m.default)(this,(t=a.__proto__||(0,o.default)(a)).call.apply(t,[this].concat(i))),r.data={id:1,list:[],windowHieght:"625",hidden:!1,hasMore:!0,hasRefesh:!1,size:5,page:0,detail:{},loading:!1,playAudio:{id:null,src:null},audio:{},praiseNum:{}},s=e,(0,m.default)(r,s)}return(0,g.default)(a,t),(0,p.default)(a,[{key:"audioPlayEnd",value:function(t){var a=t.currentTarget.dataset.id;this.data.audio[a].status=!1,this.setData({audio:this.data.audio})}},{key:"checkLink",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e,r,s;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,!this.isloading){t.next=3;break}return t.abrupt("return");case 3:return this.isloading=!0,r=a.currentTarget.dataset.index,"number"==typeof r&&(this.commitIndex=r),t.next=8,b.default.app.checkLogin();case 8:if(s=t.sent){t.next=13;break}return t.next=12,b.default.app.doLogin();case 12:s=t.sent;case 13:if(!s){t.next=16;break}return t.next=16,b.default.navigateTo({url:a.currentTarget.dataset.link});case 16:this.isloading=!1;case 17:case"end":return t.stop()}},t,this)}));return t}()},{key:"setNumTune",value:function(t,a){var e=a+"_tune_"+t;if(this.tuneNum||(this.tuneNum=[]),this.tuneNum.indexOf(e)<0){b.default.app.ajax({url:b.default.app.data.ajaxPath+"/wxapi/healthserv/qa/tune",type:"post",data:{qaId:a}});var r=this.data.list;r[t].tuneNumber+=1,this.setData({list:r}),this.tuneNum.push(e)}}},{key:"bindAudio",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e,r,s;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.currentTarget.dataset.url,r=a.currentTarget.dataset.id,s=a.currentTarget.dataset.index,this.data.audio[r]||(this.data.audio[r]={id:r,src:e,status:!1}),this.data.playAudio.src==e){t.next=12;break}return this.data.playAudio.id&&(this.data.audio[this.data.playAudio.id].status=!1,this.setData({audio:this.data.audio})),this.data.audio[r].status=!0,t.next=9,b.default.playBackgroundAudio({dataUrl:e});case 9:this.setData({audio:this.data.audio,playAudio:{id:r,src:e}}),t.next=22;break;case 12:if(!this.data.audio[r].status){t.next=18;break}return t.next=15,b.default.pauseBackgroundAudio();case 15:this.data.audio[r].status=!1,t.next=21;break;case 18:return t.next=20,b.default.playBackgroundAudio({dataUrl:e});case 20:this.data.audio[r].status=!0;case 21:this.setData({audio:this.data.audio});case 22:this.setNumTune(s,r);case 23:case"end":return t.stop()}},t,this)}));return t}()},{key:"getQAList",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){var a,e,r,s;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.data.loading){t.next=2;break}return t.abrupt("return");case 2:return this.data.loading=!0,t.next=5,b.default.app.ajax({url:b.default.app.data.ajaxPath+"/wxapi/healthserv/qa/list",data:{page:this.data.page,size:this.data.size,doctorId:this.data.id}});case 5:if(a=t.sent,a.data){t.next=10;break}return this.setData({hasMore:!1,list:[],hidden:!0,hasRefesh:!1,loading:!1}),this.data.loading=!1,t.abrupt("return");case 10:for(e=!0,r=a.data.content,(a.data.totalPages<=1||a.data.totalPages==this.data.page+1)&&(e=!1),s=0;s<r.length;s++)this.praiseTmp.indexOf(r[s].id+"")>=0?r[s].praiseed=!0:r[s].praiseed=!1;console.log(r),this.setData({hasMore:e,list:this.data.list.concat(r),hidden:!0,hasRefesh:!1}),this.data.loading=!1;case 17:case"end":return t.stop()}},t,this)}));return t}()},{key:"loadMore",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.data.hasMore){t.next=2;break}return t.abrupt("return");case 2:return this.data.page++,t.next=5,this.getQAList();case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"praise",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e,r,s,i,u;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.praiseLoad){t.next=2;break}return t.abrupt("return");case 2:if(this.praiseLoad=!0,e=a.currentTarget.dataset.index,r=a.currentTarget.dataset.id,s=r,!(this.praiseTmp.indexOf(s)>=0)){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,b.default.app.ajax({url:b.default.app.data.ajaxPath+"/wxapi/healthserv/qa/praise",type:"post",data:{qaId:r,code:b.default.app.globalData.storage.code}});case 10:i=t.sent,0==i.status&&(u=this.data.list,u[parseInt(e)].praiseNumber+=1,u[parseInt(e)].praiseed=!0,this.setData({list:u}),this.praiseTmp.push(s)),this.praiseLoad=!1;case 13:case"end":return t.stop()}},t,this)}));return t}()},{key:"setNumValue",value:function(t){var a=t.detail.value;a=a.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,""),this.setData({curLength:a.length,textareaValue:a})}},{key:"getDetail",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.app.ajax({url:b.default.app.data.ajaxPath+"/wxapi/healthserv/doctor/detail",data:{doctorId:this.data.id}});case 2:a=t.sent,this.setData({detail:a.data});case 4:case"end":return t.stop()}},t,this)}));return t}()},{key:"onLoad",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.praiseTmp=[],this.data.id=parseInt(a.id),t.next=4,b.default.getSystemInfo();case 4:e=t.sent,this.setData({windowHieght:e.windowHeight,id:this.data.id}),this.getQAList(),this.getDetail();case 8:case"end":return t.stop()}},t,this)}));return t}()},{key:"setCommit",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){var a,e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.getStorage({key:"commit"});case 2:if(a=t.sent,a.data.time){t.next=5;break}return t.abrupt("return");case 5:if(e=this.data.list,!e[this.commitIndex].commentNumber){t.next=12;break}return e[this.commitIndex].commentNumber+=1,this.setData({list:e}),t.next=11,b.default.setStorage({key:"commit",data:{}});case 11:this.commitIndex=null;case 12:case"end":return t.stop()}},t,this)}));return t}()},{key:"onShow",value:function(){b.default.app.stopAudio(),this.data.id&&"number"==typeof this.commitIndex&&this.setCommit()}},{key:"onPullDownRefresh",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setData({hasMore:!0,page:0,list:[]}),t.next=3,this.getQAList();case 3:return t.next=5,this.getDetail();case 5:b.default.stopPullDownRefresh();case 6:case"end":return t.stop()}},t,this)}));return t}()}]),a}(b.default.Component);Page(v._createPage(k))}(module,require);