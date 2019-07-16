import React, { useState } from 'react'
import './App.css'

function Todo({ todo, index, completeTodo, removeTodo }) {
  //ternary, strikes through text when completed. if complete line through, else do nothing
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Completed</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  )
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
        className="input"
        value={value}
        placeholder="Add task..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  var test = [{ text: 'Your tasks will appear here!' }]
  var memory = JSON.parse(localStorage.getItem('rememberMe'))
  if (memory !== null) {
    test = memory
  }
  const [todos, setTodos] = useState(test)

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    localStorage.setItem('rememberMe', JSON.stringify(newTodos))
    console.log(localStorage.getItem('rememberMe'))

    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    localStorage.setItem('rememberMe', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    localStorage.setItem('rememberMe', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            ß
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
