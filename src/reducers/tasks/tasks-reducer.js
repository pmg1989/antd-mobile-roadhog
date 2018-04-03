import { handleActions } from 'redux-actions'
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'
import { todoConstants } from 'constants'

const { ALL } = todoConstants.FILTER_TITLES

const $list = Immutable.fromJS([])

const list = handleActions({
  [todoConstants.FETCH_TASK_LIST] (state, action) {
    return state.merge(action.list)
  },

  [todoConstants.TASK_ADD] (state, { payload: { name } }) {
    const index = state.size
    const id = state.reduce((maxId, item) => Math.max(item.get('id'), maxId), -1)
    return state.mergeIn([index], {
      done: false,
      id: id + 1,
      name,
    })
  },

  [todoConstants.TASK_DONE] (state, { payload: { id } }) {
    const index = state.findIndex(item => item.get('id') === id)
    return state.setIn([index, 'done'], true)
  },

  [todoConstants.TASK_UNDONE] (state, { payload: { id } }) {
    const index = state.findIndex(item => item.get('id') === id)
    return state.setIn([index, 'done'], false)
  },

  [todoConstants.TASK_EDIT] (state, { payload: { id, name } }) {
    const index = state.findIndex(item => item.get('id') === id)
    return state.setIn([index, 'name'], name)
  },

  [todoConstants.TASK_REMOVE] (state, { payload: { id } }) {
    const index = state.findIndex(item => item.get('id') === id)
    return state.deleteIn([index])
  },
}, $list)

const $filter = Immutable.fromJS(ALL)

const filter = handleActions({
  [todoConstants.TASK_FILTER] (state, { payload }) {
    return payload.filter
  },
}, $filter)

export default combineReducers({
  list,
  filter,
})
