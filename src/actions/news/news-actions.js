import fetch from 'isomorphic-fetch'
import { List } from 'immutable'
import { newsConstants } from 'constants'

const receiveNewsList = list => ({
  list: List(list),
  type: newsConstants.FETCH_NEWS_LIST,
})

export const fetchNewsList = (params = { current: 1, pageSize: 5 }) => (
    dispatch => (
      fetch(`/myapi/getList?current=${params.current}&pageSize=${params.pageSize}`)
      .then(res => res.json())
      .then(({ data }) => dispatch(receiveNewsList(data)))
    )
)
