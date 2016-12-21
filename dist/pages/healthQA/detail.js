"use strict";!function(t,a){function e(t){return t&&t.__esModule?t:{default:t}}var i=t.exports={};window=a("../../npm/labrador/global.js");Object.defineProperty(i,"__esModule",{value:!0});var r=a("../../npm/babel-runtime/regenerator/index.js"),s=e(r),n=a("../../npm/babel-runtime/helpers/asyncToGenerator.js"),u=e(n),d=a("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),o=e(d),l=a("../../npm/babel-runtime/helpers/classCallCheck.js"),c=e(l),h=a("../../npm/babel-runtime/helpers/createClass.js"),p=e(h),f=a("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),m=e(f),g=a("../../npm/babel-runtime/helpers/inherits.js"),x=e(g),y=a("../../npm/labrador/index.js"),v=e(y),b=function(t){function a(){var t,e,i,r;(0,c.default)(this,a);for(var s=arguments.length,n=Array(s),u=0;u<s;u++)n[u]=arguments[u];return e=i=(0,m.default)(this,(t=a.__proto__||(0,o.default)(a)).call.apply(t,[this].concat(n))),i.data={id:"",detail:{},list:[],windowHieght:"625",hidden:!1,hasMore:!0,hasRefesh:!1,size:5,page:0,praiseNum:{},playAudio:{id:null,src:null},audio:{},totalComNum:0,commitfocus:!1,commitValue:"",loading:!1},r=e,(0,m.default)(i,r)}return(0,x.default)(a,t),(0,p.default)(a,[{key:"audioPlay",value:function(t){}},{key:"audioPlayEnd",value:function(){var t=this;v.default.onBackgroundAudioStop(function(a){console.log(a);var e=t.data.playAudio.id;t.data.audio[e].status=!1,t.setData({audio:t.data.audio})})}},{key:"praise",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(a){var e,i,r,n,u,d;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.currentTarget.dataset.index,i=a.currentTarget.dataset.id,r=a.currentTarget.dataset.type,n=[r,i,e].join("_"),!this.praiseTmp[n]){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,v.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise",type:"post",data:{qaId:i}});case 8:u=t.sent,console.log(u),0==u.status&&("detail"==r?(this.data[r].praiseNumber+=1,this.data[r].praiseed=!0):(this.data[r][e].praiseNumber+=1,this.data[r][e].praiseed=!0),d={},d[r]=this.data[r],this.setData(d),this.praiseTmp[n]=1);case 11:case"end":return t.stop()}},t,this)}));return t}()},{key:"bindAudio",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(a){var e,i;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.currentTarget.dataset.url,i=a.currentTarget.dataset.id,this.data.audio[i]||(this.data.audio[i]={id:i,src:e,status:!1}),this.data.playAudio.src==e){t.next=11;break}return this.data.playAudio.id&&(this.data.audio[this.data.playAudio.id].status=!1,this.setData({audio:this.data.audio})),this.data.audio[i].status=!0,t.next=8,v.default.playBackgroundAudio({dataUrl:e});case 8:this.setData({audio:this.data.audio,playAudio:{id:i,src:e}}),t.next=21;break;case 11:if(!this.data.audio[i].status){t.next=17;break}return t.next=14,v.default.pauseBackgroundAudio();case 14:this.data.audio[i].status=!1,t.next=20;break;case 17:return t.next=19,v.default.playBackgroundAudio({dataUrl:e});case 19:this.data.audio[i].status=!0;case 20:this.setData({audio:this.data.audio});case 21:case"end":return t.stop()}},t,this)}));return t}()},{key:"getCommitList",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(){var a,e,i,r;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.data.loading){t.next=2;break}return t.abrupt("return");case 2:return this.data.loading=!0,t.next=5,v.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/list",data:{qaId:this.data.id,page:this.data.page,size:this.data.size}});case 5:if(a=t.sent,a.data){t.next=10;break}return this.setData({hasMore:!1,list:[],hidden:!0,hasRefesh:!1,loading:!1}),this.data.loading=!1,t.abrupt("return");case 10:for(e=!0,i=a.data.content,1!=a.data.totalPages&&a.data.totalPages!=this.data.page+1||(e=!1),r=0;r<i.length;r++)i[r].createTime=new Date(i[r].createTime).format("yyyy/MM/dd hh:mm:ss"),i[r].commentReply=JSON.parse(i[r].commentReply);this.setData({hasMore:e,list:this.data.list.concat(i),hidden:!0,hasRefesh:!1,totalComNum:a.data.totalElements}),this.data.loading=!1;case 16:case"end":return t.stop()}},t,this)}));return t}()},{key:"loadMore",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(a){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("loadMore"),that.setData({hasRefesh:!0}),this.data.hasMore){t.next=4;break}return t.abrupt("return");case 4:return this.data.page++,t.next=7,this.getCommitList();case 7:case"end":return t.stop()}},t,this)}));return t}()},{key:"getDetail",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/detail",data:{qaId:this.data.id}});case 2:a=t.sent,console.log(a),this.setData({detail:a.data});case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"commitFocus",value:function(){this.setData({commitfocus:!0})}},{key:"bindinput",value:function(t){this.setData({commitValue:t.detail.value})}},{key:"onLoad",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(s.default.mark(function t(a){var e;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.praiseTmp={},t.next=3,v.default.getSystemInfo();case 3:e=t.sent,this.data.id=parseInt(a.id),this.setData({windowHieght:e.windowHeight}),this.getCommitList(),this.getDetail(),this.audioPlayEnd();case 9:case"end":return t.stop()}},t,this)}));return t}()}]),a}(v.default.Component);Page(y._createPage(b))}(module,require);