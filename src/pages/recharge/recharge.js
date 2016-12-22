import wx from 'labrador';
export default class Recharge extends wx.Component {
	data={
		tabNum:0,
    	totalNum:0,
    	assetsPath:wx.app.data.assetsPath,
    	yuNum:"",
    	name:"",
    	pname:""
	};
	async chashMoney(event){
		var _url = "https://xcx.chinamuxie.com/wxapi/project/account/recharge";
		let res = await wx.request({
	        url:_url,
	        header: {
	          'content-type': 'application/x-www-form-urlencoded'
	        },
	        method:"POST",
	        data:{
	          	projectAccountId:this.projectAccountId,
				rechargeAmount:this.data.totalNum,
	          	code:wx.app.globalData.storage.code
	        }
	    });
		if(res.data.status == 0){
			let payResult = await wx.requestPayment(res.data.data)
			await wx.redirectTo({
	          url:'/pages/paySuccess/paySuccess'
	        })
		}
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
	onLoad(e){
		console.log(e)
		this.setData({
			yuNum:e["amp;num"],
	    	name:e["amp;name"],
	    	pname:e["amp;pname"]
		})
		this.projectAccountId = e.pid
	}
}