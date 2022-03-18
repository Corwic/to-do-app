import React, { useState } from 'react'

export default function AddTask({ addTask = f=>f }) {
  const [newTask, setNewTask] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTask({ type: 'ADD', title: newTask })
    setNewTask('')
  }

  return (
    <div className="task add">
      <form onSubmit={ handleSubmit }>
        <input 
          type="text" 
          name="Add new task" 
          value={ newTask } 
          placeholder="Add new task"
          onChange={ e => setNewTask(e.target.value) }
        />
      </form>
    </div>
  )
}
