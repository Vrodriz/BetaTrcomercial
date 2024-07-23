'use client'

import React from 'react';
import { IoLogoInstagram } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex w-full py-8 items-start max-md:items-center justify-evenly bg-white contrast:bg-gray-950 max-md:flex-col max-md:gap-6'>
      
      <div className='flex flex-col items-start gap-4'>
        <div className='flex flex-col items-center gap-1 justify-center'>
          <div className='mr-2'>
            <img src='./Logo.png' alt='' className='max-w-[400px]' />
          </div>
          <div className='flex flex-col'>
            <p className=''>2024 TR COMERCIAL - TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-4 max-md:gap-8'> 
        <div className='w-full inline-flex items-center text-[#293A69] contrast:text-white font-semibold text-3xl max-md:text-base'>    
            <img className='w-6 mr-3 mmd:w-8 mmd:mr-6' src="/Polygon8.svg" alt="" />
            Siga Nossa Rede Social
        </div>
        <div className='flex gap-4 max-md:flex-col w-full items-center'>   
            <div className='flex flex-col justify-start '>   
                <a className='flex flex-col items-center text-white font-medium text-sm gap-4 max-md:text-xs' href="https://www.instagram.com/trcomercial.manaus/">    
                  <div className='inline-flex bg-[#293A69] rounded-md p-2 gap-2 min-w-[206px] justify-center'> 
                    <svg className='color-white' xmlns='http://www.w3.org/2000/svg' fill='white' width={16} height={16} viewBox='0 0 24 24'>   
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'></path>
                    </svg>
                    "Trcomercial"
                  </div>
                  <img className='max-w-[250px] max-md:max-w-[200px] object-fill max-md:hidden' src="./instagram1.jpeg" alt="" />
                </a>
            </div>
            <div className='flex flex-col justify-start '>   
                <a className='flex flex-col items-center text-white font-medium text-sm gap-4 max-md:text-xs' href="https://www.instagram.com/trcomercial.manaus/">    
                  <div className='inline-flex bg-[#293A69] rounded-md p-2 gap-2 min-w-[206px] justify-center'> 
                    <svg className='color-white' xmlns='http://www.w3.org/2000/svg' fill='white' width={16} height={16} viewBox='0 0 24 24'>   
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'></path>
                    </svg>
                    "Trcomercial"
                  </div>
                  <img className='max-w-[250px] max-md:max-w-[200px] object-fill max-md:hidden' src="./instagram2.jpeg" alt="" />
                </a>
            </div>
            <div className='flex flex-col justify-start '>   
                <a className='flex flex-col items-center text-white font-medium text-sm gap-4 max-md:text-xs' href="https://www.instagram.com/trcomercial.manaus/">    
                  <div className='inline-flex bg-[#293A69] rounded-md p-2 gap-2 min-w-[206px] justify-center'> 
                    <svg className='color-white' xmlns='http://www.w3.org/2000/svg' fill='white' width={16} height={16} viewBox='0 0 24 24'>   
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'></path>
                    </svg>
                    "Trcomercial"
                  </div>
                  <img className='max-w-[250px] max-md:max-w-[200px] object-fill max-md:hidden' src="./instagram3.jpeg" alt="" />
                </a>
            </div>
            <div className='flex flex-col justify-start '>   
                <a className='flex flex-col items-center text-white font-medium text-sm gap-4 max-md:text-xs' href="https://www.instagram.com/trcomercial.manaus/">    
                  <div className='inline-flex bg-[#293A69] rounded-md p-2 gap-2 min-w-[206px] justify-center'> 
                    <svg className='color-white' xmlns='http://www.w3.org/2000/svg' fill='white' width={16} height={16} viewBox='0 0 24 24'>   
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'></path>
                    </svg>
                    "Trcomercial"
                  </div>
                  <img className='max-w-[250px] max-md:max-w-[200px] object-fill max-md:hidden' src="./instagram3.jpeg" alt="" />
                </a>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
