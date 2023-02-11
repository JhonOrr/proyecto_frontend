import React from 'react';
import history from '../images/oilHistory.jpeg'

const About = () => {
  return (
    <div className='services'>
      <div className='service-hero'>
        <div className='container'>
          <h2>Nosotros</h2>
          <p>Conoce nuestra historia, visión y misión</p>
        </div>
      </div>
      <div className='about'>
        <div className='historia'>
          <div className='text'>
            <h3>Nuestra historia</h3>
            <p>
            La empresa Smartlab fue fundada por un grupo de expertos en ingeniería mecánica y química que querían ayudar a las empresas a mejorar la eficiencia y la seguridad de sus equipos. Se dieron cuenta de que muchas empresas no estaban haciendo un seguimiento adecuado de la salud de sus lubricantes, refrigerantes y grasas, lo que podría resultar en desgaste prematuro y fallas en los equipos.
            </p>
          </div>
          <div>
            <figure>
              <img src={history} alt='history-img'/>
            </figure>
          </div>
        </div>
       
        
       
        <h3>Mision</h3>
        <p>
        La misión de Smartlab es ayudar a las empresas a maximizar la eficiencia y la seguridad de sus equipos mecánicos, brindándoles información precisa sobre la salud de sus lubricantes, refrigerantes y grasas, y proporcionándoles soluciones de mantenimiento preventivo que les permitan ahorrar tiempo y dinero a largo plazo.
        </p>
        <h3>Vision</h3>
        <p>
        La visión de Smartlab es ser la empresa líder en servicios de análisis de lubricantes, refrigerantes y grasas, brindando soluciones de mantenimiento predictivo a las empresas de todo el mundo.
        </p>
      </div>

     
    </div>
  )
}

export default About