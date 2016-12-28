"use strict";!function(t,a){function e(t){return t&&t.__esModule?t:{default:t}}var r=t.exports={};window=a("../../npm/labrador/global.js");Object.defineProperty(r,"__esModule",{value:!0});var n=a("../../npm/babel-runtime/regenerator/index.js"),i=e(n),s=a("../../npm/babel-runtime/helpers/asyncToGenerator.js"),u=e(s),d=a("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),o=e(d),l=a("../../npm/babel-runtime/helpers/classCallCheck.js"),c=e(l),p=a("../../npm/babel-runtime/helpers/createClass.js"),h=e(p),f=a("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),m=e(f),x=a("../../npm/babel-runtime/helpers/inherits.js"),v=e(x),g=a("../../npm/labrador/index.js"),y=e(g),k=function(t){function a(){var t,e,r,n;(0,c.default)(this,a);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return e=r=(0,m.default)(this,(t=a.__proto__||(0,o.default)(a)).call.apply(t,[this].concat(s))),r.data={id:"",detail:{},list:[],windowHieght:"625",hidden:!1,hasMore:!0,hasRefesh:!1,size:20,page:0,praiseNum:{},playAudio:{id:null,src:null},audio:{},totalComNum:0,commitfocus:!1,commitValue:"",loading:!1,commitlist:[]},n=e,(0,m.default)(r,n)}return(0,v.default)(a,t),(0,h.default)(a,[{key:"audioPlay",value:function(t){}},{key:"audioPlayEnd",value:function(){var t=this;y.default.onBackgroundAudioStop(function(a){var e=t.data.playAudio.id;t.data.audio[e].status=!1,t.setData({audio:t.data.audio})})}},{key:"praise",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(i.default.mark(function t(a){var e,r,n,s,u,d,o,l;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.praiseLoad){t.next=2;break}return t.abrupt("return");case 2:if(this.praiseLoad=!0,e=a.currentTarget.dataset.index,r=a.currentTarget.dataset.id,n=a.currentTarget.dataset.type,s=n+r,!(this.praiseTmp.indexOf(s)>=0)){t.next=9;break}return t.abrupt("return");case 9:return u="detail"==n?y.default.app.data.ajaxPath+"/wxapi/healthserv/qa/praise":y.default.app.data.ajaxPath+"/wxapi/healthserv/qacomment/praise",d={code:y.default.app.globalData.storage.code},"detail"==n?d.qaId=r:d.qaCommentId=r,t.next=14,y.default.app.ajax({url:u,type:"post",data:d});case 14:o=t.sent,0==o.status&&("detail"==n?(this.data[n].praiseNumber+=1,this.data[n].praiseed=!0):(this.data[n][e].praiseNumber+=1,this.data[n][e].praiseed=!0),l={},l[n]=this.data[n],this.setData(l),this.praiseTmp.push(s)),this.praiseLoad=!1;case 17:case"end":return t.stop()}},t,this)}));return t}()},{key:"setNumTune",value:function(t,a){var e=a+"_tune_"+t;if(this.tuneNum||(this.tuneNum=[]),this.tuneNum.indexOf(e)<0){y.default.app.ajax({url:y.default.app.data.ajaxPath+"/wxapi/healthserv/qa/tune",type:"post",data:{qaId:a}});var r=this.data.detail;r.tuneNumber+=1,this.setData({detail:r}),this.tuneNum.push(e)}}},{key:"bindAudio",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(i.default.mark(function t(a){var e,r,n,s,u;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=a.currentTarget.dataset.url,r=a.currentTarget.dataset.id,n=a.currentTarget.dataset.index,s=this.data.audio,u=this.data.playAudio,s[r]||(s[r]={id:r,src:e,status:!1}),u.id!=r?(u.id&&s[u.id].status&&(s[u.id].status=!1,y.default.stopBackgroundAudio()),s[r].status=!0,y.default.playBackgroundAudio({dataUrl:e})):s[r].status?(y.default.stopBackgroundAudio(),s[r].status=!1):(y.default.playBackgroundAudio({dataUrl:e}),s[r].status=!0),this.setData({audio:s,playAudio:{id:r,src:e}}),this.setNumTune(n,r);case 9:case"end":return t.stop()}},t,this)}));return t}()},{key:"getCommitList",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(i.default.mark(function t(){var a,e,r,n;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.data.loading){t.next=2;break}return t.abrupt("return");case 2:return this.data.loading=!0,t.next=5,y.default.app.ajax({url:y.default.app.data.ajaxPath+"/wxapi/healthserv/qacomment/list",data:{qaId:this.data.id,page:this.data.page,size:this.data.size}});case 5:if(a=t.sent,a.data){t.next=10;break}return this.setData({hasMore:!1,list:[],hidden:!0,loading:!1}),this.data.loading=!1,t.abrupt("return");case 10:for(e=!0,r=a.data.content,(a.data.totalPages<=1||a.data.totalPages==this.data.page+1)&&(e=!1),n=0;n<r.length;n++)r[n].commentReply=JSON.parse(r[n].commentReply),r[n].headImg=y.default.app.setHttpsUrl(r[n].headImg),this.praiseTmp.indexOf("list"+r[n].id)>=0?r[n].praiseed=!0:r[n].praiseed=!1;this.setData({hasMore:e,list:this.data.list.concat(r),hidden:!0,totalComNum:a.data.totalElements}),this.data.loading=!1;case 16:case"end":return t.stop()}},t,this)}));return t}()},{key:"loadMore",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(i.default.mark(function t(a){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.data.hasMore){t.next=2;break}return t.abrupt("return");case 2:return this.data.page++,t.next=5,this.getCommitList();case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"getDetail",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(i.default.mark(function t(){var a,e;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.default.app.ajax({url:y.default.app.data.ajaxPath+"/wxapi/healthserv/qa/detail",data:{qaId:this.data.id}});case 2:a=t.sent,e=a.data,this.praiseTmp.indexOf("detail"+e.id)>=0?e.praiseed=!0:e.praiseed=!1,e.healthDoctor.doctorHeadImgUrl=y.default.app.setHttpsUrl(e.healthDoctor.doctorHeadImgUrl),this.setData({detail:e});case 7:case"end":return t.stop()}},t,this)}));return t}()},{key:"commitFocus",value:function(){this.setData({commitfocus:!0})}},{key:"checkLink",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(i.default.mark(function t(a){var e,r,n;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,r=a.currentTarget.dataset.index,"number"==typeof r?this.commitIndex=r:this.commitIndex=null,!this.isLink){t.next=5;break}return t.abrupt("return");case 5:return this.isLink=!0,t.next=8,y.default.app.checkLogin();case 8:if(n=t.sent){t.next=13;break}return t.next=12,y.default.app.doLogin();case 12:n=t.sent;case 13:n&&y.default.navigateTo({url:a.currentTarget.dataset.link}),this.isLink=!1;case 15:case"end":return t.stop()}},t,this)}));return t}()},{key:"bindinput",value:function(t){this.setData({commitValue:t.detail.value})}},{key:"setSubCommit",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(i.default.mark(function t(){var a,e;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.default.getStorage({key:"commit"});case 2:if(a=t.sent,a.data.time){t.next=5;break}return t.abrupt("return");case 5:return e=this.data.list,e[this.commitIndex].commentReply||(e[this.commitIndex].commentReply=[]),e[this.commitIndex].commentReply.push({userNickname:a.data.nickName,replyContent:a.data.content}),this.setData({list:e}),t.next=11,y.default.setStorage({key:"commit",data:{}});case 11:this.commitIndex=null;case 12:case"end":return t.stop()}},t,this)}));return t}()},{key:"setCommit",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(i.default.mark(function t(){var a,e,r;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.default.getStorage({key:"commit"});case 2:if(a=t.sent,a.data.time){t.next=5;break}return t.abrupt("return");case 5:if(e=this.data.commitlist,!a.data.qaId){t.next=13;break}return r={commentContent:a.data.content,createTime:a.data.time,headImg:a.data.avatar,nickName:a.data.nickName},e.unshift(r),this.setData({commitlist:e}),t.next=12,y.default.setStorage({key:"commit",data:{}});case 12:this.commitIndex=null;case 13:case"end":return t.stop()}},t,this)}));return t}()},{key:"onShow",value:function(t){this.data.id&&("number"==typeof this.commitIndex?this.setSubCommit():this.setCommit())}},{key:"onHide",value:function(){y.default.app.stopAudio(),this.setData({playAudio:{id:null,src:null},audio:{}})}},{key:"onLoad",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(i.default.mark(function t(a){var e;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.praiseTmp=[],t.next=3,y.default.getSystemInfo();case 3:e=t.sent,this.data.id=parseInt(a.id),this.setData({windowHieght:e.windowHeight}),this.getCommitList(),this.getDetail(),this.audioPlayEnd();case 9:case"end":return t.stop()}},t,this)}));return t}()},{key:"onPullDownRefresh",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return y.default.app.stopAudio(),this.setData({hasMore:!0,page:0,list:[],playAudio:{id:null,src:null},commitlist:[],audio:{},praiseNum:{}}),t.next=4,this.getDetail();case 4:return t.next=6,this.getCommitList();case 6:y.default.stopPullDownRefresh();case 7:case"end":return t.stop()}},t,this)}));return t}()}]),a}(y.default.Component);Page(g._createPage(k))}(module,require);