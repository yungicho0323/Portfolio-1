import { Card, CardFooter, Typography } from "@material-tailwind/react";
import './Card.css';
import "animate.css";
import FurryTaleImage from "../assets/images/FurryTales-laptop.png";
import ZynergyImage from "../assets/images/iphone-16-mockup.png";
import { Link } from 'react-router-dom';

export function CardComponent() {
  return (
    <div className="card-container">
      
 {/* Zynergy Card */}
      <Link to="/zynergy" className="card-link" aria-label="Zynergy case study">
        <div className="image-wrapper animate__animated animate__slideInUp">
          <img src={ZynergyImage} alt="Zynergy project cover" className="project-image1" />

          {/* new text block */}
          <div className="project-text-block">
            <span className="project-name">Zynergy</span>
            <h3 className="project-tagline">Empowering teams through gamified wellness.</h3>
          </div>

          <div className="bottom-section">
            <div className="right-section">
              <CardFooter className="cardFooter-wrapper">
                <span className="card-button">Learn More</span>
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
                <span className="project-name">FurryTales</span>
                <h3 className="project-tagline">Redesigning a local pet brand for joyful, seamless shopping.</h3>
              </div>
    
              <div className="bottom-section">
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