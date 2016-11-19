import wx from 'labrador';

export default class Applyform extends wx.Component {
	data = {
	};
	linkTo(event) {
	  wx.navigateTo({
	    url:event.currentTarget.dataset.link
	  })
	}
}