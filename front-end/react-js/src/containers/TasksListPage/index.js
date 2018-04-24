import React, {Component} from 'react';
import {Link} from 'react-router';
import PropTypes from "prop-types";

import uniqueHash from '../../utils/uniqueHash';

import TaskListsStore from '../../stores/TaskListsStore';
import TaskListsActions from '../../actions/TaskListsActions';

import TaskListCreateModal from './components/TaskListCreateModal';
import {Button, buttonTypes} from '../../components/Button';

import './TasksListPage.scss';


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
    this.setState({isCreatingTaskList: true});
  };

  handleTaskListCreateModalClose = () => {
    this.setState({isCreatingTaskList: false});
  };

  handleTaskListSubmit = (taskList) => {
    TaskListsActions.createTaskList(taskList);

    this.setState({isCreatingTaskList: false});
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
      <div className="task-lists-page">
        <div className="task-lists-page__menu">
          <h2 className="task-lists-page__title">Almost google tasks</h2>
          <div className="task-lists-page__wrap">
            <p className="task-lists-page__lists-title">Task lists</p>
            <ul className="task-lists-page__lists">
              {
                this.state.taskLists.map(list =>
                  <li className="task-lists-page__lists-item" key={uniqueHash()}>
                    <Link className="task-lists-page__lists-link" to={`/tasks-list/${list.id}`}>
                      <span className="fa fa-folder not-font-size">icon</span>
                      {list.name}
                    </Link>
                  </li>
                )
              }
            </ul>
            <Button
              className="ion-plus"
              type={buttonTypes.ICON}
              onClick={this.handleAddTaskList}
              name='Create new list'
            />
          </div>
          <TaskListCreateModal
            isOpen={this.state.isCreatingTaskList}
            onSubmit={this.handleTaskListSubmit}
            onClose={this.handleTaskListCreateModalClose}
          />
        </div>
        {this.props.children}
      </div>
    );
  }

  _onChange = () => {
    this.setState(getStateFromFlux());
  };
}

export default TaskListsPage;