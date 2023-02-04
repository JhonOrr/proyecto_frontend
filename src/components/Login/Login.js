import React from 'react';
import {Grid, Paper, Avatar, TextField, FormControlLabel, Typography, Button, Switch,Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



const Login = () => {

  const paperStyle={padding: 20, height:'70vh', width:280, margin:' 25px auto'}
  const avatarStyle ={backgroundColor: "#1bbd7e"}
  const buttonStyle = {margin:'8px 0'}


  return (
    <div>
      <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Enter Username' variant='standard' fullWidth required/>
        <TextField label='Password' placeholder='Enter Password' variant='standard' type='password' fullWidth required/>
        <FormControlLabel
          control={<Switch/>}
          label = 'Remember me'
        />
        <Button type='submit' color='primary' variant='contained' fullWidth style={buttonStyle} >Sign In</Button>
        <Typography>
          <Link>Forgot password?</Link>
        </Typography>
        <Typography>
          Do you have an account?
          <Link>Sign up</Link>
        </Typography>

      </Paper>
    </Grid>
    </div>
    
  )
}

export default Login;
