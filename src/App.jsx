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

  const updateTodo = () => {
    let id = 1;
    let updatedTitle = 'Learn TypeScript and React';

    // find the object with the id 2
    let updatedTodo = todos.find(todo => todo.id === id);

    // console.log(todo);

    updatedTodo = {
      ...updatedTodo,
      title: updatedTitle
    }

    // setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));

    let filteredTodos = todos.filter(todo => todo.id !== id);
    // filteredTodos.push(updatedTodo);
    setTodos(filteredTodos.concat(updatedTodo));
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
      <br />
      <button onClick={updateTodo}>Update Todo</button>
    </div>
  )
}

export default App;