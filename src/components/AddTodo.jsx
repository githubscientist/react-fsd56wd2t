import React, { useContext } from 'react'
import { TodoContext } from '../App';

const AddTodo = () => {

  const { todos, setTodos } = useContext(TodoContext);

  const addTodo = (event) => {
    event.preventDefault()
    const todo = event.target.elements[0].value;
    event.target.elements[0].value = '';
    console.log(todo);
    setTodos([...todos, { id: todos.length + 1, text: todo, completed: false }]);
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text" 
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo