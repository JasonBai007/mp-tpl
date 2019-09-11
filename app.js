//app.js
App({
  onLaunch: function() {
    // 初始化腾讯云
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
  },
  globalData: {
    moduleId: '',
    chartData: {},
    carIdArr: [],
    carNameArr: [],
    assemblyTypeName: [],
    assemblyType: [],
    caryear:[],
  },
  onShareAppMessage: function(res) {
    return {
      title: 'mp-tpl',
      path: '/pages/index/index'
    }
  }
})