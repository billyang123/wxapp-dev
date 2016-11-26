import wx from 'labrador';

export default class Forfamily extends wx.Component {
	data = {
	};
	linkTo(event) {
	  wx.redirectTo({
	    url:event.currentTarget.dataset.link
	  })
	}
}