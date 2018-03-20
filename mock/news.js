const qs = require('qs')
const Mock = require('mockjs')

let newsListData = Mock.mock({
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
  page: {
    total: 30,
    current: 1,
  },
})

module.exports = {

  'GET /myapi/getList': function (req, res) {
    const page = qs.parse(req.query) || {}
    const pageSize = page.pageSize || 10
    const currentPage = page.current || 1

    const data = newsListData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    newsListData.page.current = currentPage * 1
    const newPage = newsListData.page
    res.json({ success: true, data, page: { ...newPage, pageSize: Number(pageSize) } })
  },
}
