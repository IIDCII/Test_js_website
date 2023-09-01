// useState -> 
import React, {useState, useRef} from 'react';
import TodoList from "./TodoList";
// import uuidv4 from 'uuid/v4'

// function of the app overall
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // e -> event property
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return

    setTodos (prevTodos => {
      return [...prevTodos, {id:1, name:name, complete:false}]
    })

    todoNameRef.current.value = null
  }

  // simply what is getting returned to be displayed in the first place
  return (
    <>
      <TodoList todos = {todos}/>
      <input ref = {todoNameRef} type = "text"></input>
      <button onClick = {handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
