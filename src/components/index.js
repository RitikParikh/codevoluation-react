// import logo from './logo.svg';
import '../App.css';
import React, { Component } from 'react';
import Great from './Great';
// import Welcome from './Welcome'
// import Hello from './Hello';

class Basic extends Component {
  render() {
    return (
      <div className="App">
        <Great name = "Dev" heroName="Hello"/>
        <Great name = "Loooooop" heroName = "OMMMM"/>
        <Great name = "Orign" heroName = "qaz"/>
        {/* <Welcome/> */}
        {/* <Hello/> */}
      </div>
    );
  }
}

export default Basic;
