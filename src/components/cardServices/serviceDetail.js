import React from 'react'
import { useParams } from 'react-router-dom'
// import {useState, useEffect} from 'react'
import { labServices } from './labServices';
import '../../styles/serviceDetail.css'


const ServiceDetail = () => {

    const {title} = useParams();
    const service = labServices.find((service) => (
        service.title === title
    ))
  return (
    <div className='serviceDetail'>
        <div className='serviceDetailInfo'>
            <h2>{title}</h2>
            <h3>Importancia</h3>
            <p>{service.importance} </p>
        </div>
        <div className='serviceDetailImage'>
            <img src={service.image} alt='service'/>
        </div>
    </div>
  )
}

export default ServiceDetail