// components/inputhtml/input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    val:String
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
    onFirm(e){
      const value = this.data.val || e.detail.value
      if(value !=='读书'){
        wx.showToast({
          title:"管理员正在跟新资讯哦",
          icon:'none'
        })
        return
      }
      wx.navigateTo({
        url:`/pages/input/html?value=${value}`
      })
    },
    onBlur(e){
      const value = e.detail.value
      this.setData({
        val:value
      })
    }
  }
})
