import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Contact from "../pages/Contact";
import Login from "../components/Login/Login";
import Sidebar from "../components/Sidebar/Sidebar";
// import EquipForm from "../pages/EquipForm";

const Router =()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Sidebar/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}               

export default Router;