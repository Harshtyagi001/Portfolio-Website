import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import './services.scss'
export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Achieve</h5>
      <h2>Achievements</h2>

      <div className='container achievements-container'>
        <div className='achievements'>
          <div className='heading'>
            <h3>Academic Achievements and Competitive Programming</h3>
          </div>
          <ul className='list'>
            <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>AIR 13 in DBMS Exam by IIT Kharagpur - Featured on NPTEL Website.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>Global #231 in CodeChef October Long (25k+ participants).</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>CodeForces Specialist, 3-star on CodeChef, top 25% on LeetCode.
</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>750+ questions solved on LeetCode, GeeksForGeeks, CodeStudio, CodeChef, Codeforces.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>Global #340 in CodeChef Starters by Chingari (17k+ participants).
</p>
            </li>
          </ul>
        </div>

        <div className='achievements'>
          <div className='heading'>
            <h3>Web Developer Intern at Code Clause</h3>
          </div>
          <ul className='list'>
          <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>Distinguished yourself as an outstanding Web Developer Intern at Code Clause, delivering a series of impressive web development projects.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>Exhibited a strong sense of responsibility, consistently meeting deadlines and ensuring timely project completions with high-quality deliverables.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>Created a striking Personal Portfolio, a feature-rich E-commerce platform, an engaging Blog application, and a practical Weather App.</p>
            </li>
            
          </ul>
        </div>

        <div className='achievements'>
          <div className='heading'>
            <h3>Lead Web Developer and Event Management Head</h3>
          </div>
          <ul className='list'>
            <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>Created branded, user-friendly event websites.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>Efficiently coordinated tasks and provided technical guidance</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='list-icon'/>
              <p>Led 2 successful events; handled planning, budget, marketing, and evaluations.</p>
            </li>
          
          </ul>
        </div>
        
      </div>
    </section>
  )
}
