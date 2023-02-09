import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Map from '../components/map/map';
import '../styles/contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <ContactForm/>
      <Map/>
    </div>
  )
}

export default Contact
