import { Typography, Card, Grid, TextField, CardContent, Button} from '@mui/material';
import React from 'react';

const ContactForm = () => {
  return (
    <div>
        <Card style={{maxWidth:500 , margin:'25px auto', padding:'20px 5px '}}>
            <CardContent>
                <Typography gutterBottom variant='h4'>Contact us</Typography>
                <form>

              
                <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                        <TextField label='First Name' placeholder='Enter your first name' variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField label='Last Name' placeholder='Enter your last name' variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField type='email' label='Email ' placeholder='Enter your email' variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField type='number' label='Phone ' placeholder='Enter your phone number' variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField  label='Message' multiline rows={4} placeholder='Type your message' variant='outlined' fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                        <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
                    </Grid>
                </Grid>
                </form> 
            </CardContent>


        </Card>
    </div>
  )
}

export default ContactForm;
