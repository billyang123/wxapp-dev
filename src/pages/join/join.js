import wx from 'labrador';

export default class Join extends wx.Component {
	data = {
	
	}
	bindKeyInput(e){
		let name = e.target.dataset.name,
			data = {};
		data[name] = e.detail.value
		this.setData(data);
	}

}