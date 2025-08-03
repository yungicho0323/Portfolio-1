import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import './Card.css';
import "animate.css";
import ZynergyImage from "../assets/images/iphone-16-mockup.png";
import FurryTaleImage from "../assets/images/FurryTales-laptop.png";
import MedSpeakImage from "../assets/images/MedSpeak.png";
import { Link } from 'react-router';
import babelImage from '../assets/images/BabelMockup.png';

export function CardComponent() {
  return (
    <Card className="card-container">

      {/* MedSpeak Card - Entire card is clickable */}
      <Link to="/MedSpeak" className="card-link">
        <div className="image-wrapper animate__animated animate__slideInUp">
          <img src={MedSpeakImage} alt="Project-3" className="project-image3" />
          {/*MedSpeak Title*/}
          <Typography variant="h5" color="blue-gray" className="MedSpeak"> 
            MedSpeak: AI-powered Medical Translation App
          </Typography>

         {/*Card Bottom Section */}
          <div className="bottom-section">
            <div className="project-type-badge">
          <button className="project-type-button">AI-Powered Mobile App</button>
          <button className="project-type-button">Healthcare</button>
          <button className="project-type-button">Symptom Translation</button>
          <button className="project-type-button">Patient Data Storage</button>
            </div>

            <div className="right-section">
              <CardFooter className="cardFooter-wrapper">
                <span className="card-button">Read More</span>
              </CardFooter>
            </div>
          </div>

        </div>
      </Link>

      {/* Zynergy Card - Entire card is clickable */}
      <Link to="/zynergy" className="card-link">
        <div className="image-wrapper animate__animated animate__slideInUp">
          <img src={ZynergyImage} alt="Project-1" className="project-image1" />
          {/*Zynergy Title*/}
          <Typography variant="h5" color="blue-gray" className="zynergy">
            Zynergy: Group Workout Challenge Fitness App
          </Typography>
          
         {/*Card Bottom Section */}
          <div className="bottom-section">
            <div className="project-type-badge">
              <button className="project-type-button">Fitness & Wellness App</button>
              <button className="project-type-button">Social Connection</button>
              <button className="project-type-button">Group Workout</button>
              <button className="project-type-button">Workout Progress Tracker</button>
            </div>

            <div className="right-section">
              <CardFooter className="cardFooter-wrapper">
                <span className="card-button">Read More</span>
              </CardFooter>
            </div>
          </div>
        </div>
      </Link>

      {/* FurryTales Card - Entire card is clickable */}
      <Link to="/furrytales" className="card-link">
        <div className="image-wrapper animate__animated animate__slideInUp">
          <img src={FurryTaleImage} alt="Project-2" className="project-image2" />
          {/*FurryTales Title*/}
          <Typography variant="h5" color="blue-gray" className="furryTales"> 
            FurryTales Pet: Pet Snack Brand E-commerce Website
          </Typography>

         {/*Card Bottom Section */}
          <div className="bottom-section">
            <div className="project-type-badge">
             <button className="project-type-button">Website Redesign</button>
              <button className="project-type-button">E-commerce</button>
              <button className="project-type-button">Visual Storytelling</button>
              <button className="project-type-button">FLUI Hackathon 2025</button>
            </div>

            <div className="right-section">
              <CardFooter className="cardFooter-wrapper">
                <span className="card-button">Read More</span>
              </CardFooter>
            </div>
          </div>
        </div>
      </Link>

      {/* Babel Card - Entire card is clickable */}
      <Link to="/babel" className="card-link">
        <div className="image-wrapper animate__animated animate__slideInUp">
          <img src={babelImage} alt="Project-4" className="project-image4" />
          {/*Babel Title*/}
          <Typography variant="h5" color="blue-gray" className="babel"> 
            Babel: Emergency Response & Safety Communication App
          </Typography>

         {/*Card Bottom Section */}
          <div className="bottom-section">
            <div className="project-type-badge">
              <button className="project-type-button">Safety & Community</button>
              <button className="project-type-button">Real-Time Location Sharing</button>
              <button className="project-type-button">Emergency Coordination</button>
                          </div>

            <div className="right-section">
              <CardFooter className="cardFooter-wrapper">
                <span className="card-button">Read More</span>
              </CardFooter>
            </div>
          </div>
        </div>
      </Link>


    </Card>
  );
}

export default CardComponent;