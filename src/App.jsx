import Note from "./components/Note";

const App = (props) => {

  const addNote = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        { 
          props.notes.map((note, index) => {
            return <Note note={note} key={index} />;
          })
        }
      </ul>

      <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form>

    </div>
  )
}

export default App;