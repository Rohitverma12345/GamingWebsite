import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import img2 from "../assests/img9.jpg";
import Footer from '../components/Footer';
import Recent from '../components/Recent';


function Contact() {
  return (
    <>
      <Navbar/>
      
      <Hero
        cName="hero-mid-cont"
        heroImg ={img2}
        title="Get Updates For RVGaming220"
        />
        <Recent/>
      <Footer/>
    </>
  )
}

export default Contact;