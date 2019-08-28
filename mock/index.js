const Mock = require('../libs/mock.min.js')

const mockData = Mock.mock({
  code: 0,
  msg: "Success",
  'data|4-8': [{
    name: '@cname()',
    'id|+1': 1
  }]
})

module.exports = {
  mockData: mockData.data
}