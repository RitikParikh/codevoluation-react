import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ritik"
        }
        console.log("LifecycleA Constructor");
    }
    static getDerivedStateFromProps(props, state) { 
      console.log("LifecycleA Derived State from props");
      return null;
    }
    componentDidMount(){
      console.log("LifecycleA componentDidMount");
    }
    shouldComponentUpdate() { 
      console.log("LifecycleA shuld componet update");
      return null;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { 
      console.log("LifecycleA getSnapshotBeforeUpdate");
      return null;
    }
    componentDidUpdate(){
      console.log("LifecycleA componentDidUpdate");
    }
    changeState = ()=>{
      this.setState({
        name:"Ritik"
      })
    }
  render() {
    console.log("LifecycleA Rende");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick = {this.changeState}>change state</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA