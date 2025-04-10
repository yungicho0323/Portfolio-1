import React from 'react';
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './FurryTales.css';
import heroImage from '../assets/images/FurryTales.png';
import furryTalesVideo from '../assets/videos/FurryTales.mp4';
import fluiImage from '../assets/images/fluihackathon.jpg';
import avatarMe from '../assets/images/Me.png';
import avatarSuin from '../assets/images/our team 2.png';
import avatarTina from '../assets/images/our team 3.png';
import avatarKritika from '../assets/images/our team 4.png';
import qnaImage from '../assets/images/Q&As.png';
import moodboardImg from '../assets/images/Competitive analysis & moodboard.png';
import sitemapImg from '../assets/images/Sitemaps.png';
import wireframesImg from '../assets/images/Wireframe.png';
import designSystemImg from '../assets/images/Design System.png';
import highFidelityImg from '../assets/images/high-fidelity.png';
import ScrollToTop from '../components/ScrollToTop';


function FurryTales() {
return (
    <>
    <Header />
    {/*Intro Section*/}
    <main div className="Project-detail-container">
    {/*Project-hero*/}
    <section className="project-hero">
      <div className="project-text">
        <h1>FurryTales Pet</h1>
        <p>
          A Vancouver based small business that specializes in handcrafted dehydrated and
          freshly baked pet treats for dogs and cats.
        </p>
        <div className="project-meta">
          <div>
            <h4>Timeline</h4>
            <p>72 hours February, 2025</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Figma, <br /> Photoshop, <br /> Illustrator</p>
          </div>
          <div>
            <h4>Project Types</h4>
            <p>Website Redesign<br /> UI/UX</p>
          </div>
          <div>
            <h4>Roles/Responsibilities</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
      <div className="project-image">
        <img src={heroImage} alt="FurryTales Laptop Preview" />
      </div>
    </section>

    <section className="project-video-container">
    <video className="project-video" controls>
    <source src={furryTalesVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="prototype-button-wrapper">
        <a
          href="https://www.figma.com/proto/0XZFxXzgway1yDoCsUPLXT/FurryTales-Pet?page-id=0%3A1&node-id=122-2783&viewport=1271%2C244%2C0.15&t=J2Sa25xrUqP9f5vs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=122%3A2783"
          target="_blank"
          rel="FurryTales website prototyping"
          className="prototype-button"
        >
          View Prototype
        </a>
      </div>
    </section>

    {/*flui hackathon overview*/}
    <section className="flui-container">
      <h2 className="flui-title">FLUI Hackathon Overview</h2>

      <div className="flui-image-container">
        <img src={fluiImage} alt="FLUI Hackathon Preview" />
      </div>

      <p className="flui-description">
        This redesign project was completed as part of the <strong>FLUI Hackathon 2024</strong>,
        a <strong>72-hour design challenge</strong> organized by the <strong>Future Leaders in UI (FLUI)</strong> at
        <strong> Emily Carr University</strong>.
        <br /><br />
        The event focused on addressing real-world UI/UX challenges faced by small businesses through
        thoughtful website redesigns. As part of the process, our team had the <strong> opportunity to meet directly with the client to gain a clear understanding of their goals, needs, and expectations</strong>
        —ensuring our design aligned closely with client’s requirements/needs.
      </p>
    </section>

    {/*our client's goals*/}
<section className="goals-section">
      <div className="goals-header">
        <h2>Our Client’s Goals</h2>
        <a href="https://www.furrytalespet.ca/" className="current-site-link">Current Website</a>
      </div>

      <div className="goals-grid">
        <div className="goal-card">
          <h3>#1 Enhance Site Navigation</h3>
          <p>
            Simplify and streamline the navigation structure to ensure users can easily explore
            products and access key information without confusion.
          </p>
        </div>

        <div className="goal-card">
          <h3>#2 Redesign Promotional Pop-ups</h3>
          <p>
            Improve the visual design and user experience of email subscription and promotional
            pop-ups (e.g., discounts) to encourage higher engagement and conversions without
            disrupting the browsing experience.
          </p>
        </div>

        <div className="goal-card">
          <h3>#3 Clarify Product Categorization</h3>
          <p>
            Reorganize the product showcase page to clearly categorize items, making it easier
            for customers to browse and find treats based on type, flavor, or dietary needs.
          </p>
        </div>

        <div className="goal-card">
          <h3>#4 Incorporate Social Proof & Testimonials</h3>
          <p>
            Add a dedicated section or page featuring product reviews and ambassador testimonials
            to build trust and highlight the brand’s growing community.
          </p>
        </div>
      </div>
    </section>

    {/*Our Team*/}
    <section className="team-section">
      <h2>Our Team</h2>
      <p className="team-description">
        I teamed up with 3 other designers/ researchers for FurryTales Pet website redesign
        project for only limited <strong>72 hours</strong> to complete the project.
      </p>

      <div className="team-grid">
        <div className="team-member">
          <div className="team-avatar" style={{ backgroundColor: '#FFE493' }}>
            <img src={avatarMe} alt="Me" />
          </div>
          <p className="team-name">Me</p>
          <p className="team-role">Project Manager</p>
        </div>

        <div className="team-member">
          <div className="team-avatar" style={{ backgroundColor: '#FFD3D7' }}>
            <img src={avatarSuin} alt="Suin" />
          </div>
          <p className="team-name">Suin</p>
          <p className="team-role">UI/ UX Designer</p>
        </div>

        <div className="team-member">
          <div className="team-avatar" style={{ backgroundColor: '#FFE493' }}>
            <img src={avatarTina} alt="Tina" />
          </div>
          <p className="team-name">Tina</p>
          <p className="team-role">UI/UX Designer</p>
        </div>

        <div className="team-member">
          <div className="team-avatar" style={{ backgroundColor: '#D9D4FF' }}>
            <img src={avatarKritika} alt="Kritika" />
          </div>
          <p className="team-name">Kritika</p>
          <p className="team-role">Researcher</p>
        </div>
      </div>
    </section>

{/* Design Process */}
<section className="process-section">
  <div className="process-container">

    <a href="#research" className="process-step">
      <div className="dot" />
      <p>Research</p>
    </a>

    <a href="#analysis" className="process-step">
      <div className="dot" />
      <p>Analysis</p>
    </a>

    <a href="#ideation" className="process-step">
      <div className="dot" />
      <p>Ideation</p>
    </a>

    <a href="#design" className="process-step">
      <div className="dot" />
      <p>Design</p>
    </a>

    <a href="#validation" className="process-step">
      <div className="dot" />
      <p>Validation</p>
    </a>

  </div>
</section>

{/*01 Research */}
<section id="research" className="research-section">
      <h2>01 Research</h2>

      <div className="research-block">
        <h4>Current Website Issues</h4>

        <div className="issue">
          <strong>01 Lack of Brand Identity</strong>
          <p>The site lacks a strong brand presence. Inconsistent design makes it forgettable.</p>
        </div>

        <div className="issue">
          <strong>02 Disorganized Information Architecture</strong>
          <p>The navigation structure and product categories are confusing.</p>
        </div>

        <div className="issue">
          <strong>03 Weak Visual Hierarchy & Call-to-Action Placement</strong>
          <p>Important actions behind CTAs and key info don’t stand out enough.</p>
        </div>

        <div className="issue">
          <strong>04 Inconsistent Experience Across Pages</strong>
          <p>Layout and navigation changes across pages, making the site feel disconnected.</p>
        </div>
      </div>

      <div className="research-block">
        <h4>Client Meeting & Redesign Direction</h4>
        <p>
          We had the opportunity to meet with the client and presented a set of targeted questions
          based on pain points we identified in the existing website. During the meeting, we clarified
          specific goals and priorities to ensure that our redesign approach would align closely with
          the client’s values, needs, and business objectives.
        </p>
      </div>

 {/*Q&A Image*/}
 <div className="qa-image-wrapper">
        <img src={qnaImage} alt="Client Q&A Screenshot" />
      </div>
</section>

{/*section divider*/}
<div className="section-divider"></div>

{/* 02 Analysis */}
<section id="analysis" className="analysis-section">
      <h2>02 Analysis</h2>

      <div className="analysis-block">
        <h4>Competitive Analysis & Moodboard</h4>
        <p>
          Following our meeting with the client, we conducted a review of the competitor websites they
          shared, which illustrated the aesthetic they envisioned. Drawing inspiration from these
          references, we developed a moodboard that captured <strong>the desired tone—organic, friendly, and warm.</strong>
          This moodboard served as a visual foundation for the project, helping to define the overall
          atmosphere and guiding the design direction throughout the redesign process.
        </p>

        <div className="moodboard-image-wrapper">
          <img src={moodboardImg} alt="Competitive Analysis and Moodboard" />
        </div>
      </div>
    </section>

{/*section divider*/}
<div className="section-divider"></div>

{/*03 Ideation*/}
<section id="ideation" className="ideation-section">
      <h2>03 Ideation</h2>
      <p className="ideation-description">
        Following the user research phase, we mainly focused on thinking about features that we want
        to implement in the app. So, we had a brainstorming session to come up with features and then
        built information architecture, sitemaps, and started building wireframes.
        <br />
        <span className="ideation-links">Information Architecture · Wireframes</span>
      </p>

      <div className="ideation-subsection">
        <h4>Information Architecture</h4>
        <p>
          After finalizing the moodboard and design direction, we restructured the information
          architecture to create a more streamlined sitemap. Key navigation elements were reorganized
          based on the client’s priorities—such as keeping the “Wholesale” section—to improve clarity
          and overall user experience.
        </p>
        <div className="ideation-image">
          <img src={sitemapImg} alt="Sitemap" />
        </div>
        <div className="ideation-image">
          <img src={wireframesImg} alt="Wireframes" />
        </div>
      </div>
    </section>

{/*section divider*/}
<div className="section-divider"></div>

{/*04 Design*/}
<section id="design" className="design-section">
      <h2>04 Design</h2>

      <p className="design-description">
        <h4>Design Systems</h4>
        Prior to developing high-fidelity prototypes, we created a style guide that would allow multiple
        designers to approach the website design in a clear, unified way. This guide was created to
        ensure consistency across all design and content. The style guide served as a reference point
        for all team members, ensuring that everyone was on the same page and that our design remained
        cohesive and aligned with our overall brand identity.
      </p>

      <div className="design-image-wrapper">
        <img src={designSystemImg} alt="Design System Preview" />
      </div>
    </section>

{/*section divider*/}
   <div className="section-divider"></div>

{/*05 Validation*/}
  <section id="validation" className="validation-section">
      <h2>05 Validation</h2>

      <div className="validation-subsection">
        <h4>High-fidelity Wireframes</h4>
        <p>
          After we designed wireframes and created a style guide/design system, we created high-fidelity
          wireframes that ensure a seamless user experience. Our focus was on making the website<strong> aligned
          with brand identity, enhanced design of pop-ups for email subscription and discount offers on a
          landing page, clear information architecture by improving better navigation with a more intuitive
          flow, optimized product discovery, and reorganized FAQ section.</strong>
        </p>

        <div className="validation-image-wrapper">
          <img src={highFidelityImg} alt="High-fidelity Wireframes" />
        </div>
      </div>
    </section>

{/*section divider*/}
   <div className="section-divider"></div>

{/*Final Prototype*/}
<section className="final-section">
      <h2>06 Final Design & Reflection</h2>
      <h4>High-fidelity Prototypes</h4>

      <div className="final-video-wrapper">
        <video className="final-video" controls>
          <source src={furryTalesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

{/*Reflection*/}
<section className="reflection-section">
      <div className="reflection-card">
        <h3>Project Reflection</h3>
        <p>
          Participating in the FLUI Hackathon was my first UI design challenge under a tight 5-day
          timeframe, and it proved to be both eye-opening and rewarding. One of the biggest challenges
          I faced as the project manager was planning and executing the entire redesign process—from
          brand identity ideation to high-fidelity prototyping—within such a limited period.
        </p>
        <p>
          As it was also our first time working with a real client, we focused on asking the right
          questions to better understand the small business, their motivations for a website redesign,
          and the key elements the client would like to improve. Although we did not receive direct
          mentoring during the event, I took the initiative to facilitate clear communication within the
          team, ensuring alignment and consistent progress throughout the project.
        </p>
        <p>
          Overall, this experience helped me strengthen my skills in time management, team collaboration,
          and design execution under pressure, in addition to deepening my understanding of effective
          project management and client-centered design.
        </p>
      </div>
    </section>

    </main>
    <Footer />
    
    <scrollToTop />
    </>
    );
}

export default FurryTales;
