import React, { Component } from 'react';
import {Link, NavLink, Route, Switch, BrowserRouter} from 'react-router-dom';

class Year extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   foo: false
    // }
  }

  onBtnClick = (e) => {
    this.props.setYear(e.target.textContent);
  };

  onBtnToggle = () => {
    this.props.setToggle();
    console.log(this.props.stateDropDown);
  };
  // test = () => {
  //   this.setState({foo: true});
  //   console.log('test');
  // };

  render() {

    const {
      year,
      stateDropDown
    } = this.props;

    return(
      <div>
        <button onClick={this.onBtnClick}>1975</button>
        <button onClick={this.onBtnClick}>1991</button>
        <button onClick={this.onBtnClick}>2015</button>
        <button onClick={this.onBtnToggle}>Toggle</button>

        <input type="file" accept="video/mp4"/>
        <ul>
          <li><NavLink exact to="/">Default</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/home">Home</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/user">User</NavLink></li>
        </ul>
        <p>This year has been chosen - {year}</p>
        <p>This state Toggle - {stateDropDown}</p>
        {
          stateDropDown ?
            <div>
              <div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, nisi.</div>
              <div className="item">Adipisci corporis facilis hic illo provident sit unde, voluptas voluptate.</div>
              <div className="item">Assumenda deleniti distinctio enim facere molestiae nostrum pariatur repellendus
                tenetur.
              </div>
              {/*<button onClick={this.test}>all</button>*/}
            </div> :
            null
        }
        {/*{*/}
          {/*this.state.foo ?*/}
          {/*<div>*/}
            {/*<div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque earum error*/}
              {/*est ex in laudantium nobis non obcaecati officia provident quaerat quos ratione reprehenderit rerum*/}
              {/*similique suscipit, vel veritatis?*/}
            {/*</div>*/}
            {/*<div className="item">Commodi cupiditate, doloribus esse eum, explicabo inventore natus nostrum quas*/}
              {/*ratione rem repellendus totam unde veritatis voluptas voluptatibus. Ad assumenda debitis facere fuga*/}
              {/*laborum magni mollitia numquam omnis provident voluptas.*/}
            {/*</div>*/}
          {/*</div>: null*/}
        {/*}*/}
      </div>

    )
  }
}

export default Year;