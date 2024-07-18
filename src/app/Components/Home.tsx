import React from 'react'
import Navbar from './Navbar'
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <div className='home-container'>   
        <Navbar/>
        <div className='home-banner-container'> 
          <div className='home-bannerImage-container'> 
            <img src="home-banner-background.png" alt="banner-container"/>
          </div>
          <div className='home-text-section'> 
            <h1 className='primary-heading'>  
              Seu produto favorito você encontra aqui!
            </h1>
            <p className='primary-text'> 
            Fazemos todo o trabalho preparatório, como separar e embalar, para que você tenha produtos de limpeza e materiais têxteis de alta qualidade prontos para usar.
            </p>  
            <a href="https://api.whatsapp.com/send?phone=5592993089602"> 
            <button className='secondary-button'>  
                Atendimento <FiArrowRight/>
              </button>
            </a>
          </div>
          <div className='home-image-container'> 
            <img className='home-banner-image2' src="./home-banner-image.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home