import wx from 'labrador';

export default class Claim extends wx.Component {
	data = {
    tabArr:{
      navIndex:0,
      contIndex:0
    },
    id:0,
    projectName:'',
    claimName:'',
    claimContact:'',
    claimContent:'',
    claimStatus:0
   
	};
  tabFun(e) {
	  let id=e.target.dataset.id;
    this.setData({
      tabArr:{
        navIndex:id,
        contIndex:id
      }
    })
  }
  async onLoad(e){
    let _id=parseInt(e.type);
    this.setData({
      id:_id
    });
    let res = await wx.request({
      url: 'https://xcx.chinamuxie.com/wxapi/user/claim/detail',
      method:"get",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code:wx.app.globalData.storage.code,
        id:this.data.id
      }
    });
    console.log(res);
    if (res.data.status ==0){
      
      this.setData({
        projectName:res.data.data.projectName,
        claimName:res.data.data.claimName,
        claimContact:res.data.data.claimContact,
        claimContent:res.data.data.claimContent,
        claimStatus:res.data.data.claimStatus
      });
    }

  }
}
