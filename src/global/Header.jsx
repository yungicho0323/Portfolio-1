import { Link } from "react-router";
import "./Header.css";
import React from "react";
import LogoImage from '/public/defined-logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <nav className="flex gap-8 text-lg text-purple-400">
        <Link to="/home" className="hover:text-purple-600">Home</Link>
        <Link to="/work" className="hover:text-purple-600">Work</Link>
        <Link to="/about" className="hover:text-purple-600">About</Link>
        
      </nav>

       <div className="logo">
        {/* Logo Section */}
        <img src= {LogoImage} alt="logo" className="logo-image" />
     </div>
    </header>
  );
};

export default Header;
