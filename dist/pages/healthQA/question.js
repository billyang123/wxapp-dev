"use strict";!function(e,t){function a(e){return e&&e.__esModule?e:{default:e}}var r=e.exports={};window=t("../../npm/labrador/global.js");Object.defineProperty(r,"__esModule",{value:!0});var n=t("../../npm/babel-runtime/regenerator/index.js"),u=a(n),s=t("../../npm/babel-runtime/helpers/asyncToGenerator.js"),l=a(s),o=t("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),i=a(o),c=t("../../npm/babel-runtime/helpers/classCallCheck.js"),d=a(c),p=t("../../npm/babel-runtime/helpers/createClass.js"),f=a(p),h=t("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),b=a(h),m=t("../../npm/babel-runtime/helpers/inherits.js"),g=a(m),v=t("../../npm/labrador/index.js"),x=a(v),j=t("../../components/alert/alert.js"),w=a(j),y=function(e){function t(){var e,a,r,n;(0,d.default)(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return a=r=(0,b.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(s))),r.data={id:1,curLength:0,maxLength:60,textareaValue:"",loading:!1},r.children={alert:new w.default({msg:"@msg"})},n=a,(0,b.default)(r,n)}return(0,g.default)(t,e),(0,f.default)(t,[{key:"formSubmit",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,l.default)(u.default.mark(function e(t){var a,r,n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.detail.value.questionContent,a=a.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,""),""!=a){e.next=4;break}return e.abrupt("return",this.children.alert.show("请输入提问内容"));case 4:if(!(a.length>60)){e.next=6;break}return e.abrupt("return",this.children.alert.show("提问内容需少于60个字"));case 6:return e.next=8,x.default.app.ajax({url:x.default.app.data.ajaxPath+"/wxapi/healthserv/qa/add",type:"post",data:{healthDoctorId:this.data.id,questionContent:a,code:x.default.app.globalData.storage.code}});case 8:if(r=e.sent,0==r.status&&(x.default.showToast({title:"提问成功",icon:"success",duration:2e3}),this.setData({textareaValue:"",curLength:0,disabled:!1}),x.default.navigateBack()),1!=r.status){e.next=15;break}return e.next=13,x.default.showModal({title:"提示",content:"需要先登录"});case 13:n=e.sent,n.confirm&&x.default.redirectTo({url:"/pages/account/account"});case 15:case"end":return e.stop()}},e,this)}));return e}()},{key:"setNumValue",value:function(e){var t=e.detail.value;t=t.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,""),this.setData({curLength:t.length,textareaValue:t})}},{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,l.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.data.id=parseInt(t.id);case 1:case"end":return e.stop()}},e,this)}));return e}()}]),t}(x.default.Component);Page(v._createPage(y))}(module,require);