import { createContext, useReducer , useState} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    tasks:[
        {
            id: '1',
            title: 'title one',
            description: 'some description',
            done: false
        },
        {
            id: '2',
            title: 'title two',
            description: 'some description',
            done: false
        }
    ],
}



export const GlobalContext = createContext(initialState);



export const ContextProvider =({children})=>{
    const[ide, setIde] = useState(3)

    const[state,dispatch] = useReducer(AppReducer, initialState);

    const addTask=(task)=>{
        setIde(ide+1)
        dispatch({type:'ADD_TASK' , payload: {...task,id: ide.toString()}});
    }

    function updateTask(updatedTask) {
        dispatch({
          type: "UPDATE_TASK",
          payload: updatedTask,
        });
    }
    
    const deleteTask = (id) =>{
        dispatch({type: 'DELETE_TASK', payload: id})
    }

    return(
        <GlobalContext.Provider value={{...state, addTask, deleteTask,updateTask}}>
            {children}
        </GlobalContext.Provider> 
    );
};