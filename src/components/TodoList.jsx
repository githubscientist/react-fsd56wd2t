import React, { useContext } from 'react'
import AddTodo from './AddTodo';
import { TodoContext } from '../App';
import FilterTodos from './FilterTodos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const TodoList = () => {

  const { state, dispatch } = useContext(TodoContext);

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
        console.log(response);
        alert('Todo deleted successfully');
      })
      .catch(error => {
        console.log(error);
        alert('An error occurred. Please try again');
      });
  }

  return (
    <div>
      <FilterTodos />
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}
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
      <AddTodo />
    </div>
  )
}

export default TodoList