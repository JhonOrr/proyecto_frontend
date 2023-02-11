import React from 'react'
import { useParams } from 'react-router-dom'
// import {useState, useEffect} from 'react'
import { labServices } from './labServices';


const ServiceDetail = () => {

    const {title} = useParams();


  return (
    <div>
        <h2>{title}</h2>
        <h3>Importancia</h3>
        <p>
            {
                labServices.find((service) => (
                    service.title === title
                )).importance
            }
        </p>
       
 
    </div>
  )
}

export default ServiceDetail