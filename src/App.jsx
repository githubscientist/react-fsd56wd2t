import { createContext, useReducer, useState } from "react";
import TodoCount from "./components/TodoCount";
import TodoList from "./components/TodoList";
import { initialState, todosReducer } from "./reducers/todosReducer";

export const TodoContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <div>
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoCount />
        <TodoList />
      </TodoContext.Provider>
    </div>
  )
}

export default App;