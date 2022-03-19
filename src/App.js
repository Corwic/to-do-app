import { useReducer } from 'react'
import './App.css'
import Task from './components/Task'
import AddTask from './components/AddTask'

const tasks = [
  {
    title: 'Do To-Do App',
    isDone: true,
  },
  {
    title: 'Send an email with github link',
    isDone: true,
  },
  {
    title: 'Waiting for feedback',
    isDone: false,
  },
]

export default function App() {
  const [tasksState, dispatch] = useReducer(reducer, tasks)
  return (
    <div className="App">
      <header>
        To-do app
      </header>
      <main>
        {tasksState.map((task, index) => (
          <Task 
            key={ index }
            data={ { index, ...task } } 
            dispatch={ dispatch }
          />
        ))}
        <AddTask addTask={ dispatch }/>
      </main>
    </div>
  );
}


export function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state, 
        {
          title: action.title,
          isDone: false
        }
      ]
    case 'TOGGLE':
      return state.map((item, index) => {
        if (index !== action.index) return item
        return {
          ...item,
          isDone: !item.isDone
        }
      })
    case 'REMOVE':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
}
