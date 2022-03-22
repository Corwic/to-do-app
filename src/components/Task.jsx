import React from 'react'

export default function Task({ data, dispatch = f=>f }) {
  const { index, title, isDone } = data

  return (
    <div className="task">
      <label data-testid="task-label">
        <input 
          type="checkbox" 
          defaultChecked={ isDone } 
          onChange={ () => dispatch({ type: "TOGGLE", index }) }
          data-testid="task-checkbox"
        />
        {title}
      </label>
      <div 
        className="remove" 
        onClick={ () => dispatch({ type: "REMOVE", index }) }
        data-testid="task-remover"
      >×</div>
    </div>
  )
}
