import wx from 'labrador';
export default class Swiper extends wx.Component {
	data = {
		imgUrls:[
			{
				img:'https://portrait.chinamuxie.com/${oss.photo.resourceImgPrefix}online-59c0fbca845e40059e9e6f1be1f66cad.jpg',
				link:'#'
			}
		],
		indicatorDots: true,
		autoplay: true,
		interval: 5000,
		duration: 1000
	};
	props = {
	    imgUrls: []
	};
	bannerimglink(event) {
		wx.navigateTo({
			url:event.target.dataset.link
		})
	}
	onUpdate(props) {
	    this.setData('imgUrls', props.imgUrls);
	}
}
