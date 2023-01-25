import styles from '../style.module.css'
import shortid from 'shortid'
const Form = ({todo,settodo,todolist,setTodolist}) => {
    const HandleChange=(e)=>{
     settodo(e.target.value)
    }
     const handleSubmit=(e)=>{
        e.preventDefault()
        setTodolist([...todolist,{name:todo,id:shortid.generate()}])
        settodo('')
        console.log(todolist)
     }
    return ( 
        <div className={styles.todoForm}>
            <form onSubmit={handleSubmit}>
                <input onChange={HandleChange}className={styles.todoinput} type='text'value={todo}placeholder='Add Todo item'/>
                <button type='submit'className={styles.todobtn}>Add</button>
            </form>
            
        </div>
     );
}
 
export default Form;