import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sidebar.css'
import { Options } from './Options';


const Sidebar = () => {
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
      </ul>
      
      
    </div>
  )
}

export default Sidebar;
