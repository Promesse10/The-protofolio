import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="services">
      <h2>What I Do</h2>
      <div className="service-cards">
      <div><img src="image/card-1.png" className="card-1" /></div>
      <div><img src="image/card-2.png" className="card-2" /></div>
      <div><img src="image/card-3.png" className='car-3' /></div>

      </div>
    </section>
  );
};

export default Services;
