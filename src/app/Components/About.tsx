'use client'

import React from 'react';
import Image from 'next/image';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About: React.FC = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <Image 
              src="/about-background.png" 
              alt="About Background" 
              layout="responsive" 
              width={1200} 
              height={800} 
            />
        </div>
        <div className='about-section-image-container'>
            <Image 
              className='logo-section-image' 
              src="/about-background-image.png" 
              alt="About Background Image" 
              layout="intrinsic" 
              width={1200} 
              height={400} 
            />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>    
                Somos a TR COMERCIAL
            </h1>
            <p className='primary-text'>    
                Atuamos no mercado desde 2019, comercializando produtos têxteis para limpeza e higienização de diversos ambientes.
                Estamos focados em atender pequenos e médios negócios, redes de lojas, distribuidores e atacadistas. Nossa estrutura fabril em Itaporanga, PB, e o ponto de apoio em Manaus, AM, garantem uma logística eficiente.
            </p>
            <div className='about-buttons-container'>
                <a href="https://drive.google.com/file/d/1DUhcHP1VbQYo9i9axu-8Z3fIf7ycfBNA/view?usp=drive_link">
                  <button className='secondary-button'>Saiba Mais</button>
                </a>
                <a href="https://www.instagram.com/trcomercial.manaus/reel/CuErEBoOejZ/">
                  <button className='watch-video-button'> 
                    <BsFillPlayCircleFill /> Assista
                  </button>
                </a>
            </div>
        </div>
    </div>
  );
}

export default About;
