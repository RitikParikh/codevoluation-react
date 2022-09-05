/* import React, { Component } from 'react'

class RefsForm extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
        this.inputCommentRef = React.createRef()
        this.state = {
            username: "",
            comment: "",
            text : "Click"
        }
    }
    componentDidMount() {
        this.inputRef.current.focus();
    }
    clickHandler = ()=>{
        this.setState({
            text: `${this.inputRef.current.value} ${this.inputCommentRef.current.value}`
        })
    }
    userNameCHageHandler = (event) => { 
        this.setState({
            username: event.target.value
        },()=>{
            if(this.state.username.length === 0){
                this.inputRef.current.focus();
            }else{
                this.inputCommentRef.current.focus();
            }
        })
        
    }
    commentCHageHandler = (event) => { 
        this.setState({
            comment: event.target.value
        })
    }
  render() {
    return (
        <div>
            <div>
                <label>Username</label>
                <input type="text" onChange = {this.userNameCHageHandler} value = {this.state.username} ref ={this.inputRef} />
            </div>
            <div>
                <label>Comment</label>
                <input type="text" onChange = {this.commentCHageHandler} value = {this.state.comment} ref ={this.inputCommentRef} />
            </div>
            <button onClick={this.clickHandler}>{this.state.text}</button>
        </div>
    )
  }
}

export default RefsForm */




//Devanshu
/* import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            disable: true,
        }
        this.inputRefName = React.createRef()
        this.inputRefEmail = React.createRef()
        this.inputRefPass = React.createRef()
        this.inputRefButon = React.createRef()
    }
    componentDidMount() {
        this.inputRefName.current.focus()
        // console.log(this.inputRefName);
    }
    clickHandlers = (event) => {
        alert(this.inputRefName.current.value)
    }
    handleChange = (event, type) => {
        this.setState({ [type]: event.target.value }, () => {
            // console.log(type,'-------------',this.state.name.length);
            (type == 'name' && this.state.name.length > 0) && this.inputRefEmail.current.focus();
            (type == 'email' && this.state.email.length > 0) && this.inputRefPass.current.focus();
            if (type == 'phone' && this.state.phone.length > 0) {
                this.setState({ disable: false })
                this.inputRefButon.current.focus();
            }
        })
    }
    render() {
        return (
            <>
                <div>
                    <label>name {this.state.name}</label>
                    <br />
                    <input type="text" ref={this.inputRefName} onChange={(e) => this.handleChange(e, 'name')} value={this.state.name} />
                </div>
                <div>
                    <label>email</label>
                    <br />
                    <input type="email" ref={this.inputRefEmail} onChange={(e) => this.handleChange(e, 'email')} />
                </div>
                <div>
                    <label>phone</label>
                    <br />
                    <input type="text" ref={this.inputRefPass} onChange={(e) => this.handleChange(e, 'phone')} />
                </div>
                <br />
                <div>
                    <button type="submit" ref={this.inputRefButon} onClick={this.clickHandlers} disabled={this.state.disable}>submit</button>
                </div>
            </>
        )
    }
}

export default RefsDemo */

import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            disable: true,
            button: 'submit',
        }
        this.inputRefName = React.createRef()
        this.inputRefEmail = React.createRef()
        this.inputRefPhone = React.createRef()
        this.inputRefButon = React.createRef()
    }
    componentDidMount() {
        this.inputRefName.current.focus()
        // console.log(this.inputRefName);
    }
    clickHandlers = (event) => {
        this.setState({ button: `OTP - ${this.state.name} ${this.state.email} ${this.state.phone}` });
    }
    handleChange = (event, type) => {
        this.setState({ [type]: event.target.value }, () => {
            // console.log(type,'-------------',this.state.name.length);
            (type === 'name' && this.state.name.length > 0) && this.inputRefEmail.current.focus();
            (type === 'email' && this.state.email.length > 0) && this.inputRefPhone.current.focus();
            if (type === 'phone' && this.state.phone.length > 0) {

                this.setState({ disable: false }, () => this.inputRefButon.current.focus());
            } else {
                this.setState({ disable: true })
            }
        })
    }
    render() {
        const { state: { name,email, button,phone, disable },
            inputRefName,
            inputRefEmail,
            inputRefPhone,
            inputRefButon,
            handleChange,
            clickHandlers } = this
        return (
            <>
                <div>
                    <label>name</label>
                    <br />
                    <input type="text" ref={inputRefName} onChange={(e) => handleChange(e, 'name')} value={name} />
                </div>
                <div>
                    <label>email</label>
                    <br />
                    <input type="email" ref={inputRefEmail} onChange={(e) => handleChange(e, 'email') } value={email} />
                </div>
                <div>
                    <label>phone</label>
                    <br />
                    <input type="text" ref={inputRefPhone} onChange={(e) => handleChange(e, 'phone')} autoComplete="new-password" value={phone} />
                </div>
                <br />
                <div>
                    <button type="submit" ref={inputRefButon} onClick={clickHandlers} disabled={disable}>{button}</button>
                </div>
            </>
        )
    }
}

export default RefsDemo