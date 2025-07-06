import React from "react";
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import "./MedSpeak.css";
import heroImage from "../assets/images/MedSpeak.png";
import MedSpeakVideo from "../assets/videos/MedSpeak.mp4";
import problem from "../assets/images/MedSpeak_ProblemDiscovery.png";
import keyIcon from "../assets/images/key.png";
import feature1 from '../assets/images/feature1.png';
import feature2 from '../assets/images/feature2.png';
import feature3 from '../assets/images/feature3.png';
import IA from "../assets/images/MedSpeak_IA.png";
import wireframes from '../assets/images/MedSpeak_wireframes.png';
import onboarding from '../assets/images/onboarding.png';
import home from '../assets/images/home.png';
import myhealth from '../assets/images/myhealth.png';
import profile from '../assets/images/profile.png';
import iteration1 from '../assets/images/iteration1.png';
import iteration2 from '../assets/images/iteration2.png';
import iteration3 from '../assets/images/iteration3.png';


function MedSpeak() {
  return (
    <>
      <Header />
      {/*Intro section*/}
      <main div className="Project-detail-container">
        {/*Project-hero*/}

        <section className="project-hero-updated">
          <div className="top-layout">
            <div className="project-text">
              <h1>MedSpeak</h1>
              <p>
                <strong>
                  An AI-powered health app that translates everyday symptom
                  descriptions into medical terms, helping patients talk clearly
                  with doctors and keep track of their health
                </strong>
              </p>
              <p>
                It is designed to break down language barriers, improve
                diagnostic accuracy in healthcare, and help patients feel heard,
                supported, and confident during medical visits.
              </p>
              <div className="prototype-button-wrapper">
                <a
                  href="https://www.figma.com/proto/0usV1AjaeCBDzmn5E1NFRh/MedSpeak-App_Design?page-id=1%3A4&node-id=328-2111&viewport=-264%2C215%2C0.08&t=BOIegCgJnDismKml-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=328%3A2111&show-proto-sidebar=1"
                  rel="noopener noreferrer"
                  className="prototype-button"
                >
                  View Prototype
                </a>
                {/*Figjam button*/}
                <div className="figjam-button-wrapper">
                <a
                  href="https://www.figma.com/board/DvfQpGAck7P8B6t0xFpPXl/MedSpeak_UIUX-Case-Study?node-id=7-167&t=pIYi2xm3Ai2jy8Cu-1"
                  className="figjam-button"
                >
                  View FigJam
                </a>
              </div>
              </div>

            </div>

            <div className="project-image">
              <img src={heroImage} alt="MedSpeak Project Preview" />
            </div>
          </div>

          <div className="project-meta updated-meta">
            <div>
              <h4>Timeline</h4>
              <p>
                3 weeks
                <br />
                Designed in June, 2025
              </p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>
                Figma
                <br />
                FigJam
              </p>
            </div>
            <div>
              <h4>Project Types</h4>
              <p>
                UI/UX
                <br />
                Mobile App Design
              </p>
            </div>
            <div>
              <h4>Team</h4>
              <p>Solo Project</p>
            </div>
            <div>
              <h4>Role</h4>
              <p>UI UX Designer</p>
            </div>
          </div>
        </section>

        {/*Overview*/}
        <section className="medspeak-overview-section">
          <div className="medspeak-overview-container">
            <h2 className="overview-heading">overview</h2>
            <h1 className="main-heading">
              <span className="medspeak-highlight-keyword">
                Speak Your Symptoms with Confidence and No Language Barriers.
              </span>
            </h1>

            <div>
              <h3 className="section-title">Problem</h3>
              <p className="problem-description">
                Patients who are non-English speakers often struggle to
                accurately describe their symptoms during medical appointments,
                leading to misunderstandings, misdiagnoses, and anxiety.
              </p>

              <div className="problem-question-box">
                <p>
                  <strong>How might we</strong> help non-English speaking
                  patients express their symptoms clearly to doctors to ensure
                  accurate diagnosis and care?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-section">
          <div className="solution-container">
            <h2>Solution</h2>
            <h3 className="solution-tagline">
              A caring, language-inclusive solution that helps non-English
              speakers feel understood,
              <br /> supported, and confident when sharing their symptoms and
              navigating healthcare.
            </h3>
            <p className="solution-subtext">
              Support better diagnoses by translating your symptoms with medical
              accuracy.
            </p>

            <div className="solution-video-wrapper">
              <video
                className="solution-video"
                src={MedSpeakVideo}
                controls
                playsInline
                muted
                loop
              />
            </div>

            <div className="MedSpeak-prototype-button-wrapper">
              <a
                href="https://www.figma.com/proto/0usV1AjaeCBDzmn5E1NFRh/MedSpeak-App_Design?page-id=1%3A4&node-id=328-2111&viewport=-264%2C215%2C0.08&t=BOIegCgJnDismKml-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=328%3A2111&show-proto-sidebar=1"
                target="_blank"
                rel="MedSpeak App prototyping"
                className="prototype-button"
              >
                View Prototype
              </a>
            </div>
          </div>
        </section>

        {/*Research*/}
        <section id="research" className="research-section">
          <div className="research-container">
          <h2>01 Research</h2>
          <div className="context-section">
            <h3 className="context-title">Background</h3>
            <p>When patients and healthcare providers don’t share the same language, it becomes difficult to communicate symptoms accurately. This often leads to misunderstandings, misdiagnoses, and added stress for patients. The idea for MedSpeak started from recognizing how language barriers can prevent people from getting the care they need.</p>
          </div>

          <div className="medspeak-context-section">
            <h3 className="context-title">Identifying Problem Discovery</h3>
            <p>According to the American Medical Association Journal of Ethics, <span className="medspeak-highlight-keyword">language barriers in healthcare settings can lead to serious ethical and clinical consequences</span>, including inaccurate diagnoses, reduced preventive care & follow up, and patient satisfaction.</p>

            <div className="medspeak-research-placeholder">
                        <img src={problem} alt="Language Barriers between Doctor and Patient" className="MedSpeak-research" />
            </div>
          </div>

        {/*key challenges*/}
        <div className="medspeak-wrapper">
        <div className="medspeak-card">
          <div className="medspeak-circle">1</div>
          <div className="medspeak-content">
            <h3>Inaccurate Diagnosis</h3>
            <ul>
              <li>77% of medical visits involving untrained interpreters (such as family members) resulted in errors, and over half of those were considered clinically significant.</li>
            </ul>
          </div>
        </div>

        <div className="medspeak-card">
          <div className="medspeak-circle">2</div>
          <div className="medspeak-content">
            <h3>Reduced Preventive Care<br/> & Follow-up</h3>
             <ul>
              <li>
                Many LEP (Limited English Proficiency) patients are also less likely to
                follow up after appointments or complete referrals.
              </li>
              <li>
                Patients with limited English skills are 50% less likely to get
                preventive care like flu shots or cancer screenings.
              </li>
            </ul>
          </div>
        </div>

        <div className="medspeak-card">
          <div className="medspeak-circle">3</div>
          <div className="medspeak-content">
            <h3>Patient Satisfaction</h3>
            <ul>
              <li>
                LEP (Limited English Proficiency) patients are 2–3 times more likely to
                feel dissatisfied with their care or not trust their doctor.
              </li>
              <li>
                41% of LEP patients reported poor communication, compared to just 15% of
                English speakers.
              </li>
              <li>
                Those without access to an interpreter were more likely to misunderstand
                instructions and skip medication.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*User Interview*/}
      <div className="medspeak-validation">
        <h4 className="medspeak-section-title">Validating The Problem</h4>
        <h2 className="medspeak-highlight">Interviewed with non-native English speakers and participants shared real challenges with language barriers during medical visits.</h2>
        
        {/*interview summary*/}
      <section className="interview-summary">
      <table>
        <thead>
          <tr>
            <th>Participants</th>
            <th>Duration</th>
            <th>Method</th>
            <th>Interview Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 non-native<br />English speakers</td>
            <td>30 minutes per person</td>
            <td>One-on-one,<br /> Semi-structured interviews</td>
            <td>
              Language barriers,
              Communication, <br/>Emotional impact,
              Translator usage <br/> Healthcare
            </td>
          </tr>
        </tbody>
      </table>

      {/*key insights*/}
       <div className="miscommunication-text">
        <h3>Key Insights:</h3>
        <ul>
        <li>
          Even when patients tried to simplify their words or prepare in advance, they often felt misunderstood during appointments.
        </li>
        <li>
          Without the right tools to bridge that gap, these moments of miscommunication led to frustration, anxiety, and missed opportunities for accurate care.
        </li>
        </ul>
      </div>

      <div className="quote-box">
        <p className="quote-label"><strong>User Quotes:</strong></p>
        <ul>
          <li>Even when I try to explain clearly, I feel like something gets lost in translation.</li>
          <li>I don’t know the right medical words, so I end up saying things that are too simple or confusing.</li>
          <li>I wish there was a way to prepare something in advance that I could just share with the doctor, so they can understand me better.</li>
          <li>I’ve used a translator during appointments, but it’s not always enough.</li>
          <li>I think being able to track my symptoms and send it to the doctor would make things way easier.</li>
        </ul>
      </div>
    </section>
      </div>

       {/*Approach*/}
            <div className="goal-section">
              <h3 className="goal-title">Approach</h3>
              <p>
                {" "}
                <strong>
                  {" "}
                  How might we help non-English speaking patients express their symptoms clearly to doctors to ensure accurate diagnoses and care?
                </strong>
              </p>
              <p>
               The primary goal of the MedSpeak app is to understand language barriers between non-native speakers and healthcare providers, and define key user needs through user research and observation.
              </p>
            </div>
      </div>
        </section>


      {/*section divider*/}
      <div className="section-divider"></div>

    {/*Design*/}
    <section id="design" className="design-section">
      <div className="design-container">
      <h2>02 Design</h2>
        <h3 className="section-title">Brainstorming</h3>
        <p className="design-description">After reviewing insights from research and analysis, I began refining the app by brainstorming and prioritizing features into Must Have, Nice to Have, and Extras. I revisited key pain points and opportunities from user interviews and journey mapping. In the end, I was able to define key solution elements and features that directly addressed user needs.</p>
      </div>
    
        {/*key solution elements from user needs*/}
      <section className="medspeak-section">
      <h3>Key Solution Elements from User Needs</h3>
      <div className="solution-grid">
        <div className="solution-card">
          <img src={keyIcon} alt="Key icon" />
          <p>Help patients express their symptoms accurately with their own language.</p>
        </div>
        <div className="solution-card">
          <img src={keyIcon} alt="Key icon" />
          <p>Translate everyday language into terminology that doctors understand and trust.</p>
        </div>
        <div className="solution-card">
          <img src={keyIcon} alt="Key icon" />
          <p>Keep important info ready in case of emergency.</p>
        </div>
        <div className="solution-card">
          <img src={keyIcon} alt="Key icon" />
          <p>Share your health history with your doctor.</p>
        </div>
      </div>

    {/*Features*/}
    <h3>Features to address user needs</h3>

      <div className="feature-cards-layout">

        <div className="feature-card-exact">
          <div className="feature-left">
            <img src={feature1} alt="AI Voice Reader" />
            <p>AI Voice Reader</p>
          </div>
          <div className="feature-divider" />
          <div className="feature-right">
            <ul>
              <li>AI Voice Reader</li>
              <li>AI Language Translator</li>
              <li>Auto-loaded Translator</li>
              <li>Automatic Save-in My Health</li>
            </ul>
          </div>
        </div>

        <div className="feature-card-exact">
          <div className="feature-left">
            <img src={feature2} alt="My Health" />
            <p>My Health</p>
          </div>
          <div className="feature-divider" />
          <div className="feature-right">
            <ul>
              <li>Translation History Auto Save</li>
              <li>AI Semantic Template Search Filter</li>
              <li>Language Translator</li>
              <li>PDF Generation</li>
            </ul>
          </div>
        </div>

        <div className="feature-card-exact">
          <div className="feature-left">
            <img src={feature3} alt="Profile" />
            <p>Profile</p>
          </div>
          <div className="feature-divider" />
          <div className="feature-right">
            <ul>
              <li>Share Profile with Doctor</li>
              <li>Usage Statistics</li>
              <li>Language Preferences</li>
              <li>Medical Information</li>
              <li>Doctor’s Contact</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    {/*Site Map*/}
    <section className="information-architecture">
      <h3>Information Architecture</h3>
      <p>
    To ensure the app’s features are logically structured and easy to navigate, I created an information architecture that organizes all core functionalities based on user needs.
      </p>
      <img src={IA} alt="Information Architecture Diagram" />

       <div className="MedSpeak-prototype-button-wrapper">
              <a
                href="https://www.figma.com/board/DvfQpGAck7P8B6t0xFpPXl/MedSpeak_UIUX-Case-Study?node-id=21-481&t=SunFXcUTpeayfHmF-1"
                target="_blank"
                rel="Information Architecture"
                className="prototype-button"
              >
                View IA
              </a>
            </div>
    </section>

    {/*wireframes & high-fidelity*/}
     <section className="design-showcase-section">
      <div className="wireframe-block">
        <h3>Wireframes</h3>
        <p>Based on the information architecture, I sketched low-fidelity designs as considering user flows. Then, I created wireframes to visualize how each screen would present essential information and support the user flow. </p>
        <img src={wireframes} alt="Wireframes" />
      </div>

      <section className="UIdesign-section">
      <div className="design-block">
        <h4>High-fidelity</h4>
        <p>
          Based on the wireframes, I created high-fidelity designs by building a consistent design system and thoughtfully mapping out the user flow.
        </p>
      </div>

      <div className="design-block">
        <h4>Onboarding & Sign-in</h4>
        <p>The onboarding screens introduce the main features of the app, helping users quickly understand how MedSpeak works and how it can assist them throughout their healthcare journey.</p>
        <img src={onboarding} alt="Onboarding screen" />
      </div>

      <div className="design-block">
        <h4>Home (AI-powered Translation)</h4>
        <p>When users tap the <span className="medspeak-highlight-keyword">AI Voice Reader </span>button  on the Home screen, they can speak about their symptoms in their own language. The AI listens, translates it into the doctor’s language, and converts it into clear medical terms. This helps doctors better understand what the user is feeling, even across language barriers.</p>
        <img src={home} alt="Home screen with AI translation" />
      </div>

      <div className="design-block">
        <h4>My Health (History & Share)</h4>
        <p>All translated conversations during doctor visits are automatically saved in the<span className="medspeak-highlight-keyword"> My Health </span>screen under History. Patients can tap into each entry to view the full details. They also have the option to generate a <span className="medspeak-highlight-keyword">PDF file</span> from the translation, which can be easily shared with a doctor via email or messaging apps by going into <span className="medspeak-highlight-keyword">Share</span> screen.
        </p>
        <img src={myhealth} alt="My Health section" />
      </div>

      <div className="profile-block">
        <h4>Profile</h4>
        <p>In case of an emergency, the patient’s profile can be quickly shared with a doctor. It includes important details like language preferences, medical history, and the doctor’s contact information ensuring fast and accurate support when it’s needed most.</p>
        <img src={profile} alt="Profile screen" />
      </div>
    </section>
    </section>
    
     </section>

    {/*section divider*/}
    <div className="section-divider"></div>

    {/*Develop*/}
    <section id="design" className="design-section">
      <div className="design-container">
        <h2>03 Develop</h2>
        <h3 className="section-title">
          Usability Testing
        </h3>
        <p className="design-description">
          I conducted<span className="medspeak-highlight-keyword"> usability testing</span>  with our target audience to understand exactly which parts of the design frustrated people and generate more intuitive user interactions.
        </p>

        <h3 className="design-title">Iterations from Usability Tests</h3>
        <p className="design-description">
          Through usability testing, I identified key friction points in the user journey. Based on the feedback, I made <span className="medspeak-highlight-keyword">three core iterations</span> that simplified navigation, improved guidance, and supported emergency interactions.
        </p>
        

           {/* Iteration 1 */}
                 <div className="iteration-row">
                  <div className="iteration-image-set">
                    <img src={iteration1} alt="Group Challenge Before/After" />
                  </div>
                  <div className="iteration-text">
                    <h4>1. Simplified Navigation <br/> (Removal of unnecessary feature)</h4>
                    <p><strong>Before:</strong> The home screen included both voice and typing options for translation, which confused users and added unnecessary steps.</p>
                    <p><strong>After:</strong> Removed the typing input to streamline the experience and guide users to the voice-first approach.</p>
                        <p><strong>→ Improved User Behavior:</strong> Users initiated translation faster and felt less overwhelmed by choices.</p>
                  </div>
                </div>
        
                {/* Iteration 2 */}
          <div className="iteration-row">
            <div className="iteration-text">
              <h4>2. Guided Next Steps</h4>
              <p><strong>Before:</strong> After speaking, users weren’t sure if their input had been saved or what to do next.</p>
              <p><strong>After:</strong> Introduced a visual “Auto Saved” prompt to make the process feel more complete and trustworthy, and clearly showed where the input was saved so users understood the next step. </p>
              <p><strong>→ Improved User Behavior:</strong> Users were more confident their data was saved and navigated to the history section without hesitation.</p>
            </div>
            <div className="iteration-image-set">
              <img src={iteration2} alt="Workout Tracker Before/After" />
            </div>
          </div>
        
        
                {/* Iteration 3 */}
                <div className="iteration-row">
                  <div className="iteration-image-set">
                    <img src={iteration3} alt="Friend Profile Before/After" />
                  </div>
                  <div className="iteration-text">
                    <h4>3. Emergency Sharing Function</h4>
                    <p><strong>Before:</strong> The "Start Translation" button lacked clarity and didn't support emergency use cases.</p>
                    <p><strong>After:</strong> Replaced it with "Share Profile with Doctor", enabling patients to instantly send crucial information during emergencies.</p>
                    <p><strong>→ Improved User Behavior:</strong> Users clearly understood the new button’s purpose and were more likely to use it when simulating urgent situations.</p>
                  </div>
                </div>
      </div>
    </section>

    {/*Final product*/}
    <section className="final-product-section">
    <div className="solution-container">
      <h2 className="final-heading">Final Product</h2>
       <p className="section-description">
        Explore the MedSpeak app prototype below and experience how users can translate and share medical information quickly and effectively.
      </p>
    </div>
    <div className="figma-embed-wrapper">
        <iframe
          title="MedSpeak Figma Prototype"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="800"
          height="450"
          src="https://embed.figma.com/proto/0usV1AjaeCBDzmn5E1NFRh/MedSpeak-App_Design?page-id=1%3A4&node-id=328-2111&viewport=-1197%2C355%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=328%3A2111&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>
    </section>

  {/*section divider*/}
    <div className="section-divider"></div>

  {/*Validation*/}
  <section id="validation" className="validation-section">
    <h2>Reflection</h2>

    <h3 className="medspeak-takeaway-heading">Project Takeaways</h3>
    <div className="takeaway-box">
      <ul className="takeaway-list">
        <li><strong>Finding Clarity Through User Interviews:</strong>
        <br/>
            Before conducting user interviews, I had many feature ideas and wanted the app to be designed for global use rather than being location-based. After the interviews, I gained clearer insights into user needs and decided to prioritize language translation as the core feature. This direction allowed me to focus on solving the most relevant problem and create a more purposeful user experience.</li>
        <li><strong>Future Consideration for AI Accessibility:</strong> 
        <br/>
            To make the app even more inclusive, I’d like to explore how AI can further improve accessibility, especially for users with language or literacy barriers.</li>
        <li><strong> Need for Research on AI Confidentiality & Trust:</strong>
        <br/>
            In future iterations, I want to explore how users feel about trusting AI with their medical information especially when it comes to translation. Since this involves sensitive health data, understanding user concerns around privacy and confidentiality will be really important.</li>
        <li><strong>Feature Expansion Idea:</strong>
        <br/>
            A potential feature I'd like to explore is appointment booking with available doctors within the app, allowing patients to manage their healthcare journey from pre-visit to post-visit in one place.</li>
      </ul>
    </div>
  </section>



      </main>
      <Footer />
    </>
  );
}

export default MedSpeak;
