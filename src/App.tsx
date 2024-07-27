import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Create a corresponding CSS file

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Work />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
