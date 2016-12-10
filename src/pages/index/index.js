import wx from 'labrador';

//import Swiper from '../../components/swiper/swiper';
import Navbar from '../../components/navbar/navbar';
export default class Index extends wx.Component {
  data = {
    banner:{
        img:'https://portrait.chinamuxie.com/${oss.photo.resourceImgPrefix}online-59c0fbca845e40059e9e6f1be1f66cad.jpg',
        href:'/pages/bannerIndex/bannerIndex'
    },
    media:[],
    mImgArr:{},
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
  async bannerInit() {
    var res = await wx.request({
      url: 'https://xcx.chinamuxie.com/wxapi/banner/list',
      data: {
         bannerType:0
      }
    })
    let imgUrls = [];
    let imgUrlsArr = res.data.data || [];
    for(let i=0;i<imgUrlsArr.length;i++){
      var imgObj = {}
      imgObj.img = imgUrlsArr[i].bannerImgUrl;
      imgObj.link = imgUrlsArr[i].bannerLinkUrl;
      imgUrls.push(imgObj)
    }
    this.setData({
      bannerImgs:imgUrls
    })
  }
  async objectInit(){
    let _this = this;
    let objRes = await wx.request({
      url: 'https://xcx.chinamuxie.com/wxapi/project/getIndexProject',
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      }
    })
    let obj_data = objRes.data.data;
    let project = this.data.project;
    obj_data.forEach(function(item) {
        let id = item.id-1;
        //project[id].content = _this.mreplace(project[id].content,[item.minAge,item.maxAge,item.projectTotalUser])
        //project[item.id].content = project[item.id].content.replace("{0}",item.minAge).replace("{1}",item.maxAge).replace("{2}",item.projectTotalUser);
        //console.log(project[item.id].content)
        mImgArr[id].mImgArr = item.headImg;
    });
    this.setData({
      mImgArr:mImgArr
    })
  }
  async onLoad(e) {
    this.bannerInit();
    this.objectInit();
    // await wx.navigateTo({
    //     url:"/pages/healthQA/doctorDetail"
    //   })
  }
}
