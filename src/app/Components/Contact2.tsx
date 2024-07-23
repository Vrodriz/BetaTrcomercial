'use client'

import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pedido, setPedido] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { name, number, email, pedido };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Formulário enviado com sucesso');
        setName('');
        setNumber('');
        setEmail('');
        setPedido('');
      } else {
        console.error('Erro ao enviar o formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário', error);
    }
  };

  return (
    <section className="formulario" id="contato">    
      <div className="interface">
        <div className="contact-page-wrapper">
          <h1 className="primary-heading">Tem algum pedido?</h1>
          <h1 className="primary-heading">Venha que iremos lhe ajudar</h1>
        </div>
        <form id="contactForm" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            id="name"
            name="nome"
            placeholder="Seu nome completo:"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="input"
            type="tel"
            id="number"
            name="telefone"
            placeholder="Insira seu número:"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="Seu email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="pedido"
            id="send"
            placeholder="Descreva seu pedido"
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}
            required
          />
          <div className="btn-enviar">
            <input type="submit" value="ENVIAR" />
          </div>
        </form>
      </div>
      <hr className="h-[3px] w-[100%] bg-[#293A69] mb-1 mt-10" />
    </section>
  );
}

export default ContactForm;
