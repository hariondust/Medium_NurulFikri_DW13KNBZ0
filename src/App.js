import React, {Component} from 'react';
import Register from './Register';
import Login from './Login';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import { render } from '@testing-library/react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Register/>*/}
        <Login/>
      {/* <Taskthree/> */}
      </div>
    )
  };
}


export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
