// components/model-selector-multiple/index.js

var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [],
    result: []
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function() {
      wx.cloud.callFunction({
        name: 'fetchData',
        data: {
          methods: 'post',
          url: 'car/queryCarServlet',
          params: {
            type: 2,
            date: '2019-08,2019-08'
          },
          isForm: true
        }
      }).then(res => {
        this.setData({
          list: res.result.data
        })
      }).catch(err => {
        console.log(err)
      })
    },

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.setData({
        result: event.detail
      });
    },

    toggle(event) {
      const {
        index
      } = event.currentTarget.dataset;
      const checkbox = this.selectComponent(`.checkboxes-${index}`);
      checkbox.toggle();
    },
    noop() {}
  },

  observers: {
    'result': function(arr) {
      let idArr = []
      arr.forEach(str => {
        this.data.list.forEach(obj => {
          if (str === obj.name) {
            idArr.push(obj.id)
          }
        })
      })
      app.globalData.carNameArr = arr
      app.globalData.carIdArr = idArr
    }
  }
})