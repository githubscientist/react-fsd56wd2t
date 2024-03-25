import React, { useContext } from 'react'
import { TodoContext } from '../App'

const FilterTodos = () => {

  const { state, dispatch } = useContext(TodoContext);

  const filterStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem'
  }

  const updateFilter = (e) => {
    console.log(e.target.value);
    dispatch(
      {
        type: 'TOGGLE_TODO',
        payload: {
          status: e.target.value
        }
      }
    )
  }

  return (
    <div style={filterStyles}>
      <select onChange={updateFilter}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
    </div>
  )
}

export default FilterTodos