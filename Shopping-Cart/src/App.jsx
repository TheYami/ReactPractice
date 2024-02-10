import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Cart/>
    </>
  )
}

export default App
