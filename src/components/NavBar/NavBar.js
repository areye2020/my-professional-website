import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className={`header ${isMobileNavOpen ? 'active' : ''}`}>
      <div className="container">
        <nav>
          <div className="nav-desktop">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/journey">Journey</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={`nav-mobile ${isMobileNavOpen ? 'open' : ''}`}>
            <span
              className={`close home-btn ${isMobileNavOpen ? 'open' : ''}`}
              onClick={toggleMobileNav}
            >
              &times;
            </span>
            <ul className="nav-links-mobile">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/journey">Journey</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <span
            className={`open ${isMobileNavOpen ? 'open' : ''} home-btn`}
            onClick={toggleMobileNav}
          >
            &#9776;
          </span>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
