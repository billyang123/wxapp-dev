"use strict";!function(e,t){function a(e){return e&&e.__esModule?e:{default:e}}var n=e.exports={};window=t("../../npm/labrador/global.js");Object.defineProperty(n,"__esModule",{value:!0});var r=t("../../npm/babel-runtime/regenerator/index.js"),u=a(r),s=t("../../npm/babel-runtime/helpers/asyncToGenerator.js"),l=a(s),o=t("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),i=a(o),c=t("../../npm/babel-runtime/helpers/classCallCheck.js"),p=a(c),d=t("../../npm/babel-runtime/helpers/createClass.js"),m=a(d),h=t("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),f=a(h),b=t("../../npm/babel-runtime/helpers/inherits.js"),j=a(b),y=t("../../npm/labrador/index.js"),g=a(y),v=t("../../components/alert/alert.js"),N=a(v),x=function(e){function t(){var e,a,n,r;(0,p.default)(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return a=n=(0,f.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(s))),n.data={tabNum:9,inputNum:0,assetsPath:g.default.app.data.assetsPath,yuNum:"",name:"",pname:""},n.children={alert:new N.default({msg:"@msg"})},r=a,(0,f.default)(n,r)}return(0,j.default)(t,e),(0,m.default)(t,[{key:"chashMoney",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,l.default)(u.default.mark(function e(t){var a,n,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.totalNum=1*this.data.tabNum+1*this.data.inputNum,!(1*this.totalNum<=0)){e.next=3;break}return e.abrupt("return",this.children.alert.show("充值金额需大于0元"));case 3:return a=g.default.app.data.ajaxPath+"/wxapi/project/account/recharge",e.next=6,g.default.request({url:a,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:{projectAccountId:this.projectAccountId,rechargeAmount:1*this.totalNum,code:g.default.app.globalData.storage.code}});case 6:if(n=e.sent,0!=n.data.status){e.next=13;break}return e.next=10,g.default.requestPayment(n.data.data);case 10:return r=e.sent,e.next=13,g.default.redirectTo({url:"/pages/paySuccess/paySuccess"});case 13:case"end":return e.stop()}},e,this)}));return e}()},{key:"bindinput",value:function(e){""!=e.detail.value?this.setData({tabNum:0}):this.setData({inputNum:0}),this.setData({inputNum:e.detail.value})}},{key:"moneyTab",value:function(e){console.log(e);var t=e.currentTarget.dataset.num;this.setData({tabNum:1*t,inputNum:0})}},{key:"onLoad",value:function(e){console.log(e),this.totalNum=0,this.setData({yuNum:e["amp;num"],name:e["amp;name"],pname:e["amp;pname"]}),this.projectAccountId=e.pid}}]),t}(g.default.Component);Page(y._createPage(x))}(module,require);