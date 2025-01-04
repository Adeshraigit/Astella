import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx'
import { Home } from './Pages/Home.jsx';
import { Chat } from './Pages/Chat.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyse" element={<Chat />} />
      </Routes>
      <Footer/>
    </BrowserRouter> 
    </>
  )
}

export default App
