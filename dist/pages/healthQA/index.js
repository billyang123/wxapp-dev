"use strict";!function(t,a){function e(t){return t&&t.__esModule?t:{default:t}}var r=t.exports={};window=a("../../npm/labrador/global.js");Object.defineProperty(r,"__esModule",{value:!0});var n=a("../../npm/babel-runtime/regenerator/index.js"),s=e(n),i=a("../../npm/babel-runtime/helpers/asyncToGenerator.js"),u=e(i),d=a("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),o=e(d),l=a("../../npm/babel-runtime/helpers/classCallCheck.js"),p=e(l),c=a("../../npm/babel-runtime/helpers/createClass.js"),h=e(c),f=a("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),m=e(f),g=a("../../npm/babel-runtime/helpers/inherits.js"),x=e(g),v=a("../../npm/labrador/index.js"),b=e(v),y=a("../../components/navbar/navbar.js"),k=e(y),w=function(t){function a(){var t,e,r,n;(0,p.default)(this,a);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return e=r=(0,m.default)(this,(t=a.__proto__||(0,o.default)(a)).call.apply(t,[this].concat(i))),r.data={tabIndex:0,tabData:[{title:"全部",api:"#"},{title:"肿瘤内科",api:"#"},{title:"妇产科",api:"#"},{title:"心理咨询",apai:"#"}],playAudio:{id:null,src:null},audio:{},praiseNum:{},list:[],windowHieght:"625",hidden:!1,hasMore:!0,hasRefesh:!1,size:20,page:0,doclist:[],loading:!1},r.children={navbar:new k.default({cur:1})},n=e,(0,m.default)(r,n)}return(0,x.default)(a,t),(0,h.default)(a,[{key:"audioPlay",value:function(t){}},{key:"audioPlayEnd",value:function(){var t=this;b.default.onBackgroundAudioStop(function(a){var e=t.data.playAudio.id,r=t.data.audio;r[e].status=!1,t.setData({audio:r})})}},{key:"checkLink",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(a){var e,r,n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,!this.isloading){t.next=3;break}return t.abrupt("return");case 3:return this.isloading=!0,r=a.currentTarget.dataset.index,"number"==typeof r&&(this.commitIndex=r),t.next=8,b.default.app.checkLogin();case 8:if(n=t.sent){t.next=13;break}return t.next=12,b.default.app.doLogin();case 12:n=t.sent;case 13:if(!n){t.next=16;break}return t.next=16,b.default.navigateTo({url:a.currentTarget.dataset.link});case 16:this.isloading=!1;case 17:case"end":return t.stop()}},t,this)}));return t}()},{key:"setNumTune",value:function(t,a){var e=a+"_tune_"+t;if(this.tuneNum||(this.tuneNum=[]),this.tuneNum.indexOf(e)<0){b.default.app.ajax({url:b.default.app.data.ajaxPath+"/wxapi/healthserv/qa/tune",type:"post",data:{qaId:a}});var r=this.data.list;r[t].tuneNumber+=1,this.setData({list:r}),this.tuneNum.push(e)}}},{key:"bindAudio",value:function(t){var a=t.currentTarget.dataset.url,e=t.currentTarget.dataset.id,r=t.currentTarget.dataset.index,n=this.data.audio,s=this.data.playAudio;n[e]||(n[e]={id:e,src:a,status:!1}),s.id!=e?(s.id&&n[s.id].status&&(n[s.id].status=!1,b.default.stopBackgroundAudio()),n[e].status=!0,b.default.playBackgroundAudio({dataUrl:a})):n[e].status?(b.default.stopBackgroundAudio(),n[e].status=!1):(b.default.playBackgroundAudio({dataUrl:a}),n[e].status=!0),this.setData({audio:n,playAudio:{id:e,src:a}}),this.setNumTune(r,e)}},{key:"tabs",value:function(t){b.default.app.stopAudio(),this.setData({tabIndex:t.currentTarget.dataset.id}),this.setData({hasMore:!0,page:0,list:[]}),this.getQAList()}},{key:"getDoctors",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.app.ajax({url:b.default.app.data.ajaxPath+"/wxapi/healthserv/doctor/guestList"});case 2:a=t.sent,a.data||this.setData({doclist:[]}),this.setData({doclist:a.data.content.splice(0,2)});case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"getQAList",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(){var a,e,r,n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.data.loading){t.next=2;break}return t.abrupt("return");case 2:return this.data.loading=!0,t.next=5,b.default.app.ajax({url:b.default.app.data.ajaxPath+"/wxapi/healthserv/qa/list",data:{page:this.data.page,size:this.data.size,label:this.data.tabIndex}});case 5:if(a=t.sent,a.data){t.next=10;break}return this.setData({hasMore:!1,list:[],hidden:!0,hasRefesh:!1,loading:!1}),this.data.loading=!1,t.abrupt("return");case 10:for(e=!0,r=a.data.content,(a.data.totalPages<=1||a.data.totalPages==this.data.page+1)&&(e=!1),n=0;n<r.length;n++)this.praiseTmp.indexOf(r[n].id)>=0?r[n].praiseed=!0:r[n].praiseed=!1;this.setData({hasMore:e,list:this.data.list.concat(a.data.content),hidden:!0,hasRefesh:!1}),this.data.loading=!1;case 16:case"end":return t.stop()}},t,this)}));return t}()},{key:"loadMore",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(a){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.data.hasMore){t.next=2;break}return t.abrupt("return");case 2:return this.data.page++,t.next=5,this.getQAList();case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"praise",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(a){var e,r,n,i,u;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.praiseLoad){t.next=2;break}return t.abrupt("return");case 2:if(this.praiseLoad=!0,e=a.currentTarget.dataset.index,r=a.currentTarget.dataset.id,n=r,!(this.praiseTmp.indexOf(n)>=0)){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,b.default.app.ajax({url:b.default.app.data.ajaxPath+"/wxapi/healthserv/qa/praise",type:"post",data:{qaId:r}});case 10:i=t.sent,0==i.status&&(u=this.data.list,u[parseInt(e)].praiseNumber+=1,u[parseInt(e)].praiseed=!0,this.setData({list:u}),this.praiseTmp.push(n)),this.praiseLoad=!1;case 13:case"end":return t.stop()}},t,this)}));return t}()},{key:"getLabel",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.app.ajax({url:b.default.app.data.ajaxPath+"/wxapi/healthserv/qa/labellist",type:"get"});case 2:a=t.sent,this.setData({tabData:a.data});case 4:case"end":return t.stop()}},t,this)}));return t}()},{key:"onLoad",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.playingAudio={},this.praiseLoad=!1,t.next=4,b.default.getSystemInfo();case 4:a=t.sent,this.praiseLoad=!1,this.setData({windowHieght:a.windowHeight}),this.praiseTmp=[],this.getDoctors(),this.getLabel(),this.getQAList(),this.audioPlayEnd();case 12:case"end":return t.stop()}},t,this)}));return t}()},{key:"setCommit",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(){var a,e;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.getStorage({key:"commit"});case 2:if(a=t.sent,e=this.data.list,a.data.time){t.next=6;break}return t.abrupt("return");case 6:if(!e[this.commitIndex].commentNumber){t.next=12;break}return e[this.commitIndex].commentNumber+=1,this.setData({list:e}),t.next=11,b.default.setStorage({key:"commit",data:{}});case 11:this.commitIndex=null;case 12:case"end":return t.stop()}},t,this)}));return t}()},{key:"onShow",value:function(){b.default.app.stopAudio(),"number"==typeof this.commitIndex&&this.setCommit()}},{key:"onPullDownRefresh",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.praiseLoad=!1,this.setData({hasMore:!0,page:0,list:[]}),this.getDoctors(),this.getLabel(),this.getQAList(),b.default.stopPullDownRefresh();case 6:case"end":return t.stop()}},t,this)}));return t}()}]),a}(b.default.Component);Page(v._createPage(w))}(module,require);