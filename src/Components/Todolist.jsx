import React from 'react'
import styles from "./todo.module.css"

const Todolist = ({text, updatemode, deletemode}) => {
  return (
   <div className={styles.todo}>
    <div className={styles.text}>
        {text}
    </div>
    <div className={styles.icons}>
       <img className={styles.updateicon}  src="images/update.png" alt="for update" onClick={updatemode}/>
       <img className={styles.deleteicon} src="images/delete.png" alt="for delete" onClick={deletemode} />
    </div>
   </div>

  )
}

export default Todolist
