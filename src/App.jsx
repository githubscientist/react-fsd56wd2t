import TodoCount from "./components/TodoCount";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

const App = () => {

  const [todoList, setTodoList] = useState([]);

  const addTodoList = (todos) => {
    setTodoList(todos);
  }

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div>
      <TodoCount 
        todoList={todoList}
      />
      <TodoList 
        addTodoList={addTodoList}
      />
    </div>
  )
}

export default App;