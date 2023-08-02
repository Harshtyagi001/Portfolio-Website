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
       <small>0</small>
        </article>
        <article >
        <VscFolderLibrary className='ab out_icon'/>
       <h5>Projects</h5>
       <small>15+</small>
        </article>
        </div>
          <p>Welcome to my portfolio! <br></br>

            I'm a Full Stack Developer with a passion for crafting seamless digital experiences. Proficient in DevOps , I love bridging the gap between development and operations. Let's build something amazing together!
            </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        </div>
    </section>
  )
}

export default About