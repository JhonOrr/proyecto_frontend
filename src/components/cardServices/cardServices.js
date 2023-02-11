import React from 'react';
import { labServices } from './labServices';
import { Card, CardContent, CardMedia,Grid} from '@mui/material';
import { Link } from 'react-router-dom';

const CardServices = () => {
  return (
    <div>
        <Grid container spacing={4} >
        {
                labServices.map((service)=>(
                <Grid item xs={12} sm={6} md={4} >
                    <Link to={`/services/service/${service.title}`}>
                    
                    <Card sx={{background:'#f1f1f1',boxShadow:'none',cursor:'pointer'}}>
                        <CardContent sx={{padding:'0'}}>
                            <CardMedia
                                md={4}
                                component="img"                                
                                image={service.image}
                                alt={service.title}
                        />
                        <div className='card-title'>
                            <h4>{service.title}</h4>
                        </div>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>
            ))
        }
        </Grid>
    </div>
)}

export default CardServices;