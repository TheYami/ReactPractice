import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './components/page/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import Member from './components/page/Member.jsx'
import Product from './components/page/Product.jsx'
import Navigation from './components/Navigation.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/member",
    element:<Member/>
  },
  {
    path:"/product",
    element:<Product/>
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
