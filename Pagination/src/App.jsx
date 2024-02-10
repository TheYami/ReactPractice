import { useEffect, useState } from 'react'
import './App.css'
import Food from './components/Food'
import MenuData from './components/Data'

function App() {
  const [food, setFood] = useState(MenuData)
  const [dataInPage,setDataInPage] = useState([])
  const [page,setPage] = useState(0)

  const pagination = ()=>{
    const foodPerPage = 3
    const pages = Math.ceil(MenuData.length / foodPerPage)
    console.log("จำนวนเลขหน้า = " ,pages)

    const newFood = Array.from({length:pages},(data,index)=>{
      const start = index * foodPerPage
      return MenuData.slice(start,start+foodPerPage)
    })
    console.log(newFood)
    return newFood
  }

  const handlePage = (index)=>{
    setPage(index)

  }

  useEffect(()=>{
    const paginate = pagination()
    setDataInPage(paginate)
    console.log(paginate)
    setFood(paginate[page])
  },[page])

  return (
    <div className='container'>
      <h1>FoodCard</h1>
      <div className="content">
        {food.map((data,index)=>{
          return <Food key={index} {...data}/>
        })}
      </div>

      <div className="pagination-container">
        {dataInPage.map((data,index)=>{
          return <button key={index} onClick={()=>{handlePage(index)}} className={`btn ${index === page?"active":"btn"}`}>{index+1}</button>
        })}
      </div>
    </div>
  )
}

export default App
