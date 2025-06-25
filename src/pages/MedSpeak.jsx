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
                href="https://www.figma.com/proto/0usV1AjaeCBDzmn5E1NFRh/MedSpeak-App_Design?page-id=1%3A4&node-id=187-1628&p=f&viewport=426%2C276%2C0.09&t=sXVJV9Fqg5CnBc6x-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=187%3A1628"
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