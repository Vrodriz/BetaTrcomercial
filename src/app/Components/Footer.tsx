'use client'

import React from 'react';
import { IoLogoInstagram } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex w-full py-8 items-start max-md:items-center justify-evenly bg-white contrast:bg-gray-950 max-md:flex-col max-md:gap-6'>
      
      <div className='flex flex-col items-start gap-4'>
        <div className='flex flex-col items-center gap-3 justify-center'>
          <div className='mr-2'>
            <img src='./Logo.png' alt='' className='max-w-[600px]' />
          </div>
          <div className='flex flex-col'>
            <p className='text-sm'>2024 TR COMERCIAL - TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-4 max-md:gap-8'> 
        <div className='w-full inline-flex items-center text-[#293A69] contrast:text-white font-semibold text-3xl max-md:text-base'>    
            <img className='w-6 mr-3 mmd:w-8 mmd:mr-6' src="/Polygon8.svg" alt="" />
            <div className='inline-flex bg-[#293A69] rounded-md p-2 mr-5 min-w-[206px] justify-center text-white text-sm'> 
              <a href="https://www.instagram.com/trcomercial.manaus/"> 
              TRCOMERCIAL
              </a>
            </div>
            Siga Nossa Rede Social
        </div>
        <div className='flex gap-4 max-md:flex-col w-full items-center'>   
            <div className='flex flex-col justify-start '>   
                <a className='flex flex-col items-center text-white font-medium text-sm gap-4 max-md:text-xs' href="https://www.instagram.com/trcomercial.manaus/">    
                  <img className='max-w-[250px] max-md:max-w-[200px] object-fill max-md:hidden' src="./instagram1.jpeg" alt="" />
                </a>
            </div>
            <div className='flex flex-col justify-start '>   
                <a className='flex flex-col items-center text-white font-medium text-sm gap-4 max-md:text-xs' href="https://www.instagram.com/trcomercial.manaus/">    
                  <img className='max-w-[250px] max-md:max-w-[200px] object-fill max-md:hidden' src="./instagram2.jpeg" alt="" />
                </a>
            </div>
            <div className='flex flex-col justify-start '>   
                <a className='flex flex-col items-center text-white font-medium text-sm gap-4 max-md:text-xs' href="https://www.instagram.com/trcomercial.manaus/">    
                  <img className='max-w-[250px] max-md:max-w-[200px] object-fill max-md:hidden' src="./instagram3.jpeg" alt="" />
                </a>
            </div>
            <div className='flex flex-col justify-start '>   
                <a className='flex flex-col items-center text-white font-medium text-sm gap-4 max-md:text-xs' href="https://www.instagram.com/trcomercial.manaus/">    
                  <img className='max-w-[250px] max-md:max-w-[200px] object-fill max-md:hidden' src="./instagram3.jpeg" alt="" />
                </a>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
