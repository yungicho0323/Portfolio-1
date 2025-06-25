import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
// import ZynergyImage from './assets/images/Zynergy.png';
import './Card.css';
import "animate.css";
import ZynergyImage from "../assets/images/iphone-16-mockup.png";
import FurryTaleImage from "../assets/images/FurryTales-laptop.png";
import MedSpeakImage from "../assets/images/MedSpeak.png";
import { Link }from 'react-router';
import babelImage from '../assets/images/BabelMockup.png';



export function CardComponent() {
  return (
    <Card className="card-container">

      <div class="image-wrapper animate__animated animate__slideInUp">
        <img src={babelImage} alt="Project-4" className="project-image4" />
      {/*2 Seconds Title*/}
          <Typography variant="h5" color="blue-gray" className="babel"> 
          Babel: Safety-driven, Real-time Location Sharing App
          </Typography>

      {/*Card Bottom Section */}
        <div className="bottom-section">
          <div className="left-section">
        <CardFooter className="cardFooter-wrapper">
          <Link to="/babel" className="card-button">Read More</Link>
        </CardFooter>
        </div>

        <div className="project-type-badge">
        <button className="project-type-button">UI/ UX</button>
        </div> 
        </div>
      </div>


    <div class="image-wrapper animate__animated animate__slideInUp">
        <img src={ZynergyImage} alt="Project-1" className="project-image1" />
        {/*Znergy Title*/}
          <Typography variant="h5" color="blue-gray" className="zynergy">
            Zynergy: Group Workout Challenge Fitness App
          </Typography>
        {/*Card Bottom Section*/}
        <div className="bottom-section">
          <div className="left-section">
        <CardFooter className="cardFooter-wrapper">
          <Link to="/zynergy" className="card-button">Read More</Link>
        </CardFooter>
        </div>
        
        <div className="project-type-badge">
        <button className="project-type-button">UI / UX</button>
        </div>
        </div>
    </div>

    

    <div class="image-wrapper animate__animated animate__slideInUp">
        <img src={FurryTaleImage} alt="Project-2" className="project-image2" />
      {/*FurryTales Title*/}
          <Typography variant="h5" color="blue-gray" className="furryTales"> 
           FurryTales Pet: 
            FLUI Hackathon 2025
          </Typography>

      {/*Card Bottom Section */}
        <div className="bottom-section">
          <div className="left-section">
        <CardFooter className="cardFooter-wrapper">

          <Link to="/furrytales" className="card-button">Read More
          </Link>
        </CardFooter>
        </div>

        <div className="project-type-badge">
        <button className="project-type-button">Website Redesign</button>
        </div>
        </div>
      </div>


    <div class="image-wrapper animate__animated animate__slideInUp">
        <img src={MedSpeakImage} alt="Project-3" className="project-image3" />
      {/*2 Seconds Title*/}
          <Typography variant="h5" color="blue-gray" className="MedSpeak"> 
          MedSpeak: AI-powered Medical Translation App (COMING SOON)
          </Typography>

      {/*Card Bottom Section */}
        <div className="bottom-section">
          <div className="left-section">
        <CardFooter className="cardFooter-wrapper">
          <Link to="/MedSpeak" className="card-button">Read More</Link>
        </CardFooter>
        </div>

        <div className="project-type-badge">
        <button className="project-type-button">UI/ UX</button>
        </div> 
        </div>
      </div>
      



    </Card>
    
  );
}

export default CardComponent;