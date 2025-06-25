import React from 'react';
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './MedSpeak.css';
import heroImage from "../assets/images/MedSpeak.png";


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
                An AI-powered health app that translates everyday symptom descriptions into medical terms,
                helping patients talk clearly with doctors and keep track of their health
                </strong>
            </p>
            <p>
                It is designed to reduce language barriers in healthcare and ensure patients feel understood,
                supported, and confident during medical appointments.
            </p>
            <div className="prototype-button-wrapper">
                <a
                href="https://www.figma.com/proto/7zfkCQxKAUP608I5cfSsKj/Babel_Project-4?page-id=1%3A1362&node-id=2121-1840&p=f&viewport=-1878%2C-25%2C0.15&t=8MsVa4LL3PJRKrcL-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2121%3A1840&show-proto-sidebar=1"
                target="_blank"
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
            <p>3 weeks<br />Designed in June, 2025</p>
            </div>
            <div>
            <h4>Tools</h4>
            <p>Figma<br />FigJam</p>
            </div>
            <div>
            <h4>Project Types</h4>
            <p>UI/UX<br />Mobile App Design</p>
            </div>
            <div>
            <h4>Team</h4>
            <p>Individual Project</p>
            </div>
            <div>
            <h4>Roles/Responsibilities</h4>
            <p>UI UX Designer</p>
            </div>
        </div>
        </section>


    </main>
    <Footer />
    </>
    );
}

export default MedSpeak;