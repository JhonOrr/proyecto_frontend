import { Typography, Button,Stack, Grid } from '@mui/material';
import React from 'react';
import logo from '../images/logo.png'


const Welcome = () => {
  return (
    <div className='dashboard-welcome'>
        <div>
          <Stack spacing={6}>
            <Grid item>
              <img src={logo} alt='logo'/>
            </Grid>
            <Grid item >    
              <Typography variant='h3'>Bienvenido a la plataforma Smartlab</Typography>
              <Typography variant='subtitle'>Líderes en en análisis de aceites</Typography>
            </Grid>
            <Grid item>
                <Button variant='contained'>Get Started</Button>
            </Grid>
          </Stack>
          
        </div>

    </div>
  )
}

export default Welcome;