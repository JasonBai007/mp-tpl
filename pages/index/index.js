//index.js
Page({
  data: {
    list: [{
      title: '装车率',
      id: 'loading',
      isAbled: true,
      icon: 'cart'
    }, {
      title: '装配率',
      id: 'assembly',
      isAbled: true,
      icon: 'bag'
    }, {
      title: '画像分析',
      id: 'profile',
      isAbled: false,
      icon: 'friends'
    }, {
      title: '购车目的',
      id: 'purpose',
      isAbled: true,
      icon: 'goods-collect'
    }, {
      title: '口碑',
      id: 'koubei',
      isAbled: false,
      icon: 'comment'
    }, {
      title: '触媒习惯',
      id: 'habit',
      isAbled: false,
      icon: 'graphic'
    }]
  },
  showMsg() {
    wx.showToast({
      title: '敬请期待',
      icon: 'none',
      duration: 2000
    })
  }

})