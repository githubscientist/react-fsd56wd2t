import React from 'react'

const TodoCount = ({ todoList }) => {
  return (
    <div>
        Total number of todos: {todoList.length}
    </div>
  )
}

export default TodoCount