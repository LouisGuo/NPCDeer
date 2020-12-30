// pages/about/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    viewCount: 231,
    starCount: 10,
    forkCount: 40,
  },

  showAbout:function(){
    wx.showToast({
      title: (new Date()).valueOf()%5===1?'别点了!':'关于啥呢~',
      duration:500,
      icon:'none'
    });
  },
  showQrcode: function () {
    wx.previewImage({
      urls: ['cloud://npcdeer-7gezvrl1ea32c106.6e70-npcdeer-7gezvrl1ea32c106-1304629066/NPCDeer/weixinzhifu.jpg','cloud://npcdeer-7gezvrl1ea32c106.6e70-npcdeer-7gezvrl1ea32c106-1304629066/NPCDeer/zhifubaozhifu.jpg'],
      current: 'cloud://npcdeer-7gezvrl1ea32c106.6e70-npcdeer-7gezvrl1ea32c106-1304629066/NPCDeer/weixinzhifu.jpg' // 当前显示图片的http链接      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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