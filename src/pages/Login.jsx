import React,{useState,useEffect} from 'react'
import styles from "./style.module.css"
import axios from "axios"
import {toast,ToastContainer} from "react-toastify"
import {  useNavigate} from "react-router-dom"
import { loginRoute } from '../utils/HandleApi'
const Login = () => {
  const navigate = useNavigate();
  const [values,setvalues] = useState({
    name:"",
    password:""
  })
  const handlechange =(event)=>{
    setvalues({...values,[event.target.name]:event.target.value});
  }

  const handlevalidation=()=>{
    const {name, password} = values;
    if(name == ""){
      toast.error("NAME AND PASSWORD IS REQUIRED",toastcss);
      return false;
    }
    else if(password==""){
      toast.error("NAME AND PASSWORD IS REQUIRED",toastcss);
      return false;
    }
    return true;
  }



  useEffect(()=>{
    if(localStorage.getItem("todo-app-user")){
      navigate("/");
    }
  })
  
  const toastcss ={
    width: "100%",
    height: "80px",
    padding: "20px",
    position:"bottom-center",
    theme:"dark",
    autoClose:3000,
    draggable:true
  }


  const handlesubmit = async(event)=>{
    event.preventDefault();
   if(handlevalidation()){
    const {name,password} = values;
    const data = await axios.post(loginRoute,{
      name,
      password
    });
    if(data.status ===false){
      toast.error(data.msg,toastcss);
  }
  if(data.status === true){
      localStorage.setItem("todo-app-user",JSON.stringify(data.user));
      navigate("/");
  }
   }
  }




  return (
   <>
   <form onSubmit={(event => handlesubmit(event))}>
   <div className={styles.container}>
    <h1 className={styles.heading}>Login Form</h1>
    <div className={styles.middle}>
      <input name="name" onChange={(event)=>handlechange(event)} className={styles.input} type="text" placeholder="Username..."/>
      <input name="email" onChange={(event)=>handlechange(event)} className={styles.input} type="password" placeholder='Password...' />
    </div>
    <div >
      <button className={styles.submitbtn}>Submit</button>
      <span>If do not have an account :-
        <a href="/register">Register</a>
       </span>
    </div>
   </div>
   </form>
   <ToastContainer />
   </>
  )
}

export default Login
