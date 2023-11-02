import axios from "axios"
export const host = "http://localhost:3000";
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/login`;

const baseurl = "https://todo-app-backend-q2h8.onrender.com"

const getAlltodo = (setToDo)=>{
    axios.get(baseurl)
    .then(({data})=>{
        console.log("data is :- ", data);
        setToDo(data);
    })
}

const Addtodo = (text,setText,setToDo)=>{
axios.post(`${baseurl}/save`,{text})
.then((data)=>{
    console.log(data);
    setText("");
    getAlltodo(setToDo);
}).catch((err)=>{
    console.log(err);
})
}
const updatetodo = (text,setToDo,setText,setupdate,todoid)=>{
    axios.post(`${baseurl}/update`,{_id:todoid,text})
    .then((data)=>{
        
        setText("");
        setupdate(false)
        getAlltodo(setToDo);
    })
    .catch((err)=>{
        console.log(err);
    })
    }



    const deletemode = (_id,setToDo)=>{
        axios.post(`${baseurl}/delete`,{_id})
        .then((data)=>{
            
            getAlltodo(setToDo);
        })
        .catch((err)=>{
            console.log(err);
        })
        }
    
export {getAlltodo,Addtodo,updatetodo,deletemode};

