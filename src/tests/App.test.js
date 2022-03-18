import { render, screen } from '@testing-library/react';
import App, { reducer } from '../App';

const stateMock = [{
  title: 'Do To-Do App',
  isDone: true,
}]

describe('App.js', () => {
  test('renders first task "Do To-Do App"', () => {
    render(<App />);
    const linkElement = screen.getByText(/Do To-Do App/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('reducer function. Should return title and isDone = false', () => {
    const newState = reducer(stateMock, {type: 'ADD', title: 'Test the App.js'})
    expect(newState[1].title).toBe('Test the App.js')
    expect(newState[1].isDone).toBe(false)
  })
})



