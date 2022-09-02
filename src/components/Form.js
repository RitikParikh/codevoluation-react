import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            comment: "",
            select: "react"
        }
    }
    userNameCHageHandler = (event) => { 
        this.setState({
            username: event.target.value
        })
    }
    commentCHageHandler = (event) => { 
        this.setState({
            comment: event.target.value
        })
    }
    selectCHageHandler = (event) => { 
        this.setState({
            select: event.target.value
        })
    }
    handleSubmit = (event) => { 
       alert(`${this.state.username} ${this.state.comment} ${this.state.select}`);
       event.preventDefault();
    }
  render() {
    return (
      <form onSubmit ={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type="text" onChange = {this.userNameCHageHandler} value = {this.state.username}/>
        </div>
        <div>
            <label>Comment</label>
            <input type="text" onChange = {this.commentCHageHandler} value = {this.state.comment}/>
        </div>
        <div>
                <label>Select</label>
                <select  onChange = {this.selectCHageHandler} value = {this.state.select}>
                    <option value="react">React</option>
                    <option value="view">View</option>
                    <option value="anguler">Anguler</option>
                </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form