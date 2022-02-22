import React, { useReducer, useEffect } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


//init is executed only once when useReducer is first called
const init = () => {
    // get the local storage data, todos array
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    //?dispatch is the function that will be called when the action is requested 
    //?state - todos, todoreducer - action function, initialState
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    //save the data to local storage, when todos change
    useEffect(() => {
        // localstorage.setitem(key, value), 
        localStorage.setItem('todos', JSON.stringify(todos));
        //save in the local storage as json when todos change is rendered
    }, [todos]);

    // console.log('description',JSON.stringify(todos));

    const handleDelete = (todoId) => {
        const action = {
            type: 'REMOVE_TODO',
            payload: todoId,
        };
        dispatch(action);
    };

    const handleToggle = (todoId) => {
        const action = {
            type: 'TOGGLE_TODO',
            payload: todoId,
        };
        dispatch(action);
    };

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo,
        });
    }


    return (
        <>
            <h1>Todo App ({ todos.length })</h1>
            <hr/>  
            <div className="row">
            <div className="col-md-5">
                <h4>Add Todo</h4>
                <hr/>
                
                <TodoAdd
                handleAddTodo={ handleAddTodo }
                dispatch={ dispatch }
                /> 
                <br/>
            </div>
                <div className="col-md-7">
                    <TodoList 
                    todos={todos} 
                    handleDelete={handleDelete} 
                    handleToggle={handleToggle}
                    />
                </div>
            </div>
        </>
    );
};
