import React, {useState} from 'react';
import {Grid, Paper, TextField, FormControlLabel, Typography, Button, Switch,Link} from '@mui/material';
import backgroundImage from '../../images/background-login.png'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../services/auth/AuthContext';




const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {signIn} = UserAuth();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    setError('')
    try{
      await signIn(email, password)
      navigate('/dashboard')
    } catch(e){
      setError(e.message);
      console.log(e.message);
    }
  };

  const goBack =()=>{navigate('/')} ;

  const paperStyle={padding: '40px 20px', height:'auto', width:280, margin:' 25px auto', }
  const buttonStyle = {margin:'10px 0'}
  const containerStyle = {height:'100vh', display:'flex', alignItems:'center',
  justifyContent:'center', backgroundImage:`url(${backgroundImage})`, backgroundSize:'cover'}
  const inputStyle = {margin:'10px auto'}


  return (
    <div style={containerStyle}>
      <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Typography variant='h5' sx={{color:'#036bb0'}}>INICIAR SESIÓN</Typography>
        </Grid>
        <TextField
          label='Username' 
          placeholder='Enter Username'
          variant='standard'
          style={inputStyle} 
          fullWidth
          required
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <TextField 
          label='Password' 
          placeholder='Enter Password' 
          variant='standard' 
          style={inputStyle} 
          type='password' 
          fullWidth 
          required
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <FormControlLabel
          control={<Switch/>}
          label = 'Remember me'
        />
        <Button
          type='submit'
          color='primary'
          variant='contained'
          fullWidth
          style={buttonStyle}
          onClick={handleSubmit}
        >LOGIN</Button>
        <Button  color='primary' variant='contained' fullWidth style={buttonStyle} onClick={goBack}>BACK</Button>  
        <Typography>
          <Link>Forgot password?</Link>
        </Typography>
     



      </Paper>
    </Grid>
    </div>
    
  )
}

export default Login;
