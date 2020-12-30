// pages/basic/redpacket/redpacket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    coupons: [ 
      { 
        title: '饿了么红包最高66元天天拿', 
        app_id:'wxece3a9a4c82f58c9', 
        app_path:'taoke/pages/shopping-guide/index?scene=FQSqksu', 
        color:"green", 
        image:"http://toolfk.xiuxiandou.com/yhq/coupe2/elm_hb.png", 
      },
      { 
        title: '美团56元外卖红包天天拿', 
        app_id:'wxde8ac0a21135c07d', 
        app_path:'/index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3D591ec05930c57331c1212b936e6785c1%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fa13b87919a9ace9cfab4%252F89400%252Findex.html%253Fappkey%253D591ec05930c57331c1212b936e6785c1%253A000001%26sid%3D000001&lch=cps:waimai:5:591ec05930c57331c1212b936e6785c1:000001&f_token=1&f_userId=1', 
        color:"cyan", 
        image:"http://toolfk.xiuxiandou.com/yhq/coupe2/mt_hb.png", 
      }, 
      
    ]
  },
  //jump mini
  jumpClick:function(e){
    let appId = e.currentTarget.dataset.appid;
    let path  = e.currentTarget.dataset.path;
    wx.navigateToMiniProgram({
      appId: appId,
      path: path
    })
  },
  //跳转到其他小程序
  jump_mini(event){
   let appid = event.currentTarget.dataset.appid;
   let app_path = event.currentTarget.dataset.path;
   wx.navigateToMiniProgram({
     appId: appid,
     path:app_path
    
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
    return {
      title: "美团饿了么大额红包，每日可领！"
    };
  }
})