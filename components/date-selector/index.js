// components/region-selector/region-selector.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    type: {
      type: String,
      value: 'day'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: '',
    rightValue: '请选择',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindDateChange: function(e) {
      this.setData({
        date: e.detail.value,
        rightValue: e.detail.value
      })
      // 触发自定义事件给父组件
      this.triggerEvent('dateEvent', this.data.date)
    }
  }
})