import { Link } from "react-router";
import "./Header.css";
import React from "react";


const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <nav className="flex gap-8 text-lg text-purple-400">
        <Link to="/home" className="hover:text-purple-600">HOME</Link>
        <Link to="/work" className="hover:text-purple-600">WORK</Link>
        <Link to="/about" className="hover:text-purple-600">ABOUT</Link>
        
      </nav>

       <div className="logo">
        {/* Logo Section */}
        <p>YUNGI CHO</p>
     </div>
    </header>
  );
};

export default Header;
