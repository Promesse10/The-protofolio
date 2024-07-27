import React, { useState, useEffect, useRef } from 'react';
import './Work.css';

const Work: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHover, setIsHover] = useState(false); // To track hover state
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store interval ID

  const workCards = [
    {
      link: "https://www.figma.com/proto/tjVq7WgpbsHqUwMXLiKMDv/KIGALI-Events?node-id=247-81&scaling=scale-down-width&content-scaling=fixed&t=iNpOpj9xNZHhv9jc-1",
      imgSrc: "image/project-1.png",
      alt: "Kigali Event Booking"
    },
    {
      link: "https://www.figma.com/proto/6qu2dmEcTaToGOLowCVyX5/Travel-%26-Tour-Booking-Website-(Community)?node-id=0-622&starting-point-node-id=0%3A622&t=nJ4XsoDdXgdWl4x5-1",
      imgSrc: "image/project-2.png",
      alt: "Travel-Web"
    },
    {
      link: "https://www.figma.com/proto/mkgBFn0K6nPLdRQsB6VHcG/Untitled?node-id=1-2&t=QfaTGu4Qz9XNO1md-1",
      imgSrc: "image/project-3.png",
      alt: "Electric Car Station"
    },
    {
      link: "https://example.com/project-4",
      imgSrc: "image/project-4.png",
      alt: "E-commerce Web"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + workCards.length) % workCards.length);
  };

  useEffect(() => {
    // Auto-slide functionality
    if (!isHover) {
      intervalRef.current = setInterval(handleNext, 3000); // Adjust interval as needed
    }

    // Clean up the interval on component unmount or when hover state changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHover]); // Effect depends on hover state

  return (
    <section className="work">
      <h2><span>My Recent Work</span></h2>
      
      <div 
        className="work-cards"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <button className="nav-button prev" onClick={handlePrev}>‹</button>
        <div className="work-card">
          <a href={workCards[currentIndex].link} target="_blank" rel="noopener noreferrer">
            <img src={workCards[currentIndex].imgSrc} alt={workCards[currentIndex].alt} />
            <div className="overlay">
              <a href={workCards[currentIndex].link} target="_blank" rel="noopener noreferrer" className="button">
                click to view
              </a>
            </div>
          </a>
        </div>
        <button className="nav-button next" onClick={handleNext}>›</button>
      </div>
    </section>
  );
};

export default Work;
