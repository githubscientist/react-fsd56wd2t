import React, { useContext, useState } from 'react'
import { TodoContext } from '../App';
import axios from 'axios';

const AddTodo = ({ isEditing, setIsEditing, newTodo, setNewTodo }) => {

  const { state, dispatch } = useContext(TodoContext);

  const addTodo = async (event) => {
    event.preventDefault()
    const todo = event.target.elements[0].value;
    event.target.elements[0].value = '';
    // console.log(todo);
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

  const updateTodo = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_TODO',
      payload: {
        id: newTodo.id,
        text: newTodo.text
      }
    });
    setIsEditing(false);
    setNewTodo({
      text: ''
    });

    // make an axios request to update the data in the mockapi server
    axios.put(`https://6602ea4b9d7276a7555490e0.mockapi.io/api/v1/todos/${newTodo.id}`, {
      text: newTodo.text
    })
      .then(response => {
        // console.log(response);
        alert('Todo updated successfully');
      })
      .catch(error => {
        // console.log(error);
        alert('An error occurred. Please try again');
      });
  }

  return (
    <div>
      <form>
        <input
          type="text" 
          value={newTodo.text}
          onChange={(event) => setNewTodo({
            ...newTodo,
            text: event.target.value
          })}
        />
        <button
          type="submit"
          onClick={isEditing ? updateTodo : addTodo}
        >
          {isEditing ? 'Update Todo' : 'Add Todo'}
        </button>
      </form>
    </div>
  )
}

export default AddTodo