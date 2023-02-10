import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, useMediaQuery,useTheme } from '@mui/material';
import { useState } from 'react';
import DrawerComp from '../DrawerComp/DrawerComp';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';


const Header = ()=>{

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const[value, setValue] = useState([]);
    return(
        <div >
            <AppBar sx={{background:'#154a7d'}} position="static">
            <Toolbar sx={{display:'flex' ,justifyContent:'space-between'}}>

                    {
                        isMatch ? (
                            <>
                                <Link to='/'> <img src={logo} alt='logo' height='45px'/></Link>
                                <DrawerComp/>
                            </>
                        
                        ) : (
                            <>
                                <Link to='/'> <img src={logo} alt='logo' height='45px'/></Link>
                               
                                <Tabs sx={{marginLeft:'auto'}} textColor='inherit' value={value} 
                                indicatorColor="secondary" onChange={(e,value)=>{setValue(value)}}>
                                  
                                    <Tab label='Home' component={Link} to='/'/>
                                    <Tab label='About us' component={Link} to='about'/>
                                    <Tab label='Services' component={Link} to='services'/>
                                    <Tab label='Contact us' component={Link} to='/contact'/>                            
                                    <Tab label='Login' component={Link} to='/login'/>
                                </Tabs>
                            </>
               
                        )
                    }
                
            </Toolbar>
            
        </AppBar>
        </div>
        
    )
}

export default Header;