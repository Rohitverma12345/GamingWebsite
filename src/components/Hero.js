import React from 'react';
import "./HeroStyles.css";
// import img1 from "../assests/img1.jpg";

function Hero(props) {
    return (
    <>
      <div className={props.cName}>
            {/* <img alt="HeroImg" src='https://images.hdqwalls.com/download/garena-free-fire-character-ot-1920x1080.jpg'/> */}
            <img alt="HeroImg" src={props.heroImg}/>
            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
            </div>
      </div>
    </>
    )
  }
  
  export default Hero;