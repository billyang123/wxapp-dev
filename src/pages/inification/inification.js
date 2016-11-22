import wx from 'labrador';

export default class Indemnification extends wx.Component {
	data = {
		tpNum:[],
		taNum:[],
		totalPersons:0,
		totalAmt:0,
		hasAcount:true,
		list:{}
	};
	linkTo(event) {
		wx.navigateTo({
			url:event.currentTarget.dataset.link
		})
	}
	async onLoad(){
		let listData = await wx.request({
            url: 'https://xcx.chinamuxie.com/wxapi/project/account/list',
            method:"get",
            header: {
			    'content-type': 'application/x-www-form-urlencoded'
			},
            data: {
            	code:wx.app.globalData.storage.code
            }
        })
        console.log(listData);
        this.setData({
        	tpNum:(listData.data.data.totalPersons+"").split(""),
        	taNum:(listData.data.data.totalAmt+"").split(""),
        	totalPersons:listData.data.data.totalPersons,
        	totalAmt:listData.data.data.totalAmt,
        	hasAcount:listData.data.data.hasAcount,
        	list:listData.data.data.list
        })
        console.log(listData);

	}
}