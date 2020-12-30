// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showEditor: true,
    feeTypeOptionDefault: "电费",
    feeTypeOption: [{
      text: "电费",
      value: "电费"
    }, {
      text: "水费",
      value: "水费"
    }, {
      text: "燃气",
      value: "燃气"
    }, {
      text: "租金",
      value: "租金"
    }, {
      text: "其他",
      value: "其他"
    }],
    fileList: [],
    feeListDefault: [{
      feeType: "租金",
      feeValue: 6500,
      needPay: true,
      isFixed: true
    }],
    feeList: [],
    feeResult: []
  },
  calRentFee: function () {

    let otherFeeTotal = 0;
    let otherFeeItem = [];
    for (var j = 1; j < this.data.feeList.length; j++) {
      if (!this.data.feeList[j].needPay) {
        continue;
      }
      otherFeeTotal = otherFeeTotal + parseFloat(this.data.feeList[j].feeValue);
      otherFeeItem.push(parseFloat(this.data.feeList[j].feeValue));
    }

    let otherFeeTotalStr = "0";
    if (otherFeeItem.length > 0) {
      otherFeeTotalStr = "(" + otherFeeItem.join(" + ") + ")";
    }
    
    this.data.feeResult = [];
    this.data.feeResult.push({
      totalFee: 2150 * 2 + otherFeeTotal / 4,
      formula: `2150 * 2 + ${otherFeeTotalStr} / 4`,
      nickName: "郭路强",
      thumb: "cloud://npcdeer-7gezvrl1ea32c106.6e70-npcdeer-7gezvrl1ea32c106-1304629066/NPCDeer/oword.jpg"
    });
    this.data.feeResult.push({
      totalFee: 2050 * 2 + otherFeeTotal / 4,
      formula: `2050 * 2 + ${otherFeeTotalStr} / 4`,
      nickName: "景贵明",
      thumb: "cloud://npcdeer-7gezvrl1ea32c106.6e70-npcdeer-7gezvrl1ea32c106-1304629066/NPCDeer/coast.jpg"
    });
    this.data.feeResult.push({
      totalFee: 2300 * 2 + otherFeeTotal / 2,
      formula: `2300 * 2 + ${otherFeeTotalStr} / 2`,
      nickName: "郑廷建",
      thumb: "cloud://npcdeer-7gezvrl1ea32c106.6e70-npcdeer-7gezvrl1ea32c106-1304629066/NPCDeer/yang.jpg"
    });

    this.setData({
      feeResult: this.data.feeResult,
      totalFee: 6500 * 2 + otherFeeTotal,
      totalFeeStr: `6500*2+${otherFeeTotalStr}`
    });
  },
  shareRentFee: function () {
    this.calRentFee();
    this.setData({
      showEditor: false
    });
  },
  onShareSelect: function (event) {
    this.onShareClose();
    console.log(event);

  },
  onShareClose: function () {
    this.setData({
      showShare: false
    });
  },

  needPayChange: function (event) {
    let index = event.currentTarget.dataset.index;
    this.data.feeList[index].needPay = event.detail;
    this.setData({
      feeList: this.data.feeList
    });
    this.calRentFee();
  },
  feeTypeChange: function (event) {
    let index = event.currentTarget.dataset.index;
    this.data.feeList[index].feeType = event.detail;
    this.setData({
      feeList: this.data.feeList
    });
    this.calRentFee();
  },
  feeValueChange: function (event) {
    let index = event.currentTarget.dataset.index;
    this.data.feeList[index].feeValue = event.detail;
    this.setData({
      feeList: this.data.feeList
    });
    this.calRentFee();
  },
  // 上传图片
  uploadToCloud() {
    wx.cloud.init();
    const {
      fileList
    } = this.data.fileList;
    if (!fileList.length) {
      wx.showToast({
        title: '请选择图片',
        icon: 'none'
      });
    } else {
      const uploadTasks = fileList.map((file, index) => this.uploadFilePromise(`my-photo${index}.png`, file));
      Promise.all(uploadTasks)
        .then(data => {
          wx.showToast({
            title: '上传成功',
            icon: 'none'
          });
          const newFileList = data.map(item => {
            url: item.fileID
          });
          this.setData({
            cloudPath: data,
            fileList: newFileList
          });
        })
        .catch(e => {
          wx.showToast({
            title: '上传失败',
            icon: 'none'
          });
          console.log(e);
        });
    }
  },

  uploadFilePromise(fileName, chooseResult) {
    return wx.cloud.uploadFile({
      cloudPath: fileName,
      filePath: chooseResult.url
    });
  },
  deleteImg: function (event) {
    this.data.fileList.splice(event.detail.index, 1);
    this.setData({
      fileList: this.data.fileList
    });
  },
  afterRead(event) {
    const {
      file
    } = event.detail;
    console.log(file);
    this.data.fileList.push({
      url: file.url,
      thumb: file.thumb
    });
    this.setData({
      fileList: this.data.fileList
    });
    // // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    // wx.uploadFile({
    //   url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
    //   filePath: file.url,
    //   name: 'file',
    //   formData: { user: 'test' },
    //   success(res) {
    //     // 上传完成需要更新 fileList
    //     const { fileList = [] } = this.data;
    //     fileList.push({ ...file, url: res.data });
    //     this.setData({ fileList });
    //   },
    // });
  },
  addFeeItem: function () {
    this.data.feeList.push({
      feeType: "电费",
      feeValue: 0,
      needPay: true,
    });
    this.setData({
      feeList: this.data.feeList
    });
    this.calRentFee();
  },
  resetFeeList: function () {
    this.data.feeList = [...this.data.feeListDefault];
    this.setData({
      feeList: this.data.feeList
    });
    this.calRentFee();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options && options.state) {
      
      let encode = options.state;
      let decode = decodeURI(encode);
      let feeResult = JSON.parse(decode);
      feeResult.showEditor = false;
      this.setData(feeResult);
    } else {
      this.resetFeeList();
      this.calRentFee();
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
  onShareAppMessage: function (options) {
    console.log(options);
    if (options.from === "button") {
      let jsonStr = JSON.stringify({
        feeResult: this.data.feeResult,
        totalFee: this.data.totalFee,
        totalFeeStr: this.data.totalFeeStr
      });
      let jsonEncode = encodeURI(jsonStr);
      return {
        title: "分享",
        desc: "分享房租均摊结果",
        path: "pages/basic/rentfee/rentfee?state=" + jsonEncode
      }
    } else if (options.from === "menu") {

    }
  }
})