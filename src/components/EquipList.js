import React, {useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {GlobalContext} from '../services/Context/GlobalContext';
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button ,Typography, Grid} from '@mui/material';
import '../styles/dashboard.css';

const EquipList = () => {
    const navigate = useNavigate();
    const {equipos, deleteEquipo} = useContext(GlobalContext);

    const columns = [
        {
            key: "id",
            name: "id",
            fieldName: "id",
            minWidth: 30,
            maxWidth: 50,
            isResizable: true,
        },
        {
            key: "description",
            name: "Descripción",
            fieldName: "description",
            minWidth: 100,
            maxWidth: 200,
            isResizable: true,
        },
        {
            key: "marca",
            name: "Marca",
            fieldName: "marca",
            minWidth: 100,
            maxWidth: 150,
            isResizable: true,
        },
        {
            key: "model",
            name: "Model",
            fieldName: "model",
            minWidth: 100,
            maxWidth: 150,
            isResizable: true,
        },
        {
            key: "edit",
            name: "Edit",
            fieldName: "edit",
            minWidth: 50,
            maxWidth: 50,
            isResizable: true,
        },
        {
            key: "delete",
            name: "Delete",
            fieldName: "delete",
            minWidth: 50,
            maxWidth: 50,
            isResizable: true,
        }

    ]

    let items = [];
    equipos.forEach((equipo)=>{
        items.push({
            id: equipo.id,
            description: equipo.description,
            marca: equipo.marca,
            model: equipo.model,
            edit: <EditIcon onClick={()=>{navigate(`/dashboard/Equipform/${equipo.id}`)}}/>,
            delete: <DeleteIcon onClick={()=>deleteEquipo(equipo.id)}/>
            });
        }
    )

    return (
        <div className='equip-list'>
            <Grid mb={3}>
                <Typography mb={3}  variant='h4'>Mis Equipos</Typography>
                <Button
                onClick={()=>{navigate('/dashboard/Equipform')}}
                variant='contained'
                className='equip-list'
                >
                Nuevo Equipo
                </Button>
                {/* <Button onClick={()=>{navigate('/componentform')}}>hola2</Button> */}
            </Grid>
            
            <Grid>
                <DetailsList columns={columns} items={items}/>
            </Grid>
        </div>
    )
}

export default EquipList;