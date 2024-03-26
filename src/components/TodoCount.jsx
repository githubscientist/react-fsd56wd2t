import React, { useContext } from 'react'
import { TodoContext } from '../App';

const TodoCount = () => {

  const { state } = useContext(TodoContext);

  return (
    <div>
        Total number of todos: {state.todos.length}
    </div>
  )
}

export default TodoCount