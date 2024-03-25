import React, { useContext } from 'react'
import { TodoContext } from '../App';

const TodoCount = () => {

  const { todos } = useContext(TodoContext);

  return (
    <div>
        Total number of todos: {todos.length}
    </div>
  )
}

export default TodoCount