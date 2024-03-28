import { createContext, useEffect, useReducer, useState } from "react";
import TodoCount from "./components/TodoCount";
import TodoList from "./components/TodoList";
import { initialState, todosReducer } from "./reducers/todosReducer";
import axios from "axios";

export const TodoContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    axios.get('https://6602ea4b9d7276a7555490e0.mockapi.io/api/v1/todos')
      .then(response => {
        // console.log(response);
        dispatch({ type: 'TODOS_ALL', payload: { todos: response.data } });
      });
  }, []);

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