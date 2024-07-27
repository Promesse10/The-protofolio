import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <motion.img
        src="image/polygon (1) copy.png"
        alt="Polygon"
        className="poly2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      />
      <h2
  
      >
        About Me
      </h2>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img src="image/About-profile.png" className="profile-3" alt="Profile" />
        <div className="about-text">
          <p>
            " I am a dedicated UI/UX design student at the University of Kigali. My skills include Wireframing, prototyping, user research, usability testing, and visual design. I am proficient in tools like Figma, Adobe XD, and Sketch. I excel in teamwork, communication, and project management, making me an effective collaborator in any design project."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
