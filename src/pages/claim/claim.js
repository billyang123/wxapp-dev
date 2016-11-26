import wx from 'labrador';

export default class Claim extends wx.Component {
	data = {
	};
	linkTo(event) {
	  wx.redirectTo({
	    url:event.currentTarget.dataset.link
	  })
	}
}