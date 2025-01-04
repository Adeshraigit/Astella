import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx'
import { Home } from './Pages/Home.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter> 
    </>
  )
}

export default App
