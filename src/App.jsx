import React,{useEffect} from "react"
import Todocontainer from "./Components/Todocontainer"
import Login from "./pages/Login"

import Register from "./pages/Registeration"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./pages/style.module.css"
const App = ()=>{
   

   
    
    return <BrowserRouter>
    <Routes>
    <Route path="/" element={<Todocontainer />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    </Routes>
    </BrowserRouter>
}
export default App