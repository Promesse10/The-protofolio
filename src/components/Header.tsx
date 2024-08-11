import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './Header.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingTime, setLoadingTime] = useState(1000);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(prev => !prev);
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
        const connection = navigator.connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        const speed = connection?.effectiveType || '4g';

        const response = await fetch(`http://localhost:3000/api/connection-speed?speed=${speed}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLoadingTime(data.loadingTime || 1000);
      } catch (error) {
        console.error('Error fetching loading time:', error);
      }
    };

    fetchLoadingTime();

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    const path = window.location.pathname;
    if (!['/', '/about', '/services', '/contact'].includes(path)) {
      navigate('/');
    }
    setActiveNav(path);

    return () => clearTimeout(loadingTimer);
  }, [navigate, loadingTime]);

  const handleNavClick = (path: string) => {
    if (path === '/contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveNav(path);
      navigate(path);
    }
    setMenuActive(false);
  };

  const handleHireMeClick = () => {
    setShowPopup(true);
    // Set a timer to automatically close the popup after 10 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 10000); // Adjust time as needed
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {isLoading ? (
        <div className="loading-overlay">
          <div className="triangle-loader">
            <div className="triangle"></div>
            <div className="triangle"></div>
          </div>
        </div>
      ) : (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <nav className="navbar">
            <div className="menu-icon" onClick={toggleMenu}>
              {menuActive ? <AiOutlineClose size={24} className="close-icon" /> : <AiOutlineMenu size={24} className="menu-toggle" />}
            </div>
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
                  <a href="#contact" className="nav-link" onClick={handleHireMeClick}>Hire me</a>
                </li>
              </ul>
            </div>
          </nav>
          {showPopup && (
            <div className="popup-overlay" onClick={closePopup}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h2>Scan Me</h2>
                <p>To get My contacts and address</p>
                <QRCode value="https://rb.gy/l0l2v3" className="qr-code" size={156} />
              </div>
            </div>
          )}
        </header>
      )}
    </>
  );
};

export default Header;
