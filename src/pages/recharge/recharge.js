import wx from 'labrador';
export default class Recharge extends wx.Component {
	data={
		tabNum:0,
    	totalNum:0,
    	assetsPath:wx.app.data.assetsPath
	};
	moneyTab(event){
		console.log(event)
		var num = event.currentTarget.dataset.num;
		this.setData({
			tabNum:num*1
		})
	}
}