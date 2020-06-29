// components/vdio/vdio.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    gif: String,
    dus: String,
    diyitit: String,
    vdioID: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    vdio: true,
  },
// 页面初始化函数
// 组件生命周期对象可以放各种函数对象里面的生命周期函数优先级大于外部函数
lifetimes:{
  attached(){
    this.setvdio();
  }
},
// attached(){
//   this.setvdio();
// },
  /**
   * 组件的方法列表
   */
  methods: {
    onpaly() {
      this.setdata();
      this.cmppaly();
    },
    onmske(){
      this.setdata();
      this.cmpstop();
      

    },
    ended(){
      this.setdata();
    },
    setdata(){
      this.setData({
        vdio: !this.data.vdio
      })
    },
    cmppaly(){
      this.vdio.play();
    },
    cmpstop(){
      this.vdio.seek(0);
      this.vdio.stop();
    },
    setvdio(){
      const id = this.properties.vdioID
      this.vdio = wx.createVideoContext(id, this)
    }
  }
})
