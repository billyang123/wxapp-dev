import wx from 'labrador';
import Alert from '../../components/alert/alert';
export default class Recharge extends wx.Component {
	data={
		tabNum:9,
    	totalNum:"",
    	assetsPath:wx.app.data.assetsPath,
    	yuNum:"",
    	name:"",
    	pname:""
	};
	children = {
	    alert: new Alert({msg:"@msg"})
	};
	async chashMoney(event){
		if(this.data.totalNum*1<=0){
			return this.children.alert.show("充值金额需大于0元")
		}
		var _url = "https://xcx.chinamuxie.com/wxapi/project/account/recharge";
		let res = await wx.request({
	        url:_url,
	        header: {
	          'content-type': 'application/x-www-form-urlencoded'
	        },
	        method:"POST",
	        data:{
	          	projectAccountId:this.projectAccountId,
				rechargeAmount:this.data.totalNum*1,
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
		if(event.detail.value != ""){
			this.setData({
				tabNum:0
			})
		}
		this.setData({
			totalNum:event.detail.value
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