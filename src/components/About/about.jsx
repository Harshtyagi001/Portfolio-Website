import React from 'react'
import ME from './../../assets/face1.jpg'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section className='container'  id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='about_container'>
  
      <div className='left'>
      <div className='left-img'>
        <img src={ME} alt=""/>
        </div>
      </div>
      <div className='right'>
       <div className='about_cards'>
        <article >
        <FaAward className='ab out_icon'/>
       <h5>Experience</h5>
       <small>2+ years</small>
        </article>
        <article >
        <FiUsers className='ab out_icon'/>
       <h5>Clients</h5>
       <small>50+</small>
        </article>
        <article >
        <VscFolderLibrary className='ab out_icon'/>
       <h5>Projects</h5>
       <small>5+</small>
        </article>
        </div>
          <p>fuwfdfbverbgurbguerhg  uwehweh uefhew ewhf iewij9 9erut94u erg9e t48349r u84u rut943t9 9t439ewuofhurhrhvrrfi
          fuwfdfbverbgurbguerhg  uwehweh uefhew ewhf iewij9 9erut94u erg9e t48349r u84u rut943t9 9t439</p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        </div>
    </section>
  )
}

export default About