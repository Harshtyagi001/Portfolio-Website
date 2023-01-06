import React from 'react'
import { Experience } from './../Experience/experience';
import { Services } from './../Services/services';
import { Testimonials } from './../Testimonials/testimonials';
import { Contact } from './../Contact/contact';
import { BsInstagram,BsLinkedin,BsTwitter } from 'react-icons/bs';
import './footer.scss'
const Footer = () => {
  return (
    <div className='footer-container'>
      <a href='#' className='footer-logo'><h1>Portfolio</h1></a>

      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Achievements</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href='https://www.linkedin.com/in/harsh-tyagi-7b5a9b230/'><BsLinkedin className='logo'/></a>
        <a href='https://www.instagram.com/harshtyagi8670/'><BsInstagram className='logo'/></a>
        <a href='https://twitter.com/tyagi_harsh13'><BsTwitter className='logo'/></a>
      </div>
      <div className='copyright'>
        <small>&copy; Harsh Tyagi.  All Right Reserved</small>
      </div>
    </div>
  )
}

export default Footer