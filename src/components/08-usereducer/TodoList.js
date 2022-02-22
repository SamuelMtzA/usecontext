import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
  return (
    <>
    <ul className="list-group list-group-flush">
        <h4>List of Todo's</h4>
        <hr/>
        {
            todos.map((todo, pos) => (
                <TodoListItem 
                key={ todo.id }
                todo={todo} 
                pos={pos} 
                handleDelete={handleDelete} 
                handleToggle={handleToggle}/>
            ))
        }
        </ul>

    </>
  )
}
