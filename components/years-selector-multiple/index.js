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
    list: [{
        id: '2009-2016',
        name: '2009-2016'
      },
      {
        id: '2017',
        name: '2017'
      },
      {
        id: '2018',
        name: '2018'
      },
      {
        id: '2019',
        name: '2019'
      }
    ],
    result: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.setData({
        result: event.detail
      });
      // 设置全局变量
      app.globalData.caryear = this.data.result
    },

    toggle(event) {
      const {
        index
      } = event.currentTarget.dataset;
      const checkbox = this.selectComponent(`.checkboxes-${index}`);
      checkbox.toggle();
    },
    noop() {}
  }
})