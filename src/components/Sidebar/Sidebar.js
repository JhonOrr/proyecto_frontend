// import React, {useState} from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../../styles/sidebar.css'
import { Options } from './Options';
import { UserAuth } from '../../services/auth/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {

  const{user,logout}=UserAuth();
  const navigate = useNavigate();

  // const handleLogout= async ()=>{
  //   try{
  //     await logout();
  //     navigate('/');
  //     console.log('you are logged out')
  //   }catch(e){
  //     console.log(e.message)
  //   }
  // }

  const handleLogout=()=>{
    try{
      logout();
      navigate('/');
      console.log('you are logged out')
    }catch(e){
      console.log(e.message)
    }
  }







  return (
    <div className='sidebar'>
      <ul className='sidebarList' style={{display:'flex' ,flexDirection:'column', height:'100%', justifyContent:'space-between'}}>
        <div>
          <li className='row'>
            <div className='icon'><AccountCircleIcon/></div>
            <div className='title'>{user.email?.split('@')[0]}</div>
          </li>
        </div>
        <div>
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
        </div>
        
        <div>
          <li className='row'>
            <div className='icon'><ExitToAppIcon/></div>
            <div className='title' onClick={handleLogout}>Cerrar Sesión</div>
          </li>
        </div>

      </ul>
      
      
    </div>
  )
}

export default Sidebar;
