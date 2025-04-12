import React from 'react';
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './Zynergy.css';
import heroImage from '../assets/images/iphone-16-mockup.png';

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
                  Fitness & wellness class subscription app for people to try out
                  different workout facilities in the city also, for people to create or 
                  join for group workout challenges.
                </p>
                <div className="project-meta">
                  <div>
                    <h4>Timeline</h4>
                    <p>Designed in 2024 <br/>
                        Redesigned in 2025
                    </p>
                  </div>
                  <div>
                    <h4>Tools</h4>
                    <p>Figma, <br /> Photoshop, <br /> Illustrator</p>
                  </div>
                  <div>
                    <h4>Project Types</h4>
                    <p> UI/UX <br/>Branding <br/> Product Design </p>
                  </div>
                  <div>
                    <h4>Roles/Responsibilities</h4>
                    <p>UI/ UX designer</p>
                  </div>
                </div>
              </div>
              <div className="project-image">
                <img src={heroImage} alt="Zynergy Project Preview" />
              </div>
            </section>





        </main>

        <Footer />
        </>

    );
}

export default Zynergy;