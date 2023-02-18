import React, { useState, useContext , useEffect} from 'react';
import { GlobalContext } from '../services/Context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField, Grid,Typography, CardContent} from '@mui/material';

const EquipForm = () => {
    const[equipo, setEquipo] = useState({
        id: '',
        marca: '',
        model: '',
        description: '',
    });
    const {addEquipo, equipos, updateEquipo} = useContext(GlobalContext);
    
    const navigate = useNavigate();
    const params = useParams();
  
    const handleChange = (e) =>{
        setEquipo({...equipo, [e.target.name]:e.target.value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (equipo.id) {
            updateEquipo(equipo);
        } else {
            addEquipo(equipo);
        }
        navigate("/dashboard/equiplist");
    };

    useEffect(() => {
        const taskFound = equipos.find((task) => task.id === params.id);
        if (taskFound) {
          setEquipo({
            id: taskFound.id,
            marca: taskFound.marca,
            model: taskFound.model,
            description: taskFound.description,
          });
        }
      }, [params.id, equipos]);

    return (
        <div>
        <div style={{maxWidth:500 , margin:'25px auto', padding:'20px 5px '}}>
            <CardContent>
            <Typography gutterBottom variant='h4'>
                    {equipo.id ? 'Editar equipo' : 'Crear equipo'}
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <TextField
                            type='text'
                            name='description'
                            placeholder='description'
                            value={equipo.description}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            type='text'
                            name='marca'
                            placeholder='marca'
                            value={equipo.marca}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            type='text'
                            name='model'
                            placeholder='model'
                            value={equipo.model}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <Button variant='contained' color='primary' fullWidth type='submit'>
                            {equipo.id ? "Editar equipo" : "Crear equipo"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
            </CardContent>
        </div>
        </div>
    )
}

export default EquipForm