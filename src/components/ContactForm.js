import "./ContactFormStyles.css";

import React from 'react'

function ContactForm(){
  return (
    <div className="form-container">
      <h1>Get in Touch with RVGaming220</h1>
      <p>Have questions, feedback, or just want to say hello? We'd love to hear from you! Use the following channels to connect with the RVGaming220 team:</p>
      <h1>General Inquiries:</h1>
      <p>For general questions, information, or feedback, please send an email to [contact@rvgaming220.com]. Our team will get back to you as soon as possible.</p>
      <h1>Collaborations:</h1>
      <p>Interested in collaborating with RVGaming220? We're always open to exciting partnerships and opportunities. Reach out to us at [collaborate@rvgaming220.com] with your proposals or ideas.</p>

      <h1>Visit Us:</h1>
       <p>RVGaming220 Headquarters- Uklana Mandi, Hissar, Haryana, India</p>

      <h1>Send A Message TO Us!</h1>
      <form>
        <input placeholder="Name"/>
        <input placeholder="Email"/>
        <input placeholder="Subject"/>
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>


       
       {/* <p>Address - Hissar, Uklana Mandi</p> */}
    </div>
  )
}

export default ContactForm;
