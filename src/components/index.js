// import logo from '../logo.svg';
import '../App.css';
import React, { Component } from 'react';
// import Great from './Great';
// import Welcome from './Welcome'
// import Hello from './Hello';
// import Message from './Message'
// import Counter from './Counter'
// import FunctionClick from './FunctionClick'
// import ClassClick from './ClassClick'
// import EventBind from './EventBind'
// import ParentComponent from './ParentComponent'
import UserGreeting from './UserGreeting'

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
        {/* <Message/> */}
        {/* <Counter count="5"/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        <UserGreeting/>
      </div>
    );
  }
}

export default Basic;
