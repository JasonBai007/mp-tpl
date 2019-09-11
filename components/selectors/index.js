// components/selectors/index.js
const computedBehavior = require('miniprogram-computed')
const {
  mockData
} = require('../../mock/index.js')
Component({
  behaviors: [computedBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    moduleId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    list2: mockData,
    isShowObj: {
      isShowMultiModel: false,
      isShowMultiAssembly: false,
      isShowMultiYears: false,
      isShowRegion: false,
    }
  },

  lifetimes: {
    ready() {
      // 只有这个函数才能获得传入的属性moduleId
      let m = this.data.moduleId
      this.setData({
        isShowObj: {
          isShowMultiModel: ['loading', 'assembly', 'purpose', 'koubei'].includes(m),
          isShowMultiAssembly: ['loading', 'assembly'].includes(m),
          isShowMultiYears: ['loading', 'assembly'].includes(m),
          isShowRegion: ['loading'].includes(m),
        }
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onModelChange(e) {
      console.log(e.detail)
    },

    onSingleChangeInterest(e) {
      console.log(e.detail)
    },

    onRegionChange(e) {
      console.log(e.detail)
    },

    onDateChange(e) {
      console.log(e.detail)
    },
  }
})