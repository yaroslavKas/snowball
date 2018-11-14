import React, {Component} from 'react';
import {Link, NavLink, Route, Switch, BrowserRouter} from 'react-router-dom';
import './Notes.css';

class Year extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   notes: false
    // }
  }
  componentWillReceiveProps(next) {

  }

  onBtnClick = (e) => {
    this.props.setYear(e.target.textContent);
  };

  onBtnToggle = () => {
    this.props.setToggle();
  };
  handleNotes = () => {
    this.props.setNotesFunction();
  };
  handleDelete = (id) => {
    this.props.deleteNote(id)
  };

  render() {

    const {
      year,
      stateDropDown,
      notesList,
    } = this.props;

    // const name ="katya";
    // const city ="Kharkov";

    // const test = [1, 2, 3];
    //
    // const createIterator = (arr) => {
    //   let index = 0;
    //   return {
    //     next: () => {
    //       return index < arr.length
    //       ? { value: arr[index++], done: false }
    //       : { done: true }
    //     }
    //   }
    // };
    //
    // function* countToThree() {
    //   yield 1;
    //   yield 2;
    // }
    //
    // const conter = countToThree();
    //
    // const muyIterator = createIterator(test);

    // const foo = () => {
    //   fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => console.log(response))
    //     .then(data => console.log(data))
    // };

    return (
      <div className="home">
        <button onClick={this.onBtnClick}>1975</button>
        <button onClick={this.onBtnClick}>1991</button>
        <button onClick={this.onBtnClick}>2015</button>
        <button onClick={this.onBtnToggle}>Toggle</button>
        <button onClick={this.handleNotes}>Notes</button>

        <input type="file" accept="video/mp4"/>
        <ul>
          <li><NavLink exact to="/">Default</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/home">Home</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/user">User</NavLink></li>
        </ul>
        {
          // foo()
        }
        {/*{*/}
          {/*console.log(conter.next())*/}
        {/*}*/}
        {/*{*/}
          {/*console.log(conter.next())*/}
        {/*}*/}
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
        <div className="notes-list">
          {
            notesList != null ?
              notesList.map((note) => {
                return (
                  <div className="note" key={note._id}>
                    <h3>{note.title}</h3>
                    {note.text && <p>{note.text}</p>}
                    {note.test && <p>{note.test}</p>}
                    {note.param && <p>{note.param}</p>}
                    <button onClick={() => this.handleDelete(note._id)}>Delete</button>
                  </div>
                )
              }) :null
          }
        </div>


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