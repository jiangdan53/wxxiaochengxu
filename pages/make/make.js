// pages/make/make.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lon:false,
    ursinfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._onclike()
  },
  _onclike(){
    wx.getSetting({
      success:res=>{
       const info =  res.authSetting['scope.userInfo']
       if(info){
        wx.getUserInfo({
          success:res=>{
         const data =  res.userInfo
         this.setData({
           ursinfo:data,
           lon:true
         })
         this._onlike()
          }
        })
       }
      }
    })
  },
  _onlike(){
    let like = wx.getStorageSync("likelist") 
      this.setData({
        lovelist:like
      })
  },
  onGetuse(e){
    const uer = e.detail.userInfo;
    if(uer){
      this.setData({
        ursinfo:uer,
        lon:true
      })
      this._onlike()
    }
  
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
    // this._onlike()
    this._onclike();

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