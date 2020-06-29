// components/listbutton/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listbutton:String,
    typeID:String
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
  onButton(){
    // console.log(this.properties.typeID)
    this._maotuo();
  },
  _maotuo(){
    wx.showToast({
      title:"当前微信小程序为测试版本，不能点击跳转哦~",
      icon:"none",
      duration:1000,
      mask:true
    })
  }
  }
})
