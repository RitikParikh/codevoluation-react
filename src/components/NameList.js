import React, { Component } from 'react'
import Person from './Person'
class NameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           list : (this?.props?.arr).map((value)=> <Person key={value.id} person = {value}/>),
           names : (this?.props?.names).map((value,index)=> <h6 key={index}>{value}</h6>)
        };
    }
  render() {
    return (
      <div>{this.state.names}</div>
    )
  }
}

export default NameList 