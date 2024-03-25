import React, { useContext } from 'react'
import AddTodo from './AddTodo';
import { TodoContext } from '../App';

const TodoList = () => {

  const { state, dispatch } = useContext(TodoContext);

  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <AddTodo 
        todos={state.todos}
        setTodos={dispatch}
      />
    </div>
  )
}

export default TodoList