// 云函数入口文件
// 请求示例：
// wx.cloud.callFunction({
//   name: 'fetchData',
//   data: {
//     methods: 'post',
//     url: 'car/queryCarServlet',
//     params: {
//       type: 2,
//       date: '2019-08,2019-08'
//     },
//     isForm: true
//   }
// }).then(res => {
//   this.setData({
//     list: res.result.data
//   })
// }).catch(err => {
//   console.log(err)
// })

const cloud = require('wx-server-sdk')
const rp = require('request-promise')
const BASE = 'http://xxx.bitsmart.com.cn/'

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  var opts = {
    method: event.methods,
    uri: BASE + event.url,
    json: true
  }

  if (event.methods === 'get') {
    opts.qs = event.params;
  } else if (event.methods === 'post' && !event.isForm) {
    opts.body = event.params;
  } else if (event.methods === 'post' && event.isForm) {
    opts.form = event.params;
  }

  return rp(opts).then(res => {
    console.log(res)
    return res
  }).catch(err => {
    console.log(err)
    return err
  })
}