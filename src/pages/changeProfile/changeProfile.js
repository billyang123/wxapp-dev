import wx from 'labrador';
export default class Profile extends wx.Component {
	data={
    index:'',
    url:'',
    value:'',
    txt:'',
    subUrl:'',
    nickName:'',
    email:'',
    arg:''
	};
  async onSub(e){
    let postData={};
    if (this.data.nickName){
       postData={
        code:wx.app.globalData.storage.code,
        nickName:this.data.nickName
      };
    }else if (this.data.email){
       postData={
        code:wx.app.globalData.storage.code,
        email:this.data.email
      };
    }else {
      return;
    }
    
    let res = await wx.request({
      url: this.data.subUrl,
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: postData
    });
    if(res.data.status == 0){
      wx.navigateBack()

    }
  }
  async onLoad(e){
    let id = parseInt(e.type);
    if (id==1){
      this.setData({
        url:'https://xcx.chinamuxie.com/wxapi/user/userInfo/nickname',
        subUrl:'https://xcx.chinamuxie.com/wxapi/user/userInfo/modifyNickName',
        value:'昵称',
        txt:'昵称',
        email:null,
        index:id
      })
    }else if (id==2){
      this.setData({
        url:'https://xcx.chinamuxie.com/wxapi/user/userInfo/email',
        subUrl:'https://xcx.chinamuxie.com/wxapi/user/userInfo/modifyEmail',
        value:'请输入您的邮箱',
        txt:'邮箱',
        nickName:null,
        index:id
      })
    }
    let res = await wx.request({
      url: this.data.url,
      method:"GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code:wx.app.globalData.storage.code
      }
    });
    if(res.data.status == 0){
      if(res.data.data){
        if (id==1){
          this.setData({
            nickName:res.data.data,
            value:res.data.data
          })
        }else if (id==2){
          this.setData({
            email:res.data.data,
            value:res.data.data
          })
        }
      }else {
        this.setData({
          value:this.data.value
        })
      }
      
    }
  }
  bindKeyInput(e){
    let index=e.currentTarget.dataset.index;
    if (index==1){
      this.setData({
        nickName:e.detail.value
      });
    }else if (index==2){
      this.setData({
        email:e.detail.value
      });
    }
    
  }
}
