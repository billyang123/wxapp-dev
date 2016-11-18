import wx from 'labrador';

export default class Bindphone extends wx.Component {
	data = {
		userInfo:{},
		phoneValue:"",
		codeValue:"",
		btnText:"获取验证码",
		disabled:true,
		cDisCls:"btn",
		loading:false,
		tmOn:false
	};
	bindKeyInput(e){
		let name = e.target.dataset.name,
			data = {};
		data[name] = e.detail.value
		this.setData(data);
	}
	shoutTime(){
		let _this= this;
		let secNum = 60;
		if(this.tmOn) return;
		this.tmOn = true;
		this.setData({
			cDisCls:"btn disabled",
			btnText:secNum+"秒后重发"
		})
		let STM = setInterval(function(){
			secNum--;
			if(secNum <=0){
				clearInterval(STM);
				this.tmOn = false;
				_this.setData({
					cDisCls:""
				})
			}
			_this.setData({
				btnText:secNum+"秒后重发"
			})
		},1000);
	}
	getCheckCode(e){
		this.shoutTime()
	}
	async onLoad() {
	    var userInfo = await wx.getUserInfo();
	    this.setData({
	    	userInfo:userInfo.userInfo
	    })
	}
}