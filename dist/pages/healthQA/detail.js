"use strict";!function(t,e){function a(t){return t&&t.__esModule?t:{default:t}}var n=t.exports={};window=e("../../npm/labrador/global.js");Object.defineProperty(n,"__esModule",{value:!0});var i=e("../../npm/babel-runtime/regenerator/index.js"),r=a(i),s=e("../../npm/babel-runtime/helpers/asyncToGenerator.js"),u=a(s),d=e("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),o=a(d),c=e("../../npm/babel-runtime/helpers/classCallCheck.js"),l=a(c),h=e("../../npm/babel-runtime/helpers/createClass.js"),p=a(h),m=e("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),f=a(m),x=e("../../npm/babel-runtime/helpers/inherits.js"),y=a(x),v=e("../../npm/labrador/index.js"),g=a(v),k=function(t){function e(){var t,a,n,i;(0,l.default)(this,e);for(var r=arguments.length,s=Array(r),u=0;u<r;u++)s[u]=arguments[u];return a=n=(0,f.default)(this,(t=e.__proto__||(0,o.default)(e)).call.apply(t,[this].concat(s))),n.data={id:"",detail:{},list:[],windowHieght:"625",hidden:!1,hasMore:!0,hasRefesh:!1,size:5,page:0,praiseNum:{},playAudio:{id:null,src:null},audio:{},totalComNum:0,commitfocus:!1,commitValue:"",loading:!1},i=a,(0,f.default)(n,i)}return(0,y.default)(e,t),(0,p.default)(e,[{key:"audioPlay",value:function(t){}},{key:"audioPlayEnd",value:function(){var t=this;g.default.onBackgroundAudioStop(function(e){console.log(e);var a=t.data.playAudio.id;t.data.audio[a].status=!1,t.setData({audio:t.data.audio})})}},{key:"praise",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(e){var a,n,i,s,u,d,o,c;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.praiseLoad){t.next=2;break}return t.abrupt("return");case 2:if(this.praiseLoad=!0,a=e.currentTarget.dataset.index,n=e.currentTarget.dataset.id,i=e.currentTarget.dataset.type,s=i+n,!(this.praiseTmp.indexOf(s)>=0)){t.next=9;break}return t.abrupt("return");case 9:return u="detail"==i?"https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise":"https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/praise",d={code:g.default.app.globalData.storage.code},"detail"==i?d.qaId=n:d.qaCommentId=n,t.next=14,g.default.app.ajax({url:u,type:"post",data:d});case 14:o=t.sent,console.log(o),0==o.status&&("detail"==i?(this.data[i].praiseNumber+=1,this.data[i].praiseed=!0):(this.data[i][a].praiseNumber+=1,this.data[i][a].praiseed=!0),c={},c[i]=this.data[i],this.setData(c),this.praiseTmp.push(s)),this.praiseLoad=!1;case 18:case"end":return t.stop()}},t,this)}));return t}()},{key:"setNumTune",value:function(t,e){var a=e+"_tune_"+t;if(this.tuneNum||(this.tuneNum=[]),this.tuneNum.indexOf(a)<0){g.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/tune",type:"post",data:{qaId:e}});var n=this.data.detail;n.tuneNumber+=1,this.setData({detail:n}),this.tuneNum.push(a)}}},{key:"bindAudio",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(e){var a,n,i;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.currentTarget.dataset.url,n=e.currentTarget.dataset.id,i=e.currentTarget.dataset.index,this.data.audio[n]||(this.data.audio[n]={id:n,src:a,status:!1}),this.data.playAudio.src==a){t.next=12;break}return this.data.playAudio.id&&(this.data.audio[this.data.playAudio.id].status=!1,this.setData({audio:this.data.audio})),this.data.audio[n].status=!0,t.next=9,g.default.playBackgroundAudio({dataUrl:a});case 9:this.setData({audio:this.data.audio,playAudio:{id:n,src:a}}),t.next=22;break;case 12:if(!this.data.audio[n].status){t.next=18;break}return t.next=15,g.default.pauseBackgroundAudio();case 15:this.data.audio[n].status=!1,t.next=21;break;case 18:return t.next=20,g.default.playBackgroundAudio({dataUrl:a});case 20:this.data.audio[n].status=!0;case 21:this.setData({audio:this.data.audio});case 22:this.setNumTune(i,n);case 23:case"end":return t.stop()}},t,this)}));return t}()},{key:"getCommitList",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(){var e,a,n,i;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.data.loading){t.next=2;break}return t.abrupt("return");case 2:return this.data.loading=!0,t.next=5,g.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/list",data:{qaId:this.data.id,page:this.data.page,size:this.data.size}});case 5:if(e=t.sent,e.data){t.next=10;break}return this.setData({hasMore:!1,list:[],hidden:!0,loading:!1}),this.data.loading=!1,t.abrupt("return");case 10:for(a=!0,n=e.data.content,(e.data.totalPages<=1||e.data.totalPages==this.data.page+1)&&(a=!1),i=0;i<n.length;i++)n[i].createTime=new Date(n[i].createTime).format("yyyy/MM/dd HH:mm:ss"),n[i].commentReply=JSON.parse(n[i].commentReply),this.praiseTmp.indexOf("list"+n[i].id)>=0?n[i].praiseed=!0:n[i].praiseed=!1;this.setData({hasMore:a,list:this.data.list.concat(n),hidden:!0,totalComNum:e.data.totalElements}),this.data.loading=!1;case 16:case"end":return t.stop()}},t,this)}));return t}()},{key:"loadMore",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("loadMore"),this.data.hasMore){t.next=3;break}return t.abrupt("return");case 3:return this.data.page++,t.next=6,this.getCommitList();case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"getDetail",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(){var e;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/detail",data:{qaId:this.data.id}});case 2:e=t.sent,console.log(e),this.praiseTmp.indexOf("detail"+e.data.id)>=0?e.data.praiseed=!0:e.data.praiseed=!1,this.setData({detail:e.data});case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"commitFocus",value:function(){this.setData({commitfocus:!0})}},{key:"checkLink",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(e){var a,n,i;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=this,n=e.currentTarget.dataset.index,"number"==typeof n&&(this.commitIndex=n),!this.isLink){t.next=5;break}return t.abrupt("return");case 5:return this.isLink=!0,t.next=8,g.default.app.checkLogin();case 8:if(i=t.sent){t.next=13;break}return t.next=12,g.default.app.doLogin();case 12:i=t.sent;case 13:i&&g.default.navigateTo({url:e.currentTarget.dataset.link}),this.isLink=!1;case 15:case"end":return t.stop()}},t,this)}));return t}()},{key:"bindinput",value:function(t){this.setData({commitValue:t.detail.value})}},{key:"setCommit",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(){var e,a,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.default.getStorage({key:"commit"});case 2:if(e=t.sent,a=this.data.list,!e.data.qaId){t.next=8;break}return n={commentContent:e.data.content,commentRelyNumber:0,commentReply:[],createTime:e.data.time,headImg:e.data.avatar,healthQaId:this.data.id,id:e.data.qaId,nickName:e.data.nickName,praiseNumber:0,status:0,userInfoId:0},a.unshift(n),t.abrupt("return",this.setData({list:a}));case 8:a[this.commitIndex].commentReply&&(a[this.commitIndex].commentReply.push({userNickname:e.data.nickName,replyContent:e.data.content}),this.setData({list:a}));case 9:case"end":return t.stop()}},t,this)}));return t}()},{key:"setSubCommit",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(){var e,a;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.default.getStorage({key:"commit"});case 2:e=t.sent,a=this.data.list,a[this.commitIndex].commentReply&&(a[this.commitIndex].commentReply.push({userNickname:e.data.nickName,replyContent:e.data.content}),this.setData({list:a}));case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"setCommit",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(){var e,a,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.default.getStorage({key:"commit"});case 2:e=t.sent,a=this.data.list,e.data.qaId&&(n={commentContent:e.data.content,commentRelyNumber:0,commentReply:[],createTime:e.data.time,headImg:e.data.avatar,healthQaId:this.data.id,id:e.data.qaId,nickName:e.data.nickName,praiseNumber:0,status:0,userInfoId:0},a.unshift(n),this.setData({list:a}));case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"onShow",value:function(t){console.log("onShow",this.eId),g.default.app.stopAudio(),this.data.id&&("number"==typeof this.commitIndex?this.setSubCommit():this.setCommit())}},{key:"onLoad",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(e){var a;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return g.default.app.stopAudio(),console.log("onLoad",this.showStatus),this.praiseTmp=[],t.next=5,g.default.getSystemInfo();case 5:return a=t.sent,this.data.id=parseInt(e.id),this.setData({windowHieght:a.windowHeight}),this.getCommitList(),this.getDetail(),this.audioPlayEnd(),t.next=13,g.default.setStorage({key:"commit",data:{}});case 13:case"end":return t.stop()}},t,this)}));return t}()},{key:"onPullDownRefresh",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(r.default.mark(function t(){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setData({hasMore:!0,page:0,list:[]}),t.next=3,this.getDetail();case 3:return t.next=5,this.getCommitList();case 5:g.default.stopPullDownRefresh();case 6:case"end":return t.stop()}},t,this)}));return t}()}]),e}(g.default.Component);Page(v._createPage(k))}(module,require);