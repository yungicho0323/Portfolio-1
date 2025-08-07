import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  

  return (
    <header className="custom-header">
      {/* Logo */}
      <div className="logo">
        <Link to="/home" className="hover:text-purple-600">YUNGI CHO</Link>
      </div>

      {/* Desktop Nav - keep as is */}
      <nav className="main-nav">
        <Link to="/work" className="hover:text-purple-600">WORKS</Link>
        <Link to="/about" className="hover:text-purple-600">ABOUT</Link>
      </nav>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Sidebar (mobile only) */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* <button className="close-btn" onClick={toggleSidebar}>&times;</button> */}
        <nav>
          <Link to="/work" onClick={toggleSidebar}>UX/UI</Link>
          <Link to="/about" onClick={toggleSidebar}>ABOUT</Link>
        </nav>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

    </header>
  );
};

export default Header;

