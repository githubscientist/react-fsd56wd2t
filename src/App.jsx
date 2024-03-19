import { useEffect, useState } from "react";

const App = ({ todoList }) => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todoList);
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    // console.log(e.target.newTodo.value);
    const newTodo = {
      id: todos.length + 1,
      title: e.target.newTodo.value,
      completed: false
    }

    setTodos([...todos, newTodo]);

    // clear the input
    e.target.newTodo.value = '';

    // set the focus back to the input
    e.target.newTodo.focus();
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>{ todo.title }</li>
          ))
        }
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" name="newTodo" required />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default App;