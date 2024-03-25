import React, { useContext } from 'react'
import AddTodo from './AddTodo';
import { TodoContext } from '../App';

const TodoList = () => {

  const { todos, setTodos } = useContext(TodoContext);

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