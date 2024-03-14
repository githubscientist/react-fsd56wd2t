import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // asynchronous
  }

  console.log('incrementing...', count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App;