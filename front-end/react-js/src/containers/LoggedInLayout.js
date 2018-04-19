import React, {Component} from 'react';

import Header from './Header';
import Footer from './Footer';

class LoggedInLayout extends Component {
  render() {
    return (
      <div className="wrapper__basic">
        <Header />
        <div className="wrapper__content">{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
}

export default LoggedInLayout;
