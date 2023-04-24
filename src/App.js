import { useState } from 'react';
import './App.css';
import { useRef } from 'react';
import { useEffect } from 'react';
function App() {
  const [result,setResolt]=useState("")
  const inputRef =useRef(null);


  useEffect(()=>inputRef.current.focus())
  return (
    <>
      <div className='calc-app'>
        <form>
          <input type="rext"  value={result} ref={inputRef}/>
        </form>
        <div className='keypad'>
          <button id="clear">CLEAR</button>
          <button id="backspace">C</button>
          <button id="">+</button>
          <button id="">7</button>
          <button id="">8</button>
          <button id="" >9</button>
          <button id="">-</button>
          <button id="">4</button>
          <button id="">5</button>
          <button id="">6</button>
          <button id="">*</button>
          <button id="">1</button> 
          <button id="">2</button>
          <button id="">3</button>
          <button id="">/</button>
          <button id="">0</button>
          <button id="">.</button>
          <button id="result"> Result</button>
         



        </div>
      </div>
    </>
  );
}

export default App;
