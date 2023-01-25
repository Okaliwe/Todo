import List from "./List";
const Todolist = ({todolist,setTodolist}) => {
    return ( 
        <div>
            <h1>{todolist.map((user)=>(
                <List key={user.id}user={user} todolist={todolist}setTodolist={setTodolist}></List>
            ))}</h1>
        </div>
     );
}
 
export default Todolist;