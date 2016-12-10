import wx from 'labrador';
export default class DoctorDetail extends wx.Component {
	data = {
	};
	bindTextAreaBlur(e){
		console.log(e.detail.value)
	}
}