import { useState } from 'react'
import './App.css'

import Sidebar from './components/Sidebar-Section/Sidebar'
import Body from './components/Body-Section/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Sidebar/>
      <Body/>
    </div>
  )
}

export default App
