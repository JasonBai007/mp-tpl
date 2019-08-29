// components/region-selector/region-selector.js
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
    region: [],
    rightValue: '请选择',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindRegionChange: function(e) {
      this.setData({
        region: e.detail.value,
        rightValue: e.detail.value.join('，')
      })
      // 触发自定义事件给父组件
      this.triggerEvent('regionEvent', this.data.region)
    }
  }
})