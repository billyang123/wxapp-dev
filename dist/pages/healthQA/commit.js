"use strict";!function(e,t){function a(e){return e&&e.__esModule?e:{default:e}}var r=e.exports={};window=t("../../npm/labrador/global.js");Object.defineProperty(r,"__esModule",{value:!0});var n=t("../../npm/babel-runtime/regenerator/index.js"),s=a(n),u=t("../../npm/babel-runtime/helpers/asyncToGenerator.js"),l=a(u),o=t("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),i=a(o),c=t("../../npm/babel-runtime/helpers/classCallCheck.js"),d=a(c),p=t("../../npm/babel-runtime/helpers/createClass.js"),h=a(p),f=t("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),m=a(f),b=t("../../npm/babel-runtime/helpers/inherits.js"),x=a(b),v=t("../../npm/labrador/index.js"),g=a(v),j=t("../../components/alert/alert.js"),w=a(j),q=function(e){function t(){var e,a,r,n;(0,d.default)(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return a=r=(0,m.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(u))),r.data={qid:"",cid:"",url:""},r.children={alert:new w.default({msg:"@msg"})},n=a,(0,m.default)(r,n)}return(0,x.default)(t,e),(0,h.default)(t,[{key:"formSubmit",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,l.default)(s.default.mark(function e(t){var a,r,n;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.detail.value.content,a=a.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,""),""!=a){e.next=4;break}return e.abrupt("return",this.children.alert.show("请输入评论内容"));case 4:if(!(a.length>=60)){e.next=6;break}return e.abrupt("return",this.children.alert.show("评论内容需少于60个字"));case 6:return this.postdata.content=a,e.next=9,g.default.app.ajax({url:this.url,type:"post",data:this.postdata});case 9:if(r=e.sent,0!=r.status){e.next=13;break}return e.next=13,g.default.navigateBack();case 13:if(1!=r.status){e.next=18;break}return e.next=16,g.default.showModal({title:"提示",content:"需要先登录"});case 16:n=e.sent,n.confirm&&g.default.redirectTo({url:"/pages/account/account"});case 18:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,l.default)(s.default.mark(function e(t){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.data.cid=t.qid,this.data.rid=t.rid,this.postdata={code:g.default.app.globalData.storage.code},t.qaCommentId&&(this.postdata.qaCommentId=t.qaCommentId,this.url="https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/reply"),t.qaId&&(this.postdata.qaId=t.qaId,this.url="https://xcx.chinamuxie.com/wxapi/healthserv/qacomment/add"),console.log(t);case 6:case"end":return e.stop()}},e,this)}));return e}()}]),t}(g.default.Component);Page(v._createPage(q))}(module,require);