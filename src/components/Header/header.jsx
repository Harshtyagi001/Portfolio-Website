import React from 'react'
import { CTA } from './cta'
import ME from './../../assets/face.jpg'
import { HeaderSocials } from './headerSocials'
import './header.css'
export default function Header() {
  return (
    <header className='container'>
      <div className='container header_container'>
       <h5>Hello I'm</h5>
       <h1>Harsh</h1>
       <h5 className='text-light'>Full Stack Developer</h5>

       <CTA/>

       <HeaderSocials/>
        
       <a href='#contact' className='scroll_down' >Scroll Down</a>
       
      <div className='me'>
        <img src={ME} alt='me'/>
      </div>
      
      </div>
    </header>
  )
}
