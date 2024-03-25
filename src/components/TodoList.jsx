import React, { useContext } from 'react'
import AddTodo from './AddTodo';
import { TodoContext } from '../App';
import FilterTodos from './FilterTodos';

const TodoList = () => {

  const { state, dispatch, users } = useContext(TodoContext);

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'All') return true;
    if (state.filter === 'Completed') return todo.completed;
    if (state.filter === 'Incomplete') return !todo.completed;
  });

  return (
    <div>
      <FilterTodos />
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <AddTodo />
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList