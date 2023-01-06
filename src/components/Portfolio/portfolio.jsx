import React from 'react'
import './portfolio.scss'
import Ecommerce from './../../assets/ecommerce.webp'
export const Portfolio = () => {

  const data=[
    {
      id:1,
      image:Ecommerce,
      title:'This is my ${id} project',
      github:'https://github.com',
      demo:'https://github.com'
    },
    {
      id:2,
      image:Ecommerce,
      title:'This is my ${id} project',
      github:'https://github.com',
      demo:'https://github.com'
    },
    {
      id:3,
      image:Ecommerce,
      title:'This is my ${id} project',
      github:'https://github.com',
      demo:'https://github.com'
    },
    {
      id:4,
      image:Ecommerce,
      title:'This is my ${id} project',
      github:'https://github.com',
      demo:'https://github.com'
    },
    {
      id:5,
      image:Ecommerce,
      title:'This is my ${id} project',
      github:'https://github.com',
      demo:'https://github.com'
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
              <img src={it.image}></img>
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
