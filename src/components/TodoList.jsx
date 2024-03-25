import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo';

const TodoList = ({ addTodoList }) => {

  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Redux', completed: false },
    { id: 3, text: 'Build something fun!', completed: false }
  ]);

  useEffect(() => {
    addTodoList(todos);
  }, [todos]);

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <AddTodo 
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default TodoList