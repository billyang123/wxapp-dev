import wx from 'labrador';

export default class Applyform extends wx.Component {
	data = {
		planArr:["请选择",'美国', '中国', '巴西', '日本'],
		index: 0,
    TextArea:'',
    useName:'',
    phone:'',
    persons:{},
    arr:{}
	};
	bindPickerChange(e) {
		this.setData({
		  index: e.detail.value
		})
	}
	bindTextAreaBlur(e) {
    var name= e.currentTarget.dataset.name;
    this.data.persons[name] = e.detail.value;
    this.data.arr['code']=wx.app.globalData.storage.code;
    this.data.arr['persons']=this.data.persons;
    this.data.arr['planArr']=this.data.planArr[1];
    this.setData({
      persons:this.data.persons
    });
    console.log(this.data.arr)
	}
  bindKeyInput(e) {
    var name= e.currentTarget.dataset.name;
    this.data.persons[name] = e.detail.value;
    this.setData({
      persons: this.data.persons
    });
  }
  async onSub(){
    let res=await wx.request({
      url:'',
      method:'',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        persons:this.data.persons,
        code:wx.app.globalData.storage.code
      }
    });
    if (res.data.status ==0){
      
    }
  }
  async onLoad(e){
    let res = await wx.request({
      url: 'https://xcx.chinamuxie.com/wxapi/user/claim/index',
      method:"get",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code:wx.app.globalData.storage.code
      }
    });
    if (res.data.status ==0){
      console.log(res);
        this.setData({
  
        });
    }
    
  }
}
