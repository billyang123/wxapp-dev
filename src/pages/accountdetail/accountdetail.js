import wx from 'labrador';

export default class Accountlist extends wx.Component {
	data = {
		account:{}
	};
	async onLoad(e){
		let account = await wx.request({
            url: 'https://xcx.chinamuxie.com/wxapi/project/account/money/bill/detail',
            method:"post",
            header: {
			    'content-type': 'application/x-www-form-urlencoded'
			},
            data: {
            	id: e.id,
            	
            }
        })
		this.setData({
			account:account.data.data
		})
		console.log(account)
	}
}