import React from 'react'

const AddTodo = ({ todos, setTodos }) => {

  const addTodo = (event) => {
    event.preventDefault()
    const todo = event.target.elements[0].value;
    event.target.elements[0].value = '';
    setTodos(prevState => {
      return [
        ...prevState,
        {
          id: prevState.length + 1,
          text: todo,
          completed: false
        }
      ]
    })
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