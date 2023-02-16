import React, { useState, useContext , useEffect} from 'react';
import { GlobalContext } from '../services/Context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
    const[task, setTask] = useState({
        id: '',
        title: '',
        description: '',
    });
    const {addTask, tasks, updateTask} = useContext(GlobalContext);
    
    const navigate = useNavigate();
    const params = useParams();
  
    const handleChange = (e) =>{
        setTask({...task, [e.target.name]:e.target.value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (task.id) {
            updateTask(task);
        } else {
            addTask(task);
        }
        navigate("/tasklist");
    };

    useEffect(() => {
        const taskFound = tasks.find((task) => task.id === params.id);
        if (taskFound) {
          setTask({
            id: taskFound.id,
            title: taskFound.title,
            description: taskFound.description,
          });
        }
      }, [params.id, tasks]);

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <h2>
                    {task.id ? 'Editar tarea' : 'Crear tarea'}
                </h2>
                <input
                    type='text'
                    name='title'
                    placeholder='write a title'
                    value={task.title}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='description'
                    placeholder='write a description'
                    value={task.description}
                    onChange={handleChange}
                />
                <button> {task.id ? "Update Task" : "Create Task"}</button>
            </form>

        </div>
    )
}

export default TaskForm