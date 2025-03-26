import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Let’s Connect.</h2>
        <div className="footer-links">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Resume</a>
        </div>
        <div className="social-links">
          <a href="mailto:t0908003@gmail.com" className="social-link">Email
          <span className="arrow">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/yungi-cho-717439234/" target="_blank" rel="LinkedIn" className="social-link">LinkedIn
          <span className="arrow">↗</span></a>
          <a href="https://www.instagram.com/yungi_0323/" target="_blank" rel="Instagram" className="social-link">Instagram
          <span className="arrow">↗</span></a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>DESIGNED & CODED BY YUNGI CHO</p>
      </div>
    </footer>
  );
};

export default Footer;
