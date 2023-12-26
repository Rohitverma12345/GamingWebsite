import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import img2 from "../assests/img6.jpg";
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';


function Contact() {
  return (
    <>
      <Navbar/>
      
      <Hero
        cName="hero-mid-cont"
        heroImg ={img2}
        title="Contact RVGaming220"
        />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact;