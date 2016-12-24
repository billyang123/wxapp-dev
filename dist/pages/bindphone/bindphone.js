"use strict";!function(e,t){function a(e){return e&&e.__esModule?e:{default:e}}var n=e.exports={};window=t("../../npm/labrador/global.js");Object.defineProperty(n,"__esModule",{value:!0});var s=t("../../npm/babel-runtime/regenerator/index.js"),r=a(s),u=t("../../npm/babel-runtime/helpers/asyncToGenerator.js"),l=a(u),o=t("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),i=a(o),c=t("../../npm/babel-runtime/helpers/classCallCheck.js"),d=a(c),h=t("../../npm/babel-runtime/helpers/createClass.js"),f=a(h),p=t("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),b=a(p),m=t("../../npm/babel-runtime/helpers/inherits.js"),v=a(m),w=t("../../npm/labrador/index.js"),x=a(w),k=function(e){function t(){var e,a,n,s;(0,d.default)(this,t);for(var r=arguments.length,u=Array(r),l=0;l<r;l++)u[l]=arguments[l];return a=n=(0,b.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(u))),n.data={userInfo:{},phoneValue:"",codeValue:"",btnText:"获取验证码",disabled:!0,cDisCls:"btn",loading:!1,tmOn:!1,bl:!0,btnBl:!0},s=a,(0,b.default)(n,s)}return(0,v.default)(t,e),(0,f.default)(t,[{key:"bindKeyInput",value:function(e){var t=e.target.dataset.name,a={};a[t]=e.detail.value,this.setData(a)}},{key:"shoutTime",value:function(){var e=this,t=60,a=null;this.tmOn||(this.setData({cDisCls:"btn disabled",btnText:t+"秒后重发",tmOn:!0}),a=setInterval(function(){t--,t<=0?(clearInterval(a),e.setData({cDisCls:"btn",bl:!0,btnText:"获取验证码",tmOn:!1})):e.setData({btnText:t+"秒后重发"})},1e3))}},{key:"checkisPhone",value:function(e){var t=/^1(2|3|4|5|6|7|8)[0-9]{9}$/;return!!t.test(e)}},{key:"doBind",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,l.default)(r.default.mark(function e(t){var a;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.checkisPhone(this.data.phoneValue)){e.next=3;break}return x.default.showModal({title:"提示",content:"请输入有效手机号",showCancel:!1,success:function(e){}}),e.abrupt("return");case 3:if(!(!this.data.codeValue.length>0)){e.next=6;break}return x.default.showModal({title:"提示",content:"请输入有效验证码",showCancel:!1,success:function(e){}}),e.abrupt("return");case 6:if(!this.data.btnBl){e.next=13;break}return this.setData({btnBl:!1}),e.next=10,x.default.request({url:x.default.app.data.ajaxPath+"/wxapi/user/doBindPhone",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{phone:this.data.phoneValue,valideCode:this.data.codeValue,code:x.default.app.globalData.storage.code}});case 10:a=e.sent,0==a.data.status?(x.default.showToast({title:"绑定成功",icon:"success",duration:2e3}),x.default.navigateBack()):x.default.showModal({title:"提示",content:a.data.msg,showCancel:!1,success:function(e){e.confirm&&console.log("用户点击确定")}}),this.setData({btnBl:!0});case 13:case"end":return e.stop()}},e,this)}));return e}()},{key:"getCheckCode",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,l.default)(r.default.mark(function e(t){var a;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.checkisPhone(this.data.phoneValue)){e.next=3;break}return x.default.showModal({title:"提示",content:"请输入有效手机号",showCancel:!1,success:function(e){}}),e.abrupt("return");case 3:if(!this.data.bl){e.next=9;break}return this.setData({bl:!1}),e.next=7,x.default.request({url:x.default.app.data.ajaxPath+"/wxapi/user/sendCode",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{telphone:this.data.phoneValue}});case 7:a=e.sent,0==a.data.status&&(this.shoutTime(),this.setData({disabled:!1}));case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=(0,l.default)(r.default.mark(function e(){var t;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.default.getUserInfo();case 2:t=e.sent,this.setData({userInfo:t.userInfo});case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(x.default.Component);Page(w._createPage(k))}(module,require);