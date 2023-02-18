import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ScienceIcon from '@mui/icons-material/Science';

export const Options = [
    {
        title:"Home",
        icon: <HomeIcon/>,
        link: "/dashboard/welcome"
    },
    {
        title:"Mis Equipos",
        icon: <PrecisionManufacturingIcon/>,
        link: "/dashboard/equiplist "
    },
    {
        title:"Mis Componentes",
        icon: <PrecisionManufacturingIcon/>,
        link: "/dashboard/componentlist "
    },
    {
        title:"Mis Muestras",
        icon: <ScienceIcon/>,
        link: "samplelist"
    }

]