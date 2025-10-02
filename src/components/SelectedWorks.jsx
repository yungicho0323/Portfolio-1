import { Card, CardFooter, Typography } from "@material-tailwind/react";
import './Card.css';
import "animate.css";
import FurryTaleImage from "../assets/images/FurryTales-laptop.png";
import MedSpeakImage from "../assets/images/MedSpeak.png";
import { Link } from 'react-router-dom';

export function CardComponent() {
  return (
    <div className="card-container">
      
      {/* MedSpeak Card */}
      <Link to="/MedSpeak" className="card-link">
        <div className="image-wrapper animate__animated animate__slideInUp">
          <img src={MedSpeakImage} alt="Project-3" className="project-image3" />
          <Typography variant="h5" color="blue-gray" className="MedSpeak"> 
            MedSpeak: AI-powered Medical Translation App
          </Typography>

          <div className="bottom-section">
            {/* <div className="project-type-badge">
              <button className="project-type-button">AI-Powered Mobile App</button>
              <button className="project-type-button">Healthcare</button>
              <button className="project-type-button">Symptom Translation</button>
              <button className="project-type-button">Patient Data Storage</button>
            </div> */}
            <div className="right-section">
              <CardFooter className="cardFooter-wrapper">
                <span className="card-button">Learn More </span>
              </CardFooter>
            </div>
          </div>
        </div>
      </Link>

      {/* FurryTales Card */}
      <Link to="/furrytales" className="card-link">
        <div className="image-wrapper animate__animated animate__slideInUp">
          <img src={FurryTaleImage} alt="Project-2" className="project-image2" />
          <Typography variant="h5" color="blue-gray" className="furryTales"> 
            FurryTales Pet: Pet Snack Brand E-commerce Website
          </Typography>

          <div className="bottom-section">
            {/* <div className="project-type-badge">
              <button className="project-type-button">Website Redesign</button>
              <button className="project-type-button">E-commerce</button>
              <button className="project-type-button">Visual Storytelling</button>
              <button className="project-type-button">FLUI Hackathon 2025</button>
            </div> */}
            <div className="right-section">
              <CardFooter className="cardFooter-wrapper">
               <span className="card-button">Learn More </span>
              </CardFooter>
            </div>
          </div>
        </div>
      </Link>

 </div>
  );
}

export default CardComponent;