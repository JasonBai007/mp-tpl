/**
 * 封封微信的的request
 */
function request(url, data = {}, method = "GET") {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
        // 'Token': wx.getStorageSync('token')
      },
      success: function(res) {
        // 处理完成后，终止下拉刷新
        wx.stopPullDownRefresh()
        resolve(res.data);
      },
      fail: function(err) {
        // 处理完成后，终止下拉刷新
        wx.stopPullDownRefresh()
        console.log("failed")
        reject(err)
      }
    })
  });
}

function get(url, data = {}) {
  return request(url, data, 'GET')
}

function post(url, data = {}) {
  return request(url, data, 'POST')
}

module.exports = {
  request,
  get,
  post
}