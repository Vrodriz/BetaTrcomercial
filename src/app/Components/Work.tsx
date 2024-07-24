'use client'

import React from 'react';
import Image from 'next/image';

const Work = () => {
  const workInfoData = [
    {   
      image: '/towels.png',
      title: "Towels",
      text: 'Nossa empresa oferece uma variedade de produtos têxteis, incluindo toalhas, kits de cozinha e aventais. Cada item é cuidadosamente selecionado para garantir durabilidade e qualidade.'
    },   
    {   
      image: '/cleaning.png',
      title: "Cleaning",
      text: 'Também vendemos esponjas, escovas e panos de chão, desenvolvidos para proporcionar uma limpeza eficiente e prática. Nossos produtos são projetados para facilitar o dia a dia e manter os ambientes sempre limpos.'
    },   
    {   
      image: '/fast-delivery.png',
      title: "Delivery",
      text: 'Realizamos a entrega dos nossos produtos com eficiência e agilidade. Garantimos que seus pedidos cheguem no prazo estipulado, com toda a segurança e cuidado necessários.'
    }   
  ];

  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-heading'>Serviços</h1>
        <p className="primary-text">
        A TRCOMERCIAL preza pelo bom atendimento. Nosso trabalho é desenvolvido com muito amor, alegria e paz, com foco em ser reconhecidos pela qualidade, variedade, confiabilidade e pontualidade, desde o processo de entrega até o pós-venda.
        </p>
      </div>
      <div className='work-section-bottom'>
        {
          workInfoData.map((data, index) => (
            <div className='work-section-info' key={index}>
              <div className='info-box-img-container'>
                <Image src={data.image} alt={data.title} layout="responsive" width={500} height={500} />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Work;
