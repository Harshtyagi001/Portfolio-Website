import React from 'react'
import Header from './components/Header/header'
import Navbar from './components/Navbar/navbar';
import About from './components/About/about';
import { Experience } from './components/Experience/experience';
import { Testimonials } from './components/Testimonials/testimonials';
import { Contact } from './components/Contact/contact';
import { Services } from './components/Services/services';
import { Portfolio } from './components/Portfolio/portfolio';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App