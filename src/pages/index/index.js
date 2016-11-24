import wx from 'labrador';

import Swiper from '../../components/swiper/swiper';
export default class Index extends wx.Component {
  data = {
    bannerImgs:[],
    media:[],
    mImgArr:{}
  };
  children = {
    swiper: new Swiper({imgUrls:"@bannerImgs"})
  };
  async makePhoneCall(event){
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.phoneNumber
    })
  }
  linkTo(event) {
      wx.navigateTo({
        url:event.currentTarget.dataset.link
      })
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
  mreplace(str,arr) {
    for (var i = 0; i < arr.length; i++) {
      let reg = new RegExp("\\{"+i+"\\}", "gim");
      let mtch = str.match(reg)
      if(mtch){
        str = str.replace(mtch[0],arr[i])
      }
    }
    return str;
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
    let location = await wx.getLocation();
  }
}
