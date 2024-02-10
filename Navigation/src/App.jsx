
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/page/Home'
import Member from './components/page/Member'
import Product from './components/page/Product'

function App() {

  return (
    <div>
       <Router>
        <Navigation/>
        <Home/>
        <Member/>
        <Product/>
      </Router>
    </div>
   
  )
}

export default App
