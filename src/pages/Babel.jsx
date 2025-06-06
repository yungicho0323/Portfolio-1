import React from 'react';
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './Babel.css';
import heroImage from '../assets/images/BabelMockup.png';
import survey from '../assets/images/survey.png';
import painpoints from '../assets/images/painpoints.png';
import analysis from '../assets/images/analysis.png';
import UserPersona from '../assets/images/UserPersona.png';
import UserJourney from '../assets/images/Babel-UserJourney.png';
import IA from '../assets/images/Babel-IA.png';


function Babel() {
    return(
        <>
        <Header />
        {/*Intro section*/}
        <main div className="Project-detail-container">
        {/*Project-hero*/}
        <section className="project-hero">
            <div className="project-text">
                <h1>Babel</h1>

                <p> <strong>
               A location-based safety app designed to enhance safety and community support for minorities living in urban areas.</strong>
               <p/> 
              It is designed to help minorities feel safe at city events, the app lets users share their location with friends and trigger an emergency alarm to alert them in dangerous situations.
                </p>
                <div className="project-meta">
                    <div>
                    <h4>Timeline</h4>
                    <p>4 weeks, Designed in 2025 <br/> Redesigned in 2025
                    </p>
                    </div>
                    <div>
                    <h4>Tools</h4>
                    <p>Figma, <br /> Photoshop</p>
                    </div>
                    <div>
                    <h4>Project Types</h4>
                    <p> UI/UX  <br/>
                    Visual Design <br/> Mobile App Design</p>
                    </div>
                    <div>
                    <h4>My Roles/Responsibilities</h4>
                    <p>Product & Visual Designer</p>
                    </div>
                </div>
                </div>
                <div className="project-image">
                <img src={heroImage} alt="Babel Project Preview" />
                </div>
        </section>

  {/*Babel feature images*/}

  {/*Overview*/}
    <section className="babel-overview-section">
      <div className="babel-overview-container">
        <h2 className="overview-heading">overview</h2>
        <h1 className="main-heading">Stay in Safe Mode, Wherever You Go</h1>

        <div className="problem-section">
          <h3 className="section-title">Problem</h3>
          <p className="problem-description">
            Minorities living in urban cities often feel unsafe and isolated in public settings due to a lack of trusted support systems and real-time safety resources.
          </p>

          <div className="problem-question-box">
            <p>
              <strong>How might we</strong> empower minority communities to feel safe, connected, and supported within urban environments?
            </p>
          </div>
          </div>
        </div>
    </section>

      <section className="solution-section">
            <div className="solution-container">
              <h2>Solution</h2>
              <h3 className="solution-tagline">
          A connected, safety-first approach to helping minorities navigate <br/> urban life with confidence, community, and daily protection.
              </h3>
              <p className="solution-subtext">
                stay connected with your friends as attending the event
              </p>
            
              {/* <div className="solution-video-wrapper">
                <video
                  className="solution-video"
                  src={ZynergyVideo}
                  controls
                  playsInline
                  muted
                  loop
                />
              </div> */}
      
              <div className="prototype-button-wrapper">
              <a
                href="https://www.figma.com/proto/vwi8qExln9liGrl8ugRvFx/Zynergy-app-redesign?page-id=1%3A3&node-id=233-7154&viewport=558%2C-192%2C0.05&t=sodJLDreuvS5qU8v-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=233%3A7154&show-proto-sidebar=1"
                target="_blank"
                rel="FurryTales website prototyping"
                className="prototype-button"
              >
               Try it yourself
              </a>
            </div>
            </div>
          </section>


    {/* Design Process */}
<section className="process-section">
  <div className="process-container">

    <a href="#research" className="process-step">
      <div className="dot" />
      <p>1. Research</p>
    </a>

    <a href="#analysis" className="process-step">
      <div className="dot" />
      <p>2. Analysis</p>
    </a>

    <a href="#ideation" className="process-step">
      <div className="dot" />
      <p>3. Ideation</p>
    </a>

    <a href="#design" className="process-step">
      <div className="dot" />
      <p>4. Final Designs</p>
    </a>

    <a href="#validation" className="process-step">
      <div className="dot" />
      <p>5. Reflection</p>
    </a>

  </div>
</section>

{/*01 Research*/}
<section id="research" className="research-section">
  <div className="research-container">
    <h2>01 Research</h2>
      <div className="context-section">
        <h3 className="context-title">Identifying Problem Discovery</h3>
        <p>
           In Canada, a significant portion of racialized individuals report experiencing discrimination. <span className="highlight-keyword">According to Statistics Canada, over half (51%) of racialized people aged 15 and older reported facing discrimination or unfair treatment in the five years preceding 2024. </span>This is nearly double the proportion reported by non-racialized individuals (27%). The key challenges I identified are outlined below: 
        </p>
      </div>

      
      {/* Key Problems */}
      <h3 className="research-subtitle">Key Challenges</h3>
        <div className="problem-card">
          <h4>Lack of Trust and Communication</h4>
          <p>Minorities often face difficulty building trust and communication with the majority population when navigating unfamiliar urban environments.</p>
        </div>
        <div className="problem-card">
          <h4>Lack of Connection</h4>
          <p>Feelings of isolation and vulnerability increase when participating in any events without a strong sense of community or support.</p>
        </div>
        <div className="problem-card">
          <h4>Lack of Resources and Safety Tools</h4>
          <p>There is a lack of accessible resources and safety tools specifically designed to protect and empower minority groups in urban settings.</p>
        </div>

        {/*User Survey*/}
      <div className="babel-validation">
      <h4 className="babel-section-title">Validating Our Assumptions</h4>
      <h2 className="babel-highlight">
        Surveyed with 9 participants and survey respondents shared the struggle 
        as minorities living in urban city.
      </h2>
      <p className="babel-body">
        We conducted a user survey with our target audience to validate our initial research 
        and I gained deeper insights into how minorities experience disconnection or discrimination, 
        as well as to identify the features they find most valuable in a daily-use safety app.
      </p>
      <p className="babel-body">
        Out of questions, two questions mainly validated our assumptions for discovering problems.
      </p>
      <div className="babel-survey-box">
        <p className="babel-survey-label">Survey Questions:</p>
        <ul className="babel-question-list">
          <li>Have you ever experienced discrimination or harassment in a public setting due to your identity?</li>
          <li>How do you usually stay safe when going out?</li>
        </ul>

          <div className="diagram-placeholder">
                    <img src={survey} alt="Babel User Survey" className="Babel-survey" />
          </div>
      </div>
     {/*user painpoints*/}
     <div className="babel-painpoints">
      <h3 className="painpoints-title">
        User Pain Points
      </h3>
      <p className="babel-body">
        And after user survey, I can canclude that:
      </p>

      <div className="diagram-placeholder">
            <img
          src={painpoints}
          alt="User Pain Points Survey Result"
          className="painpoints-image"
        />
      </div>
     </div>

     {/*competitive analysis*/}
      <div className="babel-competitve-analysis">
      <h4 className="babel-section-title">Analyzing Market & Competitions</h4>
      <h2 className="babel-highlight">
      Competitve Analysis: Identifying Gaps in Minority-Focused Safety Apps
      </h2>
      <p className="babel-body">
      Before designing Babel, I analyzed existing safety apps—Green Book Global, Citizen, and Safetipin—to understand how they support marginalized users. 
      While each offers valuable features like travel reviews, public alerts, and environmental safety scores, they lack <strong> real-time, personal safety communication within trusted networks.</strong></p>

       <div className="diagram-placeholder">
            <img
          src={analysis}
          alt="Babel Competitive Analysis"
          className="babel-Competitive-Analysis"
        />
      </div>
      </div>
    </div>

    {/*Proposed Solution*/}
       <div className="goal-section">
          <h3 className="goal-title">Proposed Solution</h3>
          <p> <strong>  We want to provide minority communities with a sense of safety and belonging when attending events in urban areas.
          </strong>
          </p>
          <p>
        The primary goal of the Babel app is to address a critical gap in urban safety solutions for minority communities: the lack of connected, responsive, and peer-based safety tools. While existing apps focus on general alerts or navigation, Babel differentiates itself by offering real-time location sharing, quick access to personal contacts, and a direct emergency assistance feature to ensure users feel supported, visible, and safe in public spaces.
          </p>
        </div>

      </div>
</section>

{/*section divider*/}
<div className="section-divider"></div>


{/*Analysis*/}
<section id="analysis" className="babel-analysis-section">
    <h2>02 Analysis</h2>
    <div className="persona-section">
      <h4>Persona</h4>
      <p>These persona helped us create a user-centric approach that addressed the specific needs and preferences of our target audience, resulting in a more effective and tailored solution.</p>
    <p>1. BIPOC, LGBTQ and other minority groups (racial, religious, cultural, sexual, gender, etc). <br/>
    2. Anyone that is not considered a minority group looking for safe spaces to hang out and share their preferred activities and meet other cultures. </p>
    <div className="analysis-image">
        <img src={UserPersona} alt="User Persona" />
    </div>
    </div>

  {/*Task Analysis (User journey)*/}
  <div className="user-journey">
     <h4 className="babel-section-title">Identifying user's behaviors </h4>
     <h2 className="babel-highlight">
      Task Analysis: Discovering what steps users take to achieve user goal
      </h2>
    <p>I created a user journey map by breaking down tasks at each stage of the experience, guided by a specific user scenario to ensure a realistic and goal-oriented flow.</p>
    <div className="analysis-image">
        <img src={UserJourney} alt="User Journey Map" />
    </div>
  </div>
</section>

{/*section divider*/}
<div className="section-divider"></div>

{/*Ideation*/}
<section id="ideation" className="ideation-section">
  <h2>03 Ideation</h2>

  <div className="text-block">
    <h3 className="section-title">
      Information Architecture
    </h3>
    <p className="IA-description">
      Based on the task analysis, we created wireframes and high-fidelty. <strong> After we did a user testing, we chose to prioritize safety-related features and remove the event booking function to avoid overwhelming users with too many functionalities.</strong> Following this decision, I designed a revised information architecture to clearly outline the core features on each screen and map how users would navigate the app to complete key tasks.
    </p>

    <p>
            I designed the information architecture for key product features:
             <ul className="problem-list">
              <li>Location sharing map with contacts</li>
              <li>Quick call and messaging with contacts</li>
              <li>Emergency calls with contacts or with help center based on location</li>
              <li>Notification when user gets home safe</li>
             </ul>
        </p>

      <div className="IA-image">
        <img src={IA} alt="Information Architecture" />
    </div>

    {/*Redesign Highfidelity*/}
    <div className="Redesign">
      <h3 className="section-title">
        Redesign Goals
      </h3>
      <p className="Redesign-description">
         <p>
            I redesigned high-fidelity based on revised information architecture to:
             <ul className="problem-list">
              <li>Simplify user navigation for a more intuitive flow</li>
              <li>Prioritize core features over secondary ones</li>
              <li>Enhance safety and support functionalities for everday use</li>
             </ul>
        </p>
      </p>
    </div>
  </div>
</section>








   
</main>
<Footer />

</>
    );
}
export default Babel;