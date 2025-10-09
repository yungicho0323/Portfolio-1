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
  <Link to="/home" className="flex items-center gap-8 hover:text-[#8a3dc7] transition-colors">
    <img
      src="/logo.png"
      alt="Yungi Cho Logo"
      className="h-12 w-12 rounded-full object-cover"
    />
    <span className="text-lg font-medium tracking-wide">YUNGI CHO</span>
  </Link>
</div>

      {/* Desktop Nav - keep as is */}
      <nav className="main-nav">
        <Link to="/work" className="hover:text-purple-600">WORKS</Link>
        <Link to="/about" className="hover:text-purple-600">ABOUT</Link>
        {/* Use <a> for static PDF in /public */}
        <a
          href="/Resume.pdf" /* or use resumeHref */
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600"
          aria-label="Open Resume PDF in a new tab"
        >
          RESUME
        </a>
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
          <Link to="/work" onClick={toggleSidebar}>WORKS</Link>
          <Link to="/about" onClick={toggleSidebar}>ABOUT</Link>
           <a
            href="/Resume.pdf" /* or use resumeHref */
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleSidebar}
            aria-label="Open Resume PDF in a new tab"
          >
            RESUME
          </a>
        </nav>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

    </header>
  );
};

export default Header;

