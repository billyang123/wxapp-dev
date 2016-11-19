import wx from 'labrador';

export default class Join extends wx.Component {
	data = {
		projectId:1,
	  	persons:[{}]
	}
	addPerson(e){
		this.data.persons.push({});
		this.setData({
			persons:this.data.persons
		})
	}
	removePerson(){
		if(this.data.persons.length==1){
			return;
		}
		let index = this.data.persons[idx];
		this.data.persons.splice(parseInt(index),1);
		this.setData({
			persons:this.data.persons
		})
	}
	async joinBind(e){
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
	    })
	    if(res.data.status == 0){

	    }
	    console.log(res);
	}
	bindKeyInput(e){
		let name = e.currentTarget.dataset.name,
			index = e.currentTarget.dataset.idx;
		console.log(name,index)
		this.data.persons[index][name] = e.detail.value
		this.setData({
			persons:this.data.persons
		});
	}

}