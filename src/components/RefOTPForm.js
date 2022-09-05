import React, { Component } from 'react';
import '../styles/RefsCss.css'
class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.list = [];
        this.state = {
            disable: true,
            button: 'submit',
        };
        for(let i=1;i<=props.count;i++){
            this.state[`inputBox${i}`]  = '';
            this[`inputRef${i}`]  = React.createRef();
        }
        this[`inputRef${props.count+1}`] = React.createRef()
    }
    componentDidMount() {
        console.log(this);
        this.inputRef1.current.focus()
    }
    clickHandlers = () => {
        let buttonText = "OTP -"
        for(let i=1;i<=this.props.count;i++){
            buttonText += this.state[`inputBox${i}`];
        }
        this.setState({ button: buttonText });
    }
    handleChange = (event, type) => {
        let value = event.target.value.trim();
             this.setState((state)=>{ 
                return {[type]: value} }, () => 
            {
                console.log(`inputBox${this.props.count}` , type)
                if(`inputBox${this.props.count}` === type){
                    this.setState({ disable: false }, () => this[`inputRef${this.props.count+1}`].current.focus());
                }else{
                    for(let i=1;i<=this.props.count;i++){
                        // console.log(`inputRef${i}`);
                            (type === `inputBox${i}` && (this.state[`inputBox${i}`]).length===1) && this[`inputRef${i+1}`].current.focus();
                    }
                    this.setState({ disable: true });
                }
            });
    }
    render() {
        let list = [];
        for(let i=1;i<=this.props.count;i++){
            list.push(<input type="text" ref={this[`inputRef${i}`]} key={`inputBox${i}`} maxLength={1}  onChange={(e) => this.handleChange(e, `inputBox${i}`)} value={this.state[`inputBox${i}`]} autoComplete="new-password" />);
        }
        return (
            <>
                <div>
                    {list}
                    <br/>
                    <br/>
                    <button type="submit" ref={this[`inputRef${this.props.count+1}`]} onClick={this.clickHandlers} disabled={this.state.disable}>{this.state.button}</button>
                </div>
            </>
        )
    }
}

export default RefsDemo