const App = (props) => {

  console.log(props.notes);

  let notesList = [];

  props.notes.forEach(note => {
    notesList.push(<li>{note.content}</li>);
  });

  console.log(notesList);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        { notesList }
      </ul>
    </div>
  )
}

export default App;