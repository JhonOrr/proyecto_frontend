import React from 'react';
import { useState } from 'react';
import { Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {

  const [open, setOpen] = useState(false);
  return (
    <div>
      <Drawer anchor="left" open={open} onClose={()=>setOpen(false)}>
        <List>
            <ListItem>
                <ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                  <ListItemText>About us</ListItemText>
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                  <ListItemText>Services</ListItemText>
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                  <ListItemText>Contact us</ListItemText>
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                  <ListItemText>Login</ListItemText>
                </ListItemIcon>
            </ListItem>
        </List>
      </Drawer>
      <IconButton 
        sx={{color:'#FFF', marginLeft:'auto'}}
        onClick={(()=>setOpen(!open))}>
        <MenuIcon color='white'/>
      </IconButton>
    </div>
  )
}

export default DrawerComp;
