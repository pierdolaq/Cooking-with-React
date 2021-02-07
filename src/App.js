import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('red');
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <br></br><br></br><hr></hr><br></br>
      Counter
      <Counter initialCount={0} />
      <br></br><br></br><hr></hr><br></br>
      CounterHooks
      <CounterHooks initialCount={0} />
      <br></br><br></br><hr></hr><br></br>
      <button onClick={() => setTheme(prevTheme => { 
        return prevTheme === 'red' ? 'blue' : 'red' 
      })}> Toggle Theme </button>
    </ThemeContext.Provider>
  )
}

export default App;
