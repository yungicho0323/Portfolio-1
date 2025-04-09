import Header from "../global/Header";
import Footer from "../global/Footer";
import React from "react";
import profileImage from "../assets/images/Profile.jpg";
import emailIcon from "../assets/images/Email.png";
import linkedinIcon from "../assets/images/LinkedIn.png";
import instagramIcon from "../assets/images/Instagram.png";
import "./About.css";



function About() {

    return(
        <>
        <Header />

    <section className="about-container1">
        {/* <h1 className="about-title">Hi I'm YunGi! </h1> */}
        <div className="about-content">
        <div className="about-image-wrapper">
          {/* Replace 'your-image.jpg' with the path or URL to your own image */}
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="about-text">
          <p>
            Hi there! I'm a UX/UI designer based in Vancouver, BC. <br/>
            I’m passionate about crafting intuitive and meaningful digital experiences. With a strong foundation in user research, strategy, and data-driven design, I work closely with cross-functional teams to bring ideas to life—turning complex problems into simple, user-friendly solutions. Whether it’s a mobile app or a responsive website, I always aim to design with purpose and empathy at the core.
          </p>

            <p>
              Connect with me to gain insights into my design process and to see how I can help bring your ideas to life.
              <br/>
              Check out my work and shoot me an email at <strong>t0908003@gmail.com</strong>
          </p>

        
         {/* Social Media Icons Section */}
         <div className="social-icons">
          <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email" className="social-icon" />
          </a>

           <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>

          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
        
        </div>
        </div>
    </section>

    <section clssName="expertise-container">
    <div className="expertise">
      <h1 className="title">Expertise</h1>
      <ul className="expertise-list">
        <li>Mobile App UI Design</li>
        <li>Website UI Design</li>
        <li>Wireframes / Prototyping</li>
        <li>Figma</li>
        <li>Branding</li>
        <li>UX Research</li>
        <li>Project Management</li>
        <li>Adobe Photoshop / Adobe Illustrator</li>
        <li>Graphic Design</li>
        <li>HTML / CSS / JavaScript</li>
      </ul>
    </div>
    </section>
   
    <section className="gallery-container">
     {/* Image Gallery - Dynamic Layout */}
    <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
    <img src="/images/img1.jpg" alt="Gallery 1" className="gallery-image small low" />
    <img src="/images/img2.jpg" alt="Gallery 2" className="gallery-image medium mid-low" />
    <img src="/images/img3.jpg" alt="Gallery 3" className="gallery-image large highest" />
    <img src="/images/img4.jpg" alt="Gallery 4" className="gallery-image medium mid-low" />
    <img src="/images/img5.jpg" alt="Gallery 5" className="gallery-image small low" />
    </div>
    </section>

        
    <section className="about-container2">
        <div className="about-me">
          <h4>Traveling</h4>
          <div className="statement-divider1"></div>
         <p>
          <strong>1.</strong> "With an adventurous and open-minded spirit, I have always embraced new experiences. Growing up in a family passionate about travel, I had the privilege of exploring diverse cultures from an early age, shaping my global perspective and appreciation for different ways of life."
        </p>
        <br/>

        <h4>Beauty in Details</h4>
        <div className="statement-divider2"></div>
        <p>
          <strong>2.</strong> "I find beauty in the details—whether in nature, a perfectly brewed cup of coffee, typography, spatial design, or photography. Over the years, I have cultivated a refined aesthetic, continuously exploring and defining the visual language that resonates with me."
        </p>
        <br/>

        <h4>Authenticity</h4>
        <div className="statement-divider3"></div>
        <p>
          <strong>3.</strong>"Authenticity is at the core of my personal and professional journey. I strive to stay true to myself, actively shaping a life filled with passion, continuous growth, and meaningful challenges. As both an individual and a UI/UX designer, I am committed to refining my skills, embracing new perspectives, and confidently evolving into the best version of myself."
        </p>
           </div>
    </section>
          
        <Footer />
        </>
    )
}

export default About;