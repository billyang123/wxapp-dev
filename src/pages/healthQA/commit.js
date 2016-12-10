import wx from 'labrador';
export default class Commit extends wx.Component {
	data = {
	};
	bindTextAreaBlur(e){
		console.log(e.detail.value)
	}
}