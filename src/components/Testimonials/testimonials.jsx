import React from 'react'
import AVTR1 from './../../assets/avatar1.jpg'
import AVTR2 from './../../assets/avatar2.jpg'
import AVTR3 from './../../assets/avatar3.jpg'
import AVTR4 from './../../assets/avatar4.jpg'
import './testimonials.css'

import {Navigation, Pagination,Scrollbar,A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Testimonials = () => {


  const data=[
    {
      avatar:AVTR1,
      name:'Tina Show',
      review:'these are the  very good projects he made and very helpuf too.'
    },
    {
      avatar:AVTR2,
      name:'Shatta Whale',
      review:'these are the  very good projects he made and very helpuf too.'
    },
    {
      avatar:AVTR3,
      name:'Kwame Despite',
      review:'these are the  very good projects he made and very helpuf too.'
    },
    {
      avatar:AVTR4,
      name:'Jenifer',
      review:'these are the  very good projects he made and very helpuf too.'
    }
  ]

  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonial-container' // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
     >
     
      {data.map((it,index)=>(
        <SwiperSlide className='testimonial' key={index}>
        <div className='client-avatar' >
          <img src={it.avatar}></img>
          </div>
          <h5 className='client-name'>{it.name}</h5>
          <small>{it.review} </small>
       
      </SwiperSlide>
      ))}
      </Swiper>
    </section>
  )
}
