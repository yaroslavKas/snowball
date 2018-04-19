import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from "prop-types";

import uniqueHash from '../../utils/uniqueHash';

import TaskListsStore from '../../stores/TaskListsStore'
import TaskListsActions from '../../actions/TaskListsActions';

import TaskListCreateModal from './components/TaskListCreateModal'
import {Button, buttonTypes} from '../../components/Button';


function getStateFromFlux() {
  return {
    taskLists: TaskListsStore.getTaskLists()
  }
}

class TaskListsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ...getStateFromFlux(),
      isCreatingTaskList: false
    };
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    TaskListsActions.loadTaskLists();
  }

  componentDidMount() {
    TaskListsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TaskListsStore.removeChangeListener(this._onChange);
  }

  handleAddTaskList = () => {
    this.setState({ isCreatingTaskList: true });
  };

  handleTaskListCreateModalClose = () => {
    this.setState({ isCreatingTaskList: false });
  };

  handleTaskListSubmit = (taskList) => {
    TaskListsActions.createTaskList(taskList);

    this.setState({ isCreatingTaskList: false });
  };
  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }
  //
  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }

  render() {
    return (
      <div className="TaskListsPage">
        <div className="TaskListsPage__menu">
          <ul className="list">
            {
              this.state.taskLists.map(list =>
                <li key={uniqueHash()}>
                  <Link to={`/tasks-list/${list.id}`}>
                    {list.name}
                  </Link>
                </li>
              )
            }
          </ul>
          <Button
            onClick={this.handleAddTaskList}
            name= 'Create new list'
          />
         <TaskListCreateModal
           isOpen={this.state.isCreatingTaskList}
           onSubmit={this.handleTaskListSubmit}
           onClose={this.handleTaskListCreateModalClose}
         />
        </div>
        <div className="TaskListsPage__tasks">
          {this.props.children}
        </div>
      </div>
    );
  }

  _onChange = () => {
    this.setState(getStateFromFlux());
  };
}

export default TaskListsPage;