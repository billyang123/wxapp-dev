import wx from 'labrador';
import Slide from '../../components/slide/slide';
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
export default class Elecert extends wx.Component {
	data = {
		project:{},
		list:{},
		projectAccount:{}
	};
	async showIntro(){
		let showModal = await wx.showModal({
		  title: '什么是等待期？',
		  content: '等待期又称观察期，互助会员加入互助计划后，在等待期内发生的重大疾病不享受互助。设立等待期是为了防止互助会员明知道将发生事故，而马上加入以骗取互助金。',
		  showCancel:false,
		  confirmText:"知道了",
		  confirmColor:"#ff6a00"
		})
	}
	linkTo(event) {
		wx.navigateTo({
			url:event.currentTarget.dataset.link
		})
	}
	async onLoad(e){
		let id = e.id;
		let elecertData = await wx.request({
            url: 'https://xcx.chinamuxie.com/wxapi/project/account/detail',
            method:"post",
            header: {
			    'content-type': 'application/x-www-form-urlencoded'
			},
            data: {
            	code:wx.app.globalData.storage.code,
            	projectAccountId:id
            }
        })
        let createTime = elecertData.data.data.projectAccount.createTime;
        let effectiveTime = elecertData.data.data.projectAccount.effectiveTime
        elecertData.data.data.projectAccount.createTime = (new Date(createTime)).Format("yyyy-MM-dd hh:mm:ss");
        elecertData.data.data.projectAccount.effectiveTime = (new Date(effectiveTime)).Format("yyyy-MM-dd hh:mm:ss")
        this.setData({
        	project:elecertData.data.data.project,
			list:elecertData.data.data.list,
			projectAccount:elecertData.data.data.projectAccount
        })
        console.log(elecertData)
	}
}