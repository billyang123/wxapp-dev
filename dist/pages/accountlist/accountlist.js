"use strict";!function(e,t){function r(e){return e&&e.__esModule?e:{default:e}}var n=e.exports={};window=t("../../npm/labrador/global.js");Object.defineProperty(n,"__esModule",{value:!0});var a=t("../../npm/babel-runtime/regenerator/index.js"),u=r(a),s=t("../../npm/babel-runtime/helpers/asyncToGenerator.js"),o=r(s),i=t("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),l=r(i),c=t("../../npm/babel-runtime/helpers/classCallCheck.js"),p=r(c),d=t("../../npm/babel-runtime/helpers/createClass.js"),f=r(d),h=t("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),m=r(h),b=t("../../npm/babel-runtime/helpers/inherits.js"),w=r(b),x=t("../../npm/labrador/index.js"),v=r(x),y=function(e){function t(){var e,r,n,a;(0,p.default)(this,t);for(var u=arguments.length,s=Array(u),o=0;o<u;o++)s[o]=arguments[o];return r=n=(0,m.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(s))),n.data={index:0,typeArr:["全部","充值","援助"],pageIndex:1,rowsArr:[]},a=r,(0,m.default)(n,a)}return(0,w.default)(t,e),(0,f.default)(t,[{key:"linkTo",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isLink){e.next=2;break}return e.abrupt("return");case 2:return this.isLink=!0,e.next=5,v.default.navigateTo({url:t.currentTarget.dataset.link});case 5:this.isLink=!1;case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"getAccount",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(t){var r,n,a,s,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.default.request({url:"https://xcx.chinamuxie.com/wxapi/project/account/money/bill/index",method:"post",header:{"content-type":"application/x-www-form-urlencoded"},data:{type:t.type||0,pageIndex:t.pageIndex||1,rows:t.rows||30,code:v.default.app.globalData.storage.code}});case 2:if(r=e.sent,0!=r.data.status){e.next=10;break}for(n=r.data.data,a=null,a=n.rows?n.rows:[],s=0;s<a.length;s++)o=a[s].createTimeStr.split(" "),a[s].day=o[0],a[s].time=o[1];return n.rows=a,e.abrupt("return",n);case 10:case"end":return e.stop()}},e,this)}));return e}()},{key:"bindPickerChange",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(t){var r,n,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.detail.value,n=[],e.next=4,this.getAccount({type:r,pageIndex:1,rows:30});case 4:a=e.sent,n=a.rows?a.rows:[],this.setData({rowsArr:n,index:r});case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(u.default.mark(function e(){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAccount({});case 2:t=e.sent,this.setData({rowsArr:t.rows});case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(v.default.Component);Page(x._createPage(y))}(module,require);