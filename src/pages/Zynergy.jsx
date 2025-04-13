import React from 'react';
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './Zynergy.css';
import heroImage from '../assets/images/iphone-16-mockup.png';

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
        <div className="research-box">
          <h5>Demand</h5>
          <p>
            There is high demand for tailored fitness experiences and functional workouts over
            traditional cardio. Consumers also prioritize mental wellness integration and sustainable
            practices.
          </p>
        </div>

        <div className="research-box">
          <h5>Trend</h5>
          <p>
            Strength training and functional fitness are replacing traditional cardio as preferred
            workout methods. Digital fitness platforms with user-friendly interfaces are highly sought
            after, especially those integrating tracking and progress features.
          </p>
        </div>

        <div className="research-box">
          <h5>Needs</h5>
          <p>
            Consumers need flexible, accessible fitness solutions with personalized workout plans and
            diverse options. Social interaction through group classes is important for motivation and
            community.
          </p>
        </div>

        <div className="research-box">
          <h5>Target Audience</h5>
          <ul>
            <li><strong>Young Professionals (20–35)</strong>: Flexible, budget-conscious, seeking variety.</li>
            <li><strong>Mid-Career Professionals (35–45)</strong>: Family-friendly, low-intensity options.</li>
            <li><strong>Wellness Enthusiasts (45–60)</strong>: Accessibility, joint-friendly classes, community focus.</li>
          </ul>
        </div>
      </div>
    </section>




        </main>

        <Footer />
        </>

    );
}

export default Zynergy;