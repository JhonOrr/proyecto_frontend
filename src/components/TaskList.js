import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {GlobalContext} from '../services/Context/GlobalContext';


const TaskList = () => {
    const navigate = useNavigate();
    const {tasks, deleteTask} = useContext(GlobalContext)
    return (
        <div>
            {/* <button onClick={()=>{deleteTask()}}>
                delete all
            </button> */}
            {tasks.map(task =>{
                return(
                    <div key={task.id}>
                        <h2>{task.title}</h2>
                        <h5>{task.id}</h5>
                        <Link to={`/taskform/${task.id}`}>Edit</Link>
                        <button onClick={()=>deleteTask(task.id)}>delete</button>
                    </div>
                )
            })}
            <button onClick={()=>{navigate('/taskform')}}>hola</button>
        </div>
    )
}

export default TaskList