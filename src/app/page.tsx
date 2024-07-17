import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Carousel from './Components/Caurosel'
import Navbarcarousel from './Components/Navbarcarousel'


const page = () => {
  return (
    <div> 
      <Home/>
      <About/>
      <Work/>
      <Navbarcarousel/>
      <Carousel/>
    </div>
  )
}

export default page