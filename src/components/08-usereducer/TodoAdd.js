import React from 'react'
import { useForm } from '../../hooks/useForm';
import { DoneButton } from './DoneButton';
import { RemoveButton } from './RemoveButton';

export const TodoAdd = ({ handleAddTodo, dispatch }) => {

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
        //dispatch the action object and render the new todo
        handleAddTodo(newTodo);
        reset();
    }
    //extract the descripotion and done from the form
    let desc = 'Descriptions';
    const [ {description}, handleInput, reset ] = useForm({
        description: '',
    });
  return (
    <>
        

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

            <RemoveButton
            dispatch={dispatch}
            />

            <DoneButton
            dispatch={dispatch}
            />

            
        </form>
    </>
  )
}
