import wx from 'labrador';

import Swiper from '../../components/swiper/swiper';
export default class Index extends wx.Component {
  data = {
    bannerImgs:[],
    project:[
      {
        title:"789重大疾病互助社群",
        content:"适用于{0}-{1}周岁健康人群癌症等25种重大疾病互助最高可获30万元互助金{2}人加入",
        img:"/images/78902_img001.png"
      },
      {
        title:"留守儿童互助社群",
        content:"适用于{0}-{1}周岁人群大病、意外、走失、辍学互助最高可获33万元互助金{2}人加入",
        img:"/images/stayChildren02_img001.png"
      },
      {
        title:"交通、旅游意外互助社群",
        content:"适用于{0}-{1}周岁人群公共交通、旅游意外互助",
        img:"/images/traffic02_img001.png"
      },    
      {
        title:"少儿大病、意外互助社群",
        content:"适用于{0}-{1}周岁少儿少儿大饼、意外互助最高可获35万元互助金{2}人加入",
        img:"/images/children02_img001.png"
      },
      {
        title:"80后孕妈婴宝互助社群",
        content:"适用于80后备孕、已孕妈妈孕期、孕产、婴儿疾病互助最高可获10万元互助金{2}人加入",
        img:"/images/8002_img001.png"
      },
      {
        title:"中老年大病、意外互助社群",
        content:"适用于{0}-{1}周岁人群抗癌、大病、意外互助最高可获35万元互助金{2}人加入",
        img:"/images/old02_img001.png"
      }
    ],
    media:[]
  };
  children = {
    swiper: new Swiper({imgUrls:"@bannerImgs"})
  };
  async makePhoneCall(event){
    wx.makePhoneCall({
      phoneNumber: event.target.dataset.phoneNumber
    })
  }
  async linkTo(event) {
    wx.navigateTo({
      url:event.target.dataset.link
    })
  }
  async bannerInit() {
    var res = await wx.request({
      url: 'https://xcx.chinamuxie.com/wxapi/banner/list',
      data: {
         bannerType:0
      },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
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
        project[id].content = _this.mreplace(project[id].content,[item.minAge,item.maxAge,item.projectTotalUser])
        //project[item.id].content = project[item.id].content.replace("{0}",item.minAge).replace("{1}",item.maxAge).replace("{2}",item.projectTotalUser);
        //console.log(project[item.id].content)
        project[id].mImgArr = item.headImg;
    })
    this.setData({
      project:project
    })
  }
  async onLoad() {
    this.bannerInit();
    this.objectInit();
    
  }
  onReady() {
      
  }
}
