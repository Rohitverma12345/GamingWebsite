import React from 'react';
import "./DestinationStyles.css";
import Alok1 from "../assests/alok1.jpg"
import realAlok from "../assests/realAlok.jpg"
import DestinationData from './DestinationData';
import realKelly from "../assests/kelly.png"
import kelly1 from "../assests/realKelly.jpg"
import realHayato from "../assests/realHayato.jpg"
import Hayato1 from "../assests/hayato.jpg"


const Destination = () => {
  return (
    // <div className="home-container">
    //   <h1>Welcome to RVGaming220 - Your Ultimate Free Fire Destination!</h1>
    //   <p>🔥 Dive into the World of Free Fire! 🔥</p>

    //   <div className="intro-text">
    //     <p>Welcome, gamers! RVGaming220 is your one-stop hub for all things Free Fire. Whether you're a battle-hardened veteran or a rookie dropping into the action, we've got the content you crave.</p>
    //   </div>

    //   <div className="whats-inside">
    //     <h2>What's Inside:</h2>
    //     <ul>
    //       <li>🚀 Latest Updates: Stay ahead of the game with real-time news, patch notes, and event highlights.</li>
    //       <li>🎮 Gameplay Tactics: Elevate your skills with expert tips, strategies, and in-depth tutorials.</li>
    //       <li>🌐 About RVGaming220: Discover the story behind the passion and meet the faces driving the Free Fire fervor.</li>
    //     </ul>
    //   </div>

    //   <div className="community-section">
    //     <h2>Join the RVGaming220 Community:</h2>
    //     <p>👍 Stay Connected: Follow us on social media for exclusive content, behind-the-scenes peeks, and community shoutouts.</p>
    //     <p>📬 Newsletter: Don't miss a beat! Subscribe for insider updates, event alerts, and special offers.</p>
    //   </div>

    //   <div className="cta-buttons">
    //     <button className="explore-btn">Explore Now</button>
    //     <button className="subscribe-btn">Subscribe</button>
    //   </div>

    //   <div className="follow-us">
    //     <p>Follow us on <a href="#">Facebook</a>, <a href="#">Twitter</a>, and <a href="#">Instagram</a> for daily gaming vibes.</p>
    //   </div>
    // </div>
    
    <>
    <div className='destination'>
        <h1><span>Popular</span> Chracters</h1>
        <p>Explore The World Of Free Fire</p>
    </div>
     
    <DestinationData
    className="first-des"
        heading="About Alok"
        text="Alok, the world-renowned Brazilian DJ, 
        has become a sensation in the Free Fire 
        universe with his electrifying presence.
        Born to captivate crowds, Alok takes his
        unmatched energy to the battlefield. His
        signature ability - 'Drop the Beat' , 
        creates a pulsating healing aura that 
        gradually restores HP for allies within 
        its captivating radius. What sets Alok 
        apart is not just his healing prowess, 
        but also the added boost to movement speed 
        that he bestows upon himself and his teammates. 
        In the fast-paced world of Free Fire, Alok 
        stands as a beacon of support, turning the tides
        of battle with his rhythmic influence."

        img1={realAlok}
        img2={Alok1}
    />

    <DestinationData
    className="first-des-reverse"
            heading="About Kelly"
            text="Kelly, the swift and agile sprinter, 
            is a force to be reckoned with in the Free 
            Fire arena. Renowned for her exceptional 
            speed, Kelly adds a dynamic edge to the 
            squad with her special ability, 'Dash'. 
            This unique skill not only boosts Kelly's 
            sprinting speed but extends its effects to 
            the entire team. The result is a squad that 
            can swiftly traverse the battlefield, 
            outmaneuver opponents, and secure victory 
            through speed and precision. In the high-stakes 
            world of Free Fire, Kelly is the embodiment 
            of swiftness and strategic finesse."

            img1={realKelly}
            img2={kelly1}
    />


        <DestinationData
        className="first-des"
            heading="About Hayato"
            text="Hayato, the legendary samurai, brings an 
            aura of strength and resilience to the Free 
            Fire battleground. His unyielding spirit is 
            channeled through the powerful ability, 
            'Bushido'. When the battle reaches its zenith
            and Hayato\'s HP drops below a certain 
            threshold, 'Bushido' activates, significantly
            increasing armor penetration. This unique 
            skill transforms Hayato into a formidable 
            force, capable of turning the tide of battle 
            with a surge of strength and determination. 
            In the chaos of Free Fire, Hayato is the 
            unwavering guardian, embodying the spirit of 
            the samurai with every clash of blades."

            img1={realHayato}
            img2={Hayato1}
        />
    </>

    

  );
  
}

export default Destination