import React, { Component } from 'react'

class CounterNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
    }
    incrementCount = ()=>{
        this.setState((prevState) =>{
            return {count: prevState.count + 1}
        })
    }
  render() {
    const {count} = this.state;
    console.log(this.state)
    return (
      <div>{this.props.render(count, this.incrementCount)}</div>
    )
  }
}

export default CounterNew