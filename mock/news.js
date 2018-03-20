const Mock = require('mockjs')

let listData = Mock.mock({
  'data|30': [
    {
      'id|+1': 1,
      title: '@ctitle',
      des: '@cparagraph',
      createTime: '@datetime',
      thumb () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.title.substr(0, 2))
      },
    },
  ],
})

module.exports = {

  'GET /myapi/getList': function (req, res) {
    res.json({ success: true, list: listData.data })
  },
}
