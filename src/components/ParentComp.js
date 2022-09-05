import React, { Component } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComponent from './MemoComponent'
export class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "RItik"
        }
    }
    componentDidMount() {
        // let i=0;
        // setInterval(()=>{
        //     // i++;
        //     this.setState({
        //         name:"RItik"
        //     });
        // }, 2000)
    }
  render() {
    console.log("Parent componect Rander");
    return (
        <>
        <div>ParentComp</div>
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComponent name={this.state.name} />
        </>
    )
  }
}

export default ParentComp