// components/textAct/act.js
import {ModulesLike} from "../../module/likeModule.js"
const LikeModules = new ModulesLike()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Actmask:Object
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    bolo:false
  },
attached(){
  const Actmask = this.data.Actmask
  const listId = Actmask.artId
  const likelist = wx.getStorageSync("likelist")  || []
  // let bolo = false
  // likelist.forEach((item,index)=>{
  //   if(item.artId == listId){
  //     bolo = true
  //   }
  // })
  let bolo = LikeModules.getlikeStaust(listId)
  this.setData({
    bolo:bolo
  })
},
  /**
   * 组件的方法列表
   */
  methods: {
    onlike(e){
      // console.log(e.detail)
      const like = e.detail.but;
      const Actmask = this.data.Actmask
      const listId = Actmask.artId
      // const likelist = wx.getStorageSync("likelist")  || []
      if(like){
        // likelist.pus(Actmask)
        // likelist.unshift(Actmask)
        // wx.setStorageSync("likelist",likelist)
        LikeModules.addlikeList(Actmask)
      }else{
        LikeModules.removelikeList(listId)
        // let Myindex = 0
        // likelist.forEach((item,index)=>{
        //   if(item.artId == listId){
        //     Myindex = index
        //   }
        // }) 
        // likelist.splice(Myindex,1)
        // wx.setStorageSync("likelist",likelist)
      }
    }
  }
})
