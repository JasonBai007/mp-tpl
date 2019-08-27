import * as echarts from '../../ec-canvas/echarts';

function genOption() {
  return {
    color: ['#37a2da', '#32c5e9', '#67e0e3'],
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
}

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
  },

  onChange(event) {
    this.ecComponent.init((canvas, width, height) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });

      // 导入配置
      chart.setOption(genOption());

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },
});