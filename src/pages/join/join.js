import wx from 'labrador';
import Alert from '../../components/alert/alert';
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
    bl:true,
    checkedValue:["1","2"]
	};
  children = {
    alert: new Alert({msg:"@msg"})
  };

	addPerson(e){
    for(let i=0;i<this.data.persons.length;i++) {
      if (typeof this.data.persons[i].name == "undefined") {
        this.children.alert.show("请输入正确姓名");
        return;
      }
      if (typeof this.data.persons[i].cardCode == "undefined") {
        this.children.alert.show("请输入有效身份证号");  
        return;
      }
      if (!this.data.persons[i].name.length>0) {
        this.children.alert.show("请输入正确姓名");
        return;
      }
      if (!this.checkisIDCard(this.data.persons[i].cardCode)) {
        this.children.alert.show("请输入有效身份证号");
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
  checkChange(e){
    this.setData({
      checkedValue:e.detail.value
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
  showAlert(txt){
    var _this = this;
    if(!this.Animation){
      this.Animation  = wx.createAnimation({
          duration: 400,
          timingFunction: 'ease',
      });
    }
    this.Animation.height("70rpx").step();
    this.setData({
      error:{
        msg:txt,
        anim:this.Animation.export()
      }
    })
    setTimeout(function(){
      this.Animation.height(0).step();
      _this.setData({
        error:{
          anim:_this.Animation.export()
        }
      })
    },3000)
  }
	async joinBind(e){
    if(this.status) return;
    this.status = true;
    console.log(this.data.persons)
    for(let i=0;i<this.data.persons.length;i++) {
      if (typeof this.data.persons[i].name == "undefined") {
        this.children.alert.show("请输入正确姓名");
        this.status = false;
        return;
      }
      if (typeof this.data.persons[i].cardCode == "undefined") {
        this.children.alert.show("请输入有效身份证号");

        this.status = false;
        return;
      }
      if (!this.data.persons[i].name.length>0) {
        this.children.alert.show("请输入正确姓名");
        this.status = false;
        return;
      }
      if (!this.checkisIDCard(this.data.persons[i].cardCode)) {

        this.children.alert.show("请输入有效身份证号");
        this.status = false;
        return;
      }
      if (this.data.checkedValue.length<2){
        this.children.alert.show("加入前请先同意社群公约");
        this.status = false;
        return;
      }
    }
  
    if (this.data.bl){
      this.setData({
        bl:false
      });
      let res = await wx.request({
        url: 'https://xcx.chinamuxie.com/wxapi/project/join/byIdCardPay',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method:"POST",
        data:{
          projectId:this.data.projectId,
          persons:JSON.stringify(this.data.persons),
          code:wx.app.globalData.storage.code
        }
      });
      if(res.data.status == 0){
        let payResult = await wx.requestPayment(res.data.data)
        console.log(payResult)
        await wx.redirectTo({
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
    this.status = false;  
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
    var id = parseInt(e.type)
    this.setData({
      publicConvention:jsonData.items[0].convention,
      conventionTxt:jsonData.items[id].convention,
      projectId:id,
      conditionTxt:jsonData.items[id].condition
    });
  }

}
