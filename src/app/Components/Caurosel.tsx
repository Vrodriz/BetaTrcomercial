"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';



const Carousel = () => {
    const slides = [
      { src: './item1.png', title: 'Pano de chão - Esfregão', price: '$20.00', currency: 'BRL' },
      { src: './item2.png', title: 'Item2', price: '$15.00' },
      { src: './item3.avif', title: 'Item3', price: '$15.00' },
      { src: './item5-.png', title: 'Item4', price: 'R$10.00' },
      { src: './item4.avif', title: 'Item4', price: 'R$10.00'},
      { src: './item4.avif', title: 'Item4', price: 'R$10.00'},
      { src: './item4.avif', title: 'Item4', price: 'R$10.00'},
      { src: './item4.avif', title: 'Item4', price: 'R$10.00'},
    ];
  
    return (
      <main>
        <section className="mx-auto mr-9 grid max-w-screen-2xl gap-4 mt-6 px-1 pb-2 md:grid-cols-7 md:grid-rows-2"> 
          <div className="md:col-span-4 md:row-span-2">
            <a className="relative block aspect-square h-full w-full" href="">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-500 dark:bg-blue-400 relative border-neutral-200 dark:border-neutral-800">
                <img className="w-[600px] inset-0 text-transparent" src={slides[0].src} alt={slides[0].title} />
              </div>
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 lg:px-20 lg:pb-[35%]">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                    {slides[0].title}
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    {slides[0].price}
                    <span className="ml-1 inline">{slides[0].currency}</span>
                  </p>
                </div>
              </div>
            </a>
          </div>
          {slides.slice(1, 3).map((slide, index) => (
            <div className="md:col-span-2 md:row-span-1" key={index}>
              <a className="relative block aspect-square h-full w-full" href="">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-500 dark:bg-blue-400 relative border-neutral-200 dark:border-neutral-800">
                  <img className="h-full w-full inset-0 text-transparent" src={slide.src} alt={slide.title} />
                  <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        {slide.title}
                      </h3>
                      <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                        {slide.price}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </section>
  
        <div className="w-full overflow-x-auto pb-6 pt-1 p-8">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            speed={3900} 
            autoplay={{
              delay: 2,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-square h-[30vh] max-h-[275px] w-full flex-none">
                  <a className="relative h-full w-full" href=""></a>
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-blue-400 relative border-neutral-200 dark:border-neutral-800">
                    <img
                      className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      src={slide.src}
                      alt=""
                    />
                  </div>
                  <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                    <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                      <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>
                        {slide.title}
                      </h3>
                      {slide.price && (
                        <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                          {slide.price}
                          <span className='ml-1 @[275px]/label:inline'>
                            BRL
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    );
  };
  
  export default Carousel;