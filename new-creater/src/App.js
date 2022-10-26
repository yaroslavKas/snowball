import logo from './logo.svg';
import './App.css';

function App() {
    // var A = "Hello";
    // var B = "llo";
    // var C = A-B;
    // console.log(C)

    const foo = (x) => {
        const result = Math.sign(x);
        switch (result) {
            case 0:
            case -1:
                return 0
            default:
                return x;

        }
    }

    console.log(foo(0))
    // console.log(Boolean(Math.sign(-4)))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// class App {
//     handleClick() {
//         // do smth
//     }
//     render() {
//         return <button onClick={this.handleClick()}>{'Click Me'}</button>
//     }
// }

export default App;
