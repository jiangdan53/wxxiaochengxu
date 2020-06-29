// components/buttonf/buttonf.js

Component({
  /**
   * 组件的属性列表
   */
  options:{
  multipleSlots:true
  },
  properties: {
    opentype:String,
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
    Getursinfo(e){
      this.triggerEvent('getuseinfo',e.detail,{})
    }
  }
})
