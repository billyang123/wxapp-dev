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
    sexm:'sexm',
    sexw:'',
    sex:'男',
    chooseSex:'男'
	};
  async getData(){
    let res = await wx.request({
      url: 'https://xcx.chinamuxie.com/wxapi/user/userInfo/index',
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
        userName:res.data.data.userTrueName,
        userGender:res.data.data.userGender,
        userIdNumber:res.data.data.userIdNumber,
        userPhone:res.data.data.userPhone,
        userEmail:res.data.data.userEmail,
        userHeadimgurl:res.data.data.userHeadimgurl
      })
    }
  }
  linkTo(event) {
    wx.navigateTo({
      url:event.currentTarget.dataset.link
    })
  }
  choose(){
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    });
    this.animation = animation;

    animation.translateY(0).step();

    this.setData({
      animationData:animation.export()
    })
  }
  chooseSex(e){
    let id=e.currentTarget.id;
    if (id=="sexm"){
      this.setData({
        sexm:id,
        sexw:null,
        chooseSex:'男'
      })
    }else if (id=="sexw"){
      this.setData({
        sexm:null,
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
    let  postData={
      code:wx.app.globalData.storage.code,
      gender:e.currentTarget.dataset.choose
    };
    let res = await wx.request({
      url: "https://xcx.chinamuxie.com/wxapi/user/userInfo/modifyGender",
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
  }
 /* async onLoad(e){
    this.getData();
  }*/
  async onShow(e){
    this.getData();
  }
}
