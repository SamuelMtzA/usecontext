import React from 'react'

export const RemoveButton = ({dispatch}) => {
  return (
    <div>
        <button
          type="button"
          className="btn btn-danger mt-1 btn-block"
          onClick={ () => dispatch({ type: 'REMOVE_ALL' }) }
          >Remove All
        </button>
    </div>
  )
}
