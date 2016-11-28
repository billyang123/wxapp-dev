import wx from 'labrador';

export default class Claim extends wx.Component {
	data = {
	};
	async linkTo(event) {
	  if(this.isLink) return;
	  this.isLink = true;
	  await wx.redirectTo({
	    url:event.currentTarget.dataset.link
	  })
	  this.isLink = false;
	}
}