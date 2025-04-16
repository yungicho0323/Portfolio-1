import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
// import ZynergyImage from './assets/images/Zynergy.png';
import './Card.css';
import "animate.css";
import ZynergyImage from "../assets/images/iphone-16-mockup.png";
import FurryTaleImage from "../assets/images/FurryTales-laptop.png";
import TwoSecondsImage from "../assets/images/2Seconds.png";
import { Link }from 'react-router';
import babelImage from '../assets/images/BabelMockup.png';



export function CardComponent() {
  return (
    <Card className="card-container">

    

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
        <img src={ZynergyImage} alt="Project-1" className="project-image1" />
        {/*Znergy Title*/}
          <Typography variant="h5" color="blue-gray" className="zynergy">
            Zynergy: Fitness & Wellness Class Subscription Mobile App
          </Typography>
        {/*Card Bottom Section*/}
        <div className="bottom-section">
          <div className="left-section">
        <CardFooter>
          <Link to="/zynergy" className="card-button">Read More</Link>
        </CardFooter>
        </div>
        
        <div className="project-type-badge">
        <button className="project-type-button">UI / UX</button>
        </div>
        </div>
    </div>

    <div class="image-wrapper animate__animated animate__slideInUp">
        <img src={TwoSecondsImage} alt="Project-3" className="project-image3" />
      {/*2 Seconds Title*/}
          <Typography variant="h5" color="blue-gray" className="two-seconds"> 
           2 Seconds: Online Consignment Store Website Design
          </Typography>

      {/*Card Bottom Section */}
        <div className="bottom-section">
          <div className="left-section">
        <CardFooter className="cardFooter-wrapper">
          <Button className="card-button">Read More</Button>
        </CardFooter>
        </div>

        <div className="project-type-badge">
        <button className="project-type-button">Website Design</button>
        </div> 
        </div>
      </div>

      <div class="image-wrapper animate__animated animate__slideInUp">
        <img src={babelImage} alt="Project-4" className="project-image4" />
      {/*2 Seconds Title*/}
          <Typography variant="h5" color="blue-gray" className="babel"> 
          Babel: Safety-driven, Real-time Location Tracking App For Minorities
          </Typography>

      {/*Card Bottom Section */}
        <div className="bottom-section">
          <div className="left-section">
        <CardFooter className="cardFooter-wrapper">
          <Button className="card-button">Read More</Button>
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