// import { useState } from 'react'
import Home from './pages/Index'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'



function App() {

  return (
    <BrowserRouter>
     <Nav/>
      <Routes>

        <Route path='/' Component={Home}/>

        <Route path='/about-us' Component={About}/>

        <Route path='/contact-us' Component={Contact}/>

      </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App;
