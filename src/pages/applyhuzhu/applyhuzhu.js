import wx from 'labrador';

export default class Applyhuzu extends wx.Component {
	data = {
    	
	};
	makePhoneCall(event){
		wx.app.makePhoneCall(event)
	}
}
