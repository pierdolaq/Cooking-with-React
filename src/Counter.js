import React, { Component } from 'react';
import { ThemeContext } from './App';

class Counter extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount ,
            operationCounter: 0
        }
    }

    render() {
        console.log("render Counter");
        return (
            <ThemeContext.Consumer>
                { style => (
                    <div>
                        <button style={style} onClick={ ()=> {this.changeCount(-1)} }> - </button>
                        <span> {this.state.count} </span>
                        <button style={style} onClick={ ()=> {this.changeCount(1)} }> + </button> 
                        <br></br>
                        <button style={style} className="btnTwo" onClick={ () => {this.resetNumbers()} }> RESET </button>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }

    changeCount(number) {
        this.setState( prevState => {
            return {
                count: prevState.count + number, 
                operationCounter: prevState.operationCounter + 1
            } 
        }); 
    }

    resetNumbers() {
        this.setState( prevState => { return {count: prevState.count = 0} });
    }

}



export default Counter;