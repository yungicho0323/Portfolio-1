import { Card, CardFooter, Typography } from "@material-tailwind/react";
import './Card.css';
import "animate.css";
import FurryTaleImage from "../assets/images/FurryTales-laptop.png";
import BuddyUpPlusImage from "../assets/images/iphone-16-mockup.png";
import ApertureImage from "../assets/images/aperturemockup.png";
import MedSpeakImage from "../assets/images/MedSpeak.png";
import { Link } from 'react-router-dom';

export function CardComponent() {
  return (
    <div className="card-container">
      

 {/* BuddyUP+ Card */}
      <Link to="/BuddyUpPlus" className="card-link" aria-label="BuddyUp+ case study">
        <div className="image-wrapper animate__animated animate__slideInUp">
          <img src={BuddyUpPlusImage} alt="BuddyUp+ project cover" className="project-image1" />

          {/* new text block */}
          <div className="project-text-block">
            <span className="project-name">BuddyUP+ | Case Study</span>
            <h3 className="project-tagline">Building better habits through shared challenges and accountability.</h3>
          </div>

          <div className="bottom-section">
            <ul className="cardTags" aria-label="BuddyUp+ tags">
            <li className="cardTag">Wellness App</li>
            <li className="cardTag">UX Research</li>
            <li className="cardTag">AI Prototyping</li>
            <li className="cardTag">Usability Testing</li>
            </ul>
            <div className="right-section">
              <CardFooter className="cardFooter-wrapper">
                <span className="card-button">Learn More</span>
              </CardFooter>
            </div>
          </div>
        </div>
      </Link>

       {/*Aperture Coffee Bar Website Redesign Card */}
      <Link to="/aperturecoffeebar" className="card-link" aria-label="Aperture Coffee Bar case study">
        <div className="image-wrapper animate__animated animate__slideInUp">
          <img src={ApertureImage} alt="Aperture Coffee Bar project cover" className="project-image2" />

          {/* new text block */}
          <div className="project-text-block">
            <span className="project-name">Aperture Coffee Bar</span>

            <h3 className="project-tagline">Redesigning a local café website to better reflect its brand, events, and in-store experience.</h3>
          </div>

          <div className="bottom-section">
              <ul className="cardTags" aria-label="Aperture Coffee Bar tags">
              <li className="cardTag isSolid">Launched 2026</li>
              <li className="cardTag">E-commerce Website</li>
              <li className="cardTag">UI Development</li>
              <li className="cardTag">Stakeholder Interview</li>
            </ul>
            <div className="right-section">
              <CardFooter className="cardFooter-wrapper">
                <span className="card-button">It's coming soon!</span>
              </CardFooter>
            </div>
          </div>
        </div>
      </Link>
    
          {/* FurryTales Card */}
          <Link to="/furrytales" className="card-link" aria-label="FurryTales case study">
            <div className="image-wrapper animate__animated animate__slideInUp">
              <img src={FurryTaleImage} alt="FurryTales project cover" className="project-image2" />
    
              {/* new text block */}
              <div className="project-text-block">
                <span className="project-name">UI Hackathon @ Emaily Carr University</span>
                <h3 className="project-tagline">Redesigning a local pet brand for joyful, seamless shopping.</h3>
              </div>
    
              <div className="bottom-section">
                <ul className="cardTags" aria-label="FurryTales tags">
                  <li className="cardTag">E-commerce Redesign</li>
                  <li className="cardTag">Brand Storytelling</li>
                  <li className="cardTag">Project Management</li>
                </ul>
                <div className="right-section">
                  <CardFooter className="cardFooter-wrapper">
                    <span className="card-button">Learn More</span>
                  </CardFooter>
                </div>
              </div>
            </div>
          </Link>

        {/* MedSpeak Card */}
      <Link to="/MedSpeak" className="card-link" aria-label="MedSpeak case study">
        <div className="image-wrapper animate__animated animate__slideInUp">
          <img src={MedSpeakImage} alt="MedSpeak project cover" className="project-image3" />

          {/* new text block */}
          <div className="project-text-block">
            <span className="project-name">MedSpeak | Case Study</span>
            <h3 className="project-tagline">Breaking language barriers in healthcare.</h3>
          </div>

          <div className="bottom-section">
            <ul className="cardTags" aria-label="MedSpeak tags">
              <li className="cardTag">Healthcare App</li>
              <li className="cardTag">Product Design</li>
              <li className="cardTag">AI Translation</li>
              <li className="cardTag">Accessibility</li>
            </ul>
            <div className="right-section">
              <CardFooter className="cardFooter-wrapper">
                <span className="card-button">Learn More</span>
              </CardFooter>
            </div>
          </div>
        </div>
      </Link>

 </div>
  );
}

export default CardComponent;