import { useState } from 'react';
import './App.css';
import { useRef } from 'react';
import { useEffect } from 'react';
function App() {
  const [events, setEvents] = useState("")
  const inputRef = useRef(null);


  useEffect(() => inputRef.current.focus())


  const handleClick = (event) => {
    setEvents(events.concat(event.target.name))
  }

  function backspace() {
    setEvents(events.slice(0, events.length - 1));
  }

  const clear = () => {
    setEvents("")
  }

  const calculation=()=>{
    try{
setEvents(eval(events).toString());
    }catch(error){
      setEvents(Error);

    }

  }

  return (
    <>
      <div className="calc-app">
        <from>
          <input type="text" value={events} ref={inputRef} />
        </from>
        <div className='keypad'>
          <button id="backspace" onClick={backspace}>CLEAR</button>
          <button id="clear" onClick={clear}>C</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="-" onClick={handleClick}>-</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="*" onClick={handleClick}>*</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="/" onClick={handleClick}>/</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button id="result" onClick={calculation}> Result</button>
        </div>
      </div>
    </>
  );
}

export default App;
