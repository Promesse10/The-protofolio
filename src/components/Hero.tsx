import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <motion.img
          src="image/polygon (1).png"
          alt="Polygon"
          className='poly2'
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
      <div className="hero2-image">
        <motion.img
          src="image/poly2.png"
          alt="Polygon2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
      <div className='logo'>
        <motion.img
          src="image/logo.png"
          alt="Logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          Hi I'm <span>Promesse IRAKOZE</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <h3>UI/UX Designer
            </h3>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          My UI/UX design skills are exceptional. I create innovative, <br />intuitive, and visually appealing interfaces that enhance <br /> user experience.
        </motion.p>
        <motion.button
          className="btn-resume"
          onClick={() => window.open('/Promesse IRAKOZE.pdf', '_blank')}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          My Resume
        </motion.button>
      </div>
      <div className='hero-profile'>
        <img
          src="image/ip.png"
          alt="Profile"
         
        />
      </div>
    </section>
  );
};

export default Hero;
