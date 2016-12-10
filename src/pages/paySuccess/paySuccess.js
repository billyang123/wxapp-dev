import wx from 'labrador';
export default class PaySuccess extends wx.Component {
	data={
    	
	};
	makePhoneCall(event){
		wx.app.makePhoneCall(event)
	}
}