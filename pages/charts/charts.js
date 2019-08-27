const render = require('../../utils/render.js')

Page({
  data: {
    active: 0,
    ec: {
      // 将 lazyLoad 设为 true 后，需要手动初始化图表
      lazyLoad: true
    }
  },

  onReady() {
    // 获取组件（父组件中获取其子组件，使用this.selectComponent()方法
    this.ecComponent = this.selectComponent('#mychart-dom-bar');
    render.renderChart(this.ecComponent, this.genOption())
  },

  genOption() {
    return {
      color: ['#37a2da', '#32c5e9', '#67e0e3'],
      title: {
        text: '柱状图',
        left: 'center',
        top: 20
      },
      grid: {
        top: 70,
        left: 40,
        right: 30,
        bottom: 85
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
    };
  },

  onChange(event) {
    // 传入图表dom节点和options
    render.renderChart(this.ecComponent, this.genOption())
  },
});