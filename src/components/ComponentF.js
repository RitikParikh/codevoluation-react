import React, { Component } from 'react'
import {UserConsumer} from './userContext';
class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
            {
                (username, hi)=>{
                    return <div>{hi} {username}</div>
                }
            }
        </UserConsumer>
    )
  }
}

export default ComponentF