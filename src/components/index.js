// import logo from '../logo.svg';
import React, { Component } from 'react';
import '../App.css';
// import '../styles/appStyles.css';
// import styles from '../styles/appStyles.module.css';
import '../App.css';
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
// import NameList from './NameList'
// import Stylesheet from './Stylesheet'
// import Inline from './Inline'
// import Form from './Form'
// import LifecycleA from './LifecycleA'
import ParentComp from './ParentComp'


class Basic extends Component {
  render() {
    // let dynamicArray = [{name:"Bruce",age:30,id:1},{name:"Bruce",age:30,id:2},{name:"Bruce",age:30,id:3}];
    // const names = [ ' Bruce ' , ' Clark ' , ' Diana ' ];
    return (
      <div className="App">
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}
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
        {/* <NameList arr = {dynamicArray} names={names} /> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <Inline/> */}
        {/* <Form/> */}
        {/* <LifecycleA/> */}
        <ParentComp/>
      </div>
    );
  }
}

export default Basic;
