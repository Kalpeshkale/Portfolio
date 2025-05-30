import React from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'

 const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="conatctPageTitle"> My Clients</h1>
        <span className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies. 
                    Some of the notable companies I have worked with includes
        </span>
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg"/>
          <img src={Adobe}alt="Client" className="clientImg"/>
          <img src={Microsoft} alt="Client" className="clientImg"/>
          <img src={Facebook} alt="Client" className="clientImg"/>
        </div>
      </div>
      <div id="contact">
        <h1 className="conatctPagetitle">Conatct Me</h1>
        <span className="contactDesc">Please fill out the form below to dicuss any work opprtunities.</span>
        <form className='contactForm'>
          <input type="text" className="name" placeholder='Your Name'/>
          <input type="email" className="email" placeholder='Your Email'/>
         <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
         <button type='submit' value='Send' className="submitBtn">Submit</button>
         <div className="links">
          <img src={FacebookIcon} alt="Facebook" className="link"/>
          <img src={TwitterIcon} alt="twitter" className="link"/>
          <img src={YouTubeIcon} alt="Youtube" className="link"/>
          <img src={InstagramIcon} alt="Instagram" className="link"/>
         </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
