// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Great from './components/Great';
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Great/>
        <Welcome/>
      </div>
    );
  }
}

export default App;
