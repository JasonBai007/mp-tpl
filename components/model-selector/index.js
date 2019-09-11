// components/selector/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    // list: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 0,
    rightValue: '请选择',
    list: []
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
    bindPickerChange(e) {
      // 设置当前选中的是第几个（从0开始）
      this.setData({
        index: e.detail.value,
        rightValue: this.data.list[e.detail.value].name
      })
      // 触发自定义事件给父组件
      this.triggerEvent('modelEvent', this.data.list[e.detail.value].id)
    }
  }
})