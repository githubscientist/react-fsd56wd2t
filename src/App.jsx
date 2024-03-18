import { useEffect, useState } from "react";

// mounted: the component is inserted into the DOM

const App = () => {

  const [counter, setCounter] = useState(0);

  // runs every time the component is rendered
  useEffect(() => {
    console.log('from useEffect without dependencies');
  }, []);

  // runs only once
  useEffect(() => {
    console.log('from useEffect without dependencies');
  }, []);

  // runs every time the component is rendered
  useEffect(() => {
    console.log('from useEffect with dependencies');
  }, [counter]);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  )
}

export default App;