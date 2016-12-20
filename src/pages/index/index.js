import wx from 'labrador';

//import Swiper from '../../components/swiper/swiper';
import Navbar from '../../components/navbar/navbar';
export default class Index extends wx.Component {
  data = {
    banner:{
        img:'/images/banner_01_750x250.png',
        href:'/pages/bannerIndex/bannerIndex'
    },
    assetsPath:wx.app.data.assetsPath
  };
  children = {
    //swiper: new Swiper({imgUrls:"@bannerImgs"}),
    navbar: new Navbar({cur:0})
  };
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
