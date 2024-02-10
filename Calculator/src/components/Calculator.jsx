import React, { useState } from 'react'
import  './calculator.css'

function Calculator() {
    const [input,setInput] = useState("0")

    const display = (value)=>{
        if(input.toString().charAt(0)==="0"){
            setInput(value)
        }else{
            setInput(input+value)
        }
    }

    const reset = ()=>{
        setInput("0")
    }

    const calculate = ()=>{
        const result = eval(input)
        setInput(result)
    }

  return (
    <div className='calculator'>
        <div className='display'>
            <h1>{input}</h1>
        </div>
        <div className='calc-btn'>
            <button className='operator' onClick={()=>display('+')}>+</button>
            <button className='operator' onClick={()=>display('-')}>-</button>
            <button className='operator' onClick={()=>display('*')}>x</button>
            <button className='operator' onClick={()=>display('/')}>/</button>
            <button onClick={()=>display('7')}>7</button>
            <button onClick={()=>display('8')}>8</button>
            <button onClick={()=>display('9')}>9</button>
            <button onClick={()=>display('6')}>6</button>
            <button onClick={()=>display('5')}>5</button>
            <button onClick={()=>display('4')}>4</button>
            <button onClick={()=>display('1')}>1</button>
            <button onClick={()=>display('2')}>2</button>
            <button onClick={()=>display('3')}>3</button>
            <button onClick={()=>display('.')}>.</button>
            <button onClick={()=>display(0)}>0</button>
            <button className='clear-btn' onClick={reset}>c</button>
            <button className='equal operator' onClick={calculate}>=</button>
        </div>
    </div>
  )
}

export default Calculator