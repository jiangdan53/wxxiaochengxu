// components/nixtImg/nixtImg.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    diyitit:String,
    imgArr:Object
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
    toimg(e){
      var index = e.currentTarget.dataset.img;
      console.log(index)
      wx.previewImage({
        urls:this.data.imgArr,
        current:this.data.imgArr[index]
      })
    }
  }
})
