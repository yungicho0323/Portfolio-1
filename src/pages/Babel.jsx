import React from "react";
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import "./Babel.css";
import heroImage from "../assets/images/BabelMockup.png";
import BabelVideo from "../assets/videos/Babel.mp4";
import babelfeatures from "../assets/images/babelfeatures.png";
import survey from "../assets/images/survey.png";
import painpoints from "../assets/images/painpoints.png";
import analysis from "../assets/images/analysis.png";
import UserPersona from "../assets/images/UserPersona.png";
import UserJourney from "../assets/images/Babel-UserJourney.png";
import IA from "../assets/images/Babel-IA.png";
import userflow from "../assets/images/userflow.png";
import before from "../assets/images/before.png";
import after from "../assets/images/after.png";
import change1 from "../assets/images/change1.png";
import change2 from "../assets/images/change2.png";
import change3 from "../assets/images/change3.png";
import BabelVideo2 from "../assets/videos/Babel2.mp4";

function Babel() {
  return (
    <>
      <Header />
      {/*Intro section*/}
      <main div className="Project-detail-container">
        {/*Project-hero*/}
        <section className="project-hero-updated">
          <div className="top-layout">
            <div className="Babel-project-text">
              <h1>Babel</h1>

              <p>
                {" "}
                <strong>
                  A location-based safety app designed to enhance safety and
                  community support for minorities living in urban areas
                </strong>
                <p />
                It is designed to help minorities feel safe at city events, the
                app lets users share their location with friends and trigger an
                emergency alarm to alert them in dangerous situations.{" "}
              </p>

              <div className="prototype-button-wrapper">
                <a
                  href="https://www.figma.com/proto/7zfkCQxKAUP608I5cfSsKj/Babel_Project-4?page-id=1%3A1362&node-id=2121-1840&p=f&viewport=-1878%2C-25%2C0.15&t=8MsVa4LL3PJRKrcL-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2121%3A1840&show-proto-sidebar=1"
                  target="_blank"
                  rel="Babel website prototyping"
                  className="prototype-button"
                >
                  View Prototype
                </a>
              </div>
            </div>

            <div className="project-image">
              <img src={heroImage} alt="Babel Project Preview" />
            </div>

            
          </div>

          <div className="project-meta Babel-updated-meta">
              <div>
                <h4>Timeline</h4>
                <p>
                  6 weeks <br /> Designed in March, 2025 <br /> Redesigned in
                  2025
                </p>
              </div>
              <div>
                <h4>Tools</h4>
                <p>
                  Figma <br /> Photoshop
                </p>
              </div>
              <div>
                <h4>Project Types</h4>
                <p>
                  {" "}
                  UX/UI <br />
                  Visual Design <br /> Mobile App Design
                </p>
              </div>
              <div>
                <h4>Team</h4>
                <p>2 Members</p>
              </div>
              <div>
                <h4>Role</h4>
                <p>UX UI Designer</p>
              </div>
            </div>
        </section>

        {/*Babel feature images*/}
        {/* <section className="babel-section">
        <div className="babel-container">
          <img src={babelfeatures} alt="Babel App Features" className="babel-image" />
        </div>
      </section> */}

        {/*Overview*/}
        <section className="babel-overview-section">
          <div className="babel-overview-container">
            <h2 className="overview-heading">Overview</h2>
            <h1 className="main-heading">
              <span className="highlight-keyword-overview">
                Stay in Safe Mode, Wherever You Go
              </span>
            </h1>

            <div className="problem-section">
              <h3 className="section-title">Problem</h3>
              <p className="problem-description">
                Minorities living in urban cities often feel unsafe and isolated
                in public settings due to a lack of trusted support systems and
                real-time safety resources.
              </p>

              <div className="problem-question-box">
                <p>
                  <strong>How might we</strong> empower minority communities to
                  feel safe, connected, and supported within urban environments?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-section">
          <div className="solution-container">
            <h2>Solution</h2>
            <h3 className="solution-tagline">
              A connected, safety-first approach to helping minorities navigate{" "}
              <br /> urban life with confidence, community, and daily
              protection.
            </h3>
            <p className="solution-subtext">
              stay connected with your friends as attending the event
            </p>

            <div className="solution-video-wrapper">
              <video
                className="solution-video"
                src={BabelVideo}
                controls
                playsInline
                muted
                loop
              />
            </div>

            <div className="Babel-prototype-button-wrapper">
              <a
                href="https://www.figma.com/proto/7zfkCQxKAUP608I5cfSsKj/Babel_Project-4?page-id=1%3A1362&node-id=2121-1840&p=f&viewport=-1878%2C-25%2C0.15&t=8MsVa4LL3PJRKrcL-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2121%3A1840&show-proto-sidebar=1"
                target="_blank"
                rel="Babel App prototyping"
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

        {/*01 Research*/}
        <section id="research" className="research-section">
          <div className="research-container">
            <h2>01 Research</h2>
            <div className="context-section">
              <h3 className="context-title">Identifying Problem Discovery</h3>
              <p>
                Violent and non-violent hate crimes in Canada have more than
                doubled since 2019, often fueled by{" "}
                <span className="highlight-keyword">
                  anti-immigrant sentiment.
                </span>{" "}
                In particular,{" "}
                <span className="highlight-keyword">visible minorities</span> (especially South Asians, Arabs, and Jews) are being
                disproportionately targeted. One report notes that hate crimes
                against South Asians rose 143% between 2019-2022, with many
                instances tied to growing international student communities.
                (source: Wikipedia)
              </p>
            </div>

            {/* Key Problems */}
            <h3 className="research-subtitle">Key Challenges</h3>
            <div className="problem-card">
              <h4>Lack of Trust and Communication</h4>
              <p>
                Minorities often face difficulty building trust and
                communication with the majority population when navigating
                unfamiliar urban environments.
              </p>
            </div>
            <div className="problem-card">
              <h4>Lack of Connection</h4>
              <p>
                Feelings of isolation and vulnerability increase when
                participating in any events without a strong sense of community
                or support.
              </p>
            </div>
            <div className="problem-card">
              <h4>Lack of Resources and Safety Tools</h4>
              <p>
                There is a lack of accessible resources and safety tools
                specifically designed to protect and empower minority groups in
                urban settings.
              </p>
            </div>

            {/*User Survey*/}
            <div className="babel-validation">
              <h4 className="babel-section-title">Validating The Problem</h4>
              <h2 className="babel-highlight">
                Surveyed with 9 participants and survey respondents shared the
                struggle as minorities living in urban city.
              </h2>
              <p className="babel-body">
                We conducted a user survey with our target audience to validate
                our initial research and I gained deeper insights into how
                minorities experience disconnection or discrimination, as well
                as to identify the features they find most valuable in a
                daily-use safety app.
              </p>
              <p className="babel-body">
                Out of questions, two questions mainly validated our assumptions
                for discovering problems.
              </p>
              <div className="babel-survey-box">
                <p className="babel-survey-label">Survey Questions:</p>
                <ul className="babel-question-list">
                  <li>
                    Have you ever experienced discrimination or harassment in a
                    public setting due to your identity?
                  </li>
                  <li>How do you usually stay safe when going out?</li>
                </ul>

                <div className="diagram-placeholder">
                  <img
                    src={survey}
                    alt="Babel User Survey"
                    className="Babel-survey"
                  />
                </div>

                {/*User Survey Responses*/}
                <div className="Babel-prototype-button-wrapper">
                  <a
                    href="https://forms.gle/mDfQGKQfjUaJjHft5"
                    target="_blank"
                    rel="User Survey Response"
                    className="prototype-button"
                  >
                    View User Survey
                  </a>
                </div>
              </div>

              {/*user painpoints*/}
              <div className="babel-painpoints">
                <h3 className="painpoints-title">User Pain Points</h3>
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
                <h4 className="babel-section-title">
                  Analyzing Market & Competitions
                </h4>
                <h2 className="babel-highlight">
                  Competitve Analysis: Identifying Gaps in Minority-Focused
                  Safety Apps
                </h2>
                <p className="babel-body">
                  Before designing Babel, I analyzed existing safety apps such as Green
                  Book Global, Citizen, and Safetipin to understand how they
                  support marginalized users. While each offers valuable
                  features like travel reviews, public alerts, and environmental
                  safety scores, they{" "}
                  <span className="highlight-keyword">
                    {" "}
                    lack real-time, personal safety communication within trusted
                    networks.
                  </span>
                </p>

                <div className="babel-diagram-placeholder">
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
              <h3 className="goal-title">Approach</h3>
              <p>
                {" "}
                <strong>
                  {" "}
                  How might we empower minority communities to feel safe,
                  connected, and supported within urban environments?
                </strong>
              </p>
              <p>
                The primary goal of the Babel app is to address a critical gap
                in urban safety solutions for minority communities:{" "}
                <span className="highlight-keyword">
                  the lack of connected, responsive, and peer-based safety
                  tools.
                </span>{" "}
                While existing apps focus on general alerts or navigation, Babel
                differentiates itself by offering{" "}
                <span className="highlight-keyword">
                  {" "}
                  real-time location sharing, quick access to personal contacts,
                  and a direct emergency assistance feature
                </span>{" "}
                to ensure users feel supported, visible, and safe in public
                spaces.
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
            <p>
              These persona helped us create a user-centric approach that
              addressed the specific needs and preferences of our target
              audience, resulting in a more effective and tailored solution.
            </p>
            <p>
              1. BIPOC, LGBTQ and other minority groups (racial, religious,
              cultural, sexual, gender, etc). <br />
              2. Anyone that is not considered a minority group looking for safe
              spaces to hang out and share their preferred activities and meet
              other cultures.{" "}
            </p>
            <div className="analysis-image">
              <img src={UserPersona} alt="User Persona" />
            </div>
          </div>

          {/*Task Analysis (User journey)*/}
          <div className="user-journey">
            <h4 className="babel-section-title">
              Identifying user's behaviors{" "}
            </h4>
            <h2 className="babel-highlight">
              Task Analysis: Discovering what steps users take to achieve user
              goal
            </h2>
            <p>
              I created a user journey map by breaking down tasks at each stage
              of the experience, guided by a specific user scenario to ensure a
              realistic and goal-oriented flow.
            </p>
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
            <h3 className="section-title">Information Architecture</h3>
            <p className="IA-description">
              Based on the task analysis, we created wireframes and
              high-fidelty.{" "}
              <strong>
                {" "}
                After we did a user testing, we chose to prioritize
                safety-related features and remove the event booking function to
                avoid overwhelming users with too many functionalities.
              </strong>{" "}
              Following this decision, I designed{" "}
              <span className="highlight-keyword">
                {" "}
                a revised information architecture{" "}
              </span>
              to clearly outline the core features on each screen and map how
              users would navigate the app to complete key tasks.
            </p>

            <p className>
              <strong>
                I designed the information architecture for key product
                features:
              </strong>
              <ul className="problem-list">
                <li>Location sharing map with contacts</li>
                <li>Quick call and messaging with contacts</li>
                <li>
                  Emergency calls with contacts or with help center based on
                  location
                </li>
                <li>Notification when user gets home safe</li>
              </ul>
            </p>

            <div className="IA-image">
              <img src={IA} alt="Information Architecture" />
            </div>
          </div>
          {/*Redesign Highfidelity*/}
          <div className="Redesign">
            <h3 className="section-title">Redesign Goals</h3>
            <p className="Redesign-description">
              <p>
                I redesigned user flow and high-fidelity based on revised
                information architecture to:
                <ul className="problem-list">
                  <strong>
                    <li>Simplify user navigation for a more intuitive flow</li>
                    <li>Prioritize core features over secondary ones</li>
                    <li>
                      Enhance safety and support functionalities for everday use
                    </li>
                  </strong>
                </ul>
              </p>
            </p>
          </div>

          <div className="Userflow">
            <h3 className="section-title">User Flow</h3>
            <p className="scenario-description">
              After revising information architecture, I developed user flow
              based on two scenarios:
              <ul className="problem-list">
                <li>
                  <span className="highlight-keyword">Scenario 1:</span> Maya
                  gets in danger on the way home after the event.
                </li>
                <li>
                  <span className="highlight-keyword">Scenario 2:</span> Maya
                  gets home safe after the event.
                </li>
              </ul>
            </p>
            <div className="Userflow-image">
              <img src={userflow} alt="User Flow" />
            </div>

            <div className="Babel-prototype-button-wrapper">
              <a
                href="https://www.figma.com/board/v5HV3wc6jMfhvWd5EnkiaG/Babel_Project-Development?node-id=80-1732&t=r6vFSgVgIlp73Wul-1"
                target="_blank"
                rel="User Survey Response"
                className="prototype-button"
              >
                View User Flow
              </a>
            </div>
          </div>

          {/*High-fidelity*/}
          <div className="High-fidelity">
            <h3 className="section-title"> Redesigned high-fidelity</h3>
            <p className="high-fidelity-description">
              Based on user flow, I redesigned high-fidelity including two
              scenarios after user testing.
            </p>
            <div className="Before-image">
              <img src={before} alt="Before High-Fidelity" />
            </div>

            <div className="After-image">
              <img src={after} alt="After High-Fidelity" />
            </div>
          </div>
        </section>

        {/*section divider*/}
        <div className="section-divider"></div>

        {/*Final Designs*/}
        <section id="design" className="design-section">
          <div className="design-container">
            <h2>04 Final Designs</h2>

            <h3 className="design-title">
              <span className="highlight-keyword">Key Changes</span>
            </h3>

            <p className="design-description">
              The feedback from user testing offered valuable insights into user
              needs, expectations, and overall experience. And these are main
              key changes:
            </p>

            <div className="change-block">
              <h4 className="change-heading">
                1. Before & After: Visual Clarity and Interface Consistency
              </h4>
              <img
                src={change1}
                alt="Visual Clarity and Interface Consistency"
                className="change-image1"
              />
            </div>

            <div className="change-block">
              <h4 className="change-heading">
                2. Addition: Intuitive Emergency Interaction
              </h4>
              <img
                src={change2}
                alt="Emergency Interaction"
                className="change-image2"
              />
            </div>

            <div className="change-block">
              <h4 className="change-heading">
                3. Addition: Proactive Home Arrival Detection
              </h4>
              <img
                src={change3}
                alt="Home Arrival Detection"
                className="change-image3"
              />
            </div>
          </div>

          <div className="Babel-prototype-button-wrapper">
            <a
              href="https://www.figma.com/board/v5HV3wc6jMfhvWd5EnkiaG/Babel_Project-Development?node-id=98-3128&t=r6vFSgVgIlp73Wul-1"
              target="_blank"
              rel="Key Changes"
              className="prototype-button"
            >
              View Key Changes
            </a>
          </div>
        </section>

        {/*Final Product*/}

        <section className="final-product-section">
          <div className="solution-container">
            <h2 className="final-heading">Final Product</h2>

            <p className="design-description">
              I developed final product by showcasing two core user goals,{" "}
              <span className="highlight-keyword">Safe Arrival</span> and{" "}
              <span className="highlight-keyword">Unsafe Situation</span> to
              highlight how Babel's main features (location sharing, quick
              emergency call, in-app messaging/calling, and the "I'm Home"
              notification) support user safety and connection in real time.
            </p>

            {/* User Goal 01 */}
            <div className="feature-wrapper">
              <video
                className="feature-video"
                src={BabelVideo}
                controls
                playsInline
                muted
                loop
              />
              <div className="feature-text">
                <h3>User Goal 1: User gets home safe from the event.</h3>
                <ul>
                  <li>
                    "I'm Home" Notification– automatically asks if the user is
                    home: confirms safety with one tap and notifies friends.
                  </li>
                  <li>
                    Emphasizes peaceful closure, emotional reassurance, and{" "}
                    <span className="highlight-keyword">
                      low-effort safety confirmation
                    </span>{" "}
                    through automated "I'm Home" flows.
                  </li>
                </ul>
              </div>
            </div>

            {/* User Goal 02 */}
            <div className="feature-wrapper reverse">
              <video
                className="feature-video"
                src={BabelVideo2}
                controls
                playsInline
                muted
                loop
              />
              <div className="feature-text">
                <h3>
                  User Goal 2: User gets in danger on the way from the event.
                </h3>
                <ul>
                  <li>
                    Quick Emergency Call(3-sec Hold)- easily activated when
                    feeling threatened: triggered calls to trusted contacts or
                    emergency services.{" "}
                  </li>
                  <li>
                    Shifts to real-time protection, offering active tools like
                    quick call, live location, and direct contact to provide{" "}
                    <span className="highlight-keyword">immediate help</span>{" "}
                    and comfort.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*section divider*/}
        <div className="section-divider"></div>

        {/*Reflection*/}
        <section id="validation" className="validation-section">
          <h2>05 Reflection</h2>

          <h3 className="babel-takeaway-heading">Project Takeaways</h3>
          <div className="takeaway-box">
            <ul className="takeaway-list">
              <li>
                Learned that simplifying features and placing clear, accessible
                CTA buttons significantly improves usability.
              </li>

              <li>
                Understood the need to strike a balance between offering useful
                tools and maintaining a simple, focused interface to avoid
                overwhelming users.
              </li>

              <li>
                Focusing on core features helped clarify the app’s purpose.
              </li>

              <li>
                {" "}
                Found that grounding design decisions in a clear social or
                ethical purpose can lead to more focused and impactful user
                experience.
              </li>
              <li>
                To continue improving, further user testing is needed to assess
                how design changes affect user behaviors and needs.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Babel;
