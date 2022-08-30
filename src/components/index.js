// import logo from '../logo.svg';
import '../App.css';
import React, { Component } from 'react';
// import Great from './Great';
// import Welcome from './Welcome'
// import Hello from './Hello';
import Message from './Message'

class Basic extends Component {
  render() {
    return (
      <div className="App">
        {/* <Great name = "Dev" heroName="Hello"><p>HI</p></Great> */}
        {/* <Great name = "Loooooop" heroName = "OMMMM"/> */}
        {/* <Great name = "Orign" heroName = "qaz"/> */}
        {/* <Welcome name = "Dev" heroName="Hello"/> */}
        {/* <Welcome name = "Loooooop" heroName = "OMMMM"/> */}
        {/* <Hello/> */}
        <Message/>
      </div>
    );
  }
}

export default Basic;
