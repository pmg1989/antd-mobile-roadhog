import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect, Header } from 'components'
import { fetchTaskList, taskAdd, taskDone, taskUndone, taskRemove, taskEdit, taskFilter } from 'actions/todo'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import TaskStats from './TaskStats'
import selector from '../../selectors/todo'

class Todo extends Component {
  static propTypes = {
    tasks: PropTypes.object.isRequired,
    taskCount: PropTypes.number.isRequired,
    doneTaskCount: PropTypes.number.isRequired,
    filters: PropTypes.string.isRequired,
    onFetchTaskList: PropTypes.func.isRequired,
    onTaskAdd: PropTypes.func.isRequired,
    onTaskDone: PropTypes.func.isRequired,
    onTaskUndone: PropTypes.func.isRequired,
    onTaskRemove: PropTypes.func.isRequired,
    onTaskEdit: PropTypes.func.isRequired,
    onTaskFilter: PropTypes.func.isRequired,
  }

  componentDidMount () {
    const { onFetchTaskList } = this.props
    onFetchTaskList()
  }

  render () {
    const { tasks, taskCount, doneTaskCount, filters,
            onTaskAdd, onTaskDone, onTaskUndone, onTaskRemove, onTaskEdit, onTaskFilter,
          } = this.props

    const headerProps = {
      leftContent: '',
      icon: null,
      onLeftClick () { },
    }

    const taskListProps = {
      tasks,
      onTaskEdit,
      onTaskDone,
      onTaskUndone,
      onTaskRemove,
    }

    const taskStatsProps = {
      filters,
      taskCount,
      doneTaskCount,
      onTaskFilter,
    }

    return (
      <div id="viewport" className="content-box">
        <Header {...headerProps}>todo mvc</Header>
        <div className="content">
          <TaskForm onSave={onTaskAdd} />
          <TaskList {...taskListProps} />
          <TaskStats {...taskStatsProps} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchTaskList: bindActionCreators(fetchTaskList, dispatch),
  onTaskAdd: bindActionCreators(taskAdd, dispatch),
  onTaskDone: bindActionCreators(taskDone, dispatch),
  onTaskUndone: bindActionCreators(taskUndone, dispatch),
  onTaskRemove: bindActionCreators(taskRemove, dispatch),
  onTaskEdit: bindActionCreators(taskEdit, dispatch),
  onTaskFilter: bindActionCreators(taskFilter, dispatch),
})

export default connect(selector, mapDispatchToProps)(module)(Todo)
