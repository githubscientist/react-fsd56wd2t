import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  console.log('App component rendering...', count);

  return (
    <div>
      <Display count={ count } />
      <Button
        text="Increment" 
        onClick={ increment }
      />
      <Button
        text="Decrement" 
        onClick={decrement}
      />
      <Button
        text="Reset" 
        onClick={reset}
      />
    </div>
  )
}

export default App;