"use strict";!function(t,e){function a(t){return t&&t.__esModule?t:{default:t}}var r=t.exports={};window=e("../../npm/labrador/global.js");Object.defineProperty(r,"__esModule",{value:!0});var n=e("../../npm/babel-runtime/regenerator/index.js"),s=a(n),u=e("../../npm/babel-runtime/helpers/asyncToGenerator.js"),o=a(u),d=e("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),l=a(d),i=e("../../npm/babel-runtime/helpers/classCallCheck.js"),c=a(i),p=e("../../npm/babel-runtime/helpers/createClass.js"),f=a(p),m=e("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),h=a(m),b=e("../../npm/babel-runtime/helpers/inherits.js"),v=a(b),x=e("../../npm/labrador/index.js"),g=a(x),y=e("../../components/alert/alert.js"),q=a(y),k=function(t){function e(){var t,a,r,n;(0,c.default)(this,e);for(var s=arguments.length,u=Array(s),o=0;o<s;o++)u[o]=arguments[o];return a=r=(0,h.default)(this,(t=e.__proto__||(0,l.default)(e)).call.apply(t,[this].concat(u))),r.data={qid:"",cid:"",url:"",content:""},r.children={alert:new q.default({msg:"@msg"})},n=a,(0,h.default)(r,n)}return(0,v.default)(e,t),(0,f.default)(e,[{key:"formSubmit",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,o.default)(s.default.mark(function t(e){var a,r,n,u,o,d;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.detail.value.content,a=a.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,""),""!=a){t.next=4;break}return t.abrupt("return",this.children.alert.show("请输入评论内容"));case 4:if(!(a.length>=60)){t.next=6;break}return t.abrupt("return",this.children.alert.show("评论内容需少于60个字"));case 6:return this.postdata.content=a,t.next=9,g.default.app.ajax({url:this.url,type:"post",data:this.postdata});case 9:if(r=t.sent,0!=r.status){t.next=23;break}return t.next=13,g.default.getStorage({key:"userInfo"});case 13:return n=t.sent,t.next=16,g.default.showToast({title:"评论成功",icon:"success",duration:2e3});case 16:return u=new Date,o={resId:r.data,avatar:n.data.avatarUrl.substring(0,n.data.avatarUrl.length-1)+96,nickName:n.data.nickName,content:a,time:u.format("yyyy/MM/dd HH:mm:ss")},this.postdata.qaCommentId?o.qaCommentId=this.postdata.qaCommentId:o.qaId=this.postdata.qaId,t.next=21,g.default.setStorage({key:"commit",data:o});case 21:this.setData({content:""}),setTimeout(function(){g.default.navigateBack()},2e3);case 23:if(1!=r.status){t.next=28;break}return t.next=26,g.default.showModal({title:"提示",content:"需要先登录"});case 26:d=t.sent,d.confirm&&g.default.redirectTo({url:"/pages/account/account"});case 28:case"end":return t.stop()}},t,this)}));return t}()},{key:"onShow",value:function(){function t(){return e.apply(this,arguments)}var e=(0,o.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return g.default.app.stopAudio(),t.next=3,g.default.setStorage({key:"commit",data:{}});case 3:case"end":return t.stop()}},t,this)}));return t}()},{key:"onLoad",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,o.default)(s.default.mark(function t(e){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:g.default.app.stopAudio(),this.postdata={code:g.default.app.globalData.storage.code},e.qaCommentId&&(this.postdata.qaCommentId=e.qaCommentId,this.qaId=e["amp;qaId"],this.url=g.default.app.data.ajaxPath+"/wxapi/healthserv/qacomment/reply"),e.qaId&&(this.postdata.qaId=e.qaId,this.qaId=e.qaId,this.url=g.default.app.data.ajaxPath+"/wxapi/healthserv/qacomment/add");case 4:case"end":return t.stop()}},t,this)}));return t}()}]),e}(g.default.Component);Page(x._createPage(k))}(module,require);