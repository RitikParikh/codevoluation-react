import React, { Component } from 'react'

class ClassClick extends Component {
    clickHendler(){
        console.log("Clcicked Class");
    }
  render() {
    return (
      <button onClick={this.clickHendler}>Click Me</button>
    )
  }
}

export default ClassClick