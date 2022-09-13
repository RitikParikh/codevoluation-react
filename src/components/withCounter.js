import React from 'react';

const UpdatedComponent = (OriginComponent) =>{
    
    class NewComponent extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                count :0
            };
        }
        incrementCount  = ()=>{
            this.setState((previousState)=>{
                return {count: previousState.count +1 }
            });
        }
        render() {
            return <OriginComponent count = {this.state.count} incrementCount = {this.incrementCount}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent