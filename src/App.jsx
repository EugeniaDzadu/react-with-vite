// import { useState } from 'react'
import Home from './pages/Index'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' Component={Home}/>

        <Route path='/about-us' Component={About}/>

        <Route path='/contact-us' Component={Contact}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
