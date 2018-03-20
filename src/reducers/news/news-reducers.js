import { createReducer } from 'redux-create-reducer'
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'
import { newsConstants } from 'constants'

const $newsList = Immutable.fromJS([])

const newsList = createReducer($newsList, {
  [newsConstants.FETCH_NEWS_LIST] (state, { list }) {
    return state.merge(list)
  },
})

export default combineReducers({
  list: newsList,
})
