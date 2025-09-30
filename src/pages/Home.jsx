import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import CardComponent from "../components/Card.jsx";
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
    Transforming complex problems into <br />
    <span className="brand-highlight big-highlight">
      accessible, human-first experiences
    </span>
  </h1>
  <p className="hero-subcopy">
    Welcome! -
    I’m YunGi, a UX/UI designer, I craft accessible, human-first experiences that balance empathy, usability, and strategic design.
  </p>
</section>



        <section className="explore">
          <p className="scroll">SCROLL TO EXPLORE WORK ↓</p>
        </section>

        {/* background glow left */}
        <section className="hero-section">
          <div className="col-text-left">
            <div className="blur-2" />
          </div>
        </section>

        <section className="selected-works">
          <div className="card-section">
            <CardComponent />
          </div>
        </section>

        <Link to="/work" className="view-all-btn">View All</Link>
      </main>
      <Footer />
    </>
  );
}

export default Home;
