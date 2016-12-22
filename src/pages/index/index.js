import wx from 'labrador';

//import Swiper from '../../components/swiper/swiper';
import Navbar from '../../components/navbar/navbar';
export default class Index extends wx.Component {
  data = {
    banner:{
        img:'/images/banner_01_750x250.png',
        href:'/pages/bannerIndex/bannerIndex'
    },
    mImgArr:{},
    assetsPath:wx.app.data.assetsPath
  };
  children = {
    //swiper: new Swiper({imgUrls:"@bannerImgs"}),
    navbar: new Navbar({cur:0})
  };
  async onLoad(){
    //console.log(e)
    // wx.redirectTo({
    //   url: '/pages/bindphone/bindphone'
    // })
    this.getIndexProject();
  }
  async getIndexProject(){
    let res = await wx.app.ajax({url:"https://xcx.chinamuxie.com/wxapi/project/getIndexProject"});
    var _data = res.data;
    var _mImgArr = {};
    for (var i = 0; i < _data.length; i++) {
      _mImgArr[_data[i].id] = _data[i]
    }
    console.log(_mImgArr)
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
  async linkTo(event) {
      if(this.isLink) return;
      this.isLink = true;
      await wx.navigateTo({
        url:event.currentTarget.dataset.link
      })
      this.isLink = false;
  }
}
