import React, { useState, useContext } from "react";
import { ThemeContext } from './App' ;

function CounterHooks({ initialCount }) {
    console.log("render CounterHooks")
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext) 
    return (
        <div>
            <button style={style} onClick={ () => setCount( prevCount => prevCount - 1 )} > - </button>
            <span> {count} </span>
            <button style={style} onClick={ () => setCount( prevCount => prevCount - 1 )} > + </button> 
            <br></br>
            <button style={style} className="btnTwo" onClick={ () => setCount( prevCount => prevCount=0 )}> RESET </button>
        </div>
    )
}

export default CounterHooks;