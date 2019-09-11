const render = require('../../utils/render.js')
const app = getApp()

Page({
  data: {
    ec: {
      // 将 lazyLoad 设为 true 后，需要手动初始化图表
      lazyLoad: true
    },
    carNames: '',
    assemblyNames: '',
    yearNames: '',
  },

  // 从全局对象中获取维度信息
  onLoad() {
    console.log(app.globalData)
    let g = app.globalData
    this.setData({
      carNames: g.carNameArr.join('、'),
      assemblyNames: g.assemblyTypeName.join('、'),
      yearNames: g.caryear.join('、'),
    })
  },

  // 初次载入，渲染图表
  onReady() {
    // 获取组件（父组件中获取其子组件，使用this.selectComponent()方法
    this.ecComponent = this.selectComponent('#mychart-dom-bar');
    render.renderChart(this.ecComponent, this.genOption())
  },

  // 监控横竖屏变化
  onResize(res) {
    render.renderChart(this.ecComponent, this.genOption())
  },

  // 构建配置对象
  genOption() {
    let _data = app.globalData.chartData
    // 购车目的（柱状图）
    if (app.globalData.moduleId === 'purpose') {
      return {
        title: {
          text: `${this.data.carNames}的购车目的`,
          left: 'center',
          top: 10,
          textStyle: {
            fontSize: 14
          }
        },
        legend: {
          left: "center",
          bottom: 10,
          data: _data.series.map(obj => {
            return obj.name;
          })
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          formatter: '{b1}'
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0
          },
          data: _data.x
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} %'
          }
        },
        series: _data.series.map((item, index) => {
          return {
            name: item.name,
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: item.data.map(arr => {
              return parseInt(arr[1])
            })
          }
        })
      };
      // 装车率（散点图）
    } else if (app.globalData.moduleId === 'loading') {
      return {
        title: {
          text: `${this.data.yearNames}，${this.data.assemblyNames}，${this.data.carNames}的装车率`,
          left: 'center',
          top: 10,
          textStyle: {
            fontSize: 14
          }
        },
        grid: {
          top: 45,
          left: 60,
          right: 30,
          bottom: 50
        },
        xAxis: {
          name: '装配率',
          nameLocation: 'end',
          nameGap: -30,
          nameTextStyle: {
            padding: [60, 0, 0, 0]
          },
          min: 0,
          max: 100,
          interval: 10,
          axisLabel: {
            formatter: '{value} %'
          }
        },
        yAxis: {
          name: '留资率',
          min: 0,
          max: 100,
          interval: 10,
          axisLabel: {
            formatter: '{value} %'
          }
        },
        dataZoom: [{
            type: 'inside',
            xAxisIndex: [0],
          },
          {
            type: 'inside',
            yAxisIndex: [0],
          }
        ],
        // toolbox: {
        //   feature: {
        //     dataZoom: {},
        //     restore: {}
        //   }
        // },
        series: [{
          type: 'scatter',
          symbolSize: 8,
          large: true,
          label: {
            normal: {
              show: true,
              formatter: function(param) {
                return param.data[2]
              },
              position: 'top',
              backgroundColor: '#fff'
            }
          },
          data: _data.map((item, index) => [item.assembly_rate, item.leads_rate, item.name])
        }]
      };
      // 装配率（雷达图）
    } else if (app.globalData.moduleId === 'assembly') {
      return {
        title: {
          text: `${this.data.yearNames}，${this.data.assemblyNames}，${this.data.carNames}的装配率`,
          left: 'center',
          top: 0,
          textStyle: {
            fontSize: 14
          }
        },
        grid: {
          top: 60,
          left: 40,
          right: 30,
          bottom: 20
        },
        legend: {
          orient: 'vertical',
          top: "middle",
          right: 10,
          data: _data.series.map((obj, i) => obj.name)
        },
        radar: {
          indicator: _data.x.map((str, i) => {
            return {
              name: str,
              max: 100
            }
          }),
          radius: "70%",
          name: {
            fontSize: 12,
            color: "#333"
          },
          center: ["50%", "52%"]
        },
        series: [{
          type: "radar",
          label: {
            normal: {
              show: true,
              fontSize: 10
            }
          },
          itemStyle: {
            normal: {
              areaStyle: {
                type: "default",
                opacity: 0.4
              }
            }
          },
          data: _data.series.map((item, index) => {
            return {
              name: item.name,
              value: item.data.map(arr => Number(arr[1]))
            }
          })
        }]
      }
    }
  },


  genLineOption() {
    return {
      title: {
        text: '折线图',
        left: 'center',
        top: 20
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
      title: {
        text: '柱状图',
        left: 'center',
        top: 20
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
      title: {
        text: '雷达图',
        left: 'center',
        top: 20
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
      title: {
        text: '散点图',
        left: 'center',
        top: 20
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