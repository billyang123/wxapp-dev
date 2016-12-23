import wx from 'labrador';

export default class BannerIndex extends wx.Component {
	data = {
		
	}
	makePhoneCall(event){
		//console.log(event)
		wx.app.makePhoneCall(event)
	}
}