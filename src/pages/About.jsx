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
        <h1 className="about-title">Hi I'm YunGi! </h1>
        <div className="about-content">
        <div className="about-image-wrapper">
          {/* Replace 'your-image.jpg' with the path or URL to your own image */}
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="about-text">
          <p>
            Hello, I'm a UX/UI designer living in Vancouver, BC. <br/>
            Originally from South Korea, I moved to Canada in 2019. Before defining my career path, I gained experience working in various clothing stores, where I had the opportunity to connect with like-minded individuals passionate about design—ranging from photography and architecture to fashion and visual design. Through these experiences, I discovered my appreciation for aesthetics in everyday life and developed a keen eye for design.
            <br/>
            Motivated to transform my natural design sensibilities into practical skills, I pursued a career in UI/UX design. This led me to study New Media Design at BCIT in Vancouver, where I refined my ability to create functional, user-centered digital experiences.
          </p>
          <p>
          I am skilled in user research, wireframing, prototyping, and designing seamless interfaces that balance aesthetics with functionality. I love collaborating with teams to create user-centered solutions that drive business goals. 
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
   
    <section className="gallerey-container">
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
         <p>
          <strong>1.</strong> "With an adventurous and open-minded spirit, I have always embraced new experiences. Growing up in a family passionate about travel, I had the privilege of exploring diverse cultures from an early age, shaping my global perspective and appreciation for different ways of life."
        </p>
        <br/>
        <p>
          <strong>2.</strong> "I find beauty in the details—whether in nature, a perfectly brewed cup of coffee, typography, spatial design, or photography. Over the years, I have cultivated a refined aesthetic, continuously exploring and defining the visual language that resonates with me."
        </p>
        <br/>
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