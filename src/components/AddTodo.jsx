import React, { useContext } from 'react'
import { TodoContext } from '../App';

const AddTodo = () => {

  const { state, dispatch } = useContext(TodoContext);

  const addTodo = (event) => {
    event.preventDefault()
    const todo = event.target.elements[0].value;
    event.target.elements[0].value = '';
    console.log(todo);
    dispatch({
      type: 'ADD_TODO',
      payload: {
        text: todo
      }
    });
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