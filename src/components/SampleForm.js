import React, {useContext} from 'react';
import { CardContent, Typography, Grid, TextField, Button, MenuItem} from '@mui/material';
import { GlobalContext } from '../services/Context/GlobalContext';


const SampleForm = () => {

    const {equipos, componentes} = useContext(GlobalContext);

  return (
    <div className='dashboard-main'>
        <div style={{maxWidth:500 , margin:'25px auto', padding:'20px 5px '}}>
            <CardContent>
            <Typography gutterBottom variant='h4'>
                Registrar Muestra
            </Typography>
            <form>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <TextField
                            type=''
                            name='description'
                            placeholder='description'
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            type='text'
                            name='marca'
                            placeholder='marca'
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            type='text'
                            name='model'
                            placeholder='model'
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid xs={12} item>
                        
                        <TextField
                            fullWidth 
                            variant='outlined' 
                            select
                            required 
                            label='Seleccione Componente'
                            name='equipo'
                        >
                            {componentes.map((componente)=>{
                                return(
                                    <MenuItem value={componente.description}>{componente.description}</MenuItem>
                                )
                            })}
                        </TextField>
                    </Grid>


                    <Grid xs={12} item>
                        
                        <TextField
                            fullWidth 
                            variant='outlined' 
                            select
                            required 
                            label='Seleccione Equipo'
                            name='equipo'
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
                            Registrar Muestra
                        </Button>
                    </Grid>
                </Grid>
            </form>
            </CardContent>
        </div>
    </div>
  )
}

export default SampleForm