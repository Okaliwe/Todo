import styles from '../style.module.css'
const List = ({user,todolist,setTodolist}) => {
const handleClick=()=>{
    setTodolist(todolist.filter(item=>item.id!==user.id))
   }
    return ( 
        <div>
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>{user.name}</h3>
                <button onClick={handleClick} className={styles.delete}>Done</button>
            </div>
        </div>
     );
}
 
export default List;