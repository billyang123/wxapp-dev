"use strict";!function(t,e){function i(t){return t&&t.__esModule?t:{default:t}}var a=t.exports={};Object.defineProperty(a,"__esModule",{value:!0});var n=e("../../npm/babel-runtime/core-js/object/get-prototype-of.js"),s=i(n),o=e("../../npm/babel-runtime/helpers/classCallCheck.js"),h=i(o),r=e("../../npm/babel-runtime/helpers/createClass.js"),u=i(r),m=e("../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),l=i(m),p=e("../../npm/babel-runtime/helpers/inherits.js"),d=i(p),c=e("../../npm/labrador/index.js"),f=i(c),g=function(t){function e(){var t,i,a,n;(0,h.default)(this,e);for(var o=arguments.length,r=Array(o),u=0;u<o;u++)r[u]=arguments[u];return i=a=(0,l.default)(this,(t=e.__proto__||(0,s.default)(e)).call.apply(t,[this].concat(r))),a.props={msg:"",maxheight:70},a.data={msg:"",animdata:""},n=i,(0,l.default)(a,n)}return(0,d.default)(e,t),(0,u.default)(e,[{key:"onUpdate",value:function(t){t.msg!==this.props.msg&&this.setData({msg:t.msg}),t.maxheight!==this.props.maxheight&&this.setData({maxheight:t.maxheight})}},{key:"show",value:function(t){this.Animation.height(this.props.maxheight+"rpx").step(),this.setData({animdata:this.Animation.export(),msg:t}),setTimeout(function(){this.Animation.height(0).step(),this.setData({animdata:this.Animation.export()})}.bind(this),3e3)}},{key:"hide",value:function(){console.log(this.Animation),this.Animation.height(0).step(),this.setData({animdata:this.Animation.export()})}},{key:"onLoad",value:function(){this.Animation=f.default.createAnimation({duration:400,timingFunction:"ease"}),this.isOne=!0,this.hide()}}]),e}(f.default.Component);a.default=g}(module,require);