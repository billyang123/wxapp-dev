"use strict";!function(t,e){function a(t){return t&&t.__esModule?t:{default:t}}var s=t.exports={};window=e("../../npm/labrador/global.js");Object.defineProperty(s,"__esModule",{value:!0});var r=e("../../npm/babel-runtime/regenerator/index.js"),n=a(r),i=e("../../npm/babel-runtime/helpers/asyncToGenerator.js"),u=a(i),o=e("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),d=a(o),l=e("../../npm/babel-runtime/helpers/classCallCheck.js"),c=a(l),p=e("../../npm/babel-runtime/helpers/createClass.js"),h=a(p),f=e("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),m=a(f),x=e("../../npm/babel-runtime/helpers/inherits.js"),g=a(x),v=e("../../npm/labrador/index.js"),b=a(v),k=e("../../components/navbar/navbar.js"),y=a(k),w=function(t){function e(){var t,a,s,r;(0,c.default)(this,e);for(var n=arguments.length,i=Array(n),u=0;u<n;u++)i[u]=arguments[u];return a=s=(0,m.default)(this,(t=e.__proto__||(0,d.default)(e)).call.apply(t,[this].concat(i))),s.data={tabIndex:0,tabData:[{title:"全部",api:"#"},{title:"肿瘤内科",api:"#"},{title:"妇产科",api:"#"},{title:"心理咨询",apai:"#"}],playAudio:{id:null,src:null},audio:{},praiseNum:{},list:[],windowHieght:"625",hidden:!1,hasMore:!0,hasRefesh:!1,size:5,page:0,doclist:[],loading:!1},s.children={navbar:new y.default({cur:1})},r=a,(0,m.default)(s,r)}return(0,g.default)(e,t),(0,h.default)(e,[{key:"audioPlay",value:function(t){}},{key:"audioPlayEnd",value:function(){var t=this;b.default.onBackgroundAudioStop(function(e){console.log(e);var a=t.data.playAudio.id,s=t.data.audio;s[a].status=!1,t.setData({audio:s})})}},{key:"checkLink",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(n.default.mark(function t(e){var a,s;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=this,!this.isLink){t.next=3;break}return t.abrupt("return");case 3:return this.isLink=!0,t.next=6,b.default.app.checkLogin();case 6:if(s=t.sent){t.next=11;break}return t.next=10,b.default.app.doLogin();case 10:s=t.sent;case 11:s&&b.default.navigateTo({url:e.currentTarget.dataset.link}),this.isLink=!1;case 13:case"end":return t.stop()}},t,this)}));return t}()},{key:"setNumTune",value:function(t,e){var a=e+"_tune_"+t;if(this.tuneNum||(this.tuneNum=[]),this.tuneNum.indexOf(a)<0){b.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/tune",type:"post",data:{qaId:e}});var s=this.data.list;s[t].tuneNumber+=1,this.setData({list:s}),this.tuneNum.push(a)}}},{key:"bindAudio",value:function(t){var e=t.currentTarget.dataset.url,a=t.currentTarget.dataset.id,s=t.currentTarget.dataset.index,r=this.data.audio,n=this.data.playAudio;r[a]||(r[a]={id:a,src:e,status:!1}),n.id!=a?(n.id&&r[n.id].status&&(r[n.id].status=!1,b.default.stopBackgroundAudio()),r[a].status=!0,b.default.playBackgroundAudio({dataUrl:e})):r[a].status?(b.default.stopBackgroundAudio(),r[a].status=!1):(b.default.playBackgroundAudio({dataUrl:e}),r[a].status=!0),this.setData({audio:r,playAudio:{id:a,src:e}}),this.setNumTune(s,a)}},{key:"tabs",value:function(t){b.default.app.stopAudio(),this.setData({tabIndex:t.currentTarget.dataset.id}),this.setData({hasMore:!0,page:0,list:[]}),this.getQAList()}},{key:"getDoctors",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/doctor/list",data:{page:0,size:2}});case 2:e=t.sent,e.data||this.setData({doclist:[]}),this.setData({doclist:e.data.content.splice(0,2)});case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"getQAList",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(n.default.mark(function t(){var e,a,s,r;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.data.loading){t.next=2;break}return t.abrupt("return");case 2:return this.data.loading=!0,t.next=5,b.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/list",data:{page:this.data.page,size:this.data.size,label:this.data.tabIndex}});case 5:if(e=t.sent,e.data){t.next=10;break}return this.setData({hasMore:!1,list:[],hidden:!0,hasRefesh:!1,loading:!1}),this.data.loading=!1,t.abrupt("return");case 10:for(a=!0,s=e.data.content,(e.data.totalPages<=1||e.data.totalPages==this.data.page+1)&&(a=!1),r=0;r<s.length;r++)this.praiseTmp.indexOf(s[r].id)>=0?s[r].praiseed=!0:s[r].praiseed=!1;console.log(s,this.praiseTmp),this.setData({hasMore:a,list:this.data.list.concat(e.data.content),hidden:!0,hasRefesh:!1}),this.data.loading=!1;case 17:case"end":return t.stop()}},t,this)}));return t}()},{key:"loadMore",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(n.default.mark(function t(e){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("loadMore"),this.data.hasMore){t.next=3;break}return t.abrupt("return");case 3:return this.data.page++,t.next=6,this.getQAList();case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"praise",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(n.default.mark(function t(e){var a,s,r,i,u;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.praiseLoad){t.next=2;break}return t.abrupt("return");case 2:if(this.praiseLoad=!0,a=e.currentTarget.dataset.index,s=e.currentTarget.dataset.id,r=s,!(this.praiseTmp.indexOf(r)>=0)){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,b.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise",type:"post",data:{qaId:s}});case 10:i=t.sent,console.log(i),0==i.status&&(u=this.data.list,u[parseInt(a)].praiseNumber+=1,u[parseInt(a)].praiseed=!0,this.setData({list:u}),this.praiseTmp.push(r)),this.praiseLoad=!1;case 14:case"end":return t.stop()}},t,this)}));return t}()},{key:"getLabel",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/labellist",type:"get"});case 2:e=t.sent,console.log(e),this.setData({tabData:e.data});case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"onLoad",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.playingAudio={},this.praiseLoad=!1,t.next=4,b.default.getSystemInfo();case 4:e=t.sent,this.praiseLoad=!1,this.setData({windowHieght:e.windowHeight}),this.praiseTmp=[],this.getDoctors(),this.getLabel(),this.getQAList(),this.audioPlayEnd();case 12:case"end":return t.stop()}},t,this)}));return t}()},{key:"setCommit",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(n.default.mark(function t(){var e,a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.getStorage({key:"commit"});case 2:e=t.sent,a=this.data.list,a[this.commitIndex].commentNumber&&(a[this.commitIndex].commentNumber+=1,this.setData({list:a}));case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"onShow",value:function(){b.default.app.stopAudio(),this.data.id&&"number"==typeof this.commitIndex&&this.setCommit()}},{key:"onPullDownRefresh",value:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.praiseLoad=!1,this.setData({hasMore:!0,page:0,list:[]}),this.getDoctors(),this.getLabel(),this.getQAList(),b.default.stopPullDownRefresh();case 6:case"end":return t.stop()}},t,this)}));return t}()}]),e}(b.default.Component);Page(v._createPage(w))}(module,require);