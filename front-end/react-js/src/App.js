import React, {Component} from 'react';
import load from './load';
import PropTypes from 'prop-types';
import Routers from './Routers';
import Header from './containers/Header';
import Footer from './containers/Footer';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  }

  static propTypes = {
    // isOpen:PropTypes.bool
  };

  componentDidMount () {
    load('http://localhost:3000/profile').then(data => {
      const Data = JSON.parse(data);
      if (data) {
        this.setState({
          data: Data
        });
      }
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <main className="main">
        <Header/>
        <Routers/>
        <Footer/>
      </main>
    );
  }
}

export default App;
