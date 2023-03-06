import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactComponent.css';
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k6tlxfq', 'template_200bj0i', form.current, 'gC2iJot7nDPx0OTlb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
  <div className="Container">
    <div className="ContactInfo">
      <h1 id="header">
        Contact Us
      </h1>
    </div>
    <form ref={form} onSubmit={sendEmail}>
      <input placeholder="First Name" className="Name" type="text" name="FirstName" />
      <input placeholder="Last Name" className="Name lastName" type="text" name="LastName" />
      <br />
      <input placeholder="Subject" className="subject" type="text" name="subject" />
      <br />
      <input placeholder="Work Email" className="EmailBox" type="email" name="email" />
      <br />
      <textarea className="Message" placeholder="Message" name="message" />
      <br />
      <input className="Send" type="submit" value="Send" />
    </form>
  </div>
  );
};