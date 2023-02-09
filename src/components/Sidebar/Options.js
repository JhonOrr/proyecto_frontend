import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ScienceIcon from '@mui/icons-material/Science';

export const Options = [
    {
        title:"Home",
        icon: <HomeIcon/>,
        link: "/contact"
    },
    {
        title:"Mis Equipos",
        icon: <PrecisionManufacturingIcon/>,
        link: "/login"
    },
    {
        title:"Mis Solicitudes",
        icon: <ScienceIcon/>,
        link: "/home"
    }

]