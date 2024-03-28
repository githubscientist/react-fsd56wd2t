import React, { useContext, useState } from 'react'
import AddTodo from './AddTodo';
import { TodoContext } from '../App';
import FilterTodos from './FilterTodos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove, faEdit } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const TodoList = () => {

  const { state, dispatch } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState({
    text: '',
  });

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'All') return true;
    if (state.filter === 'Completed') return todo.completed;
    if (state.filter === 'Incomplete') return !todo.completed;
  });

  const deleteTodo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        id: id
      }
    });

    // make an axios request to delete the data in the mockapi server
    axios.delete(`https://6602ea4b9d7276a7555490e0.mockapi.io/api/v1/todos/${id}`)
      .then(response => {
        // console.log(response);
        alert('Todo deleted successfully');
      })
      .catch(error => {
        // console.log(error);
        alert('An error occurred. Please try again');
      });
  }

  const editTodo = (id) => {
    setIsEditing(true);
    let todoToEdit = state.todos.find(todo => todo.id === id);
    setNewTodo(todoToEdit);
  }

  return (
    <div>
      <FilterTodos />
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text} &nbsp;&nbsp; 
            {
              <FontAwesomeIcon
                icon={faEdit}
                className='fa-lg' 
                onClick={() => editTodo(todo.id)}
              />
            }
            &nbsp;&nbsp; 
            {
              <FontAwesomeIcon
                icon={faRemove}
                className='fa-lg' 
                onClick={() => deleteTodo(todo.id)}
              />
            }

          </li>
        ))}
      </ul>
      <AddTodo 
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
    </div>
  )
}

export default TodoList