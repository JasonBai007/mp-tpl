// 渲染图表函数
import * as echarts from '../ec-canvas/echarts';

function renderChart(domNode, opts) {
  domNode.init((canvas, width, height) => {
    // 获取组件的 canvas、width、height 后的回调函数
    // 在这里初始化图表
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height
    });

    // 导入配置
    chart.setOption(opts);

    // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
    // this.chart = chart;

    // 注意这里一定要返回 chart 实例，否则会影响事件处理等
    return chart;
  });
}

module.exports.renderChart = renderChart