import { createContext, useState } from "react";
import TodoCount from "./components/TodoCount";
import TodoList from "./components/TodoList";

export const TodoContext = createContext();

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Redux', completed: false },
    { id: 3, text: 'Build something fun!', completed: false }
  ]);

  return (
    <div>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <TodoCount />
        <TodoList />
      </TodoContext.Provider>
    </div>
  )
}

export default App;