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
// import UserGreeting from './UserGreeting'
import NameList from './NameList'

class Basic extends Component {
  render() {
    let dynamicArray = [{name:"Bruce",age:30,id:1},{name:"Bruce",age:30,id:2},{name:"Bruce",age:30,id:3}];
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
        {/* <UserGreeting/> */}
        <NameList arr = {dynamicArray} />
      </div>
    );
  }
}

export default Basic;
