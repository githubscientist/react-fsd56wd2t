import Note from "./components/Note";

const App = (props) => {

  console.log(props.notes);

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
    </div>
  )
}

export default App;