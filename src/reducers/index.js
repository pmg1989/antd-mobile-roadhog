import { combineReducers } from 'redux-immutable'
import routerReducer from './routeReducer'
import tasks from './tasks'

export default combineReducers({
  tasks,
  routing: routerReducer,
})
