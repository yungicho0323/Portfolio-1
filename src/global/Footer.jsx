import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Collab over coffee?☕
        </h2>
        <div className="footer-links">
          <a href="/Resume.pdf" target="_blank" rel="Resume" className="social-link">Resume
          <span className="arrow">↗</span></a>
          <a href="mailto:yungicho8@gmail.com" className="social-link">Email
          <span className="arrow">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/yungi-cho/" target="_blank" rel="LinkedIn" className="social-link">LinkedIn
          <span className="arrow">↗</span></a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2025 YUNGI CHO <br/>Designed in Figma &  Developed with ReactJS.</p>
      </div>
    </footer>
  );
};

export default Footer;
