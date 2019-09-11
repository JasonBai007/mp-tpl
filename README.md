# mp-tpl
a mini-program template for your project

## Tech Stack
1. 原生小程序框架
2. echarts 小程序版
3. vant-weapp 有赞小程序组件库

## How to Use
1. 使用微信开发者工具导入此项目
2. 将 project.config.json 中的 appid 字段的值，替换成自己的appid

### 关于在小程序中使用echarts图表
1. [官网](https://www.echartsjs.com/tutorial.html#%E5%9C%A8%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)
2. [官方示例项目](https://github.com/ecomfe/echarts-for-weixin)
3. [如果获取数据后再渲染图表](https://github.com/ecomfe/echarts-for-weixin/tree/master/pages/lazyLoad)
4. [在线定制echarts，去掉不需要的图表源码](https://echarts.baidu.com/builder.html)
5. 在 utils/render.js 中封装了渲染图表的函数

## 关于请求的封装
1. 在 utils/request.js 中封装了请求函数

## 关于云开发
1. 如果要使用云开发，需要编辑 project.config.json 文件
2. 将 appid 字段的值改成你实际的id，而不是测试id
3. 新增 cloudfunctionsRoot 字段: "cloudfunctionRoot": "cloudfunctions/",
4. 将 app.js 中注释的内容解除注释
