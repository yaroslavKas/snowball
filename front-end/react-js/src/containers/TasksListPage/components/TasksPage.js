import React, {Component} from 'react';
import {Button, buttonTypes} from '../../../components/Button';
import Task from './Task';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

class TasksPageContainer extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isEditingTaskList: false
  //   };
  // }

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
  handleCreateTask = () => {
    console.log('test')
  };

  render() {
    return (
      <div>
        <header className="task-lists-page__tasks-header">
          <p className="task-lists-page__tasks-title">List name</p>
          <Button
            type={buttonTypes.ICON}
            className="ion-plus"
            onClick={this.handleCreateTask}
          />
        </header>
        <ul className="task-lists-page__tasks-list">
          {
            // this.props.tasks.length ?
            this.props.tasks.map(task =>
              <li className="task-lists-page__tasks-item" key={task.id}>
                <Task
                  text={task.text}
                  // notes={task.notes}
                  // due={task.due}
                  isCompleted={task.isCompleted}
                  onStatusChange={this.props.onTaskStatusChange.bind(null, task.id)}
                  // onUpdate={this.props.onTaskUpdate.bind(null, task.id)}
                  // onDelete={this.props.onTaskDelete.bind(null, task.id)}
                />
              </li>
            )
            //     :
            //     <div>Create your first task</div>
          }
        </ul>
      </div>
    );
  }
}

export default TasksPageContainer;
