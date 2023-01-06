import React, { useState } from 'react'
import './navbar.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageDetail} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
const Navbar = () => {

  const [active,setActive]=useState('#')

  return (
   <nav>
    <a href="#" className={active==='#'?'active':''} onClick={()=>setActive('#')} ><AiOutlineHome/></a>
    <a href="#about" className={active==='about'?'active':''} onClick={()=>setActive('about')}><AiOutlineUser/></a>
    <a href="#experience" className={active==='experience'?'active':''}
    onClick={()=>setActive('experience')}><BiBook/></a>
    <a href="#services" 
    className={active==='services'?'active':''} onClick={()=>setActive('services')}> <RiServiceFill/></a>
    <a href="#contact" className={active==='contact'?'active':''} onClick={()=>setActive('contact')}><BiMessageDetail/></a>
   </nav>
  )
}

export default Navbar