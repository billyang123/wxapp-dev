"use strict";!function(t,a){function e(t){return t&&t.__esModule?t:{default:t}}var r=t.exports={};window=a("../../npm/labrador/global.js");Object.defineProperty(r,"__esModule",{value:!0});var s=a("../../npm/babel-runtime/regenerator/index.js"),n=e(s),i=a("../../npm/babel-runtime/helpers/asyncToGenerator.js"),u=e(i),d=a("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),o=e(d),l=a("../../npm/babel-runtime/helpers/classCallCheck.js"),c=e(l),h=a("../../npm/babel-runtime/helpers/createClass.js"),p=e(h),f=a("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),x=e(f),g=a("../../npm/babel-runtime/helpers/inherits.js"),m=e(g),v=a("../../npm/labrador/index.js"),b=e(v),k=a("../../components/alert/alert.js"),y=e(k),w=function(t){function a(){var t,e,r,s;(0,c.default)(this,a);for(var n=arguments.length,i=Array(n),u=0;u<n;u++)i[u]=arguments[u];return e=r=(0,x.default)(this,(t=a.__proto__||(0,o.default)(a)).call.apply(t,[this].concat(i))),r.data={id:1,curLength:0,maxLength:60,textareaValue:"",list:[],windowHieght:"625",hidden:!1,hasMore:!0,hasRefesh:!1,size:5,page:0,detail:{},loading:!1},r.children={alert:new y.default({msg:"@msg"})},s=e,(0,x.default)(r,s)}return(0,m.default)(a,t),(0,p.default)(a,[{key:"audioPlayEnd",value:function(t){var a=t.currentTarget.dataset.id;this.data.audio[a].status=!1,this.setData({audio:this.data.audio})}},{key:"bindAudio",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e,r;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.currentTarget.dataset.url,r=a.currentTarget.dataset.id,this.data.audio[r]||(this.data.audio[r]={id:r,src:e,status:!1}),this.data.playAudio.src==e){t.next=11;break}return this.data.playAudio.id&&(this.data.audio[this.data.playAudio.id].status=!1,this.setData({audio:this.data.audio})),this.data.audio[r].status=!0,t.next=8,b.default.playBackgroundAudio({dataUrl:e});case 8:this.setData({audio:this.data.audio,playAudio:{id:r,src:e}}),t.next=21;break;case 11:if(!this.data.audio[r].status){t.next=17;break}return t.next=14,b.default.pauseBackgroundAudio();case 14:this.data.audio[r].status=!1,t.next=20;break;case 17:return t.next=19,b.default.playBackgroundAudio({dataUrl:e});case 19:this.data.audio[r].status=!0;case 20:this.setData({audio:this.data.audio});case 21:case"end":return t.stop()}},t,this)}));return t}()},{key:"getQAList",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){var a,e,r;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.data.loading){t.next=2;break}return t.abrupt("return");case 2:return this.data.loading=!0,t.next=5,b.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/list",data:{page:this.data.page,size:this.data.size,dockerId:this.data.id}});case 5:if(a=t.sent,a.data){t.next=10;break}return this.setData({hasMore:!1,list:[],hidden:!0,hasRefesh:!1,loading:!1}),this.data.loading=!1,t.abrupt("return");case 10:e=!0,r=a.data.content,1!=a.data.totalPages&&a.data.totalPages!=this.data.page+1||(e=!1),this.setData({hasMore:e,list:this.data.list.concat(a.data.content),hidden:!0,hasRefesh:!1}),this.data.loading=!1;case 15:case"end":return t.stop()}},t,this)}));return t}()},{key:"loadMore",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("loadMore"),that.setData({hasRefesh:!0}),this.data.hasMore){t.next=4;break}return t.abrupt("return");case 4:return this.data.page++,t.next=7,this.getQAList();case 7:case"end":return t.stop()}},t,this)}));return t}()},{key:"praise",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e,r,s,i,u;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.currentTarget.dataset.index,r=a.currentTarget.dataset.id,s=r+"_"+e,console.log(s),!(this.praiseTmp.indexOf(s)>=0)){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,b.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/praise",type:"post",data:{qaId:r}});case 8:i=t.sent,console.log(i),0==i.status&&(u=this.data.list,u[parseInt(e)].praiseNumber+=1,u[parseInt(e)].praiseed=!0,this.setData({list:u}),this.praiseTmp.push(s));case 11:case"end":return t.stop()}},t,this)}));return t}()},{key:"formSubmit",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e,r,s;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.detail.value.questionContent,e=e.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,""),""!=e){t.next=4;break}return t.abrupt("return",this.children.alert.show("请输入提问内容"));case 4:if(!(e.length>=60)){t.next=6;break}return t.abrupt("return",this.children.alert.show("提问内容需少于60个字"));case 6:return t.next=8,b.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/qa/add",type:"post",data:{healthDoctorId:this.data.id,questionContent:e,code:b.default.app.globalData.storage.code}});case 8:if(r=t.sent,0==r.status&&(b.default.showToast({title:"提问成功",icon:"success",duration:2e3}),this.setData({textareaValue:"",curLength:0,disabled:!1})),1!=r.status){t.next=15;break}return t.next=13,b.default.showModal({title:"提示",content:"需要先登录"});case 13:s=t.sent,s.confirm&&b.default.redirectTo({url:"/pages/account/account"});case 15:case"end":return t.stop()}},t,this)}));return t}()},{key:"setNumValue",value:function(t){var a=t.detail.value;a=a.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,""),this.setData({curLength:a.length,textareaValue:a})}},{key:"linechange",value:function(t){console.log(t)}},{key:"getDetail",value:function(){function t(){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/healthserv/doctor/detail",data:{doctorId:this.data.id}});case 2:a=t.sent,this.setData({detail:a.data});case 4:case"end":return t.stop()}},t,this)}));return t}()},{key:"onLoad",value:function(){function t(t){return a.apply(this,arguments)}var a=(0,u.default)(n.default.mark(function t(a){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.data.id=parseInt(a.id),t.next=3,b.default.getSystemInfo();case 3:e=t.sent,this.setData({windowHieght:e.windowHeight}),this.getQAList(),this.getDetail();case 7:case"end":return t.stop()}},t,this)}));return t}()}]),a}(b.default.Component);Page(v._createPage(w))}(module,require);