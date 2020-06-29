// pages/HomePage/HomePage.js
import { InexMoudle } from "../../module/IndexModule.js"
import { redirc } from "../../utils/shujishu.js"
const indexModule = new InexMoudle
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Alist: [],
    Recom: [],
    nack: {},
    jiazai: "",
    myid: 0,
    long: true,
    mkanid: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   console.log("onLoad")
    //   r.getData({
    //     url:'/getMarkTypeList/0'
    //   }).then(res=>{
    //     console.log(res)
    //   })
    // },
    //   .then(res=>{
    //     console.log(res,"首页文章列表")
    //   })
    //   indexModule.getRecommendInfo().then(res=>{
    // console.log(res,"首页推荐详情")
    //   })
    //   indexModule.getmackList().then(res=>{
    //     console.log(res,"首页标记标签列表")
    //   })
    this.getProm()
  },
  getProm(magazineId) {
    const Alist = indexModule.getAlist(magazineId);
    const Recom = indexModule.getRecommendInfo(magazineId);
    const nack = indexModule.getmackList(magazineId);
    Promise.all([Alist, Recom, nack]).then(res => {
      this.setData({
        Alist: res[0],
        Recom: res[1],
        nack: res[2]
      })
      this.londing()
    })

  },
  londing() {
    this.setData({
      long: false
    })
  },
  onCatalog(){
    wx.switchTab({
      url:"/pages/mulu/mulu"
    })
  },
  onNav(e) {
    const magazineId = e.detail.index;
    this.getProm(magazineId)
    this.setData({
      mkanid: magazineId,
      myid: magazineId,
      Alist: [],
      Recom: [],
      nack: {},
    })
    console.log(this.data.myid)
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("onShow")
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
    console.log(111)
    this.setData({
      jiazai: redirc(20)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})