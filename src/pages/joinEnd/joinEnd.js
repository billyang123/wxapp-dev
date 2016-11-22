import wx from 'labrador';

export default class JoinEnd extends wx.Component {
	data = {
		
	};
  async lookBind(e){
    let res = await wx.request({
      url: 'https://xcx.chinamuxie.com/wxapi/project/account/list',
      method:"get",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code:wx.app.globalData.storage.code
      }
    });
    if(res.data.status == 0){
      await wx.navigateTo({
        url:'/pages/inification/inification'
      })
    }
    

  }
	

}
