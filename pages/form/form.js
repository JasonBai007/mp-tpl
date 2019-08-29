// pages/form/form.js
const {
  mockData
} = require('../../mock/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list1: [{
      name: '2019',
      id: 2019
    }, {
      name: '2018',
      id: 2018
    }, {
      name: '2017',
      id: 2017
    }],
    list2: mockData,
    region: []
  },

  onRegionChange(e) {
    console.log(e.detail)
  },

  onClickLeft() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  onClickRight() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // wx.request({
    //   url: 'api/v1/getList',
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})