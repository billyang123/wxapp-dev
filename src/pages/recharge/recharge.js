import wx from 'labrador';
export default class Recharge extends wx.Component {
	data={
		tabNum:0,
    	totalNum:0,
    	assetsPath:wx.app.data.assetsPath
	};
	async chashMoney(){
		// var res = await wx.app.ajax({
		// 	url: '#',
		// 	type:"post",
		// 	data:{
				
		// 	}
		// })
		// wx.requestPayment(
		// 	{
		// 	'timeStamp': '',
		// 	'nonceStr': '',
		// 	'package': '',
		// 	'signType': 'MD5',
		// 	'paySign': '',
		// 	'success':function(res){},
		// 	'fail':function(res){}
		// })
	}
	bindinput(event){
		this.setData({
			totalNum:event.detail.value*1
		})
	}
	moneyTab(event){
		console.log(event)
		var num = event.currentTarget.dataset.num;
		this.setData({
			tabNum:num*1,
			totalNum:num*1
		})
	}
}