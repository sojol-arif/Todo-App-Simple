import { useState } from 'react'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTodo){
      setTodos([...todos, {text:newTodo, completed:false}]);
    }
    setNewTodo('')
  }

  const handleDelete = (todo) => {
    todo.completed = true;
    setTodos(todos.filter(todoF => todoF !== todo))
  }

  return (
    <div className='mx-auto max-w-[500px] mt-12 w-full'>
      <h2>Todo List</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type='text'
        placeholder="Add New Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      <ul>
        {todos.map((todo, key) => (
          <li key={key}> <span 
          style={{textDecoration : todo.completed == true? "line-through": "none"}}
          > {todo.text} </span>
          <button className='bg-[red] px-6 py-3' onClick={() => handleDelete(todo)}>Delete</button></li>
        ))}
      </ul>
    </div>
  )
}

export default App
