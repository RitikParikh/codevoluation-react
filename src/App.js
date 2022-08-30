// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import Great from './components/Great';
// import Welcome from './components/Welcome'
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Great/> */}
        {/* <Welcome/> */}
        <Hello/>
      </div>
    );
  }
}

export default App;
