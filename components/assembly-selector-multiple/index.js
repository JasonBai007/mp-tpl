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
        id: '1',
        name: '操控及动力配置'
      },
      {
        id: '2',
        name: '主/被动安全配置'
      },
      {
        id: '3',
        name: '内部及舒适配置'
      },
      {
        id: '4',
        name: '外部及科技配置'
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
      app.globalData.assemblyTypeName = arr
      app.globalData.assemblyType = idArr
    }
  }
})