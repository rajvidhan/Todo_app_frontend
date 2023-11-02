import React,{useEffect, useState} from 'react'
import {  useNavigate} from "react-router-dom"
import styles from "./todo.module.css"
import Todolist from './Todolist'
import {getAlltodo,Addtodo,updatetodo,deletemode} from "../utils/HandleApi"
const Todocontainer = () => {
   const navigate = useNavigate();
  const [todo,setToDo] = useState([]);
  const [text,setText] = useState("");
  const [isupdate,setupdate]= useState(false)
  const [todoid,settodoid]= useState(false)
  useEffect(()=>{
    getAlltodo(setToDo);
  },[])
 
  const updatemode =(_id,text)=>{
  setupdate(true);
  setText(text);
  settodoid(_id)
  }

  useEffect(()=>{
    if(!localStorage.getItem("todo-app-user")){
      navigate("/login");
    }
  })
  

  return (
   
    <div className={styles.container}>

   <h1 className={styles.heading}>ToDo App</h1>

   {/* top portion */}
   <div className={styles.top}>
    <input 
    className={styles.maininput}
    type="text" 
    placeholder='Add ToDos....'
    value={text}
    onChange={(e)=>setText(e.target.value)}
     />
    <div className={styles.add} onClick={isupdate ? ()=>updatetodo(text,setText,setToDo,setupdate,todoid):  ()=>Addtodo(text,setToDo,setText)}>{isupdate ? "update" : "Add"}</div>
   </div>
 
 {/* list portion */}

<div className={styles.list}>

{todo.map((item)=><Todolist key={item._id}
 text={item.text} 
 updatemode={()=> updatemode(item._id,item.text)}
 deletemode = {()=> deletemode(item._id,setToDo)} />)}

  
</div>





    </div>
  )
}

export default Todocontainer
