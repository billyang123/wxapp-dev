import wx from 'labrador';

export default class Applyform extends wx.Component {
	data = {
		planArr:["请选择"],
		index: 0,
    TextArea:'',
    useName:'',
    phone:'',
    persons:{},
    arr:{},
    projectIdArr:[],
    claimContent:''
  };
	bindPickerChange(e) {
    
		this.setData({
		  index: e.detail.value
		});
	}
	bindTextAreaBlur(e) {
   
    this.setData({
      claimContent:e.detail.value
    });
    
	}
  bindKeyInput(e) {
    let name= e.currentTarget.dataset.name;
    this.data.persons[name] = e.detail.value;
    this.setData({
      persons: this.data.persons
    });
  }
  async onSub(){
    if (this.data.index>0){
      if (typeof this.data.persons.name=="undefined"){
        wx.showModal({
          title: '提示',
          content: '请输入正确姓名',
          showCancel:false,
          success: function(res) {}
        });
        return;
      }
      if (typeof this.data.persons.phone=="undefined"){
        wx.showModal({
          title: '提示',
          content: '请输入有效联系方式',
          showCancel:false,
          success: function(res) {}
        });
        return;
      }
      if (!this.data.persons.name.length>0){
        wx.showModal({
          title: '提示',
          content: '请输入正确姓名',
          showCancel:false,
          success: function(res) {}
        });
        return;
      }
      if (!this.data.persons.phone.length>0){
        wx.showModal({
          title: '提示',
          content: '请输入有效联系方式',
          showCancel:false,
          success: function(res) {}
        });
        return;
      }
      if (!this.data.claimContent.length>0){
        wx.showModal({
          title: '提示',
          content: '请简要输入事件内容',
          showCancel:false,
          success: function(res) {}
        });
        return;
      }
      
      let res=await wx.request({
        url:'https://xcx.chinamuxie.com/wxapi/user/claim/commit',
        method:'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          claimName:this.data.persons.name,
          claimContact:this.data.persons.phone,
          code:wx.app.globalData.storage.code,
          projectId:this.data.projectIdArr[this.data.index-1],
          claimContent:this.data.claimContent
        }
      });
      if (res.data.status ==0){
        console.log('提交成功--'+res)
      }else {
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          showCancel:false,
          success: function(res) {}
        })
      }
    }else {
      wx.showModal({
        title: '提示',
        content: '请选择计划',
        showCancel:false,
        success: function(res) {}
      })
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
      for (let i=0; i<res.data.data.length;i++){
        this.data.planArr.push(res.data.data[i].projectName);
        this.data.projectIdArr.push(res.data.data[i].projectId)
      }
        this.setData({
          planArr:this.data.planArr,
          projectIdArr:this.data.projectIdArr
        });
    }
    
  }
}
