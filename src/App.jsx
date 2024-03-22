import { createRef, useRef } from "react";

const App = () => {

  // create a reference using useRef hook
  const refs = useRef(Array.from({ length: 2 }, () => createRef()));

  console.log(refs);

  const handleClick = () => {
    // console.log(noteInputRef.current);
    // console.log(noteInputRef.current.value);
    // noteInputRef.current.value = "Hello, World!";
    // noteInputRef.current.focus();

    let note = refs.current[0].current.value;
    let name = refs.current[1].current.value;

    console.log(note);
    console.log(name);
  }

  return (
    <div>
      <input 
        type="text"
        placeholder="Type your note..."
        ref={refs.current[0]}
      />

      <br /><br />

      <input 
        type="text"
        placeholder="Type your name..."
        // ref={noteInputRef}
        ref={refs.current[1]}
      />

      <br /><br />

      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default App;