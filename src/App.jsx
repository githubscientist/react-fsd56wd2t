import { useState } from "react";
import ChildCom from "./components/ChildCom";

// parent component
const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildCom count={count} setCount={ setCount } />
    </div>
  )
}

export default App;