import wx from 'labrador';

var myData = [
	{
		title:"留守儿童互助公约",
		list:[
			{
				n:"《留守儿童重大疾病互助公约》",
				link:"/pages/hzpact/hzpact?type=2"
			},
			{
				n:"《留守儿童意外伤害互助公约》",
				link:"/pages/hzpact/hzpact?type=3"
			},
			{
				n:"《留守儿童走失互助公约》",
				link:"/pages/hzpact/hzpact?type=4"
			},
			{
				n:"《留守儿童法律维权互助公约》",
				link:"/pages/hzpact/hzpact?type=5"
			},
			{
				n:"《留守儿童辍学互助公约》",
				link:"/pages/hzpact/hzpact?type=6"
			},
			{
				n:"《留守儿童心理疾病互助公约》",
				link:"/pages/hzpact/hzpact?type=7"
			}
		]
	},
	{
		title:"少儿大病、意外互助公约",
		list:[
			{
				n:"《少儿重大疾病互助公约》",
				link:"/pages/hzpact/hzpact?type=9"
			},
			{
				n:"《少儿意外伤害互助公约》",
				link:"/pages/hzpact/hzpact?type=10"
			}
		]
	},
	{
		title:"中老年抗癌、大病互助公约",
		list:[
			{
				n:"《中老年抗癌、大病互助公约》",
				link:"/pages/hzpact/hzpact?type=12"
			},
			{
				n:"《中老年意外伤害互助公约》",
				link:"/pages/hzpact/hzpact?type=13"
			}
		]
	}
]
export default class Hzpactlist extends wx.Component {
	data = {
		
	};
	onLoad(e){
		let id = parseInt(e.id);
		let mdata = myData[id-1];
		this.setData({
			title:mdata.title,
			list:mdata.list
		})
	}
}
function getTxt(){
	var obj = {
		title:$(".header-fixed > span").text()
	};
	var result = []
	$('.am-panel').each(function(index,item) {
		$(item).find(".am-panel-collapse").show();
		var r = {
			a:"",
			height:$(item).find(".am-panel-collapse").outerHeight()*2,
			opacity:1,
			isDown:false
		};
		r.t = $(item).find(".am-panel-title").text();
		var arr = [];

		$(item).find(".am-panel-bd>p .am-panel-bd>table").each(function(idx,dt){

			var str = "";
			$(dt).find("span").each(function(i,span){
				str += $(span).html();
			})
			arr.push(str)
		})
		r.txt = arr;
		result.push(r);
	})
	obj.slidedata = result;
	return JSON.stringify(obj)
}