import { useState } from 'react'
import './App.css'
import data from './data'
import SingleContent from './conponents/SingleContent'

function App() {
  const [content, setContent] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>เครื่องมือพัฒนาเว็บ ปี2023</h3>
        <section>
          {content.map((data)=>{
            return <SingleContent key={data.id} {...data}/>
          })}
        </section>
      </div>
    </main>
  )
}

export default App
