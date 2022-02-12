import React, { useReducer, useEffect } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';


//init is executed only once when useReducer is first called
const init = () => {
    // get the local storage data, todos array
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    let desc = 'Descriptions';
    //?dispatch is the function that will be called when the action is requested 
    //?state - todos, todoreducer - action function, initialState
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    //extract the descripotion and done from the form
    const [ {description}, handleInput, reset ] = useForm({
        description: '',
    });
    //save the data to local storage, when todos change
    useEffect(() => {
        // localstorage.setitem(key, value), 
        localStorage.setItem('todos', JSON.stringify(todos));
        //save in the local storage as json when todos change is rendered
    }, [todos]);

    // console.log('todos', todos);
    console.log('description',JSON.stringify(todos));

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

    const handleSubmit = (e) => {
        //avoid void in description
        if (description.trim().length <= 1 ) {
            desc = 'write something';
            return desc;
        }
        //prevent default action on the form submit
        e.preventDefault();
        //get the value of the input, and create a new todo object
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        };
        //create the action object
        const action = {
            type: 'ADD_TODO',
            payload: newTodo
        };
        //dispatch the action object and render the new todo
        dispatch(action);
        reset();
    }


    return (
        <>
            <h1>Todo App ({ todos.length })</h1>
            <hr/>  
            <div className="row">
            <div className="col-md-5">
                    <h4>Add Todo</h4>
                    <hr/>
                    <form onSubmit={ handleSubmit }>
                        <input
                        type="text"
                        name="description"
                        placeholder={ desc }
                        className="form-control"
                        autoComplete="off"
                        value={ description }
                        onChange={ handleInput }
                        />
                        <br/>
                        <button
                        type="submit" 
                        className="btn btn-primary mt-1 btn-block"
                        >
                        Add
                        </button>

                        <button
                        type="button"
                        className="btn btn-danger mt-1 btn-block"
                        onClick={ () => dispatch({ type: 'REMOVE_ALL' }) }
                        >Remove All
                        </button>

                        <button
                        type = "button"
                        className="btn btn-warning mt-1 btn-block"
                        onClick={ () => dispatch({ type: 'TOGGLE_ALL' }) }
                        >
                        All Done
                        </button>
                    </form>
                    <br/>
                </div>
                <div className="col-md-7">
                    <ul className="list-group list-group-flush">
                    <h4>List of Todo's</h4>
                    <hr/>
                    {
                        todos.map((todo, pos) => (
                            <li 
                            key={ todo.id }
                            className= "list-group-item list-group-item-light"
                            >
                                <input
                                type="checkbox"
                                checked={ todo.done }
                                onChange={ () => handleToggle(todo.id) } 
                                className={ `inp-chck ${ todo.done ? 'complete' : '' }`}
                                />    
                                {pos+1}. { todo.description }
                                <button
                                className="btn btn-outline-danger"
                                onClick={ () => handleDelete(todo.id) }

                                >
                                Delete
                                </button>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </>
    );
};
