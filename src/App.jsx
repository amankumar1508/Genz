import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import About from './pages/About'
import Carrer from './pages/Career'
import Support from './pages/Support'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/career' element={<Carrer />} ></Route>
        <Route path='/support' element={<Support />} ></Route>
        <Route path='/contactus' element={<Contact/>} ></Route>
      </Routes>
      <Nav />
    </div>
  )
}
