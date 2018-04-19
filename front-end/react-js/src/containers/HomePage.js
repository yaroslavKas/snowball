import React, { Component } from 'react';
import { Link } from 'react-router';
// import './TaskListsPage.css';

// import {List, ListItem} from 'material-ui/List';
// import Subheader        from 'material-ui/Subheader';
// import Divider          from 'material-ui/Divider';
// import HomeIcon         from 'material-ui/svg-icons/action/home';
// import ExitIcon         from 'material-ui/svg-icons/action/exit-to-app';
// import FolderIcon       from 'material-ui/svg-icons/file/folder';
// import AddIcon          from 'material-ui/svg-icons/content/add';

class TaskListsPage extends Component {

  render() {
    const { router } = this.context;
    return (
      <div className="home-page">
        {/*{this.props.children}*/}
      </div>
    );
  }
}
// TaskListsPage.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default TaskListsPage;
