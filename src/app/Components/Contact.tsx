'use client'
import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tem algum pedido?</h1>
      <h1 className="primary-heading">Venha que iremos lhe ajudar</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Descreva seu pedido" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
