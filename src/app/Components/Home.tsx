import React from 'react';
import Navbar from './Navbar';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <Image
            src="/home-banner-background.png"
            alt="banner-container"
            layout="intrinsic" 
            width={1100} 
            height={400}
          />
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
              Atendimento <FiArrowRight />
            </button>
          </a>
        </div>
        <div className='home-image-container'>
          <Image
            className='home-banner-image2'
            src="/home-banner-image.png"
            alt=""
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
