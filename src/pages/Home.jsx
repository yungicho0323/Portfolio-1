import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import CardComponent from "../components/SelectedWorks.jsx";
import "./Home.css";
import React from "react";
import { Link } from "react-router-dom"; // was 'react-router'

function Home() {
  return (
    <>
      <Header />
      <main className="home">
        {/* background glow right */}
        <section className="hero-section">
          <div className="col-text-right">
            <div className="blur-2" />
          </div>
        </section>

        {/* HERO (reference-style structure) */}
        <section className="hero">
        <h1 className="hero-title">
           Turning user and business needs into <br />
            <span className="brand-highlight big-highlight">
           scalable, impact-driven digital experiences
            </span>
        </h1>

        <p className="hero-subcopy">
         Welcome! I’m YunGi, a UX-focused designer who transforms real user insights and business challenges into intuitive digital products that help teams improve engagement, usability, and long-term impact.
        </p>
      
        {/* Social Buttons */}
        <div className="social-buttons">
            <a
            href="https://www.linkedin.com/in/yungi-cho"
            target="_blank"
            rel="noopener noreferrer"
            className="brand-button"
            >
            LinkedIn
            </a>

            <a
            href="mailto:yungicho8@gmail.com"
            className="brand-button"
            >
            Email Me
            </a>
        </div>
        </section>


        {/* <section className="explore">
          <p className="scroll">SCROLL TO EXPLORE WORK ↓</p>
        </section> */}


        <section className="selected-works">
          <div className="card-section">
            <CardComponent />
          </div>
        </section>

        {/* <Link to="/work" className="view-all-btn">View All</Link> */}

    {/* ABOUT – DESIGN WITH PURPOSE */}
  <section id="about" className="about-section">
    <div className="about-container">
      <div className="about-eyebrow" aria-label="section label">
        <span className="eyebrow-dot" />
        HOW I APPROACH DESIGN</div>

      
        <h2 className="about-title">
        Grounded in real pain points, I design{" "}
        <span className="about-highlight">scalable</span>,{" "}
        <span className="about-highlight">impact-driven</span> solutions that
        connect with users and support business growth.
      </h2>

      <div className="about-actions">
        <Link to="/about" className="btn-outline" aria-label="Read my story">
          Read My Story
          <svg className="btn-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  </section>

      </main>
      <Footer />
    </>
  );
}

export default Home;