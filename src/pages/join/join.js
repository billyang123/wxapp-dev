import wx from 'labrador';

let jsonData={
  items:[
    {convention:'《17互助公约》',checked: 'true'},
    {convention:'《789重大疾病互助公约》',checked: 'true',condition:'加入条件：适用于18-46周岁，在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。',remind:'请在加入本互助社群前咨询家人，避免重复加入。'},
    {convention:'《留守儿童互助公约》',checked: 'true',condition:'加入条件：3-15周岁，父母双方或一方在外地打工，而自己留在农村生活的孩童，或不在父母身边的城市孩童，在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。',remind:''},
    {convention:'《公共交通、旅游意外互助公约》',checked: 'true',condition:'加入条件：16-60周岁。',remind:'请在加入本互助社群前咨询家人，避免重复加入。'},
    {convention:'《少儿大病、意外互助计划公约》',checked: 'true',condition:'加入条件：1周岁－未满18周岁健康青少年在加入互助社群之前，未曾患有互助公约所描述的25种重大疾病的人群。',remind:'请在加入本互助社群前咨询家人，避免重复加入。'},
    {convention:'《80后孕妈婴宝互助公约》',checked: 'true',condition:'加入条件：未满36周岁的孕妈妈或者备孕妈妈，加入之日怀孕周期未超过24周。在加入互助社群之前，未曾患有互助公约所描述的疾病的人群',remind:'请在加入本互助社群前咨询家人，避免重复加入。'},
    {convention:'《中老年大病意外互助公约》',checked: 'true',condition:'加入条件：46-70周岁，在加入互助社群之前，未曾患有互助公约所描述的恶性肿瘤或24种重大疾病的人群。',remind:'请在加入本互助社群前咨询家人，避免重复加入。'}
  ]
};
export default class Join extends wx.Component {
	data = {
		projectId:1,
    persons:[{}],
    publicConvention:'',
    conventionTxt:'',
    publicChecked:true,
    checked:true,
    conditionTxt:'',
    bl:true
	};
	addPerson(e){
    for(let i=0;i<this.data.persons.length;i++) {
      if (typeof this.data.persons[i].name == "undefined") {
        wx.showModal({
          title: '提示',
          content: '请输入正确姓名',
          showCancel: false,
          success: function (res) {
          }
        });
        return;
      }
      if (typeof this.data.persons[i].cardCode == "undefined") {
        wx.showModal({
          title: '提示',
          content: '请输入有效身份证号',
          showCancel: false,
          success: function (res) {
          }
        });
        return;
      }
      if (!this.data.persons[i].name.length>0) {
        wx.showModal({
          title: '提示',
          content: '请输入正确姓名',
          showCancel: false,
          success: function (res) {
          }
        });
        return;
      }
      if (!this.checkisIDCard(this.data.persons[i].cardCode)) {
        wx.showModal({
          title: '提示',
          content: '请输入有效身份证号',
          showCancel: false,
          success: function (res) {
          }
        });
        return;
      }
    }
		this.data.persons.push({});
		this.setData({
			persons:this.data.persons
		});
	}
	removePerson(e){
		if(this.data.persons.length==1){
			return;
		}
		let idx=e.currentTarget.dataset.idx;
		this.data.persons.splice(parseInt(idx),1);
		this.setData({
			persons:this.data.persons
		});
	}
  checkChange(){
    this.setData({
      checked:!this.data.publicChecked
    });
  }
  /*身份证校验*/
  checkisIDCard (IDcard) {
    let isIDCard=/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/;

    if(isIDCard.test(IDcard)){
      return true;
    }else{
      return false;
    }
  }
  
	async joinBind(e){
      for(let i=0;i<this.data.persons.length;i++) {
        if (typeof this.data.persons[i].name == "undefined") {
          wx.showModal({
            title: '提示',
            content: '请输入正确姓名',
            showCancel: false,
            success: function (res) {
            }
          });
          return;
        }
        if (typeof this.data.persons[i].cardCode == "undefined") {
          wx.showModal({
            title: '提示',
            content: '请输入有效身份证号',
            showCancel: false,
            success: function (res) {
            }
          });
          return;
        }
        if (!this.data.persons[i].name.length>0) {
          wx.showModal({
            title: '提示',
            content: '请输入正确姓名',
            showCancel: false,
            success: function (res) {
            }
          });
          return;
        }
        if (!this.checkisIDCard(this.data.persons[i].cardCode)) {
          wx.showModal({
            title: '提示',
            content: '请输入有效身份证号',
            showCancel: false,
            success: function (res) {
            }
          });
          return;
        }
      }
    
      if (this.data.bl){
        this.setData({
          bl:false
        });
        let res = await wx.request({
          url: 'https://xcx.chinamuxie.com/wxapi/project/join/byIdCard',
          header: {
            'content-type': "application/json"//'application/x-www-form-urlencoded'
          },
          method:"POST",
          data:{
            projectId:this.data.projectId,
            persons:this.data.persons,
            code:wx.app.globalData.storage.code
          }
        });
        if(res.data.status == 0){
          await wx.navigateTo({
            url:'/pages/joinEnd/joinEnd'
          })
        }else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel:false,
            success: function(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
        this.setData({
          bl:true
        });
      }
      
		
	   
	}
	bindKeyInput(e){
		let name = e.currentTarget.dataset.name,
			index = e.currentTarget.dataset.idx;
		this.data.persons[index][name] = e.detail.value;
		this.setData({
			persons:this.data.persons
		});
	}
  async onLoad(e){
    let id = parseInt(e.type);
    this.setData({
      publicConvention:jsonData.items[0].convention,
      conventionTxt:jsonData.items[id].convention,
      projectId:id,
      conditionTxt:jsonData.items[id].condition
    });
  }

}
