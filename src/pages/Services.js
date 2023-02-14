import React from 'react';
import CardServices from '../components/cardServices/cardServices';
import '../styles/services.css';
import ServiceHero from '../components/cardServices/serviceHero';

const Services = () => {
  return (
    <div className='services'>
      <ServiceHero/>
      <CardServices/>
    </div>

  )
}

export default Services