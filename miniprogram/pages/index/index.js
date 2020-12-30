// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: [
      {
        title: '天降红包',
        img: 'https://ai.flypot.cn/pocket/images/index-imagenet-bg.jpg',
        url: '/pages/basic/redpacket/redpacket'
      },
      // {
      //   title: '动作捕捉',
      //   img: 'https://ai.flypot.cn/pocket/images/index-posenet-bg.jpg',
      //   url: '/pages/basic/posenet/index'
      // },
      // {
      //   title: '初识 AI',
      //   img: 'https://ai.flypot.cn/pocket/images/index-teach-bg.jpg',
      //   url: '/pages/game/teachable-machine/index'
      // }
    ]
  },
  handleCardClicked:function(event){
    wx.navigateTo({
      url: event.currentTarget.dataset.url
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