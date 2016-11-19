import wx from 'labrador';

export default class Claim extends wx.Component {
	data = {
	};
	linkTo(event) {
	  wx.navigateTo({
	    url:event.currentTarget.dataset.link
	  })
	}
}