import React, {Component} from 'react';
import {Button, buttonTypes} from '../../../components/Button';
import Task from './Task';

class TasksPageContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditingTaskList: false
    };
  }

  // handleEditTaskList = () => {
  //   this.setState({
  //     isEditingTaskList: true
  //   }, () => this.taskList.focus());
  // };
  //
  // handleTaskListEditKeyDown = (e) => {
  //
  //   if (e.keyCode === ENTER_KEY) {
  //     this.saveTaskList();
  //   }
  //
  //   if (e.keyCode === ESCAPE_KEY) {
  //     this.cancelEditingTaskList();
  //   }
  // };

  // saveTaskList = () => {
  //
  //   this.props.onUpdateTaskList({
  //     name: this.taskList.value
  //   });
  //
  //   this.cancelEditingTaskList();
  // };

  // cancelEditingTaskList = () => {
  //   this.setState({
  //     isEditingTaskList: false
  //   });
  // };

  renderTasks = () => {
    return (
      <ul className="task-lists-page__tasks-list">
        {
          this.props.tasks.length ?
            this.props.tasks.map(task =>
              <Task
                key={task.id}
                text={task.text}
                // notes={task.notes}
                // due={task.due}
                isCompleted={task.isCompleted}
                onStatusChange={this.props.onTaskStatusChange.bind(null, task.id)}
                onUpdate={this.props.onTaskUpdate.bind(null, task.id)}
                // onDelete={this.props.onTaskDelete.bind(null, task.id)}
              />
            )
            :
            <div>Create your first task</div>
        }
      </ul>
    );
  };

  render() {

    if (this.props.error) {
      return (
        <div>
          <div className="task-lists-page__error">
            {this.props.error}
          </div>
        </div>
      );
    }

    return (
      <div>
        <header className="task-lists-page__tasks-header">
          <p className="task-lists-page__tasks-title">{this.props.taskList.name}</p>
          <Button
            type={buttonTypes.ICON}
            className="ion-plus"
            onClick={this.props.onAddTask}
          />
        </header>
        {
          this.props.isLoadingTasks
            ? <div className="loader"> Loader</div>
            : this.renderTasks()
        }
      </div>
    );
  }
}

export default TasksPageContainer;
