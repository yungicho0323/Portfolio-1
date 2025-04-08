import React from 'react';
import './FurryTales.css';
import heroImage from '../assets/images/FurryTales.png';

function FurryTales() {
return (
    <>
    <Header />
    {/*Intro Section*/}
    <main div className="Project-detail-container">
    {/*Project-hero*/}
    <section className="project-hero">
      <div className="project-text">
        <h1>FurryTales Pet</h1>
        <p>
          a Vancouver based small business that specializes in handcrafted dehydrated and
          freshly baked pet treats for dogs.
        </p>
        <div className="project-meta">
          <div>
            <h4>Timeline</h4>
            <p>72 hours February, 2025</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Figma, <br /> Photoshop, <br /> Illustrator</p>
          </div>
          <div>
            <h4>Project Types</h4>
            <p>Website Redesign<br /> UI/UX</p>
          </div>
          <div>
            <h4>Roles/Responsibilities</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
      <div className="project-image">
        <img src={heroImage} alt="FurryTales Laptop Preview" />
      </div>
    </section>
    </main>
    <Footer />
    </>
    );
}

export default FurryTales;
