import React, {useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {GlobalContext} from '../services/Context/GlobalContext';
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Typography, Button ,Grid} from '@mui/material';

const SampleList = () => {
    const navigate = useNavigate();
    const {muestras} = useContext(GlobalContext);

    const columns = [
        {
            key: "id",
            name: "id",
            fieldName: "id",
            minWidth: 60,
            maxWidth: 60,
            isResizable: true,
        },
        {
            key: "componente",
            name: "Componente",
            fieldName: "componente",
            minWidth: 90,
            maxWidth: 150,
            isResizable: true,
        },
        {
            key: "equipo",
            name: "Equipo",
            fieldName: "equipo",
            minWidth: 90,
            maxWidth: 150,
            isResizable: true,
        },
        {
            key: "lubricante",
            name: "Lubricante",
            fieldName: "lubricante",
            minWidth: 90,
            maxWidth: 150,
            isResizable: true,
        },
        {
            key: "estado",
            name: "Estado",
            fieldName: "estado",
            minWidth: 30,
            maxWidth: 120   ,
            isResizable: true,
        },
        {
            key: "edit",
            name: "Edit",
            fieldName: "edit",
            minWidth: 30,
            maxWidth: 50,
            isResizable: true,
        },
        {
            key: "delete",
            name: "Delete",
            fieldName: "delete",
            minWidth: 30,
            maxWidth: 50,
            isResizable: true,
        }

    ]

    let items = [];
    muestras.forEach((muestra)=>{
        items.push({
            id: muestra.id,
            description: muestra.description,
            equipo: muestra.equipo,
            componente : muestra.componente,
            lubricante : muestra.lubricante,
            estado: muestra.estado,
            edit: <EditIcon/>,
            delete: <DeleteIcon/>
            });
        }
    )



    return (
        <div className='dashboard-main'>
            <Grid  mb={3} >
                <Typography mb={3}  variant='h4'>Mis Muestras</Typography>
                <Button variant='contained' onClick={()=>{navigate('/dashboard/sampleform')}}>Nueva Muestra</Button>
            </Grid>
            <Grid  mb={3} >
                <DetailsList columns={columns} items={items}/>
            </Grid>

        </div>
    )
}

export default SampleList;