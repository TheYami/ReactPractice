import React, { useContext} from 'react'
import { dataContext } from '../App'
import QuestionsData from '../data/data'

function Score() {
    const {score,setScore,setAppState} = useContext(dataContext)

    const restartApp = ()=>{
        setScore(0)
        setAppState('Menu')
    }
  return (
    <div className='score'>
        <h1>สรุปผลคะแนน</h1>
        <h2>{score} / {QuestionsData.length}</h2>
        <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  )
}

export default Score