import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import img1 from "../assests/img1.jpg";
import Destination from '../components/Destination';
import Recent from '../components/Recent';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero"
        heroImg ={img1}
        title="Welcome to RVGaming220"
        text = "Your Ultimate Free Fire Destination!"
        buttonText="Get Updates"
        url="/service"
        btnClass="show"
      />
      <Destination/>
      <Recent/>
      <Footer/>
    </>
  )
}

export default Home;