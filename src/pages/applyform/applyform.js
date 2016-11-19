import wx from 'labrador';

export default class Applyform extends wx.Component {
	data = {
		planArr:["请选择",'美国', '中国', '巴西', '日本'],
		index: 0
	};
	bindPickerChange(e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  index: e.detail.value
		})
	}
	bindTextAreaBlur(e) {
	    console.log(e.detail.value)
	}
	linkTo(event) {
	  wx.navigateTo({
	    url:event.currentTarget.dataset.link
	  })
	}
}