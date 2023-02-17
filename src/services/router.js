import { BrowserRouter,Routes, Route} from "react-router-dom";
// import Header from "../components/Header/Header";
import Contact from "../pages/Contact";
import Login from "../components/Login/Login";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Layout from "../components/Layout";
import ServiceDetail from "../components/cardServices/serviceDetail";
import SignUp from "./auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import EquipForm from "../components/EquipForm";
import EquipList from "../components/EquipList";
import ComponentForm from "../components/ComponentForm";
import ComponentList from "../components/ComponentList";

const Router =()=>{
    return(

        <BrowserRouter>
        
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services/service/:title" element={<ServiceDetail/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
                <Route path='/dashboard' element={<ProtectedRoute><Sidebar/></ProtectedRoute>}/>
                <Route path='/equiplist' element={<EquipList/>}/>
                <Route path='/Equipform' element={<EquipForm/>}/>
                <Route path='/Equipform/:id' element={<EquipForm/>}/>
                <Route path='/Componentform' element={<ComponentForm/>}/>
                <Route path='/Componentform/:id' element={<ComponentForm/>}/>
                <Route path='/Componentlist' element={<ComponentList/>}/>
        </Routes>
        </BrowserRouter>
        
    )
}               

export default Router;