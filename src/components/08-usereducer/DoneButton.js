import React from 'react'

export const DoneButton = ({dispatch}) => {
  return (
    <div>
        <button
        type = "button"
        className="btn btn-warning mt-1 btn-block"
        onClick={ () => dispatch({ type: 'TOGGLE_ALL' }) }
        >
        All Done
        </button>
    </div>
  )
}
