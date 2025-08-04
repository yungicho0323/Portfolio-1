import React from 'react';
import { useState } from "react";
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './Zynergy.css';
import heroImage from '../assets/images/iphone-16-mockup.png';
import ZynergyVideo from '../assets/videos/Zynergy.mp4';
import problem from '../assets/images/Zynergy-problem.jpg';
import UserInterview from '../assets/images/UserInterview.png';
import Persona1 from '../assets/images/Persona 1.png';
import UserJourney from '../assets/images/UserJourney.png';
import affinitymapping from '../assets/images/affinity-mapping.png';
import Brainstorming from '../assets/images/Brainstorming.png';
import IA from '../assets/images/IA.png';
import WireframeImage from '../assets/images/Zynergy-Wireframe.png';
import mockup from '../assets/images/Zynergy-mockup.png';
import mockup2 from '../assets/images/Zynergy-mockup2.png';
import mockup3 from '../assets/images/Zynergy-mockup3.png';
import Feature1 from '../assets/videos/Feature1.mp4';
import Feature2 from '../assets/videos/Feature2.mp4';
import Feature3 from '../assets/videos/Feature3.mp4';




function Zynergy() {

    return(
        <>
        <Header />
        <main div className="Project-detail-container">
            {/*Project-hero*/}
            <section className="project-hero-updated">
              <div className="top-layout">
              <div className="Zynergy-project-text">
                <h1>Zynergy</h1>

                <p> 
                  <strong>
                A community-focused fitness and wellness app that encourages motivation and consistency through group challenges, progress tracking, and social connection</strong> 
                </p>
                <p>It is designed to foster social connection and long-term motivation by transforming traditional fitness app into a community-driven experience with group challenges and buddy systems. 
                 </p>

          <div className="prototype-button-wrapper">
          <a
            href="https://www.figma.com/proto/vwi8qExln9liGrl8ugRvFx/Zynergy-app-redesign?page-id=1%3A3&node-id=233-7154&viewport=558%2C-192%2C0.05&t=sodJLDreuvS5qU8v-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=233%3A7154&show-proto-sidebar=1"
            target="_blank"
            rel="Zynergy App prototyping"
            className="prototype-button"
          >
          View Prototype
          </a>
        </div>
        </div>

              <div className="Zynergy-project-image">
                <img src={heroImage} alt="Zynergy Project Preview" />
              </div>
              </div>
          

                <div className="project-meta zynergy-updated-meta">
                  <div>
                    <h4>Timeline</h4>
                    <p>6 weeks <br/>Designed in November, 2024
                     <br/>
                      Redesigned in 2025
                    </p>
                  </div>
                  <div>
                    <h4>Tools</h4>
                    <p>Figma<br/> Photoshop<br /> Illustrator<br/> ClickUp</p>
                  </div>
                  <div>
                    <h4>Project Types</h4>
                    <p>UX/UI <br/>Visual Design <br/> Mobile App Design </p>
                  </div>
                  <div>
                    <h4>Team</h4>
                    <p>5 Members</p>
                  </div>
                  <div>
                    <h4>Role</h4>
                    <p>UX UI Designer <br/> Project Manager</p>
                  </div>
                </div>
            </section>


{/*Overview*/}
    <section className="zynergy-overview-section">
      <div className="zynergy-overview-container">
        <h2 className="overview-heading">01. Overview</h2>
        <h1 className="main-heading"><span className="zynergy-highlight-keyword">Unlock Your Potential with Lifting Up Each other.</span></h1>

        <div className="problem-section">
          <h3 className="section-title">Problem</h3>
          <p className="problem-description">
           Exercising alone can lead to decreased motivation, lack of accountability, and feelings of isolation, which often result in reduced consistency and early drop-off from fitness routines. Without social interaction or support, individuals may struggle to stay engaged and committed to long-term fitness goals.
          </p>

          <div className="problem-question-box">
            <p>
              <strong>How might we</strong> transform traditional fitness apps into interactive platforms that foster motivation and social connection throughout the user’s fitness journey?
            </p>
          </div>
          </div>
        </div>
      </section>

    <section className="solution-section">
      <div className="solution-container">
        <h2>Solution</h2>
        <h3 className="solution-tagline">
       A social, goal-driven, and empowering take on <br/> transforming fitness into a shared journey.
        </h3>
        <p className="solution-subtext">
          Create a challenge for Group Workout with your friends
        </p>
      
        <div className="solution-video-wrapper">
          <video
            className="solution-video"
            src={ZynergyVideo}
            controls
            playsInline
            muted
            loop
          />
        </div>

        <div className="Zynergy-prototype-button-wrapper">
        <a
          href="https://www.figma.com/proto/vwi8qExln9liGrl8ugRvFx/Zynergy-app-redesign?page-id=1%3A3&node-id=233-7154&viewport=558%2C-192%2C0.05&t=sodJLDreuvS5qU8v-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=233%3A7154&show-proto-sidebar=1"
          target="_blank"
          rel="Zynergy App prototyping"
          className="prototype-button"
        >
         View Prototype
        </a>
      </div>
      </div>
    </section>
    

{/* Design Process */}
{/* <section className="process-section">
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
</section> */}

{/*Research*/}
  <section id="research" className="research-section">
        <div className="research-container">
        <h2 className="research-title">02. Research</h2>

        <div className="context-section">
          <h3 className="context-title">Indentifying Problem Discovery</h3>
          <p>
       Despite the growing popularity of digital fitness and wellness platforms, many users struggle with long-term engagement. <span className="zynergy-highlight-keyword">A key issue identified through qualitative research is the lack of social interaction, which can lead to feelings of isolation and low motivation, especially when users work out alone using individual fitness apps.</span>
          </p>
          <p>
           A qualitative study on the <span className="zynergy-highlight-keyword">Choose to Move program (British Columbia)</span> emphasized the role of peer support and group settings in helping participants sustain physical activity. Interviewees described the program as "a reason to get out and move" and "a way to stay connected."</p>


           <p>
           <strong><li>Key Insight: Participants who exercised alone struggled to stay consistent, often citing lack of social accountability.</li></strong> 
          </p>
            <div className="research-placeholder">
            <img src={problem} alt="Lack of Motivation for Fitness" className="Zynergy-research" />
           </div>
        </div>
       {/*User Interview*/}
 <div className="interview-section">
      <h4 className="interview-title">validating the problem</h4>
      <h2 className="interview-highlight">
      User Interviews
      </h2>
      <p className="interview-body">
          To validate the problem, I gathered feedback from 4 people who use fitness apps regularly. While most people found value in individual tracking features, many shared that over time, working out alone felt repetitive, isolating, or hard to sustain. Even users who were committed to fitness shared that they missed the sense of community, often expressing they <span className="zynergy-highlight-keyword">“wished the app made them feel less alone.”</span>
      </p>

         <h3 className="interview-question-heading">Interview Questions:</h3>
        <ul className="interview-list">
          <li>Can you walk me through your experience using fitness or wellness apps?</li>
          <li>What features do you use the most, and how do you usually stay motivated?</li>
          <li>Have you felt ever unmotivated or disconnected while using a fitness app?</li>
          <li>Have you ever participated in a fitness challenge with others (in-person or online)? If yes, what was that experience like compared to doing it alone?</li>
        </ul>

       <div className="diagram-placeholder">
            <img
          src={UserInterview}
          alt="User Interview Themes"
          className="zynergy-interview"
        />
      </div>
    </div>



      {/*Proposed Solution*/}
        <div className="goal-section">
          <h3 className="goal-title">Approach</h3>
          <p> <strong>  How might we transform traditional fitness apps into interactive platforms that foster motivation and social connection throughout the user’s fitness journey?
          </strong>
          </p>
          <p>
            The primary goal of the Zynergy app is to address a key gap in the fitness tech market: <span className="zynergy-highlight-keyword">the lack of socially engaging features that promote sustained motivation and user retention.</span> While traditional booking platforms focus on convenience, Zynergy differentiates itself by offering <span className="zynergy-highlight-keyword">Group Workout Challenges </span>that allow users to connect, collaborate, and commit to shared fitness goals.
          </p>
        </div>

      </div>
    </section>

{/*section divider*/}
<div className="section-divider"></div>

{/*Analysis*/}
<section id="analysis" className="analysis-section">
      <h2>03. Analysis</h2>

      <div className="persona-section">
        <h4>Persona</h4>
        <p>
          The persona helped me create a user-centric approach that addressed the specific needs
          and preferences of target audience, resulting in a more effective and tailored solution.
        </p>

        <div className="persona-grid">
          <img src={Persona1} alt="Persona 1 - Alex Walker" className="persona-img" />
        </div>
      </div>
    </section>

{/*User Journey*/}
<section className="pain-point-section">
      <div className="text-container">
        <h3 className="subheading">Identifying the Pain Points</h3>
        <h2 className="main-heading">
          Lack of motivation and isolated challenge-based features hinder consistent engagement in wellness routines.
        </h2>
        <p className="description">
          Many users begin their fitness journey with high energy and enthusiasm, often setting personal goals or joining challenges. However, when these challenges are designed for individual effort without meaningful interaction or social accountability, motivation tends to fade. Users struggle to stay committed without a sense of community, encouragement, or an easy way to involve friends.
        </p>
        <br/>
        <p className="description"><span className="zynergy-highlight-keyword"> Opportunity:</span> a key moment to re-engage unmotivated users by introducing the Group Workout Challenge feature, helping them feel supported and motivated through social connection.</p>
      </div>

      <div className="Zynergy-userjourney">
        <img src={UserJourney} alt="User Pain Point Journey" className="userjoruney-image" />
      </div>
    </section>

    {/*Affinity Mapping*/}
  
  <section className="affinity-mapping-section">
    <div className="text-container">
      <h3 className="subheading">Affinity Mapping</h3>
      <h2 className="main-heading">Clustering User Research Insights and Design Ideas</h2>
      <p className="description">
        Through affinity mapping, I organized user insights and feature ideas into distinct clusters to find themes and group design ideas into pieces of functionality. This process revealed how different app functionalities could work together to create a cohesive social fitness experience.
      </p>
      <br/>
      <p className="description">
        I addressed <strong>6 main clusters</strong> based on core user needs: 
        <ul className="theme-list">
          <li>Challenge Management</li>
          <li>Social Discovery & Connection</li> 
          <li>Group Formation & Management</li> 
          <li>Communication & Integration</li>
          <li>Progress & Accountability</li>
          <li>Motiation & Enagement.</li>
          </ul>
      </p>
    </div>

      <div className="Zynergy-userjourney">
        <img src={affinitymapping} alt="Affinity Mapping" className="userjoruney-image" />
      </div>
        <div className="Zynergy-prototype-button-wrapper">
        <a
          href="https://www.figma.com/board/z80mbkdVZRdhO5jE7veVlV/Zynergy_Project-Development?node-id=87-1427&t=kj96v0WYTDwUrrmi-1"
          target="_blank"
          rel="Zynergy Affinity Mapping"
          className="prototype-button"
        >
         View Affinity Mapping
        </a>
      </div>
  </section>

{/*section divider*/}
<div className="section-divider"></div>

{/*Ideation*/}
<section id="ideation" className="ideation-section">
      <h2>04. Ideation</h2>

      {/*Brainstorming*/}
       <div className="text-container">
         <h3 className="subheading">Impact-feasibility matrix</h3>
        <h2 className="main-heading">Prioritizing Features for User Impact</h2>
        <p className="zynergy-section-description">
          Following the user research phase, I mainly focused on thinking about features that I want to implement in the app. 
          So, I had a brainstorming session to come up with features with impact-feasibility matrix, then built an information sitemap, and started building wireframes.</p>
          <br/>

         <h3>Why Impact-feasibility matrix?</h3>
         <p className="zynergy-section-description">
          To prioritize features that directly solve user pain points while considering real-world design and development constraints, preventing feature bloat and ensuring every element serves the core user journey effectively.
         </p>
         
      </div>

      <div className="brainstorming-image-wrapper">
        <img 
          src={Brainstorming} 
          alt="Feature Prioritization: Must Have, Nice to Have, Extras" 
          className="brainstorming-image"
        />
      </div>
      <div className="Zynergy-prototype-button-wrapper">
        <a
          href="https://www.figma.com/board/z80mbkdVZRdhO5jE7veVlV/Zynergy_Project-Development?node-id=90-1552&t=kj96v0WYTDwUrrmi-1"
          rel="Zynergy Impact-feasibility Matrix"
          className="prototype-button"
        >
         View Impact-feasibility Matrix
        </a>
      </div>

    <div className="IA-container">
      <h3> Information Architecture</h3>
      <p className="IA-description">
         After brainstorming about main features, I designed information architecture for the whole application based on the key product features.

        <div className="IA-image">
          <img src={IA} alt="Information Architecture" />
        </div>
         <div className="Zynergy-prototype-button-wrapper">
        <a
          href="https://www.figma.com/board/z80mbkdVZRdhO5jE7veVlV/Zynergy_Project-Development?node-id=67-892&t=JAv0BoQwe5YF8Sia-1"
          target="_blank"
          rel="Zynergy Information Architecture"
          className="prototype-button"
        >
         View IA
        </a>
      </div>
      </p>
      </div>
      

      <div className="ideation-content">
      <h3>Wireframes</h3>
      <p className="wireframes-description">
        After defining the key features, I progressed to the design phase, developing wireframes with a minimalist, user-centered approach. These wireframes enabled me to visualize the integration of essential information on each page.
      </p>

      <div className="wireframe-image-wrapper">
        <img src={WireframeImage} alt="Zynergy App Wireframes" />
      </div>


      </div>
</section>

{/*section divider*/}
<div className="section-divider"></div>

{/*Final Designs*/}
<section id="design" className="design-section">
      <div className="design-container">
        <h2>05. Final Designs</h2>
        <p className="design-intro">
          <strong>
          I conducted usability testing with our target audience to understand exactly which parts of the design frustrated people and generate more intuitive user interactions.</strong> By observing and analyzing user behavior and feedback, I was able to make adjustments to the design that enhanced the user experience and ensured more intuitive interactions.
        </p>

        <h3 className="design-title">Iterations from Usability Tests</h3>
        <p className="design-description">
          I conducted usability testing with three participants from our target audience after developing high-fidelity prototypes. The feedback offered valuable insights into user needs, expectations, and overall experience.
        </p>

        {/* Iteration 1 */}
         <div className="iteration-row">
          <div className="iteration-image-set">
            <img src={mockup} alt="Group Challenge Before/After" />
          </div>
          <div className="iteration-text">
            <h4>1. Streamlined Group Challenge Creation</h4>
            <p><strong>Before:</strong> The process of creating a group challenge required multiple screens and excessive steps.</p>
            <p><strong>After:</strong> A “+” button was added directly on the “Create a Group” screen, allowing users to easily add members and navigate to the “Invite Your Buddies” screen. “Add to Calendar” was added directly on the screen as well to improve flow.</p>
          </div>
        </div>

        {/* Iteration 2 */}
  <div className="iteration-row">
    <div className="iteration-text">
      <h4>2. Integrating Workout Tracker into the Upcoming Screen</h4>
      <p><strong>Before:</strong> Users had to navigate to a separate screen to access the Workout Tracker.</p>
      <p><strong>After:</strong> The Workout Tracker was added to the Upcoming screen, eliminating unnecessary navigation. This integration allows users to instantly see their workout history, providing a more seamless and rewarding experience.</p>
    </div>
    <div className="iteration-image-set">
      <img src={mockup2} alt="Workout Tracker Before/After" />
    </div>
  </div>


        {/* Iteration 3 */}
        <div className="iteration-row">
          <div className="iteration-image-set">
            <img src={mockup3} alt="Friend Profile Before/After" />
          </div>
          <div className="iteration-text">
            <h4>3. Simplified Interaction on Friend’s Profile</h4>
            <p><strong>Before:</strong> Adding and messaging a friend required navigating through separate screens.</p>
            <p><strong>After:</strong> Both “Add Buddy” and “Message” actions are now accessible directly from the friend’s profile, reducing steps and improving clarity in user flow.</p>
          </div>
        </div>
      </div>
    </section>

    {/*Final Product*/}
  
   <section className="final-product-section">
    <div className="solution-container">
      <h2 className="final-heading">06. Final Product</h2>

      {/* Feature 01 */}
      <div className="feature-wrapper">
        <video className="feature-video" src={Feature1} controls playsInline muted loop />
        <div className="feature-text">
          <h3>Feature 01: Create a Group Challenge & Invite Your Buddies</h3>
          <ul>
            <li><strong>Custom scheduling</strong> – Select the date, time, and location that works for your group.</li>
            <li><strong>Member invitations</strong> – Choose who to invite and build your challenge team.</li>
            <li><strong>Calendar integration</strong> – Add the challenge to your calendar for easy tracking and reminders.</li>
          </ul>
        </div>
      </div>

      {/* Feature 02 */}
      <div className="feature-wrapper reverse">
        <video className="feature-video" src={Feature2} controls playsInline muted loop />
        <div className="feature-text">
          <h3>Feature 02: Message Your Buddy</h3>
          <ul>
            <li><strong>Messaging friends directly</strong> – Ask questions, clarify details, or confirm participation for upcoming challenges.</li>
            <li><strong>Managing group members</strong> – Add or adjust participants within each challenge for better coordination.</li>
          </ul>
        </div>
      </div>

      {/* Feature 03 */}
      <div className="feature-wrapper">
        <video className="feature-video" src={Feature3} controls playsInline muted loop />
        <div className="feature-text">
          <h3>Feature 03: Workout Tracker</h3>
          <ul>
            <li><strong>Automatic activity tracking</strong> – Monitor your completed workouts and challenge participation through your history.</li>
            <li><strong>Progress visualization</strong> – View your performance over time with simple, easy-to-read graphs.</li>
          </ul>
        </div>
      </div>
      </div>
    </section>


{/*section divider*/}
<div className="section-divider"></div>

{/*Validation*/}
<section id="validation" className="validation-section">
  <h2>Reflection</h2>

  <h3 className="takeaway-heading">Project Takeaways</h3>
  <div className="takeaway-box">
    <ul className="takeaway-list">
      <li>Gained insights into the emotional and social drivers behind fitness behavior through user interviews.</li>
      <li><strong>Prioritization of core app features through affinity mapping</strong>
        <ul>
          <li>Ensured that each main functionality addresses a distinct but interconnected user need within the broader goal of maintaining long-term fitness motivation through social connection.</li>
          <li>The affinity mapping process revealed that sucessful social fitness features must balance individual flexibility with group cohesion while creating authentic social connections.</li>
        </ul>
      </li>

      <li><strong>Designing for Personalization</strong>
      <ul>
        <li>Learned the importancce of allowing users to tailor their fitness journey while keeping the interface clean and intuitive.</li>
      </ul>
      </li>
      <li><strong>Goal-oriented UI Encourages Motivation</strong>
      <ul>
        <li>Created a progress graph showcasing a success rate for Workout Tracker to create a sense of achievement and momentum so that users feel rewarded and nudged them to keep going.</li>
        </ul>
        </li>
    </ul>
  </div>
</section>

        </main>

        <Footer />
        </>

    );
}

export default Zynergy;
