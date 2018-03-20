import fetch from 'isomorphic-fetch'
import { List } from 'immutable'
import { newsConstants } from 'constants'

const receiveNewsList = list => ({
  list: List(list),
  type: newsConstants.FETCH_NEWS_LIST,
})

export const fetchNewsList = () => (
    dispatch => (
        fetch('/myapi/getList')
      .then(res => res.json())
      .then(({ list }) => dispatch(receiveNewsList(list)))
    )
)
