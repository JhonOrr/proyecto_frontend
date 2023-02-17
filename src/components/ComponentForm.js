import React, { useState, useContext , useEffect} from 'react';
import { GlobalContext } from '../services/Context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField, Grid,Typography, CardContent, MenuItem, FormControl} from '@mui/material';

const ComponentForm = () => {
    const[componente, setComponente] = useState({
        id: '',
        description: '',
        equipo:''
    });
    const {addComponente, componentes, updateComponente, equipos} = useContext(GlobalContext);
    
    const navigate = useNavigate();
    const params = useParams();
  
    const handleChange = (e) =>{
        setComponente({...componente, [e.target.name]:e.target.value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (componente.id) {
            updateComponente(componente);
        } else {
            addComponente(componente);
        }
        navigate("/componentlist");
    };

    useEffect(() => {
        const taskFound = componentes.find((task) => task.id === params.id);
        if (taskFound) {
          setComponente({
            id: taskFound.id,
            description: taskFound.description,
            equipo: taskFound.equipo,
          });
        }
      }, [params.id, componentes]);

    return (
        <div>
        <div style={{maxWidth:500 , margin:'25px auto', padding:'20px 5px '}}>
            <CardContent>
            <Typography gutterBottom variant='h4'>
                    {componente.id ? 'Editar componente' : 'Crear componente'}
                </Typography>
            <FormControl onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <TextField
                            type='text'
                            name='description'
                            placeholder='description'
                            value={componente.description}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    
                    <Grid xs={12} item>
                        
                        <TextField
                        fullWidth 
                        variant='outlined' 
                        onChange={handleChange} 
                        value={componente.equipo} 
                        select
                        required 
                        label='Seleccione Equipo'
                        >
                            {equipos.map((equipo)=>{
                                return(
                                    <MenuItem value={equipo.description}>{equipo.description}</MenuItem>
                                )
                            })}
                        </TextField>
                    </Grid>
   
                    <Grid xs={12} item>
                        <Button variant='contained' color='primary' fullWidth type='submit'>
                            {componente.id ? "Editar componente" : "Crear componente"}
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>
            </CardContent>
        </div>
        </div>
    )
}

export default ComponentForm;