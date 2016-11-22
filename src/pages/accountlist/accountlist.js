import wx from 'labrador';

export default class Accountlist extends wx.Component {
	data = {
		index:0,
		typeArr:["全部","充值","援助"],
		pageIndex:1,
		rows:[]
	};
	linkTo(event) {
	      wx.navigateTo({
	        url:event.currentTarget.dataset.link
	      })
	}
	async getAccount(options){
		let accountList = await wx.request({
            url: 'https://xcx.chinamuxie.com/wxapi/project/account/money/bill/index',
            method:"post",
            header: {
			    'content-type': 'application/x-www-form-urlencoded'
			},
            data: {
            	type:options.type || 0,
            	pageIndex:options.pageIndex || 1,
            	rows:options.rows || 20,
            	code:wx.app.globalData.storage.code
            }
        })
        let __data = accountList.data.data;;
        let rows = __data.rows;
		for (var i = 0; i < rows.length; i++) {
			let times = rows[i].createTimeStr.split(" ");
			rows[i].day = times[0];
			rows[i].time = times[1];
		}
		__data.rows = rows; 
        return __data;
	}
	async bindPickerChange(e) {
		let index = e.detail.value;
		let accountList = await this.getAccount({
			type:index,
        	pageIndex:1,
        	rows:20,
		});
		console.log(index)
		this.setData({
			rows:accountList.rows,
			index:index
		})
	}
	async onLoad(){
		let accountList = await this.getAccount({});
		this.setData({
			rows:accountList.rows
		})
		console.log(accountList)
	}
}