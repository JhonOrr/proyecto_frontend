import React from 'react';
import { labServices } from './labServices';
import { Card, CardContent, CardMedia, Typography,Grid} from '@mui/material';

const CardServices = () => {
  return (
    <div>
        <Grid container spacing={4} >
        {
                labServices.map((service)=>(
                <Grid item xs={12} sm={6} md={4} >
                    <Card sx={{background:'#f1f1f1',boxShadow:'none'}}>
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
                </Grid>
            ))
        }
        </Grid>
    </div>
)}

export default CardServices;