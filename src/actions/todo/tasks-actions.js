import fetch from 'isomorphic-fetch'
import Immutable from 'immutable'
import { createActions } from 'redux-actions'
import { todoConstants } from 'constants'

export const {
  taskAdd,
  taskDone,
  taskUndone,
  taskRemove,
  taskEdit,
  taskFilter,
} = createActions({
  [todoConstants.TASK_ADD]: name => ({ name }),
  [todoConstants.TASK_DONE]: id => ({ id }),
  [todoConstants.TASK_UNDONE]: id => ({ id }),
  [todoConstants.TASK_REMOVE]: id => ({ id }),
  [todoConstants.TASK_EDIT]: ({ id, name }) => ({ id, name }),
  [todoConstants.TASK_FILTER]: filter => ({ filter }),
})

const receiveTaskList = list => ({
  list: Immutable.fromJS(list),
  type: todoConstants.FETCH_TASK_LIST,
})

export const fetchTaskList = () => (
  async (dispatch) => {
    const list = await fetch('api/aapid').then(res => res.json())
    dispatch(receiveTaskList(list))
  }
)
