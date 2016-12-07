import wx from 'labrador';
export default class Alert extends wx.Component {

  //默认属性值
  props = {
    msg: '',
    maxheight:70
  };
  //默认data数据
  data = {
  	msg: '',
    animdata: ''
  };

  //监听props值的改变
  onUpdate(props) {

    if (props.msg !== this.props.msg) {
      //props.count 值发生了变化，更新data
      this.setData({ msg: props.msg });
    }
    if (props.maxheight !== this.props.maxheight) {
      //props.count 值发生了变化，更新data
      this.setData({ maxheight: props.maxheight });
    }
  }
  show(txt){
  	this.Animation.height(this.props.maxheight+"rpx").step();
    this.setData({
    	animdata:this.Animation.export(),
    	msg: txt
    })
    setTimeout(function(){
      this.Animation.height(0).step();
      this.setData({
        animdata:this.Animation.export()
      })
    }.bind(this),3000)
  }
  hide(){
  	console.log(this.Animation)
  	this.Animation.height(0).step();
    this.setData({
    	animdata:this.Animation.export()
    })
  }
  onLoad(){
	this.Animation  = wx.createAnimation({
	  duration: 400,
	  timingFunction: 'ease',
	});
	this.isOne = true;
    this.hide();
  }
}
