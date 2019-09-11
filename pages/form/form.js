// pages/form/form.js

var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    moduleName: '',
    moduleId: '',
    params: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      moduleName: options.moduleName,
      moduleId: options.moduleId,
    })
    app.globalData.moduleId = options.moduleId
  },

  // 查询
  search() {
    wx.showLoading({
      title: '请求数据中...',
    })
    // 构建请求参数
    let g = app.globalData
    switch (this.data.moduleId) {
      // 装车率
      case 'loading':
        this.setData({
          params: {
            carArr: g.carIdArr,
            areaType: "all",
            carType: "model",
            assemblyType: g.assemblyType,
            caryear: g.caryear,
            city: [],
            level: [],
            province: [],
            priceRange: [
              [12, 18]
            ]
          }
        })
        this.fetchChartData('v2/assembly', this.data.params)
        break;
        // 装配率
      case 'assembly':
        this.setData({
          params: {
            carIdArr: g.carIdArr,
            carNameArr: g.carNameArr,
            carType: "model",
            assemblyType: g.assemblyType,
            caryear: g.caryear,
            priceRange: [
              [12, 18]
            ]
          }
        })
        this.fetchChartData('v2/assemblyRate', this.data.params)
        break;
        // 购车目的
      case 'purpose':
        this.setData({
          params: {
            carIdArr: g.carIdArr,
            carNameArr: g.carNameArr
          }
        })
        this.fetchChartData('v2/buyCarGoal', this.data.params)
        break;
    }
  },

  // 获取图表数据
  fetchChartData(url, params) {
    wx.cloud.callFunction({
      name: 'fetchData',
      data: {
        methods: 'post',
        url: url,
        params: params,
        isForm: false
      }
    }).then(res => {
      wx.hideLoading()
      app.globalData.chartData = res.result.data;
      wx.navigateTo({
        url: '../charts/charts'
      })
    }).catch(err => {
      wx.hideLoading()
      console.log(err)
    })
  },

  // 顶部导航逻辑
  onClickLeft() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onClickRight() {
    wx.navigateTo({
      url: '../index/index'
    })
  }

})