import React from 'react'
import './portfolio.scss'
import Ecommerce from './../../assets/ecommerce.webp'
import Esummit23 from './../../assets/Esummit23.png'
import Esummit22 from './../../assets/Esummit-2022.jpeg'
import Esummitjr23 from './../../assets/Esummitjr23.png'
import Blog from './../../assets/blog.jpg'
import Lamp from './../../assets/lamp-stack.jpg'
import Weather from './../../assets/weather.avif'

export const Portfolio = () => {

  const data=[
    {
      id:1,
      image:Esummit23,
      title:'This is the E-Summit 23 Event Website',
      github:'https://github.com/Harshtyagi001/esummit-23',
      demo:'https://esummit23.ecelliiitp.org/'
    },
    {
      id:2,
      image:Esummitjr23,
      title:'This is the E-Summit 23 Jr Event Website',
      github:'https://github.com/Harshtyagi001/esummitjr',
      demo:'https://esummitjr.ecelliiitp.org/'
    },
    {
      id:3,
      image:Esummit22,
      title:'This is the E-Summit 22 Event Website',
      github:'https://github.com/Harshtyagi001/esummit-2022',
      demo:'https://esummit.ecelliiitp.org/'
    },
    {
      id:4,
      image:Blog,
      title:'This is my Blog Application',
      github:'https://github.com/Harshtyagi001/Blog__App',
      demo:'https://github.com/Harshtyagi001/Blog__App'
    },
    {
      id:5,
      image:Lamp,
      title:'This is LAMP and MERN stack Deployement',
      github:'https://github.com/Harshtyagi001/Lamp_stack_deployment',
      demo:'https://github.com/Harshtyagi001/Lamp_stack_deployment'
    }
    ,{
      id:5,
      image:Ecommerce,
      title:'Green Store : E-Commerce Website',
      github:'https://github.com/Harshtyagi001/store',
      demo:'https://github.com/Harshtyagi001/store'
    }
    ,
    {
      id:5,
      image:Weather,
      title:'This is Weather App',
      github:'https://github.com/Harshtyagi001/weather-app',
      demo:'https://harshtyagi001.github.io/weather-app/'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
      {data.map(it=>(
        <div className='item'>
            <div className='item-img'>
              <img src={it.image} alt="hi "/>
            </div>
            <h3>{it.title}</h3>
            <div className='item-cta'>
            <a href={it.github} className='btn' target='_blank'>Github</a>
            <a href={it.demo} className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
        </div>

      ))}

      </div>
    </section>
  )
}
