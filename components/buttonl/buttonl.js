// components/buttonl/buttonl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    ontap() {
      const type = this.properties.type;
      wx.showActionSheet({
        itemList:["内容过期了","内容与" + type+"内容不相干","内容于"+ type+"相隔久远"],
        success:function(res){
          const index = res.tapIndex;
          console.log(index)
          if(index >= 0 ){
            wx.showToast({
              title:"已提交哦",
              duration:1000
            })
          }
        },
        fail:function(res){
          console.log(res)
        }
      })
    }
  }
})
