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
      if(this.data.email == ""){
        return wx.showModal({
          title: '提示',
          content: "邮箱不能为空！",
          showCancel: false,
          success: function(res) {
          }
        })
      }
      if(this.data.nickName == ""){
        return wx.showModal({
          title: '提示',
          content: "昵称不能为空！",
          showCancel: false,
          success: function(res) {
          }
        })
      } 
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
      wx.app.globalData.userInfo.nickName = this.data.nickName;
      await wx.setStorage({ key: 'userInfo', data: wx.app.globalData.userInfo});
      wx.navigateBack()

    }else{
      wx.showModal({
        title: '提示',
        content: res.data.msg,
        showCancel: false,
        success: function(res) {
        }
      })
    }
  }
  async onLoad(e){
    let id = parseInt(e.type);
    if (id==1){
      this.setData({
        url:wx.app.data.ajaxPath+'/wxapi/user/userInfo/nickname',
        subUrl:wx.app.data.ajaxPath+'/wxapi/user/userInfo/modifyNickName',
        value:'',
        txt:'昵称',
        placeholder:"昵称",
        email:null,
        index:id
      })
    }else if (id==2){
      this.setData({
        url:wx.app.data.ajaxPath+'/wxapi/user/userInfo/email',
        subUrl:wx.app.data.ajaxPath+'/wxapi/user/userInfo/modifyEmail',
        value:'',
        placeholder:"请输入您的邮箱",
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
      
    }else{
      wx.showModal({
        title: '提示',
        content: res.data.data.msg,
        success: function(res) {
        }
      })
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
