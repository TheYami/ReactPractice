import { useState } from 'react'
import './App.css'

import FormCompoent from './components/FormCompoent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormCompoent/>
    </>
  )
}

export default App
