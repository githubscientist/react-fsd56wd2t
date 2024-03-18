import { useState } from "react";
import Display from "./components/Display";

const App = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = (counter) => {
    setCounter(counter+1);
  }

  return (
    <div>
      <h3>Count: {counter}</h3>
      <Display updateCounter={ updateCounter } />
    </div>
  )
}

export default App;