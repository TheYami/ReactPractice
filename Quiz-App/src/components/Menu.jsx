import React, { useContext } from 'react'
import { dataContext } from '../App'

function Menu() {
    const {setAppState} = useContext(dataContext)
  return (
    <div className='menu'>
        <h1>เริ่มทำแบบทดสอบ</h1>
        <button onClick={()=>setAppState("Quiz")}>Start</button>
    </div>
  )
}

export default Menu