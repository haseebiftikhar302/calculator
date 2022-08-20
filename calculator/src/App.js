import React, { useRef, useState } from 'react';
import './App.css';
import soundOne from '../src/audio/audio1.wav'
import soundTwo from '../src/audio/audio2.wav'
import soundThree from '../src/audio/audio3.wav'
import soundFour from '../src/audio/audio4.wav'

function App() {
  const count = useRef(0)
  const countTwo = useRef(0)
  const countThree = useRef(0)
  const countFour = useRef(0)
  const [output, setOutput] = useState("")
  const handleClick = (e) => {
    setOutput(output.concat(e.target.name))
    count.current.play()
  }

  const c = () => {
    setOutput("")
    if(output !== ""){
      countTwo.current.play()
    }
  }

  const del =()=>{
    setOutput(output.slice(0, result.length - 1))
    countFour.current.play()
  }

  const result = () => {
    setOutput(eval(output).toString());
    countThree.current.play()
  }
  return (
    <>
      <audio src={soundOne} ref={count}></audio>
      <audio src={soundTwo} ref={countTwo}></audio>
      <audio src={soundThree} ref={countThree}></audio>
      <audio src={soundFour} ref={countFour}></audio>
      <div className="container">
        <header>
          <h1>CALCULATOR</h1>
        </header>
        <main>
          <div className="calculator">
            <div className="ans">
              <input type="text" value={output} readOnly />
            </div>
            <div className="keypad">
              <div className="keypad-child">
                <button onClick={c} className="btn">C</button>
                <button name='/' onClick={handleClick} className="btn">\</button>
                <button name='*' onClick={handleClick} className="btn">*</button>
                <button onClick={del} className="btn">Del</button>
              </div>
              <div className="keypad-child">
                <button name='7' onClick={handleClick} className="btn">7</button>
                <button name='8' onClick={handleClick} className="btn">8</button>
                <button name='9' onClick={handleClick} className="btn">9</button>
                <button name='-' onClick={handleClick} className="btn">-</button>
              </div>
              <div className="keypad-child">
                <button name='4' onClick={handleClick} className="btn">4</button>
                <button name='5' onClick={handleClick} className="btn">5</button>
                <button name='6' onClick={handleClick} className="btn">6</button>
                <button name='+' onClick={handleClick} className="btn">+</button>
              </div>
              <div className="keypad-child">
                <button name='1' onClick={handleClick} className="btn">1</button>
                <button name='2' onClick={handleClick} className="btn">2</button>
                <button name='3' onClick={handleClick} className="btn">3</button>
                <button name='%' onClick={handleClick} className="btn">%</button>
              </div>
              <div className="keypad-child">
                <button name='.' onClick={handleClick} className="btn">.</button>
                <button name='0' onClick={handleClick} className="btn">0</button>
                <button onClick={result} className="btn equal">=</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
