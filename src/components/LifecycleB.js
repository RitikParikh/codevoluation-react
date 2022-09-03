import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ritik"
        }
        console.log("LifecycleB Constructor");
    }
    static getDerivedStateFromProps(props, state) { 
      console.log("LifecycleB Derived State from props");
      return null;
    }
    componentDidMount(){
      console.log("LifecycleB componentDidMount");
    }
    shouldComponentUpdate() { 
        console.log("LifecycleB shuld componet update");
        return null;
      }
      getSnapshotBeforeUpdate(prevProps, prevState) { 
        console.log("LifecycleB getSnapshotBeforeUpdate");
        return null;
      }
      componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate");
      }
  render() {
    console.log("LifecycleB Rende");
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB