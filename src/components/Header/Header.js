import React from 'react';
import { AppBar , Typography, Toolbar, Tabs, Tab, useMediaQuery,useTheme } from '@mui/material';
import { useState } from 'react';
import DrawerComp from '../DrawerComp/DrawerComp';
import { Link } from 'react-router-dom';
import { Options } from '../Sidebar/Options';


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
                                <Typography>LOGO</Typography>
                                <DrawerComp/>
                            </>
                        ) : (
                            <>
                                <Typography>LOGO</Typography>
                                <Tabs sx={{marginLeft:'auto'}} textColor='inherit' value={value} 
                                indicatorColor="secondary" onChange={(e,value)=>{setValue(value)}}>
                                  
                                    <Tab label='Home'/>
                                    <Tab label='About us'/>
                                    <Tab label='Services'/>
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