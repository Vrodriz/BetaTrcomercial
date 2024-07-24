'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Carousel = () => {
  const slides = [
    { src: '/item1.png', title: 'Toalha de banho', price: '80x140 cm' },
    { src: '/item2.png', title: 'Toalha de rosto', price: '43x66 cm' },
    { src: '/item3.png', title: 'Tapete POP', price: '40x50 cm' },
    { src: '/item5-.png', title: 'Pano de chão', price: '58x88 cm' },
    { src: '/item6.png', title: 'Pano de chão flanelado', price: '42x66 cm' },
    { src: '/item7.png', title: 'Pano de prato', price: '45x70 cm' },
    { src: '/item8.png', title: 'Atoalhado', price: '40x60 cm' },
    { src: '/item9.png', title: 'Tabua Slim Pop', price: '28x13 cm' },
    { src: '/item10.png', title: 'Pano MICROFIBRA', price: '30x30 cm' },
    { src: '/item11.png', title: 'Esponja Poliester Multiuso', price: '07x11 cm' },
    { src: '/item12.png', title: 'Escova Fácil Alcance', price: '29x7 cm' },
  ];

  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <section className="mx-auto grid max-w-screen-2xl gap-4 mt-6 pb-2 md:grid-cols-7 md:grid-rows-2 sm:px-4 md:px-6">
        <div className="md:col-span-4 md:row-span-2">
          <a className="relative block aspect-square h-full w-full" href="#">
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-500 dark:bg-white relative border-neutral-200 dark:border-neutral-100">
              <Image className="w-[1000px] inset-2 text-transparent" src={slides[0].src} alt={slides[0].title} width={1000} height={1000} />
            </div>
            <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 lg:px-20 lg:pb-[15%]">
              <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                <h3 className="mr-2 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                  {slides[0].title}
                </h3>
                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                  {slides[0].price}
                </p>
              </div>
            </div>
          </a>
        </div>
        {slides.slice(1, 3).map((slide, index) => (
          <div className="md:col-span-2 md:row-span-1" key={index}>
            <a className="relative block aspect-square h-full w-full" href="#">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-500 dark:bg-white relative border-neutral-200 dark:border-neutral-100">
                <Image className="h-full w-full inset-0 text-transparent" src={slide.src} alt={slide.title} width={250} height={250} />
                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
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

      <div className="w-full overflow-x-auto pb-6 pt-1">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={3900}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-square h-[30vh] max-h-[275px] w-full flex-none">
                <a className="relative h-full w-full" href="#"></a>
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-white relative border-neutral-200 dark:border-neutral-100">
                  <Image
                    className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    src={slide.src}
                    alt={slide.title}
                    width={250}
                    height={250}
                  />
                </div>
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>
                      {slide.title}
                    </h3>
                    {slide.price && (
                      <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                        {slide.price}
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
