import React from 'react'
import Home from './pages/Home'
import { Navbar } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shows from './pages/Shows'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/show/:id' element={<Shows/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
