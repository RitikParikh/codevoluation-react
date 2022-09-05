import React, { Component } from 'react';
import '../styles/RefsCss.css'
class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.list = [];
        this.paste = false;
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
        let buttonText = "OTP -";
        for(let i=1;i<=this.props.count;i++){
            // console.log(this.state[`inputBox${i}`])
            buttonText += this.state[`inputBox${i}`];
        }
        if(this.props.isSubmit){
            this.setState({ button: buttonText });
        }
        else{
            console.log(buttonText)
            alert(`Your OTP is-${buttonText}`)
        }
        return true;
    }
    onKeyDown =(event, type) => {
        if(event.keyCode === 86){
            this.paste = true;
        }
        let value = event.target.value.trim();
        this.setState({[type]: value}, () => {});
        if (event.keyCode === 8 && value.length === 0) {
            if(type === `inputBox${this.props.count}` && (this.state[`${type}`]).length===0 && (this.state[`inputBox${this.props.count-1}`]).length===0){
                let reverseData = this.reverseForCheck(this.props.count,1);
                if(reverseData.status === true) {
                    this[`inputRef${reverseData.value+1}`].current.focus();
                }
            }
            else if(type !== `inputBox1` && (this.state[`${type}`]).length===0) {
                this[`inputRef${Number(this.getLastChar(type))-1}`].current.focus();
            }
        }
    }
    reverseForCheck = (j,lengthValue)=>{
        for(let i=j;i>=lengthValue;i--){
            if(this.state[`inputBox${i}`] !== undefined && (this.state[`inputBox${i}`]).length===1){
                return {value : i, status: true};
            }
        }
        return {value : lengthValue, status: false};
    }
    forCheck = (j,lengthValue)=>{
        for(let i=j;i<=lengthValue;i++){
            if(this.state[`inputBox${i}`] === undefined|| (this.state[`inputBox${i}`]).length===0){
                return {value : i, status: true};
            }
        }
        return {value : lengthValue, status: false};
    }
    getLastChar = (text,isOne) =>{
        if(isOne){
            return text.charAt(text.length-1);
        } 
        if(isNaN(text.charAt(text.length-2))){
            return text.charAt(text.length-1)    
        }else{
            return `${text.charAt(text.length-2)}${text.charAt(text.length-1)}`
        }
    }
    handleChange = (event, type) => {
        let value = event.target.value.trim();
        if(this.props.spicalCharStop === true){
            value = value.replace(/[^\w\s]/gi, "");
        }
        if(this.paste === true){
            this.paste = false;
            let valueArr = value.split("");
            let currentElementNumber = Number(this.getLastChar(type)) || 0;
            for(let i=0;i<=this.props.count-currentElementNumber;i++){
                if(i < valueArr.length){
                    this.setState({[`inputBox${currentElementNumber+i}`]: valueArr[i]}, () =>{
                        try {
                            this[`inputRef${currentElementNumber+i+1}`].current.focus();
                        } catch (error) {
                            this[`inputRef${this.props.count}`].current.focus();
                        }
                        if(this.forCheck(1,this.props.count).status === false){
                            if(this.props.isSubmit){
                               this.setState({ disable: false },()=>this[`inputRef${this.props.count+1}`].current.focus());
                            } else{
                                this.clickHandlers();
                                this[`inputRef${this.props.count}`].current.focus();
                            }
                        }
                    });
                }
               
            }
        }else{
            if(value.length === 0){
                this.setState({[type]: value}, () => {});
                this.setState({ disable: true });
            }else if(value.length === 1){
                this.setState({[type]: value}, () => 
                {
                    let forCheckData = this.forCheck(Number(this.getLastChar(type),true),this.props.count)
                    if(forCheckData.status === true){
                        this[`inputRef${forCheckData.value}`].current.focus();
                    }else{
                        if(this.forCheck(1,this.props.count).status === false){
                            this.props.isSubmit && this.setState({ disable: false },()=>this[`inputRef${this.props.count+1}`].current.focus());
                            !this.props.isSubmit &&  this.clickHandlers();
                        }
                        else{
                            this.setState({ disable: true },()=>this[`inputRef${this.props.count}`].current.focus());
                        }                    
                    }
                });  
            }
            else if(value.length > 1){
                console.log(event)
                value = this.getLastChar(value,true);
                let forCheckData = this.forCheck(Number(this.getLastChar(type),true),this.props.count);
                if(forCheckData.status === true){
                    let forCheckFocus = this.forCheck(forCheckData.value,this.props.count);
                    if(forCheckFocus.status === true){
                        this.setState({[`inputBox${forCheckData.value}`]: value}, () =>{ 
                            let nextFocus = this.forCheck(forCheckFocus.value,this.props.count);
                            if(nextFocus.status === true){
                                this[`inputRef${nextFocus.value}`].current.focus();
                            }else{
                                if(this.forCheck(1,this.props.count).status === false){
                                    this.props.isSubmit && this.setState({ disable: false },()=>this[`inputRef${this.props.count+1}`].current.focus());
                                    !this.props.isSubmit &&  this.clickHandlers()
                                }else{
                                    this[`inputRef${forCheckFocus.value}`].current.focus()
                                }
                            }
                        });
                    }else{
                        if(this.forCheck(1,this.props.count).status === false){
                            this.props.isSubmit && this.setState({ disable: false },()=>this[`inputRef${this.props.count+1}`].current.focus());
                            !this.props.isSubmit &&  this.clickHandlers()
                        }else{
                            this.setState({ disable: true },()=>this[`inputRef${this.props.count}`].current.focus());
                        }   
                    }
                }else{
                    this.setState({ disable: true },()=>this[`inputRef${this.props.count}`].current.focus());
                }
            }
        }
    }
    render() {
        let list = [];
        let button ="";
        for(let i=1;i<=this.props.count;i++){
            list.push(<input type="text" ref={this[`inputRef${i}`]} key={`inputBox${i}`} onKeyDown={(e) => this.onKeyDown(e, `inputBox${i}`)} onChange={(e) => this.handleChange(e, `inputBox${i}`)}  value={this.state[`inputBox${i}`]} autoComplete="new-password" />);
        }
        console.log(this.props.isSubmit)
        if(this.props.isSubmit){
            button = <button type="submit" ref={this[`inputRef${this.props.count+1}`]} onClick={this.clickHandlers} disabled={this.state.disable}>{this.state.button}</button>       
        }
        return (
            <>
                <div>
                    {list}
                    <br/>
                    <br/>
                    {button}
                </div>
            </>
        )
    }
}

export default RefsDemo