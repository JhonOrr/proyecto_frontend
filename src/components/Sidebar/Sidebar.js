// import React, {useState} from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../../styles/sidebar.css'
import { Options } from './Options';
import { UserAuth } from '../../services/auth/AuthContext';


const Sidebar = () => {

  const{user,logout}=UserAuth();
  const navigate = useNavigate();

  const handleLogout= async ()=>{
    try{
      await logout();
      navigate('/');
      console.log('you are logged out')
    }catch(e){
      console.log(e.message)
    }
  }
  
 

  return (
    <div className='sidebar'>
      <ul className='sidebarList'>
        {Options.map((val,key)=>{
          return(
            <Link to={val.link} style={{textDecoration:'none'}}>
            <li key={key}
              className='row'
            >
              <div className='icon'>{val.icon}</div>
              <div className='title'>{val.title}</div>
            </li>
            </Link>
            
          )
        })}
        <li className='row'>
          <div className='title'>{user.email?.split('@')[0]}</div>
        </li>
        <li className='row'>
          <button onClick={handleLogout} >Logout</button>
        </li>
        
      </ul>
      
      
    </div>
  )
}

export default Sidebar;
