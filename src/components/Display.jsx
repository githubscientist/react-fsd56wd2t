import { useState } from "react";

const Display = ({ updateCounter }) => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
        console.log(counter); // 0 because setCounter is async and hasn't updated yet and updates the state in the next render
        updateCounter(counter);
    }

  return (
    <div> 
          <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Display;