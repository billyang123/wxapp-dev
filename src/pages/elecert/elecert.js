import wx from 'labrador';
import Slide from '../../components/slide/slide';
export default class Elecert extends wx.Component {
	data = {
        items:['《17互助公约》','《789重大疾病互助公约》','《留守儿童互助公约》','《公共交通、旅游意外互助公约》','《少儿大病、意外互助计划公约》','《80后孕妈婴宝互助公约》','《中老年大病意外互助公约》'],
		project:{},
		list:{},
    relationship:{
      SELF:"本人",MATE:"配偶",CHILDRENS:"子女",PARENTS:"双方父母",GRANDCHILD:"(外)孙子女",GRANDPARENTS:"双方(外)祖父母"
    },
		projectAccount:{},
        projectId:''
	};
	async showIntro(){
		let showModal = await wx.showModal({
		  title: '什么是等待期？',
		  content: '等待期又称观察期，互助会员加入互助计划后，在等待期内发生的重大疾病不享受互助。设立等待期是为了防止互助会员明知道将发生事故，而马上加入以骗取互助金。',
		  showCancel:false,
		  confirmText:"知道了",
		  confirmColor:"#ff6a00"
		})
	}
	async linkTo(event) {
          if(this.isLink) return;
          this.isLink = true;
          await wx.redirectTo({
            url:event.currentTarget.dataset.link
          })
          this.isLink = false;
    }
	async onLoad(e){
		let id = e.id;
		let elecertData = await wx.request({
            url: wx.app.data.ajaxPath+'/wxapi/project/account/detail',
            method:"post",
            header: {
			        'content-type': 'application/x-www-form-urlencoded'
			      },
            data: {
            	code:wx.app.globalData.storage.code,
            	projectAccountId:id
            }
        });
        let createTime = elecertData.data.data.projectAccount.createTime;
        let effectiveTime = elecertData.data.data.projectAccount.effectiveTime;
        elecertData.data.data.projectAccount.createTime = (new Date(createTime)).format("yyyy-MM-dd hh:mm:ss");
        elecertData.data.data.projectAccount.effectiveTime = (new Date(effectiveTime)).format("yyyy-MM-dd hh:mm:ss")
        this.setData({
        	project:elecertData.data.data.project,
			    list:elecertData.data.data.list,
			    projectAccount:elecertData.data.data.projectAccount,
          projectId:elecertData.data.data.project.id
        });
        //console.log(elecertData)
	}
}
