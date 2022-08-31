import React, { Component } from 'react'
import Person from './Person'
class NameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           list : (this?.props?.arr).map((value)=> <Person key={value.id} person = {value}/>)
        };
    }
  render() {
    return (
      <div>{this.state.list}</div>
    )
  }
}

export default NameList 