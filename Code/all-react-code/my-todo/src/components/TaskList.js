import React from 'react'
import Todo from './Todo'

const TaskList = ({ todos }) => {
  return (

      todos.map(todo => {
        return <Todo key={todo.id} todo={todo}/>
      })

  )
}

export default TaskList
