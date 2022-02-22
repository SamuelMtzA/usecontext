import React from 'react'

export const TodoListItem = ({todo, pos, handleDelete, handleToggle}) => {
  return (
    <li 
        key={ todo.id }
        className= "list-group-item list-group-item-light"
        >
        <p
        onClick={ () => handleToggle(todo.id) } 
        className={ `${ todo.done && 'complete' }`}
        >    
        {pos+1}. { todo.description }
        </p>
        <button
        className="btn btn-outline-danger"
        onClick={ () => handleDelete(todo.id) }
        >
        Delete
        </button>
    </li>
  )
}
