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

const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/services/service/:title" element={<ServiceDetail/>}/>
                </Route>
                <Route path='/dashboard' element={<Sidebar/>}/>
            </Routes>   
        </BrowserRouter>
    )
}               

export default Router;