import React, {useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {GlobalContext} from '../services/Context/GlobalContext';
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const EquipList = () => {
    const navigate = useNavigate();
    const {equipos, deleteEquipo} = useContext(GlobalContext);

    const columns = [
        {
            key: "id",
            name: "id",
            fieldName: "id",
            minWidth: 90,
            maxWidth: 200,
            isResizable: true,
        },
        {
            key: "description",
            name: "Descripción",
            fieldName: "description",
            minWidth: 90,
            maxWidth: 200,
            isResizable: true,
        },
        {
            key: "marca",
            name: "Marca",
            fieldName: "marca",
            minWidth: 90,
            maxWidth: 200,
            isResizable: true,
        },
        {
            key: "model",
            name: "Model",
            fieldName: "model",
            minWidth: 90,
            maxWidth: 200,
            isResizable: true,
        },
        {
            key: "edit",
            name: "Edit",
            fieldName: "edit",
            minWidth: 30,
            maxWidth: 200,
            isResizable: true,
        },
        {
            key: "delete",
            name: "Delete",
            fieldName: "delete",
            minWidth: 50,
            maxWidth: 200,
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
            edit: <EditIcon onClick={()=>{navigate(`/Equipform/${equipo.id}`)}}/>,
            delete: <DeleteIcon onClick={()=>deleteEquipo(equipo.id)}/>
            });
        }
    )



    return (
        <div>
            <button onClick={()=>{navigate('/Equipform')}}>hola</button>
            <button onClick={()=>{navigate('/componentform')}}>hola2</button>
            <DetailsList columns={columns} items={items}/>

        </div>
    )
}

export default EquipList;