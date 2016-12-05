import wx from 'labrador';

export default class Forfamily extends wx.Component {
	data = {
	};
	async linkTo(event) {
	  if(this.isLink) return;
	  this.isLink = true;
	  await wx.navigateTo({
	    url:event.currentTarget.dataset.link
	  })
	  this.isLink = false;
	}
}