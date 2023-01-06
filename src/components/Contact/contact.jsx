import React from 'react'
import './contact.scss'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineLinkedin,AiOutlineWhatsApp} from 'react-icons/ai'
import{ useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  
  const form =useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_don9s92', 'template_gk7qquj', form.current, 'TKCZMNFPzFyFTgrz0')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='left'>
          <div className='card'>
           <MdOutlineEmail className='contact-icon'/>
           <h4>Email</h4>
           <h5>tyagiharsh079@gmail.com</h5>
           <a href='mailto:tyagiharsh079@gmail.com' target='_blank'>Send a Message</a>
          </div>
          <div className='card'>
            <AiOutlineLinkedin  className='contact-icon'/>
            <h4>LinkedIn</h4>
            <h5>Harsh Tyagi</h5>
            <a href='https://www.linkedin.com/in/harsh-tyagi-7b5a9b230/' target='_blank'>Send a Message</a>
          </div>
          <div className='card'>
            <AiOutlineWhatsApp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8171403058</h5>
            <a href='https://wa.me/+918171403058' target='_blank'>Send a Message</a>
          </div>
        </div>
        <div className='right'>
           <form ref={form} onSubmit={sendEmail}> 
              <input type='text' name='name' placeholder='Your Full Name ' required />
              <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
              <button className='btn btn-primary' type='submit'>Send Message</button>
           </form>
        </div>
      </div>
    </section>
  )
}
