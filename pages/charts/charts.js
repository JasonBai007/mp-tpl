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
    render.renderChart(this.ecComponent, this.genLineOption())
  },


  onChange(event) {
    switch (event.detail.index) {
      case 0:
        // 传入图表dom节点和options
        render.renderChart(this.ecComponent, this.genLineOption())
        break;
      case 1:
        // 传入图表dom节点和options
        render.renderChart(this.ecComponent, this.genBarOption())
        break;
      case 2:
        // 传入图表dom节点和options
        render.renderChart(this.ecComponent, this.genRadarOption())
        break;
      case 3:
        // 传入图表dom节点和options
        render.renderChart(this.ecComponent, this.genScatterOption())
        break;
    }
  },

  genLineOption() {
    return {
      color: ['#37a2da', '#32c5e9', '#67e0e3'],
      title: {
        text: '折线图',
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
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }]
    };
  },

  genBarOption() {
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

  genRadarOption() {
    return {
      color: ['#37a2da', '#32c5e9', '#67e0e3'],
      title: {
        text: '雷达图',
        left: 'center',
        top: 20
      },
      grid: {
        top: 0,
        left: 100,
        right: 100,
        bottom: 85
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [{
            name: '销售（sales）',
            max: 6500
          },
          {
            name: '管理（Administration）',
            max: 16000
          },
          {
            name: '信息技术（Information Techology）',
            max: 30000
          },
          {
            name: '客服（Customer Support）',
            max: 38000
          },
          {
            name: '研发（Development）',
            max: 52000
          },
          {
            name: '市场（Marketing）',
            max: 25000
          }
        ]
      },
      series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [{
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预算分配（Allocated Budget）'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销（Actual Spending）'
          }
        ]
      }]
    };
  },

  genScatterOption() {
    return {
      color: ['#37a2da', '#32c5e9', '#67e0e3'],
      title: {
        text: '散点图',
        left: 'center',
        top: 20
      },
      grid: {
        top: 70,
        left: 40,
        right: 30,
        bottom: 85
      },
      xAxis: {},
      yAxis: {},
      series: [{
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68]
        ],
        type: 'scatter'
      }]
    };
  },

});