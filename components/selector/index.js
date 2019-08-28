// components/selector/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    list: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    rightValue: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.setData({
        show: false
      });
    },

    onClick() {
      this.setData({
        show: true
      });
    },

    onConfirm(event) {
      const {
        picker,
        value,
        index
      } = event.detail;
      this.setData({
        rightValue: value.name
      })
      this.onClose()
    },

    onCancel() {
      this.onClose()
    },
  }
})