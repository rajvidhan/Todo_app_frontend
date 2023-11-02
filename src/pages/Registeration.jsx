import React, { useEffect,useState } from 'react'
import axios from "axios"
import styles from "./style.module.css"
import {registerRoute} from "../utils/HandleApi"
import {toast , ToastContainer} from "react-toastify"
import {  useNavigate} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
const Registeration = () => {
  const navigate = useNavigate();
const [values, setvalues] = useState({
  name:'',
  email:"",
  password:"",
  confirmpassword:""
});






useEffect(()=>{
  if(localStorage.getItem("todo-app-user")){
    navigate("/");
  }
});
const toastcss={
    width: "100%",
      height: "80px",
      padding: "20px",
      position:"bottom-center",
      theme:"dark",
      autoClose:3000,
      draggable:true
}

const handlevalidation=()=>{
  const { password, confirmpassword,name,email } = values;

  if(password!==confirmpassword){
    toast.error(" 'Hello'👋 Your password and confirm password is not match",toastcss);
    return false;
  }
  else if(name.length<3){
    toast.error("'Hello' 👋 Username should be greater then 3 charecter",toastcss);
    return false;
  }
  else if(password.length<8){
    toast.error("'Hello' 👋 password should be equal and greater then 8 charecters",toastcss);
    return false;
  }
  else if(email === ""){
    toast.error("'Hello' 👋Please Enter Email Here",toastcss);
    return false;
  }
  return true;
}





const handlesubmit = async (event)=>{
 
  event.preventDefault();
  if(handlevalidation()){
    const {password,email,name}= values;
    const {data}= await axios.post(registerRoute,{
      name,email,password
    });
    if(data.status === false){
      toast.error(data.msg,toastcss)
    }
    if(data.status === true){
      localStorage.setItem("todo-app-user",JSON.stringify(data.user));
      navigate("/");
  }
   
  }
 
}

const handlechange = (event)=>{
  setvalues({...values,[event.target.name]:event.target.value});
}



  return (<>
  <form onSubmit={(event => handlesubmit(event))}>
  <div className={styles.container}>
     <h1 className={styles.heading}>Register form</h1>
     <div className={styles.middle}>
       <input onChange={(event)=>handlechange(event)} 
       name="name"
       className={styles.input} 
       type="text" 
       placeholder="Username..."/>
       <input name="email" onChange={(event)=>handlechange(event)} className={styles.input} type="email" placeholder='Email...' />
       <input  name="password" onChange={(event)=>handlechange(event)} className={styles.input} type="password" placeholder='Password...' />
       <input  name="confirmpassword" onChange={(event)=>handlechange(event)} className={styles.input} type="password" placeholder='Confirm Password...' />
     </div>
     <div>
       <button className={styles.submitbtn}>Submit</button>
       
     </div>
    </div>
   
  </form>
 <ToastContainer />
    </>
    
  )
  }

export default Registeration
