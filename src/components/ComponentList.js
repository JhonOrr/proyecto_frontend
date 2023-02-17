import React, {useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import {GlobalContext} from '../services/Context/GlobalContext';
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ComponentList = () => {
    const navigate = useNavigate();
    const {componentes, deleteComponente} = useContext(GlobalContext);

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
            key: "equipo",
            name: "Equipo",
            fieldName: "equipo",
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
    componentes.forEach((componente)=>{
        items.push({
            id: componente.id,
            description: componente.description,
            equipo: componente.equipo,
            edit: <EditIcon onClick={()=>{navigate(`/componentform/${componente.id}`)}}/>,
            delete: <DeleteIcon onClick={()=>deleteComponente(componente.id)}/>
            });
        }
    )



    return (
        <div>
            <button onClick={()=>{navigate('/componentform')}}>hola</button>
            <DetailsList columns={columns} items={items}/>

        </div>
    )
}

export default ComponentList;