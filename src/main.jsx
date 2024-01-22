import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import {Route, createBrowserRouer, createRoutesFromElements} from 'react-router-dom'
import About from './pages/about/About.jsx'

const router = createBrowserRouer(
  createRoutesFromElements(
    <Route path='/' element={<Home/>}>
      <Route path='about' element={<About/>} />
    </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
)
