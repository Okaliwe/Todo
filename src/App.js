import Header from "./component/Header";
import Form from "./component/Form";
import { useState } from "react";
import Todolist from "./component/Todolist";
function App() {
  const [todo,setTodo]=useState('')
  const [todoList,setTodolist]=useState([])
  return (
    <div>
        <Header/>
       <Form todo={todo}
        settodo={setTodo} 
        todolist={todoList}
        setTodolist={setTodolist}/>
        <Todolist todolist={todoList}setTodolist={setTodolist}/>
    </div>
    
  )
}

export default App;
