// components/buttonx/buttonx.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    but:Boolean
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
    onx(){
      this.setData({
        but:!this.data.but
      })
      this.triggerEvent('like',{but:this.data.but},{})
    }
  }
})
