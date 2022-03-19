import { render, screen } from '@testing-library/react'
import App, { reducer } from '../App'

const stateMock = [{
  title: 'Do To-Do App',
  isDone: true,
}]

describe('App.js', () => {
  test('renders the title of the app – "To-do app"', () => {
    render(<App />);
    const headerElement = screen.getByText(/To-do app/)
    expect(headerElement).toBeInTheDocument()
  });

  test('reducer function. Should add a task with title and isDone = false', () => {
    const newState = reducer(stateMock, {type: 'ADD', title: 'Test the App.js'})
    expect(newState[1].title).toBe('Test the App.js')
    expect(newState[1].isDone).toBe(false)
  })

  test('reducer function. Should toggle isDone for a task', () => {
    const newState = reducer(stateMock, {type: 'TOGGLE', index: 0})
    expect(newState[0].isDone).toBe(false)
  })

  test('reducer function. Should remove a task', () => {
    const newState = reducer(stateMock, {type: 'REMOVE', index: 0})
    expect(newState[0]).toBe(undefined)
  })
})



