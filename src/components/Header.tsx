// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingTime, setLoadingTime] = useState(1000); // Default loading time
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchLoadingTime = async () => {
      try {
        let speed = '4g'; // Default to 4g if navigator.connection is not available

        if (navigator.connection || navigator.mozConnection || navigator.webkitConnection) {
          const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
          speed = connection.effectiveType || '4g'; // Fallback to 4g if effectiveType is not available
        }

        const response = await fetch(`http://localhost:3000/api/connection-speed?speed=${speed}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLoadingTime(data.loadingTime);
      } catch (error) {
        console.error('Error fetching loading time:', error);
      }
    };

    fetchLoadingTime();

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    // Redirect to home if the path is not found or if it's an unknown path
    const path = window.location.pathname;
    if (!['/', '/about', '/services', '/contact'].includes(path)) {
      navigate('/');
    }
    setActiveNav(path);

    return () => clearTimeout(loadingTimer); // Clean up the timer if component unmounts
  }, [navigate, loadingTime]);

  const handleNavClick = (path: string) => {
    if (path === '/contact') {
      // Scroll to contact section if path is '/contact'
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to other paths
      setActiveNav(path);
      navigate(path);
    }
    setMenuActive(false); // Optionally close the menu on click
  };

  return (
    <>
      {isLoading && (
        <div className="loading-overlay">
          <div className="triangle-loader">
            <div className="triangle"></div>
            <div className="triangle"></div>
          </div>
        </div>
      )}
      {!isLoading && (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <nav className="navbar">
            <div className={`nav-menu ${menuActive ? 'active' : ''}`}>
              <ul className="nav-menu">
                <li className={`nav-item ${activeNav === '/' ? 'active' : ''}`} onClick={() => handleNavClick('/')}>
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className={`nav-item ${activeNav === '/about' ? 'active' : ''}`} onClick={() => handleNavClick('/about')}>
                  <Link to="/about" className="nav-link">About Me</Link>
                </li>
                <li className={`nav-item ${activeNav === '/services' ? 'active' : ''}`} onClick={() => handleNavClick('/services')}>
                  <Link to="/services" className="nav-link">What I Do</Link>
                </li>
                <li className={`nav-item ${activeNav === '/contact' ? 'active' : ''}`}>
                  <a href="#contact" className="nav-link" onClick={() => handleNavClick('/contact')}>Hire me</a>
                </li>
              </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
