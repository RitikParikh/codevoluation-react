import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }
  render() {
    /* let message;
    if(this.state.isLoggedIn){
        message = <div>Welecome Ritik</div>;
    }else{
        message = <div>Welecome Guest</div>;
    }
    return <div>{message}</div> */
    /* if(this.state.isLoggedIn){
        return (
            <div>
                <div>Welecome Guest</div>
            </div>
        )
    }else{
        return (
            <div>
                <div>Welecome Ritik</div>
            </div>
        )
    } */
    /* return (
        <div>
            <div>Welecome Ritik</div>
            <div>Welecome Guest</div>
        </div>
    ) */
    /* return (
        this.state.isLoggedIn ? 
            <div>Welecome Ritik</div> :
            <div>Welecome Guest</div>
        
    ) */
    return (
        this.state.isLoggedIn &&
            <div>Welecome Ritik</div>
        
    )
  }
}

export default UserGreeting