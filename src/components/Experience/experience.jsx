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
       <h3>Web Development</h3>

       <div className='experience-content'>
      <div className='skills'>
        
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>HTML5</h4>
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
        <h4>ReactJS</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Tailwind CSS</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>NextJS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>MongoDB</h4>
        <small className='text-light'>Experiencd</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>NodeJs</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </div>
       </div>
      </div>
      
      <div className='backend'>
      <h3>Devops</h3>
      <div className='experience-content'>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Docker</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Kubernates</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Ansible</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>AWS</h4>
        <small className='text-light'>Intermediate</small>
      </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Jenkins</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Unix Scripting</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Linux OS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
      <div className='skills'>
        <BsFillCheckCircleFill className='icon'/>
        <div>
        <h4>Promethsesus</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </div>
     </div>
      </div>
      </div>
    </section>
  )
}
