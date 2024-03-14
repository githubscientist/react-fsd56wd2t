import { useEffect, useState } from "react";

const App = () => {

  const [state, setState] = useState(0);

  // // called only once when the component is mounted
  // useEffect(() => {
  //   console.log('use effect called...', state);
  // }, []);

  // called when the component is mounted and whenever the state changes
  useEffect(() => {
    console.log('use effect called...', state);
  }, [state]);

  // called when the component is mounted and whenever the state variable changes
  // useEffect(() => {
  //   console.log('use effect called...', state);
  // });

  return (
    <div>
      <p>{ state }</p>
      <button onClick={() => setState(state + 1)}>Update State</button>
    </div>
  )
}

export default App;