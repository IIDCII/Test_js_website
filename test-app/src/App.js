// useState is kind of like getting the context for the application
import React, {useState} from "react";
import TodoList from "./TodoList";

function App() {

  // object destructuring -> extract data from arrays and store them to variables
  const [todos, setTodos] = useState(['Todo 1','Todo 2'])
  
  
  // remember that you can only return one thing at a time
  // so if you want to add more than one then make a fragment as shown
  return (
    <>
    <TodoList todos = {todos}/>
    <input type="text"/>
    <button>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
