import wx from 'labrador';

//import Swiper from '../../components/swiper/swiper';
// import Navbar from '../../components/navbar/navbar';
export default class Index extends wx.Component {
  data = {
    banner:{
        img:'/images/banner_01_750x250.png',
        href:'/pages/bannerIndex/bannerIndex'
    },
    mImgArr:{},
    assetsPath:wx.app.data.assetsPath
  };
  // children = {
  //   //swiper: new Swiper({imgUrls:"@bannerImgs"}),
  //   navbar: new Navbar({cur:0})
  // };
  // onShareAppMessage() {
  //   return {
  //     title: '互助社群',
  //     desc: '互助社群描述',
  //     path: '/pages/index/index'
  //   }
  // }
  async onLoad(){
    //console.log(e)
    // wx.redirectTo({
    //   url: '/pages/bindphone/bindphone'
    // })
    //wx.app.stopAudio();
    this.getIndexProject();
  }
  async getIndexProject(){
    let res = await wx.app.ajax({url:wx.app.data.ajaxPath+"/wxapi/project/getIndexProject"});
    var _data = res.data;
    var _mImgArr = {};
    for (var i = 0; i < _data.length; i++) {
      _mImgArr[_data[i].id] = _data[i]
      if(!_data[i].headImg) continue;
      for (var k = 0; k < _data[i].headImg.length; k++) {
        _data[i].headImg[k] = wx.app.setHttpsUrl(_data[i].headImg[k]);
      }
    }
    //console.log(_mImgArr)
    this.setData({
      mImgArr:_mImgArr
    })
  }
  makePhoneCall(event){
    wx.showModal({
      title: '拨打电话：'+event.currentTarget.dataset.phoneNumber,
      success: function(res) {
        wx.makePhoneCall({
          phoneNumber: event.currentTarget.dataset.phoneNumber
        }) 
      }
    })
  }
  onShow(){
    wx.app.stopAudio();
  }
  async linkTo(event) {
      if(this.isLink) return;
      this.isLink = true;
      await wx.navigateTo({
        url:event.currentTarget.dataset.link
      })
      this.isLink = false;
  }
}
