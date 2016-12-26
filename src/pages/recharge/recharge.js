import wx from 'labrador';
import Alert from '../../components/alert/alert';
export default class Recharge extends wx.Component {
	data={
		tabNum:9,
		inputNum:0,
    	assetsPath:wx.app.data.assetsPath,
    	yuNum:"",
    	name:"",
    	pname:""
	};
	children = {
	    alert: new Alert({msg:"@msg"})
	};
	async chashMoney(event){
		//this.totalNum = parseInt(this.data.tabNum,10)+parseInt(this.data.inputNum || 0,10);
		// if(this.totalNum<9){
		// 	return this.children.alert.show("充值金额需9元或9元以上的整数")
		// }
		this.totalNum = this.data.tabNum*1+(this.data.inputNum || 0)*1;
		if(this.totalNum<=0){
			return this.children.alert.show("充值金额需0元以上")
		}
		//return console.log(this.data.tabNum,this.data.inputNum,this.totalNum)
		var _url = wx.app.data.ajaxPath+"/wxapi/project/account/recharge";
		let res = await wx.request({
	        url:_url,
	        header: {
	          'content-type': 'application/x-www-form-urlencoded'
	        },
	        method:"POST",
	        data:{
	          	projectAccountId:this.projectAccountId,
				rechargeAmount:this.totalNum*1,
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
				tabNum:0,
			})
		}else{
			this.setData({
				inputNum:0,
			})
		}
		this.setData({
			inputNum:event.detail.value
		})
	}
	moneyTab(event){
		//console.log(event)
		var num = event.currentTarget.dataset.num;
		this.setData({
			tabNum:num*1,
			inputNum:0
		})
	}
	onLoad(e){
		// console.log(e)
		this.totalNum = 0;
		this.setData({
			yuNum:e["amp;num"],
	    	name:e["amp;name"],
	    	pname:e["amp;pname"]
		})
		this.projectAccountId = e.pid
	}
}