// import logo from '../logo.svg';
import React, { Component } from 'react';
import '../App.css';
// import '../styles/appStyles.css';
// import styles from '../styles/appStyles.module.css';
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
// import ParentComp from './ParentComp'
// import RefsDemo from './RefsDemo'
// import RefsForm from './RefsForm'
import RefOTPForm from './RefOTPForm'
// import FocusInput from './FocusInput'

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert : '',
      focus1 : true,
      focus2 : false,
      focus3 : false,
    }
  }
  setAlert = (arg) =>{
    let argsArr = this.state.alert.split("-");
    if(argsArr.length > 0){
      console.log("argsArr.length", argsArr.length)
      this.setState({[`focus${argsArr.length}`] : false},()=>{
        this.setState({[`focus${argsArr.length+1}`] : true})
    });
    this.setState({alert:this.state.alert.length === 0 ? arg : this.state.alert+"-" + arg})
  }
}
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
        {/* <ParentComp/> */}
        {/* <RefsDemo /> */}
        {/* <RefsForm /> */}
        <RefOTPForm count ={2} setAlert={this.setAlert} spicalCharStop={false} numberEnabled={false} regex={false} focus={this.state.focus1} isSubmit={false} placeHolder={"DD"}/>-{'\u00A0'}
        <RefOTPForm count ={2} setAlert={this.setAlert} spicalCharStop={true} numberEnabled={true} regex={false} focus={this.state.focus2} isSubmit={false} placeHolder={"MM"}/>-{'\u00A0'}
        <RefOTPForm count ={4} setAlert={this.setAlert} spicalCharStop={true} numberEnabled={true} regex={false} focus={this.state.focus3} isSubmit={true} placeHolder={"YYYY"}/>
        {
          this.state.alert && <h1> {this.state.alert} </h1>
        }
      {/* <FocusInput /> */}
      </div>
      
    );
  }
}

export default Basic;
