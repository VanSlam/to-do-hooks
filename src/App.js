import React, { useState } from 'react'
import './App.css'

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="intput"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn more react',
      isCompleted: false
    },
    {
      text: 'Get a dev job',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const NewToDos = [...todos]
  }
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
