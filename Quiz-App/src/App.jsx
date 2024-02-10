import { createContext, useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Score from './components/Score'

export const dataContext = createContext();

function App() {
  const [appState, setAppState] = useState("Menu")
  const [score,setScore] = useState(0)

  return (
    <dataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className='App'>
        <h1>Quiz Application</h1>
        {appState === "Menu" && <Menu/>}
        {appState === "Quiz" && <Quiz/>}
        {appState === "Score" && <Score/>}

      </div>
    </dataContext.Provider>
    
  )
}

export default App
