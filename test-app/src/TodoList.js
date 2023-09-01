import React from 'react'
import Todo from './Todo'

export default function TodoList({todos}) {
  return (
    todos.map(todo => {
        return <Todo key= {todo.id} todo = {todo}/>
    })
  )
}

// just remember, curly brackets around any actual value