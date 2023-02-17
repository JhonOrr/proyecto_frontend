import { createContext, useReducer , useState} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    equipos:[
        {
            id: 'E1',
            description: 'some description1',
            marca: 'marca 1',
            model: 'model1'        
        },
        {
            id: 'E2',
            description: 'some description2',
            marca: 'marca 2',
            model: 'model2'
        }
    ],
    componentes:[
        {
            id:'C1',
            description:'componente1',
            equipo: 'equipo1'
        },
        {
            id:'C2',
            description:'componente2',
            equipo: 'equipo2'
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