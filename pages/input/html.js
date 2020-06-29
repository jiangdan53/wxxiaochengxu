// pages/input/html.js
import {Init} from "../../module/zazhiModule.js"
const init = new Init();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const word = options.value
    this.setData({
      word
    })
  const textList = init.getdata(word)
  const texttit = init.getinit(word)
    Promise.all([textList,texttit]).then(res=>{
      this.setData({
        textList:res[0],
        texttit:res[1]
      })
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})