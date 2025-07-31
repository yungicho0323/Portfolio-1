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
         <span className="intro-about">Hey there! At the heart of my design practice is a belief that digital experiences should make everyday work feel easier, more intuitive, and more human.</span> I’m a purpose-driven UX/UI designer based in Vancouver, BC. With a background in business and a strong foundation in UX design, I bring both strategic thinking and hands-on execution to every project.
          <br/>I believe meaningful design starts with a deep understanding of the product and the people who use it. My process is grounded in research to uncover real needs and opportunities. 
          <br/>Also, I value curiosity, open collaboration, and honest feedback as essential parts of the design journey.
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


  <section className="Design-process">
  <div className="design-process-context">

    <div className="design-process-block">
      <h4>Design Process</h4>
      <p>
        I follow an <strong>agile and iterative design approach</strong>. After gathering feedback or conducting usability testing, I revisit and refine my designs to make sure they truly meet user expectations and align with the original purpose. I believe design is never really finished until cycles of testing, feedback, and improvement.
        <br/><br/>
        When it comes to research, <strong>I always take the time to validate whether the problem I am solving is real.</strong> I gather insights through user interviews and surveys, then analyze competitors to recognize gaps and opportunities. This helps me define the problem more clearly and design solutions that are actually meaningful to users.
      </p>
    </div>

    <div className="design-process-block">
      <h4>Tools</h4>
      <p>
        I mainly work with tools like <strong>Figma, FigJam, Adobe Creative Suite, and project management tools</strong> to ideate, collaborate, and manage projects from start to finish.
      </p>
    </div>

  </div>
</section>



    <section className="expertise-container">
    <div className="expertise">
      <h1 className="title">Expertise</h1>
      <ul className="expertise-list">
        <li>Mobile App UI Design</li>
        <li>Product Design</li>
        <li>Wireframes / Prototyping</li>
        <li>Figma</li>
        <li>Branding</li>
        <li>User & Product Research</li>
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
    <img src={image1} alt="Gallery 1" className="gallery-image small low" />
    <img src={image2} alt="Gallery 2" className="gallery-image medium mid-low" />
    <img src={image3} alt="Gallery 3" className="gallery-image large highest" />
    <img src={image4} alt="Gallery 4" className="gallery-image medium mid-low" />
    <img src={image5} alt="Gallery 5" className="gallery-image small low" />
    </div>
    </section>

        
    <section className="about-container2">
        <div className="about-me">
          <h4>Traveling</h4>
  
         <p>
           "With an adventurous and open-minded spirit, I have always embraced new experiences. Growing up in a family passionate about travel, I had the privilege of exploring diverse cultures from an early age, shaping my global perspective and appreciation for different ways of life."
        </p>
        <br/>

        <h4>Beauty in Details</h4>
        <p>
           "I find beauty in the details whether in nature, a perfectly brewed cup of coffee, typography, spatial design, or photography. Over the years, I have cultivated a refined aesthetic, continuously exploring and defining the visual language that resonates with me."
        </p>
        <br/>

        <h4>Authenticity</h4>
        <p>
          "Authenticity is at the core of my personal and professional journey. I strive to stay true to myself, actively shaping a life filled with passion, continuous growth, and meaningful challenges. As both an individual and a UI/UX designer, I am committed to refining my skills, embracing new perspectives, and confidently evolving into the best version of myself."
        </p>
           </div>
    </section>
          
        <Footer />
        </>
    )
}

export default About;