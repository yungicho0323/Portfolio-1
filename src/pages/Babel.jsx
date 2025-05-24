import React from 'react';
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './Babel.css';
import heroImage from '../assets/images/BabelMockup.png';
import diagram from '../assets/images/diagram.png';
import keyresults from '../assets/images/KeyResults.png'
import NarrativeArc from '../assets/images/Narrative_Arc.png';
import UserPersona from '../assets/images/UserPersona.png';

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

                <p>
               A location-based safety app designed to support minority communities (BIPOC, LGBTQ+, and other marginalized groups) during urban events.
               <p/> 
               It is designed to protect and make minorities feel safe when they are attending events in the city by <strong>tracking the location of each others.</strong> Also, it offers<strong> alarming function</strong> so that when they are in danger or emergency, the users can notify their friends by applying emergency alarm built in the app.
                </p>
                <div className="project-meta">
                    <div>
                    <h4>Timeline</h4>
                    <p>4 weeks, Designed in 2024
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
                    <h4>Roles/Responsibilities</h4>
                    <p>Product & Visual Designer</p>
                    </div>
                </div>
                </div>
                <div className="project-image">
                <img src={heroImage} alt="Babel Project Preview" />
                </div>
        </section>

  
{/*Project Context*/}

<section className="babel-section">
      <h2>OVERVIEW</h2>

      {/* Problem Statement Block */}
      <div className="problem-statement-block">
        <h3 className="problem-heading">Problem Statement</h3>
        <p className="problem-question">
          <span className="highlight-question">How might we</span> develop a safe space platform that effectively identifies safe communities & events for minority in urban areas and make them feel safe and secured during the event?
        </p>
      </div>

      {/* Key Problems */}
      <h2 className="key-problems-heading">Key Problems</h2>
      <div className="problems-grid">
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
      </div>
    
    {/*Key results*/}
        <h2>KEY RESULTS</h2>
        <p>Babel app prioritizes minority safety by enabling discreet location tracking and quick emergency contact access, while maintaining user privacy through secure linking with trusted personal contacts.</p>
        <div className="project-image">
        <img src={keyresults} alt="Key results" />
        </div>


        <div className="section-spacing" />
        <h2>MY IMPACT/ ROLE</h2>
        <h3>The topic was broad, so I made sure we asked the right questions.</h3>
        <p>I initiated user-centered research by identifying daily challenges faced by minorities and focused on designing an app experience that prioritizes safety and comfort.</p>
        <div className="babel-quotes">
        <p>Starting from the scratch, I focused on asking <br />“What are the critical issue that minorities struggle on a daily basis so that we can help them by creating an app?”</p>
        <p>Designing the app, I focused on asking <br />“How can I design the app so they feel safe and comfortable using the app?”</p>
        </div>
    
    {/*Context*/}
        <div className="section-spacing" />
        <h2>CONTEXT</h2>
        <p>
        During design jam, we identified global wicked problems and developed a concept app to address <span className="highlight-orange">Marginalization</span> as a critical issue. 
        </p>
        <p>
        We focused on <span className="highlight-orange">User-Controlled Privacy</span> by linking to your personal contacts for emergency access and <span className="highlight-orange">Real-Time Security</span> by Discreet Location Tracking.
        </p>

        <div className="venn-wrapper">
        <h2 className="venn-title">Key Focuses</h2>
        <div className="project-image">
        <img src={diagram} alt="Key Focuses Diagram" />
        </div>
        </div>



        <div className="section-spacing" />
        <h2>PROJECT GOAL</h2>
        <h3 className="goal-heading">We want to provide minority communities with a sense of safety and belonging when attending events in urban areas.</h3>
        <p>The primary goal of the Babel App was to create a supportive and secure platform for individuals from marginalized communities navigating public spaces. By combining user-centered design with a privacy-first approach, Babel aimed to reduce common safety concerns such as isolation, vulnerability, and fear of discrimination. The app was designed to empower users through trusted contact linking, real-time location tracking, and personalized safety notifications — making social participation feel safer, more inclusive, and less stressful for everyone involved.</p>
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

{/*01 Research*/}
<section id="research" className="research-section">
    <h2>01 Research</h2>
    <h4 className="subheading">Understanding User Experience with <span className="underline">Narrative Arc</span></h4>

      <div className="quote-bubble">
        <p>
          “ I want to feel secured and protected while I am at the events to
          connect with my community.”
        </p>
      </div>

       <div className="research-image">
        <img src={NarrativeArc} alt="Narrative Arc" />
        </div>
</section>

{/*Analysis*/}
<section id="analysis" className="analysis-section">
    <h2>02 Analysis</h2>
    <h4 className="subheading">Target Users</h4>
    <p>1. BIPOC, LGBTQ and other minority groups (racial, religious, cultural, sexual, gender, etc). <br/>
2. Anyone that is not considered a minority group looking for safe spaces to hang out and share their preferred activities and meet other cultures. </p>

    <div className="analysis-image">
        <img src={UserPersona} alt="User Persona" />
    </div>

    <div className="competitive-analysis">
        <h4>Competitive Analysis</h4>
        <p className="subheading">There are many apps or websites for booking event in Vancouver. But not many that focus on safety for minorities.</p>
        <p>1. Eventbrite → Allows filters for things like “women of color”, “BIPOC” or “LGBTQ”. However, there is no filtering system for this and it also includes a lot of other general events. </p>
        <p>2. Bipoc.ca → The Vancouver BIPOC-CA - Black & Indigenous People of Colour Creative Association. Not an app. It’s a website that showcases and sometimes organizes specific events for the community.</p>
        <p>3. What’s On Queer → another website. It organizes and recommends events for the queer community in Vancouver. Not app. Their events are shown in their Facebook page.


</p>
    </div>

</section>









   
</main>
<Footer />

</>
    );
}
export default Babel;