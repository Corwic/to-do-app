import React, { useState } from 'react'

export default function Task({data, dispatch = f=>f}) {
  const {index, title, isDone} = data

  return (
    <div className='task'>
      <label>
        <input 
          type="checkbox" 
          defaultChecked={isDone} 
          onChange={() => dispatch({type: "TOGGLE", index})}
        />
        {title}
      </label>
      <div 
        className="remove" 
        onClick={() => dispatch({type: "REMOVE", index})}
      >×</div>
    </div>
  )
}
