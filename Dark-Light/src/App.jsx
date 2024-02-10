import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Content from './components/Content'

import { createContext } from 'react'

export const themeContext = createContext()

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <themeContext.Provider value={{theme,setTheme}}>
      <div>
        <Title/>
        <Content/>
      </div>
    </themeContext.Provider>
  )
}

export default App
