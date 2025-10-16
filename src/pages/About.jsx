import Header from "../global/Header";
import Footer from "../global/Footer";
import React from "react";
import profileImage from "../assets/images/Profile.jpg";
import resumeIcon from "../assets/images/cv.png";
import emailIcon from "../assets/images/Email.png";
import linkedinIcon from "../assets/images/LinkedIn.png";
import image1 from "../assets/images/img1.jpeg";
import image2 from "../assets/images/img2.jpeg";
import image3 from "../assets/images/img3.jpeg";
import image4 from "../assets/images/img4.jpeg";
import image5 from "../assets/images/img5.jpeg";
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
          <br/>Combining my business background with human-centered design, I approach problems through research and collaboration turning insights into inclusive solutions that balance user needs and business goals.
          </p>
           <p>Let’s connect and explore how my design thinking and creative process can help turn your ideas into impactful user experiences.
          Check out my work and feel free to reach out at <strong>yungicho8@gmail.com.</strong>
          </p>
        
         {/* Social Media Icons Section */}
         <div className="social-icons">
          <a href="/Resume.pdf" target="_blank" rel="resume">
            <img src={resumeIcon} alt="YungiCho_Resume" className="social-icon" />
          </a>

          <a href="mailto:yungicho8@gmail.com" target="_blank" rel="gmail">
            <img src={emailIcon} alt="YungiCho_Email" className="social-icon" />
          </a>

           <a href="https://www.linkedin.com/in/yungi-cho/" target="_blank" rel="Yungicho_linkedin">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>

        </div>
        </div>
    </section>


<section className="experience-container" aria-labelledby="experience-heading">
  <div className="experience">
    <div className="exp-eyebrow">
      <span className="exp-dot" />
      EXPERIENCE
    </div>

    <ul className="exp-list" role="list">
      <li className="exp-row">
        <div className="exp-left">
          <div className="exp-company">Burst Creative Group</div>
          <div className="exp-role">Product Designer, Internship</div>
        </div>
        <div className="exp-right">Sep 2025 – Present</div>
      </li>

      <li className="exp-row">
        <div className="exp-left">
          <div className="exp-company">Aperture Coffee Bar</div>
          <div className="exp-role">Web Designer</div>
        </div>
        <div className="exp-right">Jul 2025 – Present</div>
      </li>
    </ul>
  </div>
</section>
   
    <section className="gallery-container">
     {/* Image Gallery - Dynamic Layout */}
    <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
    <img src={image1} alt="Gallery 1" className="gallery-image small low" />
    <img src={image2} alt="Gallery 2" className="gallery-image medium mid-low" />
    <img src={image3} alt="Gallery 3" className="gallery-image large highest" />
    <img src={image4} alt="Gallery 4" className="gallery-image medium mid-low" />
    <img src={image5} alt="Gallery 5" className="gallery-image small low" />
    </div>
    </section>

      {/* =========================
    ABOUT – PERSONAL SECTION
========================= */}
<section className="about-container2" aria-labelledby="about-personal-heading">
  <div className="about2-inner">
    <div className="about2-eyebrow" id="about-personal-heading">
      <span className="eyebrow-dot" />
      ABOUT ME
    </div>

    <ul className="stmt-list" role="list">
      <li className="stmt-row">
        <h4 className="stmt-heading">Traveling</h4>
        <p className="stmt-text">
          With an adventurous and open-minded spirit, I have always embraced new experiences. Growing up in a family passionate about travel, I had the privilege of exploring diverse cultures from an early age, shaping my global perspective and appreciation for different ways of life.
        </p>
      </li>

      <li className="stmt-row">
        <h4 className="stmt-heading">Beauty in Details</h4>
        <p className="stmt-text">
          I find beauty in the details—whether in nature, a perfectly brewed cup of coffee, typography, spatial design, or photography. Over the years, I have cultivated a refined aesthetic, continuously exploring and defining the visual language that resonates with me.
        </p>
      </li>

      <li className="stmt-row">
        <h4 className="stmt-heading">Growth</h4>
        <p className="stmt-text">
          Growth is at the core of my personal and professional journey. I strive to stay true to myself, actively shaping a life filled with passion, continuous growth, and meaningful challenges. As both an individual and a UX/UI designer, I am committed to refining my skills, embracing new perspectives, and confidently evolving into the best version of myself.
        </p>
      </li>
    </ul>
  </div>
</section>

          
        <Footer />
        </>
    )
}

export default About;