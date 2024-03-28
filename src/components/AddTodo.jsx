import React, { useContext } from 'react'
import { TodoContext } from '../App';
import axios from 'axios';

const AddTodo = () => {

  const { state, dispatch } = useContext(TodoContext);

  const addTodo = async (event) => {
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

    // make an axios request to update the data in the mockapi server
    let createdTodo = await axios.post('https://6602ea4b9d7276a7555490e0.mockapi.io/api/v1/todos', {
      text: todo
    });
    console.log(createdTodo);
    alert('Todo added successfully');
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