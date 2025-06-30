import React from "react";
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import "./MedSpeak.css";
import heroImage from "../assets/images/MedSpeak.png";
import MedSpeakVideo from "../assets/videos/MedSpeak.mp4";

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
      </main>
      <Footer />
    </>
  );
}

export default MedSpeak;
