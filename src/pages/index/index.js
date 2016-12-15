import wx from 'labrador';

//import Swiper from '../../components/swiper/swiper';
import Navbar from '../../components/navbar/navbar';
export default class Index extends wx.Component {
  data = {
    banner:{
        img:'https://portrait.chinamuxie.com/${oss.photo.resourceImgPrefix}online-59c0fbca845e40059e9e6f1be1f66cad.jpg',
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
