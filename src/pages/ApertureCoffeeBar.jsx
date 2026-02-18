import React from 'react';
import { useState } from "react";
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './ApertureCoffeeBar.css';
import ApertureImage from "../assets/images/aperturemockup.png";


export default function ApertureCoffeeBar() {
  return (
    <>
      <Header />

        <main div className="Project-detail-container">
            {/*Project-hero*/}
            <section className="project-hero-updated">
              <div className="top-layout">
              <div className="aperture-project-text">
                <h1>Aperture Coffee Bar</h1>
                
                <p>
                    <strong>
                        A self-initiated website redesign for a Vancouver café and live music venue, aligning user needs and business goals through clearer event promotion and brand-forward design.
                    </strong>
                </p>

        <div className="prototype-button-wrapper">
          <a
            href="https://www.aperturecoffeebar.com/"
            target="_blank"
            rel="Aperture Coffee Bar Live Site"
            className="prototype-button"
          >
          View Live Site
          </a>
        </div>
        </div>
        </div>
        <div className="aperture-project-image">
                        <img src={ApertureImage} alt="Aperture Coffee Bar Project Preview" />
                      </div>
                  
        
                        <div className="project-meta aperture-updated-meta">
                          <div>
                            <h4>Timeline</h4>
                            <p>September, 2025 <br/>- December, 2025
                            </p>
                          </div>
                          <div>
                            <h4>Role</h4>
                            <p>UX/UI Designer</p>
                          </div>
                          <div>
                            <h4>Responsibilities</h4>
                            <p>Stakeholder interviews <br/>Market Research <br/> Content Development <br/> UI Development <br/> Project Management</p>
                          </div>
                          <div>
                            <h4>Tools</h4>
                            <p> Figma, Squarespace <br/> Stakeholder Interviews</p>
                          </div>
                           <div>
                            <h4>Industry</h4>
                            <p>E-commerce</p>
                          </div>
                          <div>
                            <h4>Team</h4>
                            <p>3 UX/UI Designers</p>
                          </div>
                        </div>
            </section>
      </main>
      <Footer />
    </>
  );
}