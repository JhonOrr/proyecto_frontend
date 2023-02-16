import React from 'react'
import { useParams } from 'react-router-dom'
// import {useState, useEffect} from 'react'
import { labServices } from './labServices';
import '../../styles/serviceDetail.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ServiceDetail = () => {

    const {title} = useParams();
    const service = labServices.find((service) => (
        service.title === title
    ))

    const navigate = useNavigate();
    const Return =()=>{
        navigate('/services')
    }

  return (
    <div >
        <div className='back-button'>
            <Button 
            variant='contained'
            onClick = {Return}
            >Back</Button>
        </div>
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
        
    </div>
  )
}

export default ServiceDetail