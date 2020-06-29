// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    typelist:["轻芒","兴趣","物质","世界","新闻","灵魂"],
    mkezan:0,
    mkeaznid:"mkeaznid0"
  },

  /**
   * 组件的方法列表
   */
  methods: {
ontap(e){
  const show = this.data.mkezan;
 const index = e.currentTarget.dataset.index;
 console.log(this.data.mkeaznid + index)
 this.setData({
   mkezan:index,
   mkeaznid:"mkeaznid"+ (index === 0 ? 0 : index-1)
 })
 if(show == index){
   return
 }
 this.triggerEvent("mytrigger",{ index},{})
}
  }
})
