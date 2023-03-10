import { createContext, useReducer , useState} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    equipos:[
        {
            id: 'E1',
            description: 'Equipo 1',
            marca: 'marca 1',
            model: 'modelo 1'        
        },
        {
            id: 'E2',
            description: 'Equipo 2',
            marca: 'marca 2',
            model: 'modelo 2'
        }
    ],
    componentes:[
        {
            id:'C1',
            description:'componente 1',
            equipo: 'Equipo 1'
        },
        {
            id:'C2',
            description:'componente 2',
            equipo: 'Equipo 2'  
        }
    ],
    muestras:[
        {
            id: 'M1',
            componente: 'Componente 1',
            equipo: 'Equipo 1',
            lubricante: 'lubricante 1',
            estado: 'Finalizada'
        },
        {
            id: 'M2',
            componente: 'Componente 2',
            equipo: 'Equipo 2',
            lubricante: 'lubricante 2',
            estado: 'En Proceso'
        },
        {
            id: 'M3',
            componente: 'Componente 3',
            equipo: 'Equipo 3',
            lubricante: 'lubricante 3',
            estado: 'Recibida'
        },
        {
            id: 'M4',
            componente: 'Componente 4',
            equipo: 'Equipo 4',
            lubricante: 'lubricante 4',
            estado: 'Creada'
        }
    ]
}

export const GlobalContext = createContext(initialState);



export const ContextProvider =({children})=>{
    const[ide, setIde] = useState(3);
    const[idc,setIdc] = useState(3)

    const[state,dispatch] = useReducer(AppReducer, initialState);

    const addEquipo=(equipo)=>{
        setIde(ide+1)
        dispatch({type:'ADD_EQUIPO' , payload: {...equipo,id: 'E'+ide.toString()}});
    }

    function updateEquipo(updatedEquipo) {
        dispatch({
          type: "UPDATE_EQUIPO",
          payload: updatedEquipo,
        });
    }
    const deleteEquipo = (id) =>{
        dispatch({type: 'DELETE_EQUIPO', payload: id})
    }
    // funciones para componente

    const deleteComponente = (id) =>{
        dispatch({type: 'DELETE_COMPONENTE', payload: id})
    }

    const addComponente=(componente)=>{
        setIdc(idc+1)
        dispatch({type:'ADD_COMPONENTE' , payload: {...componente,id: 'C'+idc.toString()}});
    }

    function updateComponente(updatedComponente) {
        dispatch({
          type: "UPDATE_COMPONENTE",
          payload: updatedComponente,
        });
    }
    
 

    return(
        <GlobalContext.Provider value={
            {
            ...state, 
            addEquipo,
            deleteEquipo,
            updateEquipo,
            deleteComponente,
            addComponente,
            updateComponente,
            }}>
            {children}
        </GlobalContext.Provider> 
    );
};