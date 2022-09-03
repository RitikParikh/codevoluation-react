import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("Pre comp componect Rander");
    return (
      <div>PureComp {this.props.name}</div>
    )
  }
}

export default PureComp