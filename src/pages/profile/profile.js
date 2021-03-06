import wx from 'labrador';
export default class Profile extends wx.Component {
	data={
    userNickname:'',
    userTrueName:'',
    userGender:'',
    userIdNumber:'',
    userPhone:'',
    userEmail:'',
    userHeadimgurl:'',
    active:'',
    sexm:'',
    sexw:'',
    sex:'男',
    chooseSex:'男'
	};
  async getData(){
    let userInfo = wx.app.globalData.userInfo;
    let res = await wx.request({
      url: wx.app.data.ajaxPath+'/wxapi/user/userInfo/index',
      method:"GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code:wx.app.globalData.storage.code
      }
    });
    if(res.data.status == 0){
      this.setData({
        userNickname:res.data.data.userNickname,
        userTrueName:res.data.data.userTrueName,
        userGender:res.data.data.userGender,
        userIdNumber:res.data.data.userIdNumber,
        userPhone:res.data.data.userPhone,
        userEmail:res.data.data.userEmail,
        userHeadimgurl:wx.app.setHttpsUrl(res.data.data.userHeadimgurl) || userInfo.avatarUrl
      })
    }
  }
  async linkTo(event) {
      if(this.isLink) return;
      this.isLink = true;
      await wx.navigateTo({
        url:event.currentTarget.dataset.link
      })
      this.isLink = false;
  }
  async choose(){
    let res = await wx.request({
      url: wx.app.data.ajaxPath+"/wxapi/user/userInfo/gender",
      method:"GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code:wx.app.globalData.storage.code
      }
    });
    if(res.data.status == 0){
      if (res.data.data=="男"){
        this.setData({
          sexm:res.data.data
        })
      }else if (res.data.data=="女"){
        this.setData({
          sexw:res.data.data
        })
      }else {
        this.setData({
          sexm:"男"
        })
      }
      

    }
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    });
    this.animation = animation;

    animation.translateY(0).step();

    this.setData({
      animationData:animation.export()
    });
    
  }
  chooseSex(e){
    let id=e.currentTarget.dataset.id;
    if (id=="sexm"){
      this.setData({
        sexm:id,
        sexw:false,
        chooseSex:'男'
      })
    }else if (id=="sexw"){
      this.setData({
        sexm:false,
        sexw:id,
        chooseSex:'女'
      })
    }else {
      return;
    }
    
  }
  chooseClose(){
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    });
    this.animation = animation;

    animation.translateY('100%').step();

    this.setData({
      animationData:animation.export()
    })
  }
  async chooseSure(e){
    if(this.status) return;
    this.status = true;
    let  postData={
      code:wx.app.globalData.storage.code,
      gender:e.currentTarget.dataset.choose
    };
    let res = await wx.request({
      url: wx.app.data.ajaxPath+"/wxapi/user/userInfo/modifyGender",
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: postData
    });
    if(res.data.status == 0){
      this.setData({
        userGender:e.currentTarget.dataset.choose
      });
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      });
      this.animation = animation;

      animation.translateY('100%').step();

      this.setData({
        animationData:animation.export()
      })

    }
    this.status = false;
  }
  async quit(e){
    if(this.status) return;
    this.status = true;
    let res = await wx.request({
      url: wx.app.data.ajaxPath+"/wxapi/user/logout",
      method:"GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code:wx.app.globalData.storage.code
      }
    });
    if(res.data.status == 0){
      wx.clearStorage();
      // wx.switchTab({
      //   url:'/pages/account/account'
      // });
      wx.navigateBack();
    }
    this.status = false;
  }
 /* async onLoad(e){
    this.getData();
  }*/
  async onShow(e){
    this.getData();
  }
}
