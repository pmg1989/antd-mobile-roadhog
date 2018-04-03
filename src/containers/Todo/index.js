import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect, Header } from 'components'
import { tasksActions } from 'actions/todo'
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
    onTasksActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
    const { onTasksActions } = this.props
    onTasksActions.fetchTaskList()
  }

  render () {
    const { tasks, taskCount, doneTaskCount, filters, onTasksActions } = this.props
    const { taskAdd, taskDone, taskUndone, taskRemove, taskEdit, taskFilter } = onTasksActions

    const headerProps = {
      leftContent: '',
      icon: null,
      onLeftClick () { },
    }

    const taskListProps = {
      tasks,
      onTaskEdit: taskEdit,
      onTaskDone: taskDone,
      onTaskUndone: taskUndone,
      onTaskRemove: taskRemove,
    }

    const taskStatsProps = {
      filters,
      taskCount,
      doneTaskCount,
      onTaskFilter: taskFilter,
    }

    return (
      <div id="viewport" className="content-box">
        <Header {...headerProps}>todo mvc</Header>
        <div className="content">
          <TaskForm onSave={taskAdd} />
          <TaskList {...taskListProps} />
          <TaskStats {...taskStatsProps} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onTasksActions: bindActionCreators(tasksActions, dispatch),
})

export default connect(selector, mapDispatchToProps)(module)(Todo)
