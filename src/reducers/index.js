import { combineReducers } from 'redux-immutable'
import routerReducer from './routeReducer'
import tasks from './tasks'
import news from './news'

export default combineReducers({
  routing: routerReducer,
  tasks,
  news,
})
