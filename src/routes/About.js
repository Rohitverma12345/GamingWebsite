import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import img2 from "../assests/img7.jpg";
import Footer from '../components/Footer';
import "../components/AboutStyles.css"
import AboutUs from '../components/AboutUs';

function About() {
  return (
    <>
      <Navbar/>
      
      <Hero
        cName="hero-mid"
        heroImg ={img2}
        title="About RVGaming220"
        // text = "Your Ultimate Free Fire Destination!"
        // buttonText="Get Updates"
        // url="/service"
        // btnClass="show"
      />

      {/* <div className='tags'>
        <h1>Our Story</h1>
        <p className='para'>Welcome to RVGaming220, where passion meets pixels! We're more than just a gaming platform; we're a community of Free Fire enthusiasts driven by the thrill of the game. Our journey began with a shared love for the virtual battlegrounds and a commitment to creating a space where gamers could connect, learn, and share their experiences.</p>
        <h1>Mission and Vision:</h1>
        <p className='para'>At RVGaming220, our mission is simple - to be the ultimate hub for Free Fire aficionados. We strive to foster a dynamic community where players of all skill levels can find valuable resources, stay updated on the latest news, and share their passion for gaming. Our vision is to create a welcoming space that celebrates the diverse stories and talents within the Free Fire community.</p>
        <h1>Meet the Team:</h1>
        <p className='para'>Behind the screens and in-game aliases, there's a team of dedicated individuals who make RVGaming220 possible. From content creators to tech wizards, each member contributes their unique skills and passion to bring you the best Free Fire experience. Get to know the faces behind the usernames and learn more about what drives us to elevate your gaming journey.</p>
      </div> */}

      <AboutUs/>
      <Footer/>
    </>
  )
}

export default About;