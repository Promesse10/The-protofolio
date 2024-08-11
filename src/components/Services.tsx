import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="services">
      <h2>What I Do</h2>
      <div className="service-cards">
        <div className="card">
          <img src="image/card-1.png" alt="Service 1" />
        </div>
        <div className="card">
          <img src="image/card-2.png" alt="Service 2" />
        </div>
        <div className="card">
          <img src="image/card-3.png" alt="Service 3" />
        </div>
      </div>
    </section>
  );
};

export default Services;
