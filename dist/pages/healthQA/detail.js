"use strict";!function(t,a){function e(t){return t&&t.__esModule?t:{default:t}}var i=t.exports={};window=a("../../npm/labrador/global.js");Object.defineProperty(i,"__esModule",{value:!0});var r=a("../../npm/babel-runtime/regenerator/index.js"),n=e(r),s=a("../../npm/babel-runtime/helpers/asyncToGenerator.js"),u=e(s),d=a("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),o=e(d),l=a("../../npm/babel-runtime/helpers/classCallCheck.js"),c=e(l),p=a("../../npm/babel-runtime/helpers/createClass.js"),h=e(p),f=a("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),m=e(f),x=a("../../npm/babel-runtime/helpers/inherits.js"),y=e(x),v=a("../../npm/labrador/index.js"),k=e(v),g=function(t){function a(){var t,e,i,r;(0,c.default)(this,a);for(var n=arguments.length,s=Array(n),u=0;u<n;u++)s[u]=arguments[u];return e=i=(0,m.default)(this,(t=a.__proto__||(0,o.default)(a)).call.apply(t,[this].concat(s))),i.data={id:"",detail:{},list:[],windowHieght:"625",hidden:!1,hasMore:!0,hasRefesh:!1,size:5,page:0,praiseNum:{},playAudio:{id:null,src:null},audio:{},totalComNum:0,commitfocus:!1,commitValue:"",loading:!1},r=e,(0,m.default)(i,r)}return(0,y.default)(a,t),(0,h.default)(a,[{key:"audioPlay",value:function(t){}},{key:"audioPlayEnd",value:function(){var t=this;k.default.onBackgroundAudioStop(function(a){var e=t.data.playAudio.id;t.data.audio[e].status=!1,t.setData({audio:t.data.audio})})}},{key:"praise",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e,i,r,s,u,d,o,l;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.praiseLoad){t.next=2;break}return t.abrupt("return");case 2:if(this.praiseLoad=!0,e=a.currentTarget.dataset.index,i=a.currentTarget.dataset.id,r=a.currentTarget.dataset.type,s=r+i,!(this.praiseTmp.indexOf(s)>=0)){t.next=9;break}return t.abrupt("return");case 9:return u="detail"==r?k.default.app.data.ajaxPath+"/wxapi/healthserv/qa/praise":k.default.app.data.ajaxPath+"/wxapi/healthserv/qacomment/praise",d={code:k.default.app.globalData.storage.code},"detail"==r?d.qaId=i:d.qaCommentId=i,t.next=14,k.default.app.ajax({url:u,type:"post",data:d});case 14:o=t.sent,0==o.status&&("detail"==r?(this.data[r].praiseNumber+=1,this.data[r].praiseed=!0):(this.data[r][e].praiseNumber+=1,this.data[r][e].praiseed=!0),l={},l[r]=this.data[r],this.setData(l),this.praiseTmp.push(s)),this.praiseLoad=!1;case 17:case"end":return t.stop()}},t,this)}));return t}()},{key:"setNumTune",value:function(t,a){var e=a+"_tune_"+t;if(this.tuneNum||(this.tuneNum=[]),this.tuneNum.indexOf(e)<0){k.default.app.ajax({url:k.default.app.data.ajaxPath+"/wxapi/healthserv/qa/tune",type:"post",data:{qaId:a}});var i=this.data.detail;i.tuneNumber+=1,this.setData({detail:i}),this.tuneNum.push(e)}}},{key:"bindAudio",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e,i,r;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.currentTarget.dataset.url,i=a.currentTarget.dataset.id,r=a.currentTarget.dataset.index,this.data.audio[i]||(this.data.audio[i]={id:i,src:e,status:!1}),this.data.playAudio.src==e){t.next=12;break}return this.data.playAudio.id&&(this.data.audio[this.data.playAudio.id].status=!1,this.setData({audio:this.data.audio})),this.data.audio[i].status=!0,t.next=9,k.default.playBackgroundAudio({dataUrl:e});case 9:this.setData({audio:this.data.audio,playAudio:{id:i,src:e}}),t.next=22;break;case 12:if(!this.data.audio[i].status){t.next=18;break}return t.next=15,k.default.pauseBackgroundAudio();case 15:this.data.audio[i].status=!1,t.next=21;break;case 18:return t.next=20,k.default.playBackgroundAudio({dataUrl:e});case 20:this.data.audio[i].status=!0;case 21:this.setData({audio:this.data.audio});case 22:this.setNumTune(r,i);case 23:case"end":return t.stop()}},t,this)}));return t}()},{key:"getCommitList",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){var a,e,i,r;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.data.loading){t.next=2;break}return t.abrupt("return");case 2:return this.data.loading=!0,t.next=5,k.default.app.ajax({url:k.default.app.data.ajaxPath+"/wxapi/healthserv/qacomment/list",data:{qaId:this.data.id,page:this.data.page,size:this.data.size}});case 5:if(a=t.sent,a.data){t.next=10;break}return this.setData({hasMore:!1,list:[],hidden:!0,loading:!1}),this.data.loading=!1,t.abrupt("return");case 10:for(e=!0,i=a.data.content,(a.data.totalPages<=1||a.data.totalPages==this.data.page+1)&&(e=!1),r=0;r<i.length;r++)i[r].createTime=new Date(i[r].createTime).format("yyyy/MM/dd HH:mm:ss"),i[r].commentReply=JSON.parse(i[r].commentReply),this.praiseTmp.indexOf("list"+i[r].id)>=0?i[r].praiseed=!0:i[r].praiseed=!1;this.setData({hasMore:e,list:this.data.list.concat(i),hidden:!0,totalComNum:a.data.totalElements}),this.data.loading=!1;case 16:case"end":return t.stop()}},t,this)}));return t}()},{key:"loadMore",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.data.hasMore){t.next=2;break}return t.abrupt("return");case 2:return this.data.page++,t.next=5,this.getCommitList();case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"getDetail",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.default.app.ajax({url:k.default.app.data.ajaxPath+"/wxapi/healthserv/qa/detail",data:{qaId:this.data.id}});case 2:a=t.sent,this.praiseTmp.indexOf("detail"+a.data.id)>=0?a.data.praiseed=!0:a.data.praiseed=!1,this.setData({detail:a.data});case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"commitFocus",value:function(){this.setData({commitfocus:!0})}},{key:"checkLink",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e,i,r;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,i=a.currentTarget.dataset.index,"number"==typeof i&&(this.commitIndex=i),!this.isLink){t.next=5;break}return t.abrupt("return");case 5:return this.isLink=!0,t.next=8,k.default.app.checkLogin();case 8:if(r=t.sent){t.next=13;break}return t.next=12,k.default.app.doLogin();case 12:r=t.sent;case 13:r&&k.default.navigateTo({url:a.currentTarget.dataset.link}),this.isLink=!1;case 15:case"end":return t.stop()}},t,this)}));return t}()},{key:"bindinput",value:function(t){this.setData({commitValue:t.detail.value})}},{key:"setSubCommit",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){var a,e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.default.getStorage({key:"commit"});case 2:if(a=t.sent,a.data.time){t.next=5;break}return t.abrupt("return");case 5:return e=this.data.list,e[this.commitIndex].commentReply||(e[this.commitIndex].commentReply=[]),e[this.commitIndex].commentReply.push({userNickname:a.data.nickName,replyContent:a.data.content}),this.setData({list:e}),t.next=11,k.default.setStorage({key:"commit",data:{}});case 11:this.commitIndex=null;case 12:case"end":return t.stop()}},t,this)}));return t}()},{key:"setCommit",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){var a,e,i;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.default.getStorage({key:"commit"});case 2:if(a=t.sent,a.data.time){t.next=5;break}return t.abrupt("return");case 5:if(e=this.data.list,!a.data.qaId){t.next=13;break}return i={commentContent:a.data.content,commentRelyNumber:0,commentReply:[],createTime:a.data.time,headImg:a.data.avatar,healthQaId:this.data.id,id:a.data.qaId,nickName:a.data.nickName,praiseNumber:0,status:0,userInfoId:0},e.unshift(i),this.setData({list:e,totalComNum:this.data.totalComNum+1}),t.next=12,k.default.setStorage({key:"commit",data:{}});case 12:this.commitIndex=null;case 13:case"end":return t.stop()}},t,this)}));return t}()},{key:"onShow",value:function(t){k.default.app.stopAudio(),this.data.id&&("number"==typeof this.commitIndex?this.setSubCommit():this.setCommit())}},{key:"onLoad",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return k.default.app.stopAudio(),this.praiseTmp=[],t.next=4,k.default.getSystemInfo();case 4:e=t.sent,this.data.id=parseInt(a.id),this.setData({windowHieght:e.windowHeight}),this.getCommitList(),this.getDetail(),this.audioPlayEnd();case 10:case"end":return t.stop()}},t,this)}));return t}()},{key:"onPullDownRefresh",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setData({hasMore:!0,page:0,list:[]}),t.next=3,this.getDetail();case 3:return t.next=5,this.getCommitList();case 5:k.default.stopPullDownRefresh();case 6:case"end":return t.stop()}},t,this)}));return t}()}]),a}(k.default.Component);Page(v._createPage(g))}(module,require);