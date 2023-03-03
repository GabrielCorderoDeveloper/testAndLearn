import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div className='todo-item'>
        <label>
            <input type='checkbox' checked={todo.complete}/>
            {todo.name}

        </label>
    </div>
  )
}

export default Todo
