import wx from 'labrador';

export default class Claim extends wx.Component {
	data = {
    apply:true,
    array:[{}]
	};
	async linkTo(event) {
      if(this.isLink) return;
      this.isLink = true;
      await wx.navigateTo({
        url:event.currentTarget.dataset.link
      })
      this.isLink = false;
  }
  async onLoad(e){
    let res = await wx.request({
      url: 'https://xcx.chinamuxie.com/wxapi/user/claim/list',
      method:"get",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code:wx.app.globalData.storage.code
      }
    });
    if (res.data.status ==0){
      if (res.data.data){
        this.setData({
          apply:false
        });
      }
      
      this.setData({
        array:res.data.data
      });
    }

  }
}
