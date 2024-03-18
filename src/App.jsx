import { useState } from "react";
import Display from "./components/Display";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Display counter={counter} setCounter={ setCounter } />
    </div>
  )
}

export default App;