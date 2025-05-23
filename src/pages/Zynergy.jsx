import React from 'react';
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './Zynergy.css';
import heroImage from '../assets/images/iphone-16-mockup.png';
import thumbnail from '../assets/images/Zynergy-Thumbnail.png';
import Persona1 from '../assets/images/Persona 1.png';
import Persona2 from '../assets/images/Persona 2.png';
import classpass from '../assets/images/Classpass.png';
import SitemapImg from '../assets/images/Sitemap.png';
import IA from '../assets/images/IA.png';
import WireframeImage from '../assets/images/Zynergy-Wireframe.png';
import StyleGuideImg from '../assets/images/Zynergy-Styleguide.png';
import highFidelityImg from '../assets/images/Zynergy-highfidelity.png'
import keyresults from '../assets/images/solutions.png';
import diagram from '../assets/images/Zynergy_Diagram.png';



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
                    <p> UI/UX <br/>Visual Design <br/> Mobile App Design </p>
                  </div>
                  <div>
                    <h4>Roles/Responsibilities</h4>
                    <p>Product & Visual Designer</p>
                  </div>
                </div>
              </div>
              <div className="project-image">
                <img src={heroImage} alt="Zynergy Project Preview" />
              </div>
            </section>

 {/*Thumbnail*/}
        <div className="project-thumbnail">
            <img src={thumbnail} alt="Zynergy Thumbnail"/>
        </div>

{/*Overview*/}
    <section className="overview-section">
      <h2>Overview</h2>
    {/*Problem Statement Block */}
    <div className="problem-statement-block">
      <h3 className="problem-heading">Problem Statement</h3>
      <p className="problem-question">
        <span className="highlight-question">
          How might we </span> we transform traditional fitness booking apps into interactive platforms that foster motivation and social connection throughout the user’s wellness journey?
      </p>
    </div>

  {/*Key Problems*/}
       <h2 className="key-problems-heading">Key Problems</h2>
      <div className="problems-grid">
        <div className="problem-card">
          <h4>Lack of Community and Social Engagement</h4>
          <p>Most fitness booking apps operate in isolation—focusing only on class reservations without offering ways for users to interact, form connections, or build community. As a result, users often lose motivation and accountability over time due to the absence of a supportive social environment.</p>
        </div>
        <div className="problem-card">
          <h4>Disconnections</h4>
          <p>After COVID-19, people increasingly seek social connection and group experiences to support their physical and mental well-being. However, most fitness booking apps still promote individual usage, lacking features that foster community or shared progress. This disconnection limits user motivation, retention, and emotional engagement—missing the opportunity to turn fitness into a socially driven lifestyle habit.</p>
        </div>
      </div>

    {/*Key results*/}
        <h2>KEY RESULTS</h2>
        <p>Zynergy app increases user engagement and retention by including <span className="highlight-blue"> Group Workout Challenges</span> enabling users to connect with others, set shared fitness goals, and build a sense of community within their fitness journey.</p>
        <div className="project-image">
          <img src={keyresults} alt="key results" />
        </div>
        
    {/*Context*/}
        <div className="section-spacing" />
        <h2>CONTEXT</h2>
        <p>
       During a product design exploration, we identified a growing post-pandemic shift in fitness behavior. People not only seek physical wellness but also crave meaningful social connection. We aimed to address this behavioral shift by introducing a community-based fitness experience.
        </p>
        <br/>
        <p>
        We focused on <span className="highlight-blue">Social Motivation</span> through shared fitness goals and <span className="highlight-blue">Community-Driven Accountability</span> by integrating <span className="highlight-blue">Group Workout Challenges</span> that empower users to connect, collaborate, and stay consistent on their wellness journey.
        </p>

        <div className="project-image">
          <img src={diagram} alt="Diagram"></img>
        </div>

      {/*Project Goal*/}
       <div className="section-spacing" />
        <h2>PROJECT GOAL</h2>
        <h3 className="goal-heading">We aim to drive long-term user engagement and brand loyalty in the fitness industry by integrating social motivation and community-based features into the booking experience.</h3>
        <p>The primary goal of the Zynergy app is to address a key gap in the fitness tech market: the lack of socially engaging features that promote sustained motivation and user retention. While traditional booking platforms focus on convenience, Zynergy differentiates itself by offering Group Workout Challenges that allow users to connect, collaborate, and commit to shared fitness goals.</p>
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
      <h4 className="subheading">Focus Areas</h4>

      <div className="focus-table-wrapper">
        <table className="focus-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Focus Area Question</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>What motivates users to attend fitness classes instead of working out alone?</td>
            </tr>
            <tr>
              <td>02</td>
              <td>What social features do users find most valuable when joining group fitness activities?</td>
            </tr>
            <tr>
              <td>03</td>
              <td>What are users’ biggest frustrations with current fitness class apps?</td>
            </tr>
            <tr>
              <td>04</td>
              <td>How do users define a “successful” and enjoyable fitness class experience?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="subheading">User Survey Insights</h4>
      <div className="survey-grid">
        <div className="box">
          <h5>Social Motivation</h5>
          <p>
            Most users feel more committed to fitness when sharing the experience with others. Classes provide accountability and social energy that workouts alone can’t replicate.
          </p>
        </div>

        <div className="box">
          <h5>Desire for Group Interaction</h5>
          <p>
            Users are drawn to features that support group engagement, such as buddy systems, challenges, and chat tools that foster a sense of community.
          </p>
        </div>

        <div className="box">
          <h5>Lack of Personalization</h5>
          <p>
            Many find current fitness apps too generic. They want personalized recommendations based on fitness levels, habits, and preferences.
          </p>
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
          We selected ClassPass as a benchmark fitness class booking app for our competitive analysis. Our evaluation focused on its layout, user flow, and core features to identify prevailing design patterns. A key strength of ClassPass is its social integration, which enables users to view their friends' registered classes and activities. However, it <span className="highlight-blue">lacks dedicated community-driven features that promote group participation or foster deeper engagement through shared fitness experiences.</span>
        </p>

        <div className="competitive-image">
          <img src={classpass} alt="Classpass App" />
        </div>
      </div>
    </section>

{/*section divider*/}
<div className="section-divider"></div>

{/*Ideation*/}
<section id="ideation" className="ideation-section">
      <h2>03 Ideation</h2>

      <div className="ideation-content">
        <h4>Sitemap</h4>
        <img src={SitemapImg} alt="Sitemap Structure" className="sitemap-img" />

      <h3>Wireframes</h3>
      <p className="wireframes-description">
        After defining the key features, we progressed to the design phase, developing wireframes with a minimalist, user-centered approach. These wireframes enabled us to visualize the integration of essential information on each page.
      </p>

      <div className="wireframe-image-wrapper">
        <img src={WireframeImage} alt="Zynergy App Wireframes" />
      </div>

      <h3> Information Architecture</h3>
      <p className="IA-description">
         I designed the information architecture for the whole application based on the key product features.

        <div className="IA-image">
          <img src={IA} alt="Information Architecture" />
        </div>
      </p>

      </div>
</section>

{/*section divider*/}
<div className="section-divider"></div>

{/*Design*/}
<section id="design" className="design-section">
      <h2>04 Design</h2>
      <p className="design-description">
        Prior to developing high-fidelity prototypes, we created a style guide that would allow multiple
        designers to approach the app design in a clear, unified way. This guide was created to ensure
        consistency across all design and content. The style guide served as a reference point for all
        team members, ensuring that everyone was on the same page and that our design remained cohesive
        and aligned with our overall brand identity.
      </p>

      <h3>Style Guide</h3>
      <div className="design-image">
        <img src={StyleGuideImg} alt="Zynergy Style Guide" />
      </div>

</section>


{/*section divider*/}
<div className="section-divider"></div>

{/*Validation*/}
<section id="validation" className="validation-section">
  <h2>05 Validation</h2>
  <p className="validation-description">
  After we designed wireframes and created a style guide, we conducted user testings with our target audience to understand exactly which parts of the design frustrate people and generate more intuitive user interactions. By observing and analyzing user behavior and feedback, we were able to make adjustments to the design that enhanced the user experience and ensured more intuitive interactions.
  </p>
      {/* <div className="validation-image-wrapper">
                <img src={highFidelityImg} alt="High-fidelity Wireframes" />
      </div> */}

</section>




        </main>

        <Footer />
        </>

    );
}

export default Zynergy;
