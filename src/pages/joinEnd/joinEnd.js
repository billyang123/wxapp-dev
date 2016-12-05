import wx from 'labrador';

export default class JoinEnd extends wx.Component {
	data = {
		
	};
  async lookBind(e){
    if(this.status) return;
    this.status = true;
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
      await wx.redirectTo({
        url:'/pages/inification/inification'
      })
    }
    this.status = false;

  }
	

}
