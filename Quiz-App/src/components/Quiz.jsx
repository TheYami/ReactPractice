import React, { useContext, useEffect, useState } from 'react'
import QuestionsData from '../data/data'
import { dataContext } from '../App';

function Quiz() {

    const [current,setCurrent] = useState(0);
    const [selectedChoice,setSelectChoice] = useState('');
    const {score,setScore,setAppState} = useContext(dataContext)

    useEffect(()=>{
        checkAnswer();
    },[selectedChoice])

     const checkAnswer = ()=>{
        if(selectedChoice !== ''){
            if(selectedChoice === QuestionsData[current].answer){
                setScore(score+1);
                nextQuiz();
            }else{
                nextQuiz();
            }
        }
     }

     const nextQuiz = ()=>{
        setSelectChoice('');
        if(current === QuestionsData.length-1){
            setAppState('Score')
        }else{
            setCurrent(current+1);
        }
     }
  return (
    <div className='quiz'>
        <h1>{QuestionsData[current].question}</h1>
        <div className="choice">
            <button onClick={()=>setSelectChoice('A')}>{QuestionsData[current].A}</button>
            <button onClick={()=>setSelectChoice('B')}>{QuestionsData[current].B}</button>
            <button onClick={()=>setSelectChoice('C')}>{QuestionsData[current].C}</button>
            <button onClick={()=>setSelectChoice('D')}>{QuestionsData[current].D}</button>
        </div>
        <p>{`${current+1}/${QuestionsData.length}`}</p>
    </div>
  )
}

export default Quiz