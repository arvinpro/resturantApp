import { useState } from 'react'
import React from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Menubar from './components/Menubar'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <Hero />
    <About />
    <Menubar />
    <Contact />
    <Footer/>
    </>
  )
}

export default App
