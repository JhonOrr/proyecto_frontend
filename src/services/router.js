import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Contact from "../pages/Contact";
import Login from "../components/Login/Login";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";

const Router =()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Sidebar/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}               

export default Router;