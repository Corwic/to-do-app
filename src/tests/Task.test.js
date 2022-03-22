import { useReducer } from 'react'
import { render, fireEvent } from '@testing-library/react'

import Task from '../components/Task'
import { reducer } from '../App'


const task = {
  title: 'Send an email with github link',
  isDone: true,
}

function TestTasksContainer() {
  const [tasksState, dispatch] = useReducer(reducer, [task])

  return tasksState.map((task, index) => (
    <Task 
      key={ index }
      data={ { index, ...task } } 
      dispatch={ dispatch }
    />
  ))
}

describe('Task.jsx', () => {
  test('should change checkbox from true to false', () => {
    const { getByTestId } = render(<Task data={ { index: 0, ...task } }/>)
    const checkbox = getByTestId('task-checkbox')
    const taskArea = getByTestId('task-label')

    expect(checkbox.checked).toBe(true)
    fireEvent.click(taskArea)
    expect(checkbox.checked).toBe(false)
  })

  test('should remove the task', () => {
    const { getByTestId } = render(<TestTasksContainer/>)
    const removeButton = getByTestId('task-remover')
    const taskLabel = getByTestId("task-label")

    expect(taskLabel.textContent).toBe('Send an email with github link')
    fireEvent.click(removeButton)
    expect(taskLabel).not.toBeInTheDocument()
  })
})