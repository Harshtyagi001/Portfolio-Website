import React from 'react'
import './experience.scss'
import {BsFillCheckCircleFill} from 'react-icons/bs'
export const Experience = () => {
  return (
    <section 
    id='experience' className='container'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='experience-container'>
      <div className='frontend'>
       <h3>Frontend Development</h3>

       <div className='experience-content'>
      <div className='skills'>
        
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>CSS/SCSS</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Javascript</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>React</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Tailwind CSS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Bootstrap</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
      
       </div>
      </div>
      
      <div className='backend'>
      <h3>Backend Development</h3>
      <div className='experience-content'>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>NodeJs</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>ExpressJs</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>MySql</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>MongoDB</h4>
        <small className='text-light'>Intermediate</small>
      </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Python</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
     </div>
      </div>
      </div>
    </section>
  )
}
