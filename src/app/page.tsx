'use client'
import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Carousel from './Components/Caurosel'
import Navbarcarousel from './Components/Navbarcarousel'
import Contact2 from './Components/Contact2'
import Footer from './Components/Footer'


const page = () => {
  return (
    <div> 
      <Home/>
      <About/>
      <Work/>
      <Navbarcarousel/>
      <Carousel/>
      <Contact2/>
      <Footer/>
    </div>
  )
}

export default page