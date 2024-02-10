import { useState } from 'react'
import './App.css'
import Dropdown from './components/Dropdown'
import Food from './components/Food'
import MenuData from './components/data'

function App() {
  const [food, setFood] = useState(MenuData)

  const changeFoodData = (e)=>{
    const catagory = e.target.value
    if(catagory === 'เมนูทั้งหมด'){
      setFood(MenuData)
    }else{
      const result = MenuData.filter((element)=>{
        return element.menu === catagory
      })
      setFood(result)
    }
  }

  return (
    <div className='container'>
      <Dropdown changeFoodData={changeFoodData}/>
      <div className='content'>
        {food.map((data,index)=>{
          return <Food keys={index} {...data}/>
        })}
      </div>
    </div>
  )
}

export default App
