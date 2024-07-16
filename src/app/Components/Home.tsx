import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='home-container'>   
        <Navbar/>
        <div className='home-banner-container'> 
          <div className='home-bannerImage-container'> 
            <img src="home-banner-background.png" alt="banner-container"/>
          </div>
        </div>
    </div>
  )
}

export default Home