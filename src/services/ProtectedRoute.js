import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './auth/AuthContext';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import '../styles/dashboard.css'

const ProtectedRoute = () => {
    
    const {user} = UserAuth();
    if(!user){
        return <Navigate to='/login'/>
    }
    return(
        <div style={{display:'flex'}}>
        <Sidebar/>
        <div className='dashboard-content'>
            <Outlet />
        </div>
        </div>
    );
}

export default ProtectedRoute;