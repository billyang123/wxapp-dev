import wx from 'labrador';

let jsonData={
  items:[
    {convention:'《17互助公约》',checked: 'true'},
    {convention:'《789重大疾病互助公约》',checked: 'true'},
    {convention:'《留守儿童互助公约》',checked: 'true'},
    {convention:'《公共交通、旅游意外互助公约》',checked: 'true'},
    {convention:'《少儿大病、意外互助计划公约》',checked: 'true'},
    {convention:'《80后孕妈婴宝互助公约》',checked: 'true'},
    {convention:'《中老年大病意外互助公约》',checked: 'true'}
  ]
};
export default class Join extends wx.Component {
	data = {
		projectId:1,
    persons:[{}],
    publicConvention:'',
    conventionTxt:'',
    publicChecked:true,
    checked:true
	};
	addPerson(e){
		this.data.persons.push({});
		this.setData({
			persons:this.data.persons
		})
	}
	removePerson(e){
		if(this.data.persons.length==1){
			return;
		}
		let idx=e.currentTarget.dataset.idx;
		let index = this.data.persons[idx];
		this.data.persons.splice(parseInt(index),1);
		this.setData({
			persons:this.data.persons
		})
	}
  checkChange(){
    this.setData({
      checked:!this.data.publicChecked
    });
    console.log('publicChecked'+this.data.publicChecked);
    console.log('checked'+this.data.checked)
  }
	async joinBind(e){
    console.log(this.data.checked);
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
	    }
	    console.log(res);
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
      projectId:id
    });
  }

}
