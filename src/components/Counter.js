import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            disabled : true
        }
    }
    incrementChange() {
         /*  this.setState({count : this.state.count+1},()=>{
            console.log('Callback Value',this.state.count)
          }); */
          this.setState((previousState,props)=>({
            count : previousState.count+Number(props.count),
            disabled : previousState.count+Number(props.count) === 0 ? true : false
          }));
          return true;
    }
    decrementChangeByFive() {
        /*  this.setState({count : this.state.count+1},()=>{
           console.log('Callback Value',this.state.count)
         }); */
         this.setState((previousState,props)=>({
           count : previousState.count-Number(props.count),
           disabled : previousState.count-Number(props.count) !== 0 ? false : true
         }));
         return true;
   }
    incrementChangeByFive() {
        this.incrementChange()
        return true;
  }
  render() {
    return (
        <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.incrementChangeByFive()}>Increment</button>
                <button onClick={()=>this.decrementChangeByFive()}  disabled ={this.state.disabled}>Decrement</button>
        </div>
    )
  }
}

export default Counter