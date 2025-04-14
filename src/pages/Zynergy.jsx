import React from 'react';
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './Zynergy.css';
import heroImage from '../assets/images/iphone-16-mockup.png';
import Persona1 from '../assets/images/Persona 1.png';
import Persona2 from '../assets/images/Persona 2.png';
import CompetitiveImg from '../assets/images/competitive analysis(Zynergy).png';
import ValuesImg from '../assets/images/clients-brandAndValues.png';
import SitemapImg from '../assets/images/Sitemap.png';

function Zynergy() {
    return(
        <>
        <Header />
        <main div className="Project-detail-container">
            {/*Project-hero*/}
            <section className="project-hero">
              <div className="project-text">
                <h1>Zynergy</h1>
                <p>
                A fitness and wellness subscription app that lets users explore diverse workout studios, join or create group workout challenges, and connect with others to grow supportive fitness communities.
                </p>
                <div className="project-meta">
                  <div>
                    <h4>Timeline</h4>
                    <p>Designed in November, 2024 <br/>
                        Redesigned in 2025
                    </p>
                  </div>
                  <div>
                    <h4>Tools</h4>
                    <p>Figma, <br /> Photoshop, <br /> Illustrator, <br/> ClickUp</p>
                  </div>
                  <div>
                    <h4>Project Types</h4>
                    <p> UI/UX <br/>Visual Design <br/> Product Design </p>
                  </div>
                  <div>
                    <h4>Roles/Responsibilities</h4>
                    <p>UI/ UX designer</p>
                  </div>
                </div>
              </div>
              <div className="project-image">
                <img src={heroImage} alt="Zynergy Project Preview" />
              </div>
            </section>

{/*Overview*/}
    <section className="overview-section">
      <h3 className="section-title">Overview</h3>
      <h1 className="headline">Unlock Your Potential with Lifting Up Each other.</h1>

      <div className="problem-section">
        <h4>Problem</h4>
        <p>
          Currently, ClassPass focuses on booking classes but lacks personalization of creating their own fitness journey. Additionally, while users can join
          group classes, there is no dedicated feature to connect with others, form workout groups, or participate in
          community-driven fitness challenges.
        </p>
      </div>

      <div className="solution-section">
        <h4>Solution</h4>
        <p>
          Our solution enhances the existing ClassPass model by introducing Group Workout Challenges — a feature that
          allows users to connect with others, schedule group workout challenges, and create shared fitness goals.
          By shifting from a simple booking tool to an interactive, community-based platform, Zynergy encourages a
          stronger sense of belonging within the fitness journey.
        </p>

        <span className="down-arrow">↓</span>

        <div className="solution-points">
          <p>
            <strong>#1 Create Your Own Group Workout Challenges</strong><br />
            introduces group workout challenges where users can connect, schedule group workouts and share fitness goals.
          </p>

          <p>
            <strong>#2 Grow a fitness community</strong><br />
            fosters a supportive fitness community, users stay more motivated, consistent, and inspired—turning individual goals into shared achievements.
          </p>
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

{/*Research*/}

<section id="research" className="research-section">
      <h2>01 Research</h2>
      <h4 className="subheading">Target Audience/ Market Research</h4>

<div className="research-grid">
  <div className="box">
    <h5>Demand</h5>
    <p>
      There is high demand for tailored fitness experiences and functional workouts over traditional cardio.
      Consumers also prioritize mental wellness integration and sustainable practices.
    </p>
  </div>

  <div className="box">
    <h5>Trend</h5>
    <p>
      Strength training and functional fitness are replacing traditional cardio as preferred workout methods.
      Digital fitness platforms with user-friendly interfaces are highly sought after, especially those
      integrating tracking and progress features.
    </p>
  </div>

  <div className="box">
    <h5>Needs</h5>
    <p>
      Consumers need flexible, accessible fitness solutions with personalized workout plans and diverse options.
      Social interaction through group classes is important for motivation and community.
    </p>
  </div>

  <div className="box">
    <h5>Target Audience</h5>
    <ul>
      <li><strong>Young Professionals (20–35):</strong> Flexible, budget-conscious, seeking variety.</li>
      <li><strong>Mid-Career Professionals (35–45):</strong> Family-friendly, low-intensity options.</li>
      <li><strong>Wellness Enthusiasts (45–60):</strong> Accessibility, joint-friendly classes, community focus.</li>
    </ul>
  </div>
</div>
    </section>

{/*section divider*/}
<div className="section-divider"></div>

{/*Analysis*/}
<section id="analysis" className="analysis-section">
      <h2>02 Analysis</h2>

      <div className="persona-section">
        <h4>Personas</h4>
        <p>
          These personas helped us create a user-centric approach that addressed the specific needs
          and preferences of our target audience, resulting in a more effective and tailored solution.
        </p>

        <div className="persona-grid">
          <img src={Persona1} alt="Persona 1 - Alex Walker" className="persona-img" />
          <img src={Persona2} alt="Persona 2 - Sarah Thompson" className="persona-img" />
        </div>
      </div>

      <div className="competitive-section">
        <h4>Competitive Analysis</h4>
        <p>
          Through our analysis of ClassPass, we examined the application's layout and user flow to identify key
          design patterns and features. One notable strength of ClassPass is its social integration — it allows
          users to see their friends' registered classes and activities.<strong>However, the platform lacks dedicated
          community-focused features that foster group engagement or shared fitness experiences.</strong> 
        </p>
        <p>
          Zynergy builds upon ClassPass’s strong layout foundation, particularly its homepage and search
          structure, but addresses this gap by introducing a <strong>Group Workout Challenge</strong> feature — enabling users to connect,
          collaborate, and grow within a community-driven fitness environment.
        </p>

        <div className="competitive-image">
          <img src={CompetitiveImg} alt="Competitive Analysis Screenshot" />
        </div>
      </div>
    </section>

{/*section divider*/}
<div className="section-divider"></div>

{/*Ideation*/}
{/* <section id="ideation" className="ideation-section">
      <h2>03 Ideation</h2>

      <div className="ideation-content">
        <h4>Client's Brand & Values</h4>
        <img src={ValuesImg} alt="Client Brand Values" className="values-img" />

        <h4>Sitemap</h4>
        <img src={SitemapImg} alt="Sitemap Structure" className="sitemap-img" />
      </div>
    </section> */}



        </main>

        <Footer />
        </>

    );
}

export default Zynergy;