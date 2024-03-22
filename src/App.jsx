import { useRef } from "react";

const App = () => {

  // create a reference using useRef hook
  const noteInputRef = useRef(null);

  const handleClick = () => {
    // console.log(noteInputRef.current);
    // console.log(noteInputRef.current.value);
    // noteInputRef.current.value = "Hello, World!";
    noteInputRef.current.focus();
  }

  return (
    <div>
      <input 
        type="text"
        placeholder="Type your note..."
        
      />

      <br /><br />

      <input 
        type="text"
        placeholder="Type your name..."
        ref={noteInputRef}
      />

      <br /><br />

      <button onClick={handleClick}>Focus Input</button>
    </div>
  )
}

export default App;